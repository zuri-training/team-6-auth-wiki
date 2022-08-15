import React from 'react'
import { motion } from 'framer-motion'
const Card = ({image, title, content, trans}) => {
  return (
      <motion.div className="my-6 text-center md:text-justify flex flex-col items-center justify-center md:block w-5/6 p-5 mx-auto shadow-md md:shadow-none md:border-none border-2" transition={trans}
          initial={{ x: '-100vw' }}
                animate={{x: 0}}>
            <img src={image} alt="code icon" />

            <h3 className="text-[20px] font-semibold my-3 text-center md:text-left">
              {title}
            </h3>
            <p>{content}</p>
          </motion.div>
  )
}

export default Card