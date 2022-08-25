import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion'
import {useInView } from "react-intersection-observer";
const Card = ({ image, title, content, anima, trans }) => {
  const { ref, inView } = useInView({threshold:0.2})
  // USE TO START AND STOP ANIMATION
  const animation = useAnimation()
  // USE THIS TO MONITOR WHEN ITEM COMES IN VIEW
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.3
        }
      })
    }
    if (!inView) {
      animation.start({x: '-100vw'})
    }
  },[inView])
  return (
      // <motion.div className="my-6 text-center md:text-justify flex flex-col items-center justify-center md:block w-5/6 p-5 mx-auto shadow-md md:shadow-none md:border-none border-2" transition={trans}
      //     initial={{ x: '-100vw' }}
      //           animate={{x: 0}}>
    <motion.div className="my-6 text-center md:text-justify flex flex-col items-center justify-center md:block w-5/6 p-5 mx-auto shadow-md md:shadow-none md:border-none border-2" animate={anima} transition={trans}>
            <img src={image} alt="code icon" />

            <h3 className="text-[20px] font-semibold my-3 text-center md:text-left">
              {title}
            </h3>
            <p>{content}</p>
          </motion.div>
  )
}

export default Card