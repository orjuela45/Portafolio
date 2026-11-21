import { useEffect } from 'react';

import { About } from './components/About';
import { Background } from './components/Background';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { profile } from './content/profile';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { useLanguage } from './i18n/LanguageProvider';

export const App = () => {
  const { locale } = useLanguage();
  useRevealOnScroll();

  useEffect(() => {
    const role = locale.ui.footer.role.split('·')[0]?.trim() ?? 'AI Engineer';
    document.title = `${profile.name} — ${role}`;
  }, [locale]);

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Experience />
        <Background />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
