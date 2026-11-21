import { experience } from '../content/profile';
import { formatDuration, formatRange, monthsBetween } from '../content/dates';
import { useLanguage } from '../i18n/LanguageProvider';

export const Experience = () => {
  const { locale } = useLanguage();
  const ui = locale.ui.experience;

  return (
    <section
      id="experience"
      className="reveal mx-auto w-full max-w-[1240px] px-5 py-12 md:px-12"
    >
      <div className="flex flex-col gap-1 border-b border-line pb-5">
        <span className="eyebrow">{ui.eyebrow}</span>
        <h2 className="text-h1 font-display text-ink">{ui.heading}</h2>
        <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink-soft">{ui.lede}</p>
      </div>

      <ol className="mt-8 flex flex-col gap-3">
        {experience.map((entry) => {
          const content = locale.entries[entry.id];
          if (!content) return null;

          const duration = formatDuration(monthsBetween(entry.start, entry.end), locale.code);

          return (
            <li
              key={entry.id}
              className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-raised p-6 shadow-card transition-colors hover:border-line-strong md:flex-row md:items-start md:justify-between"
            >
              <div className="flex max-w-2xl flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-h3 font-display text-ink">{content.title}</h3>
                  {entry.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-live/25 bg-live/8 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-live">
                      <span className="h-1.5 w-1.5 rounded-full bg-live" />
                      {ui.currentBadge}
                    </span>
                  ) : null}
                  {entry.freelance ? (
                    <span className="rounded-full border border-amber/25 bg-amber/8 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-amber">
                      {ui.freelanceBadge}
                    </span>
                  ) : null}
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                    {duration}
                  </span>
                </div>

                <p className="font-display text-[13px] font-semibold text-ink-soft">
                  {entry.company}
                </p>
                <p className="text-[13px] leading-relaxed text-ink-soft">{content.description}</p>

                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {entry.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-[var(--radius-tight)] border border-line bg-well px-2 py-0.5 font-mono text-[10px] text-ink-soft"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0 md:text-right">
                <span className="font-mono text-[11px] font-semibold text-clay">
                  {formatRange(entry.start, entry.end, locale.code)}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
