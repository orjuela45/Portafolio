import { ArrowDown, MapPin } from 'lucide-react';

import { profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageProvider';

const tickerTechnologies = [
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Claude Code',
  'Pi Agent',
  'React',
  'Docker',
];

export const Hero = () => {
  const { locale } = useLanguage();
  const ui = locale.ui;

  return (
    <section id="top" className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-10 md:px-12 md:pt-14">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="order-1 flex flex-col gap-5 lg:order-1 lg:col-span-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-raised px-3 py-1.5 font-mono text-[11px] text-clay shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-clay" />
            {ui.hero.kicker}
          </span>

          <h1 className="text-[2rem] font-display font-bold leading-[1.14] tracking-[-0.03em] text-ink sm:text-[2.5rem] lg:text-display">
            {ui.hero.headline}{' '}
            <span className="bg-gradient-to-r from-clay to-amber bg-clip-text text-transparent">
              {ui.hero.headlineAccent}
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            {ui.hero.lede}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-[var(--radius-tight)] bg-clay px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-clay-deep"
            >
              {ui.hero.primaryCta}
              <ArrowDown size={14} aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[var(--radius-tight)] border border-line bg-raised px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink transition-colors hover:border-clay hover:text-clay"
            >
              {ui.hero.secondaryCta}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-line pt-3 font-mono text-[11px] text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-amber" aria-hidden />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-clay"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="order-2 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-amber/25 via-clay/15 to-amber/10 blur-xl" />
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-raised p-2.5 shadow-card">
              <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-tight)] bg-sunk">
                <img
                  src="/portrait.jpg"
                  alt={`${profile.name} — AI Engineer`}
                  width={760}
                  height={760}
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-[var(--radius-card)] border border-line bg-raised px-5 py-3 font-mono text-[11px] text-ink-soft shadow-card">
        <span className="inline-flex items-center gap-1.5 font-semibold text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-clay" />
          {ui.hero.tickerLabel}:
        </span>
        {tickerTechnologies.map((technology, index) => (
          <span key={technology} className="inline-flex items-center gap-3">
            {index > 0 ? <span className="text-line-strong">·</span> : null}
            <span className="transition-colors hover:text-clay">{technology}</span>
          </span>
        ))}
      </div>
    </section>
  );
};
