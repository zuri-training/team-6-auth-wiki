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
import Editor from "./Editor";
import Post from "./Post";

import axios from "axios";
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
            <h1 className="text-[40px] text-primary">Python Library</h1>
            <BiBell className="h-6 w-6" />
          </div>
          <p className="text-[16px] my-7">
            Python is a widely used high-level programming language for
            general-purpose programming. Auth-wiki python library provides
            authentication codes already written in python and is made available
            for every developer for easy programming. We provide secure,
            flexible and easy to use authentication libraries for python. For
            useage, This is a Python code about clock, Firstly copy the source
            code below to a class file "clock.python"
          </p>
          <div className="">
            <h1 className="text-4xl">
              Python Authentication Library — Authlib (Django)
            </h1>
            <h2 className="text-3xl">Get Started</h2>
            <h3 className="text-2xl">Introduction</h3>
            <p className="text-[18px] my-7">
              Authlib is the ultimate Python library in building OAuth and
              OpenID Connect clients and servers. It offers generic
              implementations of RFCs, including OAuth 1.0, OAuth 2.0, JWT and
              many more. It becomes a Monolithic project that powers from
              low-level specification implementation to high-level framework
              integrations.
            </p>
            <h4 className="text-xl">Monolithic</h4>
            <p className="text-[18px] my-7">
              Authlib is a monolithic library. While being monolithic, it keeps
              everything synchronized, from spec implementation to framework
              integrations, from client requests to service providers.
            </p>
            <p className="text-[18px] my-7">
              The benefits are obvious; it won’t break things. When
              specifications changed, implementation will change too. Let the
              developers of Authlib take the pain, users of Authlib should not
              suffer from it.
            </p>
            <p className="text-[18px] my-7">
              You don’t have to worry about monolithic, it doesn’t cost your
              memory. If you don’t import a module, it won’t be loaded. We don’t
              madly import everything into the root init.py.
            </p>
            <h4 className="text-xl">Extendable</h4>
            <p className="text-[18px] my-7">
              Authlib is designed as flexible as possible. Since it is built
              from low-level specification implementation to high-level
              framework integrations, if a high level can’t meet your needs, you
              can always create one for your purpose based on the low-level
              implementation.
            </p>
            <p className="text-[18px] my-7">
              Most of the cases, you don’t need to do so. Extendable has been
              taken into account from the start of the project. Take OAuth 2.0
              server as an example, instead of a pre-configured server, Authlib
              takes advantage of register.
            </p>
            <div className=" w-4/5 mx-auto">
              <Code
                code={`authorization_server.register_grant(AuthorizationCodeGrant)
authorization_server.register_endpoint(RevocationEndpoint)`}
                language="javascript"
              />
            </div>
            <p>
              If you find anything not that extendable, you can ask help on
              StackOverflow or open an issue on GitHub.
            </p>
            <h4>Requirements This part</h4>
            <p>
              of the documentation covers the installation of Authlib, just like
              any other software package needs to be installed first.
            </p>
            <h3> $ pip install Authlib</h3>
            <p>Installing Authlib is simple with pip:</p>
            <div className=" w-4/5 mx-auto">
              <Code code={`$ pip install Authlib`} language="javascript" />
            </div>
            ``` It will also install the dependencies: . cryptography Using
            Authlib with Django: ```bash $ pip install Authlib Django ``` ###
            Get the Source Code Authlib is actively developed on GitHub, where
            the code is [always available](https://github.com/lepture/authlib).
            You can clone the public repository: ```bash $ git clone
            git://github.com/lepture/authlib.git ``` Once you have a copy of the
            source, you can embed it in your Python package, or install it into
            your site-packages easily: ```bash $ cd authlib $ pip install . ```
            ### Django OAuth Client The Django client can handle OAuth 1 and
            OAuth 2 services. Authlib has a shared API design among framework
            integrations. Create a registry with OAuth object: ```python from
            authlib.integrations.django_client import OAuth oauth = OAuth() ```
            The common use case for OAuth is authentication, e.g. let your users
            log in with Twitter, GitHub, Google etc. #### Configuration Authlib
            Django OAuth registry can load the configuration from your Django
            application settings automatically. Every key value pair can be
            omitted. They can be configured from your Django settings:
          </div>
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

          <>
            <Editor />
          </>
          <div className="w-[832px] mx-auto">
            <select name="comment" id="comment">
              <option value="sort">Sort by date</option>
            </select>
            {<Post lang_id={1} />}
            {}
            {/* <div className="message h-[124px] md:w-[660px] flex mb-4">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Python_Board;
