import { motion } from "framer-motion"

import { Image } from "../Images/Image"
import { Presentation } from "./Presentation"

const urlImage = '/perfil.jpeg'

export const WelcomePanel = () => {
  return (
    <div className="row p-2 bg-dark presentation">
      <div className="row justify-content-center justify-content-xl-around align-items-center">
        <div className="col-7 col-xl-3 p-3">
          <Presentation />
        </div>
        <motion.div className="col-4 col-xl-5 p-3 text-center"
          initial={{opacity: 0, x: "120%"}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1}}
        >
          <Image url={urlImage} />
        </motion.div>
      </div>
    </div>
  )
}
