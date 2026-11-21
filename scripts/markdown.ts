/**
 * A deliberately small Markdown reader for the CV source files.
 *
 * A full Markdown engine would pull a dependency and a plugin chain for the four
 * constructs a CV actually uses: `#` title, `##` section, `###` entry, and
 * paragraphs, flat bullets and inline code. Anything it does not understand is
 * kept as literal text rather than dropped, so a typo in the source shows up in
 * the PDF instead of vanishing silently.
 */

export type CvEntry = {
  readonly title: string;
  readonly meta: string;
  readonly paragraphs: readonly string[];
};

export type CvSection = {
  readonly kind: 'section';
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly entries: readonly CvEntry[];
  readonly items: readonly string[];
};

export type CvBlock = CvSection | { readonly kind: 'paragraph'; readonly text: string };

export type CvDocument = {
  readonly name: string;
  readonly blocks: readonly CvBlock[];
};

export const parseCvMarkdown = (source: string): CvDocument => {
  const lines = source.split('\n');
  let name = '';

  const blocks: CvBlock[] = [];
  let paragraph: string[] = [];
  let section: {
    kind: 'section';
    title: string;
    paragraphs: string[];
    entries: { title: string; meta: string; paragraphs: string[] }[];
    items: string[];
  } | null = null;
  let entry: { title: string; meta: string; paragraphs: string[] } | null = null;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const text = paragraph.join(' ').trim();
    paragraph = [];
    if (!text) return;

    if (entry) entry.paragraphs.push(text);
    else if (section) section.paragraphs.push(text);
    else blocks.push({ kind: 'paragraph', text });
  };

  const closeSection = () => {
    closeEntry();
    flushParagraph();
    if (section) blocks.push(section);
    section = null;
    entry = null;
  };

  const closeEntry = () => {
    flushParagraph();
    if (entry) {
      section?.entries.push(entry);
      entry = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith('### ')) {
      closeEntry();
      if (!section) section = { kind: 'section', title: '', paragraphs: [], entries: [], items: [] };
      entry = { title: line.slice(4).trim(), meta: '', paragraphs: [] };
      continue;
    }

    if (line.startsWith('## ')) {
      closeSection();
      section = {
        kind: 'section',
        title: line.slice(3).trim(),
        paragraphs: [],
        entries: [],
        items: [],
      };
      continue;
    }

    if (line.startsWith('# ')) {
      name = line.slice(2).trim();
      continue;
    }

    if (line.startsWith('- ')) {
      flushParagraph();
      if (section) section.items.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      continue;
    }

    // The first non-blank line of an entry is its metadata line when it is
    // wrapped in backticks, which is how the CV sources mark dates and modality.
    if (entry && !entry.meta && entry.paragraphs.length === 0 && line.trim().startsWith('`')) {
      entry.meta = line.trim();
      continue;
    }

    paragraph.push(line.trim());
  }

  closeSection();

  return { name, blocks };
};

export type { CvBlock };
