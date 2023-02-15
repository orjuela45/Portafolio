import { useContext } from "react";
import { LanguageContext } from "../../helpers/LanguageContext";

const languageFlags = {
  "spanish": '/spain.png',
  "english": '/united-kingdom.png',
}

export const LanguageFlags = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <a onClick={() => toggleLanguage("spanish")} className="m-2"><img width="30px" src={languageFlags.spanish} className="rounded-circle img-fluid" alt="Español"></img></a>
      <a onClick={() => toggleLanguage("english")}><img width="30px" src={languageFlags.english} className="rounded-circle img-fluid" alt="English"></img></a>
    </>
  );
};