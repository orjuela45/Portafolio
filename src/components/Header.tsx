import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { CvDownloadLink } from './CvDownloadLink';
import { LanguageToggle } from './LanguageToggle';
import { profile } from '../content/profile';
import { useUi } from '../i18n/LanguageProvider';

const navLinks = [
  { href: '#about', key: 'about' },
  { href: '#experience', key: 'experience' },
  { href: '#background', key: 'background' },
  { href: '#contact', key: 'contact' },
] as const;

export const Header = () => {
  const ui = useUi();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/70 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-5 md:px-12">
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-card)] border border-line bg-sunk transition-colors group-hover:border-clay">
            <span className="font-display text-sm font-bold tracking-tight text-clay">MO</span>
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display text-sm font-semibold leading-tight text-ink">
              {profile.shortName}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
              AI Engineer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-[var(--radius-card)] px-3 py-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:bg-well hover:text-ink"
            >
              {ui.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <span className="hidden sm:inline-flex">
            <CvDownloadLink compact />
          </span>
          <button
            type="button"
            className="rounded-[var(--radius-tight)] border border-line p-2 text-ink lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-canvas px-5 pb-4 lg:hidden"
          aria-label="Principal móvil"
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-ink-soft hover:text-clay"
                >
                  {ui.nav[link.key]}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <CvDownloadLink compact />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
