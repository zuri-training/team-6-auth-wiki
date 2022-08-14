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

const installation = `-- Create statement for SQLite databases
CREATE TABLE "users" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"status"	TEXT NOT NULL DEFAULT 'user',
	"email"	TEXT NOT NULL UNIQUE,
	"password"	TEXT UNIQUE,
	"username"	TEXT NOT NULL UNIQUE,
	"extra_data"	TEXT NOT NULL DEFAULT '{}',
	"created_at"	integer NOT NULL,
	"updated_at"	integer
);`;

const usage = `use \Team6\AuthWiki\Auth;
// Require composer autoload
require_once __DIR__ . '/vendor/autoload.php';

// ensure that the session is started. Call this as 
// early as possible in your script.
Auth::startSession();

// Initialize the database connection
Auth::initDb(new \PDO("sqlite:" . __DIR__ . "/database.db"), 'sqlite');
`;
const usage2 = `
// check if the user is logged in
if (Auth::isLoggedIn()) {
// the user is logged in
} else {
// the user is not logged in
}
// login a user
$id = Auth::login('user@example.com', 'password');
`;
const usage3 = `
// logout a user
Auth::logout();

// register a user
$id = Auth::register(
'Demo User', 
'password', 
'admin@admin.com', 
['phone' => '08134343422']
);`;

const PHP_Board = () => {
  return (
    <>
      <div className="md:grid grid-cols-4 min-h-screen">
        <SideBar />
        <div className="p-8 col-span-3 bg-[#e9effe] text-justify">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-center md:text-left md:text-[40px] text-primary">
              PHP Library
            </h1>
            <BiBell className="h-6 w-6" />
          </div>
          <p className="text-[16px] my-7">
            PHP is a server-side scripting language designed for web
            development-purpose programming language. Auth-wiki PHP library
            provides authentication codes already written in PHP and is made
            available for every developer for easy programming. We provide
            secure, flexible and easy to use authentication libraries for PHP
            For useage, This is a PHP code about clock, Firstly copy the source
            code below to a class file "clock.PHP"
          </p>
          <div>
            <h3 className="text-3xl font-bold">Installation</h3>
            <p className="my-5">Create your database tables</p>
          </div>
          <div className="">
            <div className="md:flex gap-8 line-numbers">
              <div className="md:w-[380px] mx-auto">
                <Code code={installation} language="javascript" />
              </div>
              <div className="md:w-[380px] mx-auto">
                <Code code={usage} language="javascript" />
              </div>
            </div>
            <div className="md:flex gap-8 line-numbers">
              <div className="md:w-[380px] mx-auto">
                <Code code={usage2} language="javascript" />
              </div>
              <div className="md:w-[380px] mx-auto">
                <Code code={usage3} language="javascript" />
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
            <Editor language_id={1} />
          </>
          <div className="w-[832px] mx-auto">
            <select name="comment" id="comment">
              <option value="sort">Sort by date</option>
            </select>
            {<Post lang_id={1} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default PHP_Board;
