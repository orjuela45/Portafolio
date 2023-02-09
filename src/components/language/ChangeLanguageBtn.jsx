import { useContext } from "react";
import { LanguageContext } from "../../helpers/LanguageContext";

export const LanguageButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <button onClick={toggleLanguage}> {language} </button>
    </>
  );
};