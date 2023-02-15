import { motion } from "framer-motion";

import { LanguageContent } from "../language/LanguageContent";

export const NavbarItem = ({label, redirect, animation}) => {
  return (
    <>
      <motion.li className="nav-item col-2" {...animation}>
        <a className="nav-link active text-center" aria-current="page" href={redirect}>
          <LanguageContent contentID={label} />
        </a>
      </motion.li>
    </>
  );
};
