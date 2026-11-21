export type YearMonth = {
  readonly year: number;
  readonly month: number;
};

const MONTH_ABBREVIATIONS = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
} as const;

const CURRENT_LABEL = {
  es: 'actual',
  en: 'present',
} as const;

export type LocaleCode = keyof typeof MONTH_ABBREVIATIONS;

const toIndex = (value: YearMonth): number => value.year * 12 + (value.month - 1);

/**
 * Whole months between two points. A missing end means "still running", which
 * resolves to the current month. A range that ends before it starts returns 0
 * instead of a negative number, so a data mistake can never render as "-3 meses".
 */
export const monthsBetween = (start: YearMonth, end?: YearMonth): number => {
  const now = new Date();
  const resolvedEnd = end ?? { year: now.getFullYear(), month: now.getMonth() + 1 };
  return Math.max(0, toIndex(resolvedEnd) - toIndex(start));
};

export const formatMonth = (value: YearMonth, locale: LocaleCode): string => {
  const names = MONTH_ABBREVIATIONS[locale];
  const name = names[value.month - 1] ?? '???';
  return `${name} ${value.year}`;
};

export const formatRange = (start: YearMonth, end: YearMonth | undefined, locale: LocaleCode): string =>
  `${formatMonth(start, locale)} — ${end ? formatMonth(end, locale) : CURRENT_LABEL[locale]}`;

/** Spanish and English both read "N años" / "N years"; the caller passes the noun. */
export const formatDuration = (months: number, locale: LocaleCode): string => {
  const years = Math.floor(months / 12);
  const rest = months % 12;

  const yearWord = locale === 'es' ? 'año' : 'year';
  const monthWord = locale === 'es' ? 'mes' : 'month';
  const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? '' : 's'}`;

  if (years === 0) return plural(rest, monthWord);
  if (rest === 0) return plural(years, yearWord);
  return `${plural(years, yearWord)} ${rest} ${monthWord}`;
};
