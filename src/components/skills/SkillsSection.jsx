import { skillsInformation } from "../../db/information";
import { Image } from "../imagesComponent/Image";
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

const tabsProfessionalSkills = professionalSkills.map(({items, ...rest}) => rest)

export const SkillsSection = () => {

  return (
    <>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-skills"} /></h1>
      <NavTabs tabs={tabSkills} id="navtabSkills"/>
      <div className="tab-content rounded-bottom border-bottom border-end border-start p-4" id="navtabSkillsContent">
        <div className="tab-pane fade show active " id="professionalSkills" role="professionalSkills" aria-labelledby="professionalSkills-tab">
          <div className="row justify-content-around">
            <NavTabs tabs={tabsProfessionalSkills} id="navtabSkillsProfessional"/>
            <div className="tab-content rounded-bottom border-bottom border-end border-start p-4" id="navtabProfessionalSkillsContent">
              {
                professionalSkills.map(skill => 
                  <div key={skill.id} className={`tab-pane fade show ${skill.selected && 'active'}`} id={skill.target} role={skill.target} aria-labelledby={skill.id}>
                    <div className="row justify-content-around">
                      {
                        skill.items.map(item => 
                          <div className="col-auto m-2 align-self-center text-center" key={item.id}>
                            <Image alt={item.id} url={item.icon} width={"50px"} className={''} />
                            <br />
                            <small className="mt-1 text-secondary text-uppercase">{item.name}</small>
                          </div>
                        )
                      }
                    </div>
                  </div>
                )
              }
            </div>  
          </div>
        </div>
        <div className="tab-pane fade" id="personalSkills" role="tabpanel" aria-labelledby="personalSkills-tab">
          <div className="row justify-content-around">
            {
              personalSkills.map(skill => 
                <div className="col-auto m-3 align-self-center text-center" key={skill.id}>
                  <Image alt={skill.id} url={skill.icon} width={"40px"} className={''} />
                  <br />
                  <small>
                    <LanguageContent contentID={skill.label} />
                  </small>
                </div>
              )
            }
          </div>
        </div>
      </div>  
    </>
  );
};
