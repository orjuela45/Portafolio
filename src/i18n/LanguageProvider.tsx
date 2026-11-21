import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { defaultLocale, localeByCode } from '../i18n';
import type { ContentText, Locale, LocaleCode } from '../i18n';

type LanguageValue = {
  readonly locale: Locale;
  readonly setLocale: (code: LocaleCode) => void;
};

const LanguageContext = createContext<LanguageValue | null>(null);

const STORAGE_KEY = 'portfolio.locale';

const readStoredLocale = (): LocaleCode => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // Private browsing or a blocked storage partition: fall through to default.
  }
  return defaultLocale;
};

export const LanguageProvider = ({ children }: { readonly children: ReactNode }) => {
  const [code, setCode] = useState<LocaleCode>(readStoredLocale);

  const locale = useMemo(() => localeByCode(code), [code]);

  useEffect(() => {
    document.documentElement.lang = locale.htmlLang;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale.code);
    } catch {
      // Persisting is a convenience, never a requirement for rendering.
    }
  }, [locale]);

  const setLocale = useCallback((next: LocaleCode) => setCode(next), []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
  );
};

const useLanguageValue = (): LanguageValue => {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return value;
};

export const useLanguage = useLanguageValue;

export const useUi = () => useLanguageValue().locale.ui;

export const useContent = (id: string): ContentText => {
  const { locale } = useLanguageValue();
  const entry = locale.entries[id];
  if (!entry) {
    // Surfacing the id makes a missing translation obvious in review instead of
    // rendering an empty block that silently passes.
    return { title: id, description: '' };
  }
  return entry;
};
