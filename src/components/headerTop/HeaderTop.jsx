import { motion } from "framer-motion";

import { LanguageFlags } from "../language/LanguageFlags";
import { SocialNetworks } from "./SocialNetworks";

const animation = {
  initial: {
    y: "-140%"
  },
  animate: {
    y:0
  },
  transition: {
    duration: 0.8
  }
}

export const HeaderTop = () => {
  return (
    <>
      <div className="row bg-dark justify-content-between">
        <motion.div className="col-auto m-3" {...animation} >
          <LanguageFlags />
        </motion.div>
        <motion.div className="col-auto m-3" {...animation} >
          <SocialNetworks />
        </motion.div>
      </div>
    </>
  );
};
