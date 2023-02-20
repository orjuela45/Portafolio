import { useContext } from "react";
import { LanguageContext } from "../../helpers/LanguageContext";
import translations from "../../languages/translations";

export const LanguageContent = ({contentID, replaceTexts = {}}) => {
  
  const { language } = useContext(LanguageContext);
  let translation = translations[language][contentID] ?? contentID;

  Object.keys(replaceTexts).forEach(key => {
    translation = translation.replace(key, replaceTexts[key])
  })

  return (
    <span dangerouslySetInnerHTML={{__html:translation}}></span>
  ); 
}
