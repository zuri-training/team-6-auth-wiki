import React, { useContext } from "react";
import { BiBell } from "react-icons/bi";
import Code from "../Code";
import SideBar from "./SideBar";
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
        pass`;

const Troubleshooting = () => {
  return (
    <>
      <motion.div className="md:grid grid-cols-4 min-h-screen"  variants={containerVariants}
        initial='hidden'
        animate='visible'>
        <SideBar />
        <div className="p-8 col-span-3 bg-[#e9effe] text-justify min-h-screen flex flex-col items-center justify-center">
          <div className="flex justify-between items-center">
            <h1 className="text-[30px] text-center md:text-left md:text-[40px] text-primary">
              Troubleshooting
            </h1>
            {/* <BiBell className="h-6 w-6" /> */}
          </div>

          <p className="text-[16px] text-justify my-7">
            Please report errors using the issue tracker on Github. For support,
            you can join our community discord server or find solution on
            stackoverflow. Please report security issues by sendig an email to
            security @teamsix.io
          </p>
          {/* <div className="md:flex gap-8 line-numbers">
            <div className="md:w-[380px] mx-auto">
              <Code code={python} language="javascript" />
            </div>
            <div className="md:w-[380px] mx-auto">
              <Code code={python} language="javascript" />
            </div>
          </div> */}
        </div>
      </motion.div>
    </>
  );
};

export default Troubleshooting;
