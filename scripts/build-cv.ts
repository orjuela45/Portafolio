import { mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

import { parseCvMarkdown } from './markdown.ts';
import { renderCvHtml } from './render.ts';

const ROOT = resolve(import.meta.dirname, '..');
const OUTPUT_DIR = join(ROOT, 'public', 'cv');
const LOCALES = ['es', 'en'] as const;

type LocaleCode = (typeof LOCALES)[number];

/**
 * Chrome lives in a few well-known places depending on the distro. The override
 * exists so a different browser can be pointed at without editing this file.
 */
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/opt/google/chrome/chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];

const findChrome = (): string => {
  for (const candidate of CHROME_CANDIDATES) {
    if (candidate && existsSync(candidate)) return candidate;
  }
  throw new Error(
    'No Chrome/Chromium binary found. Install one or set CHROME_PATH to its absolute path.',
  );
};

const buildOne = async (code: LocaleCode, outDir: string): Promise<void> => {
  const puppeteer = await import('puppeteer-core');

  const source = await readFile(join(ROOT, 'cv', `${code}.md`), 'utf8');
  const doc = parseCvMarkdown(source);

  if (!doc.name) throw new Error(`cv/${code}.md has no "# Name" heading`);
  if (!doc.blocks.some((block) => block.kind === 'section')) {
    throw new Error(`cv/${code}.md has no "## Section" headings`);
  }

  const html = renderCvHtml(doc, code);

  const browser = await puppeteer.default.launch({
    executablePath: findChrome(),
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });

    const target = join(outDir, `miguel-orjuela-${code}.pdf`);
    await page.pdf({
      path: target,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: false,
      margin: { top: '15mm', right: '14mm', bottom: '15mm', left: '14mm' },
    });

    console.log(`  ✓ ${code}: ${target.replace(`${ROOT}/`, '')}`);
  } finally {
    await browser.close();
  }
};

const main = async (): Promise<void> => {
  await mkdir(OUTPUT_DIR, { recursive: true });

  console.log('Building CV PDFs');
  for (const code of LOCALES) {
    await buildOne(code, OUTPUT_DIR);
  }
  console.log(`\nDone. ${LOCALES.length} PDFs in ${OUTPUT_DIR.replace(`${ROOT}/`, '')}/`);
};

await main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

