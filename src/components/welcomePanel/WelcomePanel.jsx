import { motion } from "framer-motion"

import { Image } from "../Images/Image"
import { Presentation } from "./Presentation"

const urlImage  = '/perfil.jpeg'
const animation = {
  initial:{
    opacity: 0, 
    x: "120%"
  },
  animate:{
    opacity: 1, 
    x: 0
  },
  transition:{
    duration: 1
  }
}


export const WelcomePanel = () => {
  return (
    <div className="row p-2 bg-dark">
      <div className="row justify-content-around align-items-center">
        <div className="col-auto p-3">
          <Presentation />
        </div>
        <motion.div className="col-10 col-sm-auto p-3 text-center" {...animation}
        >
          <Image url={urlImage} />
        </motion.div>
      </div>
    </div>
  )
}
