import { certifications, education } from '../content/profile';
import { formatMonth, formatRange } from '../content/dates';
import { useLanguage } from '../i18n/LanguageProvider';

export const Background = () => {
  const { locale } = useLanguage();
  const ui = locale.ui.background;

  return (
    <section
      id="background"
      className="reveal mx-auto w-full max-w-[1240px] px-5 py-12 md:px-12"
    >
      <div className="flex flex-col gap-1 border-b border-line pb-5">
        <span className="eyebrow">{ui.eyebrow}</span>
        <h2 className="text-h1 font-display text-ink">{ui.heading}</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <article className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-raised p-6 shadow-card">
          <h3 className="eyebrow">{ui.educationLabel}</h3>
          <ul className="flex flex-col">
            {education.map((entry) => {
              const content = locale.entries[entry.id];
              if (!content) return null;
              return (
                <li
                  key={entry.id}
                  className="flex flex-col gap-0.5 border-b border-line/60 py-2.5 last:border-0"
                >
                  <span className="font-display text-[13px] font-semibold text-ink">
                    {content.title}
                  </span>
                  <span className="text-[12px] text-ink-soft">{entry.institution}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-ink-muted">
                    {formatRange(entry.start, entry.end, locale.code)}
                  </span>
                </li>
              );
            })}
          </ul>
        </article>

        <div className="flex flex-col gap-5">
          <article className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-raised p-6 shadow-card">
            <h3 className="eyebrow">{ui.certificationLabel}</h3>
            <ul className="flex flex-col">
              {certifications.map((entry) => {
                const content = locale.entries[entry.id];
                if (!content) return null;
                return (
                  <li
                    key={entry.id}
                    className="flex items-baseline justify-between gap-3 border-b border-line/60 py-2 last:border-0"
                  >
                    <span className="flex flex-col">
                      <span className="font-display text-[13px] font-semibold text-ink">
                        {content.title}
                      </span>
                      <span className="text-[11px] text-ink-soft">{entry.issuer}</span>
                    </span>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-ink-muted">
                      {formatMonth(entry.issued, locale.code)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>

          <article className="flex items-center justify-between gap-3 rounded-[var(--radius-card)] border border-line bg-well p-6">
            <h3 className="eyebrow">{ui.languageLabel}</h3>
            <span className="font-mono text-[11px] font-medium text-ink">{ui.languageValue}</span>
          </article>
        </div>
      </div>
    </section>
  );
};
