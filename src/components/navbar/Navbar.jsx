import Sticky from 'react-stickynode';
import { motion } from "framer-motion";

import { NavbarItem } from "./NavbarItem";

const listNabvar = [
  {
    name: "biography",
    label: "lbl-biography",
    redirect: "section1",
  },
  {
    name: "skills",
    label: "lbl-skills",
    redirect: "section1",
  },
  {
    name: "academicTraining",
    label: "lbl-academicTrainingAndExperience",
    redirect: "section2",
  },
  {
    name: "projects",
    label: "lbl-projects",
    redirect: "section4",
  },
  {
    name: "contactInformation",
    label: "lbl-contactInformation",
    redirect: "ultima",
  },
  {
    name: "cv",
    label: "lbl-cv",
    redirect: "section1",
  },
];

const animation = {
  initial: {
    y: "100%",
    opacity: 0
  },
  animate: {
    y:0,
    opacity: 1
  },
  transition: {
    duration: 0.6
  }
}

export const Navbar = () => {
  return (
    <Sticky enabled={true} top={0} innerZ={1000}>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-gradiant justify-content-around p-3">
        <motion.button className="navbar-toggler m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" {...animation}>
          <span className="navbar-toggler-icon"></span>
        </motion.button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav col-12 justify-content-around">
            {listNabvar.map((item) => {
              return <NavbarItem key={item.name} {...item} animation={animation} />
            })}
          </ul>
        </div>
      </nav>
    </Sticky>
  );
};
