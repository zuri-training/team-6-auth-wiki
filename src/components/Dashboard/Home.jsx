import React from 'react'
import { BiBell } from 'react-icons/bi'
import Code from '../Code'

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

const Home = () => {
  return (
      <>
        <div className="p-8 col-span-3 bg-[#e9effe]">
    <div className="flex justify-between items-center">
      <h1 className="text-[40px] text-primary">Lorem ipsum</h1>
          <BiBell className="h-6 w-6" />
    </div>
    <p className="text-[16px] my-7">
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
      </>
  )
}

export default Home