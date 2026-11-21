import { profile } from '../content/profile';
import { useUi } from '../i18n/LanguageProvider';

export const Footer = () => {
  const ui = useUi();

  return (
    <footer className="w-full border-t border-line/60 bg-raised">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center justify-between gap-4 px-5 py-8 font-mono text-[11px] text-ink-soft md:flex-row md:px-12">
        <div className="flex items-center gap-2">
          <span className="font-display text-[13px] font-semibold text-ink">{profile.shortName}</span>
          <span className="text-line-strong">·</span>
          <span>{ui.footer.role}</span>
        </div>

        <div className="flex items-center gap-4">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-clay"
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-clay">
            {profile.email}
          </a>
        </div>

        <span className="text-[10px] text-ink-muted">{ui.footer.builtWith}</span>
      </div>
    </footer>
  );
};
