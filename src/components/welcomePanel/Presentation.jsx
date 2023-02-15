import { motion } from "framer-motion"

import { LanguageContent } from "../language/LanguageContent"

const animation = {
  animate: {
    x:0
  },
  transition: {
    duration: 0.8
  }
}

export const Presentation = () => {
  return (
    <>
      <motion.h1 {...animation} initial={{x: "-250%"}}><LanguageContent contentID="lbl-greet" /></motion.h1>
      <motion.h1 {...animation} initial={{x: "-180%"}} className="presentation"><LanguageContent contentID="lbl-presentation" /></motion.h1>
      <motion.h2 {...animation} initial={{x: "-160%"}} className="rounded-pill col-auto bg-white p-2 text-dark mt-4 text-center"><LanguageContent contentID="lbl-profession" /></motion.h2>
    </>
  )
}
