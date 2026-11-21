import type { CvBlock, CvDocument, CvSection } from './markdown';

/**
 * Inline formatting for the CV: `code`, **bold**, and bare emails/URLs as links.
 * Everything else is HTML-escaped, so a stray `<` in the source cannot break the
 * document or inject markup into the generated PDF.
 */

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Bare addresses become links, but the visible text stays the full address so a
 * text-layer parser reads an email as an email and not as anchor words.
 * `[^\s<]+` rather than `\w` because LinkedIn slugs contain accented letters.
 */
const linkify = (text: string): string =>
  text
    .replace(/([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/gi, '<a href="mailto:$1">$1</a>')
    .replace(
      /\b((?:github|linkedin)\.com\/[^\s<]+)/g,
      '<a href="https://$1">$1</a>',
    );

const renderInline = (text: string): string =>
  linkify(escapeHtml(text))
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

const renderMeta = (meta: string): string => {
  const [dates, ...rest] = meta.split('·');
  const datePart = renderInline(dates?.trim() ?? '');
  const restPart = rest.map((part) => renderInline(part.trim())).join(' · ');
  return `<p class="meta">${datePart}${restPart ? ` <span class="sep">·</span> ${restPart}` : ''}</p>`;
};

const renderSection = (section: CvSection): string => {
  const items = section.items.length
    ? `<ul>${section.items
        .map((item) => `<li>${renderInline(item.replace(/^-\s*/, ''))}</li>`)
        .join('')}</ul>`
    : '';

  const entries = section.entries
    .map(
      (entry) => `
      <article class="entry">
        <h3>${renderInline(entry.title)}</h3>
        ${entry.meta ? renderMeta(entry.meta) : ''}
        ${entry.paragraphs.map((text) => `<p>${renderInline(text)}</p>`).join('\n')}
      </article>`,
    )
    .join('\n');

  const paragraphs = section.paragraphs.map((text) => `<p>${renderInline(text)}</p>`).join('\n');

  return `<section><h2>${renderInline(section.title)}</h2>${paragraphs}${items}${entries}</section>`;
};

const renderBlocks = (blocks: readonly CvBlock[]): string =>
  blocks
    .map((block) =>
      block.kind === 'section' ? renderSection(block) : `<p>${renderInline(block.text)}</p>`,
    )
    .join('\n');

const STYLES = `
  /* ATS safety rules, deliberately enforced here:
     - one column, no floats, no tables for layout
     - real selectable text, never an image of text
     - standard system font stack (no webfont a parser may skip)
     - headings in strict h1 -> h2 -> h3 order, one h1 only        */
  @page { size: A4; margin: 15mm 14mm; }

  * { box-sizing: border-box; }

  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }

  body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 9.8pt;
    line-height: 1.45;
    color: #1c1917;
  }

  header { border-bottom: 1.5pt solid #1c1917; padding-bottom: 6pt; margin-bottom: 13pt; }
  h1 { font-size: 19pt; line-height: 1.15; margin: 0 0 4pt; letter-spacing: -0.01em; }
  header p { margin: 1pt 0; font-size: 9pt; color: #57534e; }
  header p:first-of-type { font-size: 10.2pt; color: #1c1917; font-weight: 600; }

  section { margin-bottom: 11pt; }

  h2 {
    font-size: 8.8pt;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: #9a3412;
    margin: 0 0 6pt;
    padding-bottom: 2.5pt;
    border-bottom: 0.5pt solid #d6cebf;
  }

  h3 { font-size: 10.2pt; margin: 0 0 1pt; line-height: 1.3; }

  .entry { margin-bottom: 7.5pt; page-break-inside: avoid; }
  .entry:last-child { margin-bottom: 0; }

  p { margin: 0 0 3pt; }
  .meta { font-size: 8.4pt; color: #78716c; margin-bottom: 2.5pt; }
  .meta code { background: none; color: #57534e; padding: 0; font-size: 8.4pt; }
  .sep { color: #a8a29e; }

  code {
    font-family: 'SF Mono', Menlo, Consolas, monospace;
    font-size: 8.4pt;
    background: #f5f2eb;
    padding: 0.5pt 2.5pt;
    border-radius: 2pt;
    color: #44403c;
  }

  strong { font-weight: 600; }
  a { color: #1c1917; text-decoration: none; }

  ul { margin: 2pt 0 3pt; padding-left: 13pt; }
  li { margin-bottom: 1.5pt; }
`;

export const renderCvHtml = (doc: CvDocument, language: 'es' | 'en'): string => {
  // Everything before the first section is the contact header. The parser joins
  // consecutive lines into one paragraph, so the header lines are separated by
  // blank lines in the source files on purpose.
  const firstSectionIndex = doc.blocks.findIndex((block) => block.kind === 'section');
  const headEnd = firstSectionIndex === -1 ? doc.blocks.length : firstSectionIndex;

  const headerParagraphs = doc.blocks
    .slice(0, headEnd)
    .map((block) => (block.kind === 'section' ? '' : `<p>${renderInline(block.text)}</p>`))
    .join('\n');

  const body = renderBlocks(doc.blocks.slice(headEnd));

  return `<!doctype html>
<html lang="${language}">
  <head>
    <meta charset="utf-8" />
    <title>${escapeHtml(doc.name)}</title>
    <style>${STYLES}</style>
  </head>
  <body>
    <header>
      <h1>${escapeHtml(doc.name)}</h1>
      ${headerParagraphs}
    </header>
    ${body}
  </body>
</html>`;
};
