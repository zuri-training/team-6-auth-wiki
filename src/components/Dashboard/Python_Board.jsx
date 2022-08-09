import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import { BiBell } from "react-icons/bi";
import { VscComment } from "react-icons/vsc";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiDownload2Line } from "react-icons/ri";
import Code from "../Code";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import user from "../../img/user.png";
import axios from "axios";
import { data } from "../api/postData";
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

const Python_Board = () => {
  const [posts, setposts] = useState(null);
  const fetchPost = async () => {
    const post = await data();
    if (!post.error) {
      setposts(post.post);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  console.log(posts);
  // const postDate = posts.created_at;
  // postDate = postDate.date;
  // console.log(postDate);
  const getNumberOfDays = (start, end) => {
    const date1 = new Date(start);
    const date2 = new Date(end);

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  };
  // let date = new Date(postDate);
  // console.log(date);
  // console.log(getNumberOfDays(date, postDate));
  return (
    <>
      <div className="md:grid grid-cols-4 min-h-screen">
        <SideBar />
        <div className="p-8 col-span-3 bg-[#e9~effe]">
          <div className="flex justify-between items-center">
            <h1 className="text-[40px] text-primary">Python Board</h1>
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
              <span className="flex ml-9">
                <VscComment className="h-6 w-6 mr-3 stroke-1 hover:stroke-3 stroke-primary" />
                <span>279 Comments</span>
              </span>
              <span className="flex ml-8">
                <RiDownload2Line className="h-6 w-6 mr-3 stroke-1 hover:stroke-3 stroke-primary" />
                <span>Download</span>
              </span>
            </div>
          </div>

          <div className="mt-12 bg-white">
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                    "height",
                    "200px",
                    editor.editing.view.document.getRoot()
                  );
                });
              }}
              // onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log('Editor is ready to use!', editor);
              // editor.editing.view.change((writer) => {
              //   writer.setStyle(
              //     "height",
              //     "352px",
              //     "width",
              //     "832px",
              //     editor.editing.view.document.getRoot()
              //   );
              // });
              // }}
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.log( { event, editor, data } );
              }}
              onBlur={(event, editor) => {
                // console.log( 'Blur.', editor );
              }}
              onFocus={(event, editor) => {
                // console.log( 'Focus.', editor );
              }}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#9B9696] w-[192px] h-[72px] mt-10 "
              >
                Comment
              </button>
            </div>
          </div>
          <div className="w-832px mx-auto mt-12">
            <div className="flex ">
              <select
                name="comment"
                className="text-700 mr-3 border-b-3 border-[#5E5656]"
                id="comment"
              >
                <option value="">Sort by Date:</option>
              </select>
            </div>
            <div className="flex justify-between text-primary ">
              <div className="details flex my-5">
                <img src={user} className="ml-3" alt="img" />
                <p className="mx-6 text-[#5E5656] font-bold text-[16px]">
                  John Olamide
                </p>
                <p>4 days ago</p>
              </div>
              <button>View More</button>
            </div>
            <div className="message h-[124px] md:w-[660px] flex mb-4">
              <div className="w-[32px] h-[124px] border-l-4 border[#5E5656] ml-8"></div>
              <div className="w-[32px] h-[124px] border-l-3 border-r-8 border[#5E5656] mr-5"></div>
              <p>
                the unique values explicitly tests in input parameters and loops
                are properly initialised.. THUMBS UP{" "}
              </p>
            </div>
            <div className="flex font-bold ml-5 text-[16px]">
              <div className="flex mr-4 items-center text-primary">
                <AiOutlineLike />
                <span className="ml-3 ">70k</span>
              </div>
              <div className="flex mr-4 items-center text-primary">
                <AiOutlineDislike />
                <span className="ml-3 ">0</span>
              </div>
              <div className="flex mr-4 items-center text-primary">
                <VscComment />
                <span className="ml-3 ">Reply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Python_Board;
