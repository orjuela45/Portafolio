import { FormationSection } from "../formation/formationSection"
import { BiographySection } from "../biography/BiographySection"
import { ProjectsSection } from "../projects/ProjectsSection"
import { SkillsSection } from "../skills/SkillsSection"
import { SectionSchema } from "./SectionSchema"
import { ContactMeSection } from "../contactMe/ContactMeSection"

export const SectionPanel = () => {
  return (
    <div className="row m-4  section justify-content-center">
      <SectionSchema id={"biographySection"} col={"col-auto col-auto col-xxl-5"} >
        <BiographySection />
      </SectionSchema>
      <SectionSchema id={"skillsSection"} col={"col-12 col-xxl-6"} >
        <SkillsSection />
      </SectionSchema>
      <SectionSchema id={"academicSection"} col={"col-12 col-xxl-6"}>
        <FormationSection />
      </SectionSchema>
      <SectionSchema id={"projectsSection"} col={"col-12 col-xxl-4"}>
        <ProjectsSection />
      </SectionSchema>
      <SectionSchema id={"contactMeSection"} col={"col-12 col-xxl-10"}>
        <ContactMeSection />
      </SectionSchema>
    </div>
  )
}
