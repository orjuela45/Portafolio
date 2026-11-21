import { profile } from '../content/profile';
import { useContent, useUi } from '../i18n/LanguageProvider';
import type { Emphasis } from '../content/profile';

const levelTone: Record<Emphasis, string> = {
  primary: 'text-clay',
  solid: 'text-amber',
  working: 'text-ink-muted',
};

const SkillGroupCard = ({ id }: { readonly id: string }) => {
  const content = useContent(id);
  const ui = useUi();
  const group = profile.skills.find((candidate) => candidate.id === id);
  if (!group) return null;

  return (
    <article className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-raised p-5 shadow-card transition-colors hover:border-clay/40">
      <h3 className="text-h3 font-display text-ink">{content.title}</h3>
      <p className="text-[13px] leading-relaxed text-ink-soft">{content.description}</p>
      <ul className="mt-1 flex flex-col">
        {group.items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline justify-between gap-3 border-b border-line/60 py-1.5 last:border-0"
          >
            <span className="font-mono text-[11px] font-medium text-ink">{item.name}</span>
            <span
              className={`font-mono text-[10px] font-semibold uppercase tracking-wide ${levelTone[item.emphasis]}`}
            >
              {ui.about.skillLevels[item.emphasis]}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export const About = () => {
  const ui = useUi();

  return (
    <section id="about" className="reveal mx-auto w-full max-w-[1240px] px-5 py-12 md:px-12">
      <div className="flex flex-col gap-1 border-b border-line pb-5">
        <span className="eyebrow">{ui.about.eyebrow}</span>
        <h2 className="text-h1 font-display text-ink">{ui.about.heading}</h2>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-[var(--radius-card)] border border-line bg-raised p-6 shadow-card md:flex-row md:items-center md:p-8">
        <div className="flex max-w-2xl flex-col gap-2">
          <span className="eyebrow">{ui.about.philosophyLabel}</span>
          <p className="text-[15px] leading-relaxed text-ink">{ui.about.philosophy}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2.5">
          <div className="flex -space-x-1.5">
            {(['TS', 'JS', 'AI'] as const).map((badge, index) => (
              <span
                key={badge}
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-raised font-mono text-[9px] font-bold ${
                  index === 0
                    ? 'bg-amber/15 text-amber'
                    : index === 1
                      ? 'bg-clay/10 text-clay'
                      : 'bg-live/10 text-live'
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
            {ui.about.endToEnd}
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.skills.map((group) => (
          <SkillGroupCard key={group.id} id={group.id} />
        ))}
      </div>
    </section>
  );
};
