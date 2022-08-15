import React from 'react'
import Home from './Home'
import SideBar from './SideBar'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  }
}
const Dashboard = ({children}) => {
  return (
      <>
      <motion.div className="md:grid grid-cols-4 min-h-screen max-w-screen"
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        
              <SideBar /> 
            <Home />    
          </motion.div>
    </>
  )
}

export default Dashboard