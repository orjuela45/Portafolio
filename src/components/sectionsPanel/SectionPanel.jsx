import { AcademicFormationAndExperienceSection } from "../academicFormationAndExperience/AcademicFormationAndExperienceSection"
import { BiographySection } from "../biography/BiographySection"
import { LanguageFlags } from "../language/LanguageFlags"
import { SkillsSection } from "../skills/SkillsSection"
import { SectionSchema } from "./SectionSchema"

export const SectionPanel = () => {
  return (
    <div className="row m-4  section justify-content-center">
      <SectionSchema id={"section1"} col={"col-auto col-auto col-xxl-5"} >
        <BiographySection />
      </SectionSchema>
      <SectionSchema id={"section1"} col={"col-auto col-12 col-xxl-6"} >
        <SkillsSection />
      </SectionSchema>
      <SectionSchema id={"section2"}>
        <AcademicFormationAndExperienceSection />
      </SectionSchema>
      <SectionSchema id={"section3"} >
        <LanguageFlags />
      </SectionSchema>
      <SectionSchema >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
      </SectionSchema>
      <SectionSchema id={"section4"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
      </SectionSchema>
      <SectionSchema id={"ultima"}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, dolorem. Officia quidem vel qui aliquam mollitia eligendi sint amet deleniti, perferendis neque voluptas odit ut labore esse asperiores inventore reiciendis.
      </SectionSchema>
    </div>
  )
}
