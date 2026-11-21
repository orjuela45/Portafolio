import { useLanguage } from '../i18n/LanguageProvider';

export const LanguageToggle = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 rounded-[var(--radius-tight)] border border-line bg-raised p-0.5"
      role="group"
      aria-label={locale.code === 'es' ? 'Idioma' : 'Language'}
    >
      {(['es', 'en'] as const).map((code) => {
        const active = locale.code === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`rounded-[2px] px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-colors ${
              active ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
};
