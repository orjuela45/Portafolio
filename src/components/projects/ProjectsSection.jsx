import { LanguageContent } from "../language/LanguageContent"
import { CardsProjects } from "./cardsProjects"
import { projectsInformation } from "../../db/information"

export const ProjectsSection = () => {
  return (
    <>
      <h1 className="border-bottom"><LanguageContent contentID={"lbl-projects"} /></h1>
      <div className="row justify-content-around">
        <CardsProjects projects={projectsInformation} />
      </div>
    </>
  )
}
