import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { LanguageContent } from "../language/LanguageContent";

export const NavbarItem = ({label, redirect, animation}) => {
  return (
    <>
      <motion.li className="nav-item col-auto col-sm-2" {...animation}>
        <Link className="nav-link active text-center" to={redirect} smooth={true} offset={-70} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
          <LanguageContent contentID={label} />
        </Link>
      </motion.li>
    </>
  );
};
