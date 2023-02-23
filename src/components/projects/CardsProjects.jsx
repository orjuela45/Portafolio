import { motion } from "framer-motion";
import { Image } from "../images/Image";
import { LanguageContent } from "../language/LanguageContent";

const animation = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.9 },
};

export const CardsProjects = ({projects}) => {
  return (
    <>
      {
        projects.map(({image, name, tags, shortDescription}) => 
          <motion.div {...animation} className='card m-3 col-11 col-md-4 col-xl-3 m-4 p-0'>
            <Image url={image} className={"card-img-top"} alt={name} />
            <div className="card-body">
              <h5 className="card-title text-uppercase">{name}</h5>
              <p className="card-text" style={{textAlign: "justify"}}><LanguageContent contentID={shortDescription} /></p>
              <p className="card-footer bg-white">
                {
                  tags.map(tag =>
                    <span className={`badge rounded-pill m-1 p-1 bg-dark`}><LanguageContent contentID={tag} /></span>
                  )
                }
              </p>
            </div>
          </motion.div>
        )
      }
    </>
  );
};
