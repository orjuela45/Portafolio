import { VerticalTimeline} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { LanguageContent } from "../language/LanguageContent";
import { CardTimeLine } from "./CardTimeLine";
import { academicAndExperienceInformation as timeLineInfo } from "../../db/information";

export const FormationSection = () => {

  return (
    <div>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-academicTrainingAndExperience"} /></h1>
      <VerticalTimeline className="mt-4" lineColor="black">
        {
          timeLineInfo.map(info => {
            return <CardTimeLine key={`card-timeline-${info.title}-${info.subtitle}`} info={info} />
          })
        }
      </VerticalTimeline>
    </div>
  );
};
