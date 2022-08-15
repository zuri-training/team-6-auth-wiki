import React from "react";
import SideBar from "./SideBar";
import { BiBell } from "react-icons/bi";
import { VscComment } from "react-icons/vsc";
import { RiDownload2Line } from "react-icons/ri";
import Code from "../Code";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import Post from "./Post";
import Editor from "./Editor";
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
// import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';

// import Context from '@ckeditor/ckeditor5-core/src/context';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

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

const JavaScript_Board = () => {
  return (
    <>
      <motion.div className="md:grid grid-cols-4 min-h-screen max-w-screen overflow-hidden"  variants={containerVariants}
        initial='hidden'
        animate='visible'>
        <SideBar />
        <div className="p-8 col-span-3 bg-[#e9effe] text-justify">
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] text-primary">Javascript Library</h1>
            <BiBell className="h-6 w-6" />
          </div>
          <p className="text-[16px] my-7">
            Javascript is a high-level, dynamic, untyped and interpreted
            programming language. Auth-wiki javascript library provides
            authentication codes already written in Javascript and is made
            available for every developer for easy programming. We provide
            secure, flexible and easy to use authentication libraries for
            Javascript. For useage, This is a Javascript code about clock,
            Firstly copy the source code below to a class file
            "clock.javascript"
          </p>
          <div className="">
            <div className="md:flex gap-8 line-numbers">
              <div className="md:w-[380px] mx-auto">
                <Code code={python} language="javascript" />
              </div>
              <div className="md:w-[380px] mx-auto">
                <Code code={python} language="javascript" />
              </div>
            </div>
            <div className="flex">
              <span className="flex ml-9">
                <VscComment className="h-6 w-6 mr-3 stroke-1 hover:stroke-3 stroke-primary" />
                <span>279 Comments</span>
              </span>
              <span className="flex ml-8">
                <RiDownload2Line className="h-6 w-6 mr-3 stroke-1 hover:stroke-3 stroke-primary" />
                 {/* <Link to="libraries/javascript.zip"  target="_blank" download>Download</Link> */}
                 <a href="libraries/javascript.zip"  target="_blank" download>Download</a>
              </span>
            </div>
          </div>

          <>
            <Editor language_id={2} />
          </>
          <div className="w-[832px] mx-auto">
            <select name="comment" id="comment">
              <option value="sort">Sort by date</option>
            </select>
            {<Post lang_id={2} />}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default JavaScript_Board;
