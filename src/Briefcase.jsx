import { useState } from "react";

import { LanguageButton } from "./components/language/ChangeLanguageBtn";

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
      </LanguageContext.Provider>
    </div>
  );
};
