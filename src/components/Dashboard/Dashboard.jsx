import React from 'react'
import Home from './Home'
import SideBar from './SideBar'
const Dashboard = () => {
  return (
      <>
          <div className="md:grid grid-cols-4 min-h-screen">
              <SideBar /> 
            <Home />    
          </div>
    </>
  )
}

export default Dashboard