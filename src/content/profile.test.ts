import { describe, expect, it } from 'vitest';

import { locales } from '../i18n';
import { certifications, education, experience, profile } from './profile';
import { monthsBetween, formatRange } from './dates';

const skillGroups = profile.skills.map((group) => group.id);

describe('date helpers', () => {
  it('counts whole months between two ISO-ish year/month pairs', () => {
    expect(monthsBetween({ year: 2019, month: 2 }, { year: 2019, month: 10 })).toBe(8);
    expect(monthsBetween({ year: 2023, month: 5 }, { year: 2026, month: 5 })).toBe(36);
    expect(monthsBetween({ year: 2025, month: 12 }, { year: 2026, month: 1 })).toBe(1);
  });

  it('treats a missing end as "now" and never returns a negative span', () => {
    const span = monthsBetween({ year: 2026, month: 5 }, undefined);
    expect(span).toBeGreaterThanOrEqual(0);

    expect(monthsBetween({ year: 2026, month: 5 }, { year: 2026, month: 1 })).toBe(0);
  });

  it('renders a range with a locale-aware "current" label', () => {
    expect(formatRange({ year: 2023, month: 5 }, { year: 2026, month: 5 }, 'es')).toBe(
      'may 2023 — may 2026',
    );
    expect(formatRange({ year: 2026, month: 5 }, undefined, 'en')).toBe('may 2026 — present');
  });
});

describe('profile chronology', () => {
  it('has exactly one current position, and it is Illumia', () => {
    const current = experience.filter((entry) => entry.current);
    expect(current).toHaveLength(1);
    expect(current[0]?.company).toBe('Illumia');
  });

  it('leaves Christus no later than the month Illumia starts', () => {
    const christus = experience.find((entry) => entry.company === 'Christus sinergia');
    const illumia = experience.find((entry) => entry.company === 'Illumia');
    expect(christus?.end).toBeDefined();
    expect(illumia?.start).toBeDefined();

    // Christus ended 26/05/2026 and Illumia began 27/05/2026: the handover sits
    // inside one calendar month, so month granularity can only require that the
    // ranges touch without overlapping in either direction.
    const christusEnd = monthsBetween({ year: 2000, month: 1 }, christus?.end);
    const illumiaStart = monthsBetween({ year: 2000, month: 1 }, illumia?.start);
    expect(christusEnd).toBeLessThanOrEqual(illumiaStart);
  });

  it('marks Periferia as freelance and only Periferia', () => {
    const freelance = experience.filter((entry) => entry.freelance);
    expect(freelance).toHaveLength(1);
    expect(freelance[0]?.company).toBe('Periferia — El Tiempo');
  });

  it('never lists an end date before its start date', () => {
    for (const entry of experience) {
      if (!entry.end) continue;
      expect(
        monthsBetween(entry.start, entry.end),
        `${entry.company} ends before it starts`,
      ).toBeGreaterThanOrEqual(0);
    }
  });

  it('has no two roles claiming the same months, except the declared freelance overlap', () => {
    // Two roles can only overlap when one of them is freelance: a salaried
    // position cannot run in parallel with another. This is what the Drive CV
    // forced — Christus and Periferia share 16 months, and Periferia is the
    // freelance engagement.
    const spans = experience.map((entry) => ({
      company: entry.company,
      from: entry.start.year * 12 + entry.start.month,
      to: entry.end ? entry.end.year * 12 + entry.end.month : Number.POSITIVE_INFINITY,
      freelance: entry.freelance === true,
    }));

    for (let i = 0; i < spans.length; i += 1) {
      for (let j = i + 1; j < spans.length; j += 1) {
        const a = spans[i];
        const b = spans[j];
        if (!a || !b) continue;

        const shared = Math.min(a.to, b.to) - Math.max(a.from, b.from);
        if (shared <= 0) continue;

        expect(
          a.freelance || b.freelance,
          `${a.company} and ${b.company} overlap for ${shared} months without either being freelance`,
        ).toBe(true);
      }
    }
  });

  it('uses unique ids across every collection', () => {
    const ids = [
      ...experience.map((entry) => entry.id),
      ...education.map((entry) => entry.id),
      ...certifications.map((entry) => entry.id),
      ...skillGroups,
    ];
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('translations', () => {
  const keys = [
    ...experience.map((entry) => entry.id),
    ...education.map((entry) => entry.id),
    ...certifications.map((entry) => entry.id),
    ...skillGroups,
  ];

  it('covers every content id in every locale', () => {
    for (const locale of locales) {
      for (const key of keys) {
        expect(locale.entries[key], `${locale.code} is missing "${key}"`).toBeDefined();
      }
    }
  });

  it('has no orphan translation keys', () => {
    for (const locale of locales) {
      for (const key of Object.keys(locale.entries)) {
        expect(keys, `${locale.code} has an orphan key "${key}"`).toContain(key);
      }
    }
  });

  it('gives every entry a non-empty title and description', () => {
    for (const locale of locales) {
      for (const key of keys) {
        const entry = locale.entries[key];
        expect(entry?.title.trim(), `${locale.code}.${key} title`).toBeTruthy();
        expect(entry?.description.trim(), `${locale.code}.${key} description`).toBeTruthy();
      }
    }
  });

  it('resolves every skill labelKey in every locale', () => {
    // Product names stay literal (`Node.js`), but a concept like "code review"
    // must be translated. Anything declaring a labelKey has to exist in both
    // locales, or the Spanish page silently falls back to English.
    const labelKeys = profile.skills
      .flatMap((group) => group.items)
      .flatMap((item) => (item.labelKey ? [item.labelKey] : []));

    expect(labelKeys.length).toBeGreaterThan(0);

    for (const locale of locales) {
      for (const key of labelKeys) {
        const label = locale.skillLabels[key];
        expect(label, `${locale.code} is missing skill label "${key}"`).toBeTruthy();
      }
    }
  });

  it('leaves no unused skill label, and keeps labels free of product names', () => {
    const labelKeys = new Set(
      profile.skills
        .flatMap((group) => group.items)
        .flatMap((item) => (item.labelKey ? [item.labelKey] : [])),
    );

    for (const locale of locales) {
      for (const key of Object.keys(locale.skillLabels)) {
        expect(labelKeys, `${locale.code} has an unused skill label "${key}"`).toContain(key);
      }
    }
  });

  it('exposes both locales plus the shared UI strings', () => {
    for (const locale of locales) {
      expect(locale.ui.nav.experience).toBeTruthy();
      expect(locale.ui.cv.download).toBeTruthy();
      expect(locale.ui.hero.status).toBeTruthy();
    }
  });
});

describe('stack narrative', () => {
  it('foregrounds Node.js and TypeScript, not PHP or Python', () => {
    const primary = profile.skills
      .flatMap((group) => group.items)
      .filter((item) => item.emphasis === 'primary')
      .map((item) => item.name);

    expect(primary).toContain('Node.js');
    expect(primary).toContain('TypeScript');
    expect(primary).not.toContain('PHP');
    expect(primary).not.toContain('Python');
  });

  it('lists the current role stack exactly as the user stated it', () => {
    const illumia = experience.find((entry) => entry.company === 'Illumia');
    expect(illumia?.stack).toEqual([
      'Claude Code',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'AWS',
      'Bedrock',
    ]);
  });
});
