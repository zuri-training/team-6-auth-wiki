import React from 'react'
import SideBar from '../SideBar'
import { BiBell } from 'react-icons/bi'
import Code from '../../Code'
import { Navigate } from "react-router-dom";
const python = `className AuthInterface:
    def isLoggedIn(self) -> bool:
        """Check if user is logged in"""
        pass

    def login(self, username: str, password: str) -> int:
        """Attempt to login user"""
        pass

    def logout(self) -> bool:
        """Logout user"""
        pass

    def getUser(self) -> User:
        """Get the currently logged in user"""
        pass`
const Troubleshoot = () => {
  return (
      <div className="md:grid grid-cols-4 min-h-screen">
          <SideBar />
            <div className="p-8 col-span-3 bg-[#e9effe]">
    <div className="flex justify-between items-center">
      <h1 className="text-[30px] text-center md:text-left md:text-[40px] text-primary">Troubleshoot</h1>
          <BiBell className="h-6 w-6" />
        </div>
        {/* <div className="container">
        <button onClick={()=> handleLogout()}>Logout</button>
        <div>
          <div className="content">
            <img src={avatar_url} alt="Avatar"/>
            <span>{name}</span>
            <span>{public_repos} Repos</span>
            <span>{followers} Followers</span>
            <span>{following} Following</span>
          </div>
        </div>
      </div> */}
    <p className="text-[16px] text-justify my-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <div className="md:flex gap-8 line-numbers">
      <div className="md:w-[380px] mx-auto">
            <Code code={python} language='javascript' />
      </div>
      <div className="md:w-[380px] mx-auto">
            <Code code={python} language='javascript' />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Troubleshoot