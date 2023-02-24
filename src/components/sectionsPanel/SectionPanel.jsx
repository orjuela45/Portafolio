import { AcademicFormationAndExperienceSection } from "../academicFormationAndExperience/AcademicFormationAndExperienceSection"
import { BiographySection } from "../biography/BiographySection"
import { ProjectsSection } from "../projects/ProjectsSection"
import { SkillsSection } from "../skills/SkillsSection"
import { SectionSchema } from "./SectionSchema"

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
        <AcademicFormationAndExperienceSection />
      </SectionSchema>
      <SectionSchema id={"projectsSection"} col={"col-12 col-xxl-auto"}>
        <ProjectsSection />
      </SectionSchema>
    </div>
  )
}
