import { useContext } from "react";
import { LanguageContext } from "../../helpers/LanguageContext";
import translations from "../../languages/translations";

export const LanguageContent = ({contentID }) => {
  const { language } = useContext(LanguageContext);

  return translations[language][contentID] ?? contentID; 
}
