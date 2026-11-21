import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal';

/**
 * Adds `is-visible` to every `.reveal` element as it scrolls into view.
 *
 * The hiding rule lives behind `html.reveal-ready` (set by an inline script in
 * index.html), not on `.reveal` itself. That ordering matters: if this hook never
 * runs — an exception, a blocked bundle, an unsupported browser — the class is
 * absent and every section renders normally. Content must never depend on an
 * animation succeeding.
 *
 * `prefers-reduced-motion` is handled in CSS, so no media query check is needed.
 */
export const useRevealOnScroll = () => {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (targets.length === 0) return;

    // Without an observer, the safest outcome is a page with no entrance motion.
    if (typeof IntersectionObserver === 'undefined') {
      for (const target of targets) target.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
    );

    for (const target of targets) observer.observe(target);

    // Anything already in view at mount reveals immediately rather than waiting
    // for the first scroll, which also covers anchor navigation into a section.
    for (const target of targets) {
      const box = target.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom > 0) {
        target.classList.add('is-visible');
        observer.unobserve(target);
      }
    }

    return () => observer.disconnect();
  }, []);
};
