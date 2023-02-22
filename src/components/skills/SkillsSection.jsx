import { skillsInformation } from "../../db/information";
import { Image } from "../images/Image";
import { LanguageContent } from "../language/LanguageContent";
import { NavTabs } from "./NavTabs";

const {personal: personalSkills, professional: professionalSkills} = skillsInformation;
const tabSkills = [
  {
    label: "lbl-professional",
    id: "tab-professionalSkills",
    target: "professionalSkills",
    selected: true,
  },
  {
    label: "lbl-personal",
    id: "tab-personalSkills",
    target: "personalSkills",
    selected: false,
  },
]
export const SkillsSection = () => {


  return (
    <>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-skills"} /></h1>
      <NavTabs tabs={tabSkills} id="navtabSkills"/>
      <div className="tab-content rounded-bottom border-bottom border-end border-start p-4" id="navtabSkillsContent">
        <div className="tab-pane fade show active " id="professionalSkills" role="professionalSkills" aria-labelledby="professionalSkills-tab">
          {
            <>hola</>
          }
        </div>
        <div className="tab-pane fade" id="personalSkills" role="tabpanel" aria-labelledby="personalSkills-tab">
          <div className="row justify-content-around">
            {
              personalSkills.map(skill => 
                <div className="col-3 m-3 align-self-center" key={skill.id}>
                  <Image alt={skill.id} url={skill.icon} width={"40px"} className={''} />
                  <LanguageContent contentID={skill.label} />
                </div>
              )
            }
          </div>
        </div>
      </div>  
    </>
  );
};
