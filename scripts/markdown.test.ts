import { describe, expect, it } from 'vitest';

import { parseCvMarkdown } from './markdown';

describe('CV markdown parser', () => {
  it('reads the top heading as the document name, not as a section', () => {
    const doc = parseCvMarkdown('# Miguel Ángel Orjuela Riaño\n\n**AI Engineer** · Bogotá\n');

    expect(doc.name).toBe('Miguel Ángel Orjuela Riaño');
    expect(doc.blocks).toHaveLength(1);
    expect(doc.blocks[0]?.kind).toBe('paragraph');
  });

  it('splits a section into its heading and entries', () => {
    const doc = parseCvMarkdown(
      [
        '# Name',
        '',
        '## Experience',
        '',
        '### Illumia — AI Engineer',
        '`May 2026 — present` · Hybrid',
        '',
        'I build pipelines.',
      ].join('\n'),
    );

    const section = doc.blocks.find((block) => block.kind === 'section');
    expect(section).toBeDefined();
    if (section?.kind !== 'section') throw new Error('unreachable');

    expect(section.title).toBe('Experience');
    expect(section.entries).toHaveLength(1);
    expect(section.entries[0]?.title).toBe('Illumia — AI Engineer');
    expect(section.entries[0]?.meta).toBe('`May 2026 — present` · Hybrid');
    expect(section.entries[0]?.paragraphs).toEqual(['I build pipelines.']);
  });

  it('keeps flat bullet sections as items so certifications stay one list', () => {
    const doc = parseCvMarkdown(
      ['# Name', '', '## Certifications', '', '- SOLID — Udemy', '- Node — Udemy', ''].join('\n'),
    );

    const section = doc.blocks.find((block) => block.kind === 'section');
    if (section?.kind !== 'section') throw new Error('unreachable');

    expect(section.entries).toHaveLength(0);
    expect(section.items).toEqual(['- SOLID — Udemy', '- Node — Udemy']);
  });

  it('leaves a section with only entries free of items and vice versa', () => {
    const doc = parseCvMarkdown(['# Name', '', '## Languages', '', 'Spanish · English B2', ''].join('\n'));
    const section = doc.blocks.find((block) => block.kind === 'section');
    if (section?.kind !== 'section') throw new Error('unreachable');

    expect(section.items).toEqual([]);
    expect(section.entries).toHaveLength(0);
    expect(section.paragraphs).toEqual(['Spanish · English B2']);
  });
});
