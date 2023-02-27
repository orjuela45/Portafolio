import { motion } from "framer-motion";
import { Image } from "../images/Image";
import { LanguageContent } from "../language/LanguageContent";
import { ProjectModal } from "../modals/projectModal";

const animation = {
  whileHover: { 
    scale: 1.05 
  },
  whileTap: { 
    scale: 0.9
  },
  initial: {
    opacity: 0
  },
  whileInView: {
    opacity: 1
  },
  viewport: { 
    once: true 
  },
  transition: {
    duration: 0.6
  }
};

export const CardsProjects = ({projects}) => {
  
  return (
    <>
      {
        projects.map(project => 
          <motion.div {...animation} className='card m-3 col-10 m-4 p-0'  data-bs-toggle="modal" data-bs-target={`#${project.id}-modal`} key={project.id} style={{cursor: "pointer"}}>
            <Image url={project.image} className={"card-img-top"} alt={project.name} />
            <div className="card-body">
              <h5 className="card-title text-uppercase">{project.name}</h5>
              <p className="card-text" style={{textAlign: "justify"}}><LanguageContent contentID={project.shortDescription} /></p>
              <p className="card-footer bg-white">
                {
                  project.tags.map(tag =>
                    <span key={`${project.name}-${tag}`} className={`badge rounded-pill m-1 p-1 bg-dark`}><LanguageContent contentID={tag} /></span>
                  )
                }
              </p>
            </div>
          </motion.div>
        )
      }
      {
        projects.map(project => 
          <ProjectModal information={project} key={project.id} />
        )
      }
    </>
  );
};
