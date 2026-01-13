import { useState } from "react";
import { VerticalTimeline} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { LanguageContent } from "../language/LanguageContent";
import { CardTimeLine } from "./CardTimeLine";
import { ExperienceModal } from "../modals/ExperienceModal";
import { academicAndExperienceInformation as timeLineInfo } from "../../db/information";

export const FormationSection = () => {
  const [modalInfo, setModalInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (info) => {
    setModalInfo(info);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalInfo(null);
  };

  return (
    <div>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-academicTrainingAndExperience"} /></h1>
      <VerticalTimeline className="mt-4" lineColor="black">
        {
          timeLineInfo.map(info => {
            return (
              <CardTimeLine 
                key={`card-timeline-${info.title}-${info.subtitle}`} 
                info={info} 
                onViewDetails={handleViewDetails}
              />
            );
          }).reverse()
        }
      </VerticalTimeline>
      
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={modalInfo?.imagesCarrousel || []}
        title={modalInfo?.title || ""}
      />
    </div>
  );
};
