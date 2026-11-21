import { Mail } from 'lucide-react';

import { LinkedinIcon } from './icons';

import { profile } from '../content/profile';
import { CvDownloadLink } from './CvDownloadLink';
import { useUi } from '../i18n/LanguageProvider';

export const Contact = () => {
  const ui = useUi();
  const linkedin = profile.links.find((link) => link.label === 'LinkedIn');

  return (
    <section id="contact" className="reveal mx-auto w-full max-w-[1240px] px-5 pb-20 pt-6 md:px-12">
      <div className="flex flex-col items-center justify-between gap-8 rounded-[var(--radius-card)] border border-line bg-gradient-to-br from-well to-raised p-8 shadow-card md:flex-row md:p-12">
        <div className="flex max-w-xl flex-col gap-2">
          <span className="eyebrow">{ui.contact.eyebrow}</span>
          <h2 className="text-h1 font-display text-ink">{ui.contact.heading}</h2>
          <p className="text-[13px] leading-relaxed text-ink-soft">{ui.contact.lede}</p>
        </div>

        <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:flex-row md:w-auto">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-tight)] bg-clay px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-clay-deep sm:w-auto"
          >
            <Mail size={14} aria-hidden />
            {ui.contact.emailCta}
          </a>
          {linkedin ? (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-tight)] border border-line bg-raised px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink transition-colors hover:border-clay hover:text-clay sm:w-auto"
            >
              <LinkedinIcon size={14} />
              {ui.contact.linkedinCta}
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <CvDownloadLink variant="ghost" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
          {ui.cv.hint}
        </span>
      </div>
    </section>
  );
};
