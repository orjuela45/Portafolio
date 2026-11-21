import { en } from './en';
import { es } from './es';
import type { Locale, LocaleCode } from './types';

export const locales: readonly Locale[] = [es, en];

export const localeByCode = (code: LocaleCode): Locale =>
  locales.find((locale) => locale.code === code) ?? es;

export const defaultLocale: LocaleCode = 'es';

export type { Locale, LocaleCode, ContentText, UiStrings } from './types';
