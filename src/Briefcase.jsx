import { useState } from "react";

import { HeaderTop } from "./components/headerTop/HeaderTop";
import { Navbar } from "./components/navbar/navbar";
import { SectionPanel } from "./components/sectionsPanel/SectionPanel";
import { WelcomePanel } from "./components/welcomePanel/WelcomePanel";

import { LanguageContext } from "./helpers/LanguageContext";

export const Briefcase = () => {
  const [language, setLanguage] = useState("english");

  function toggleLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <HeaderTop />
        <WelcomePanel />
        <Navbar />
        <SectionPanel />
      </LanguageContext.Provider>
    </div>
  );
};
