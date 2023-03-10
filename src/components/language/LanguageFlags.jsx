import { useContext } from "react";
import { LanguageContext } from "../../helpers/LanguageContext";
import { Image } from "../imagesComponent/Image";

const languagesInfo = [
  {
    "language": "spanish",
    "image": "/spain.png",
    "alt": "Español"
  },
  {
    "language": "english",
    "image": "/united-kingdom.png",
    "alt": "English"
  }
]

export const LanguageFlags = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <div className="row"> 
      {
        languagesInfo.map((language) => 
          <a key={language.language} onClick={() => toggleLanguage(language.language)} className="col-auto" style={{cursor: "pointer"}}>
            <Image key="flag-spanish" url={language.image} alt={language.alt} width={"30px"} />
          </a> 
        )
      }
      </div>
    </>
  );
};