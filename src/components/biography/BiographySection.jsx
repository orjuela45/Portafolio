import { LanguageContent } from "../language/LanguageContent"

import { calculateYears } from "../../helpers/calculateDates";

const replaceTexts = {
  "##age##": calculateYears(new Date(1998,11,11)),
  "##experience##": calculateYears(new Date(2019,1,1)),
}

export const BiographySection = () => {
  return (
    <>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-biography"} /></h1>
      <div className="row">
        <span className="col-auto mt-2" style={{"text-align": "justify"}}>
          <LanguageContent contentID={"lbl-biographyDescription"} replaceTexts={replaceTexts} />
        </span>
      </div>
    </>
  )
}
