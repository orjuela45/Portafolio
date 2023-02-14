import { useState } from "react";

import { LanguageButton } from "./components/language/ChangeLanguageBtn";
import { Navbar } from "./components/navbar/navbar";
import { WelcomePanel } from "./components/welcomePanel/WelcomePanel";

import { LanguageContext } from "./helpers/LanguageContext";

export const Briefcase = () => {
  const [language, setLanguage] = useState("english");

  function toggleLanguage() {
    setLanguage((language) => (language === "english" ? "spanish" : "english"));
  }

  return (
    <div>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <LanguageButton />
        <WelcomePanel />
        <Navbar />
      </LanguageContext.Provider>
    </div>
  );
};
