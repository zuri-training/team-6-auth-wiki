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

const GetStarted = () => {
  return (
    <>
      <div className="md:grid grid-cols-4 min-h-screen">
        <SideBar />
        <div className="p-8 col-span-3 bg-[#e9effe]">
          <div className="flex justify-between items-center">
            <h1 className="text-[30px] text-center md:text-left md:text-[40px] text-primary">
              Get started
            </h1>
            <BiBell className="h-6 w-6" />
          </div>

          <p className="text-[16px] text-justify my-7">
            To get started, select a language and browse the collection of
            libraries there. Access to content on this site is free and your
            data is not shared with third parties. Each library has a license
            attached. If one is not available, please write to us @teamsix.io.
            We only collect minimal data necessary to authenticate users.
          </p>
          <div className="my-5">
            <h1 className="text-[30px] text-center md:text-left md:text-[40px] text-primary">
              Installation
            </h1>
            <p className="text-[16px] text-justify my-7">
              The source code for the libraries is freely available for download
              on GitHub. Specific installation steps are provided with each
              library. Rather to the code samples section for usage
              instructions. You can report bugd using the issue tracker on
              GitHub
            </p>
          </div>
          <div className="md:flex gap-8 line-numbers">
            <div className="md:w-[380px] mx-auto">
              <Code code={python} language="javascript" />
            </div>
            <div className="md:w-[380px] mx-auto">
              <Code code={python} language="javascript" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
