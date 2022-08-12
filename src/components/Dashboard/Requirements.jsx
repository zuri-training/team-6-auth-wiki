import React, { useContext } from "react";
import { BiBell } from "react-icons/bi";
import Code from "../Code";
import SideBar from "./SideBar";
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

const Requirements = () => {
  return (
    <>
      <div className="md:grid grid-cols-4 min-h-screen">
        <SideBar />
        <div className="p-8 col-span-3 bg-[#e9effe] text-justify">
          <div className="flex justify-between items-center">
            <h1 className="text-[30px] text-center md:text-left md:text-[40px] text-primary">
              Requirements
            </h1>
            <BiBell className="h-6 w-6" />
          </div>

          <p className="text-[16px] text-justify my-7">
            We prioritize libraries with minimal dependencies to maximize
            flexibility and portability across platforms. Specific requirements
            are detailed with each library. Refer to the code samples section
            for usage instructions. You can report bugs using the issue tracker
            on Github.
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
      </div>
    </>
  );
};

export default Requirements;
