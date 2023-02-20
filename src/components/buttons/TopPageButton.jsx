import { useEffect, useState } from "react"

import { animateScroll } from "react-scroll";
import { motion } from "framer-motion";
import { Image } from "../Images/Image";

const animation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {
    duration: 0.4
  }
}

const imageInfo = {
  url: "/up-arrow.png",
  alt: "arrow-up",
  width: "50px"
}

export const TopPageButton = () => {

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>{
      setBackToTop(window.scrollY > 100);
    })
  }, [])
  

  return (
    <>
      {
        backToTop && <motion.a className="fixed-bottom text-end m-3" onClick={() => animateScroll.scrollToTop({duration: 600})} {...animation}><Image {...imageInfo} /></motion.a>
      }
    </>
  )
}
