import React from "react";
import SideBar from "./SideBar";
import { BiBell } from "react-icons/bi";
import { VscComment } from "react-icons/vsc";
import { RiDownload2Line } from "react-icons/ri";
import Code from "../Code";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Post from "./Post";
import Editor from "./Editor";
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

const PHP_Board = () => {
  return (
    <>
      <div className="md:grid grid-cols-4 min-h-screen">
        <SideBar />
        <div className="p-8 col-span-3 bg-[#e9effe]">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-center md:text-left md:text-[40px] text-primary">
              PHP Board
            </h1>
            <BiBell className="h-6 w-6" />
          </div>
          <p className="text-[16px] my-7">
            This is a Python code about clock, Firstly copy the source code
            below to a class file "clock.python"
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
              <span className="flex items-center md:ml-9">
                <VscComment className="h-3 w-3 mx-4 md:mr-3 stroke-1 hover:stroke-3 stroke-primary" />
                <span>279 Comments</span>
              </span>
              <span className="flex items-center ml-8">
                <RiDownload2Line className="h-3 w-3 mr-2 md:mr-3 stroke-1 hover:stroke-3 stroke-primary" />
                <span>Download</span>
              </span>
            </div>
          </div>

          <>
            <Editor />
          </>
          <div className="w-[832px] mx-auto">
            <select name="comment" id="comment">
              <option value="sort">Sort by date</option>
            </select>
            {<Post lang_id={1} />}
            {/* <div className="flex"> */}
            {/* <div className="details flex">
                <img src="" alt="img" />
                <p>John Olamide</p>
                <p>4 days ago</p>
              </div>
              <button>View More</button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PHP_Board;
