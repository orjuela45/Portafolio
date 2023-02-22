import { useState } from "react";
import { VerticalTimeline} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { LanguageContent } from "../language/LanguageContent";
import { CardTimeLine } from "./CardTimeLine";
import { academicAndExperienceInformation as timeLineInfo } from "../../db/information";

export const AcademicFormationAndExperienceSection = () => {

  const [information, setInformation] = useState(timeLineInfo)

  //todo botones para filtrar por educacion y trabajo
  const filterInformation = (filter) => {
    if (filter !== 'work' && filter !== 'education') {
      setInformation(timeLineInfo)
    } else {
      setInformation(timeLineInfo.filter(info => info.type == filter))
    }
  }

  return (
    <div>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-academicTrainingAndExperience"} /></h1>
      <VerticalTimeline className="mt-4" lineColor="black">
        {
          information.map(info => {
            return <CardTimeLine key={`card-timeline-${info.title}-${info.subtitle}`} info={info} />
          })
        }
      </VerticalTimeline>
    </div>
  );
};
