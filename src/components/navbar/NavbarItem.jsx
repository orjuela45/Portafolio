import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { LanguageContent } from "../language/LanguageContent";

export const NavbarItem = ({label, redirect, animation, external}) => {
  return (
    <>
      <motion.li className="nav-item col-auto" {...animation} style={{cursor: "pointer"}}>
        <Link className="nav-link active text-center" to={redirect} smooth={true} offset={-70} duration={1000} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => external && window.open("https://drive.google.com/file/d/1pBFGLzplcSpznlsHsYJwGpkDTJmrswfV/view?usp=share_link", "_blank")}>
          <LanguageContent contentID={label} />
        </Link>
      </motion.li>
    </>
  );
};
