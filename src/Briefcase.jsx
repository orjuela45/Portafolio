import { useState } from "react";

import { LanguageFlags } from "./components/language/LanguageFlags";
import { Navbar } from "./components/navbar/navbar";
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
        <LanguageFlags />
        <WelcomePanel />
        <Navbar />
      </LanguageContext.Provider>
    </div>
  );
};
