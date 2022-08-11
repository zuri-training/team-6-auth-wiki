import React, { useState, useEffect } from "react";
import user_img from "../../img/user.png";
import logo from "../../img/logo/logo2.png";
import watermark from "../../img/logo/water.png";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaBeer,
  FaDesktop,
  FaReact,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { BiUserCircle } from "react-icons/bi";
// import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth";

const SideBar = () => {
  const auth = useAuth();
  const user = auth.user.userData;
  // console.log(user.username);
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  const [menu, setMenu] = useState(false);
  const [overviewMenu, setOverviewMenu] = useState(false);
  const [codeMenu, setCodeMenu] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [token, setToken] = useState([]);
  // const [user, setUser] = useState({});

  // setUser(auth.user.userData);

  // else {
  //   handleLogout();
  // }
  // if (accesstoken) {
  //   setToken(accesstoken);
  // }
  // }, []);
  // if (token) {
  // }
  // console.log(token);
  // if (menu || overviewMenu) {
  //   ()=>setCodeMenu(false)

  // } else if (codeMenu || overviewMenu) {
  //   ()=>setMenu(false)
  // }
  // else if (menu || codeMenu) {
  //   ()=>setOverviewMenu(false)
  // }
  // const auth =
  const [mymenu, setMyMenu] = useState(false);
  const handleMenu = () => {
    if (mymenu) {
      setMyMenu(false);
    } else {
      setMyMenu(true);
    }
  };
  return (
    <>
      <div className="col-start-1">
        <div className="flex justify-between items-center pt-4">
          <img src={logo} className="ml-3 h-[44.16px]" alt="auth wiki logo" />
          <span className="text-3xl cursor-pointer mx-3 md:hidden block">
            <GrMenu onClick={handleMenu} />
          </span>
        </div>
        <div
          className={`${
            mymenu ? "top-[80px] opacity-100 pb-6" : "hidden"
          } md:justify-between md:flex md:items-center md:static absolute md:bg-transparent bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:mr-20`}
        >
          <div className="w-[320px] bg-primary hover:bg-text_primary h-[80px] flex items-center px-5 mt-6 ml-2 rounded">
            <img src={user_img} alt="" />
            <p className="text-white ml-4 text-[24px] font-bold">
              {user.username}
            </p>
          </div>
          <aside className="mx-6 mt-10">
            <ul className="">
              <li
                className="flex justify-between items-center hover:text-primary cursor-pointer text-[24px] menu-btn"
                onClick={() => setMenu((prevState) => !prevState)}
              >
                <div className="flex items-center">
                  <span>
                    <FaDesktop className="h-6 text-primary w-6 mr-3 stroke-2 hover:stroke-3 stroke-primary" />
                  </span>
                  <span className="cursor-pointer">Installation</span>
                </div>
                <IoIosArrowDown className="h-6 w-6 mr-3 stroke-primary" />
                {/* <FaArrowUp className="h-6 w-6 mr-3 stroke-primary"  /> */}
              </li>
              <ul
                className={`${
                  menu ? "flex" : "hidden"
                } flex-col pl-10 dropdown1 text-[20px]`}
              >
                <li className="px-2 py-3 hover:bg-[#E9EFFF] rounded">
                  <a href="#">Get Started</a>
                </li>
                <li className="px-2 py-3 hover:bg-[#E9EFFF] rounded">
                  <a href="#">Requirements</a>
                </li>
                <li className="px-2 py-3 mb-3 hover:bg-[#E9EFFF] rounded">
                  <a href="#">Troubleshooting</a>
                </li>
              </ul>

              <li
                className="flex justify-between my-7 hover:text-primary text-[20px] menu-btn2 cursor-pointer"
                onClick={() => setCodeMenu((prevState) => !prevState)}
              >
                <div className="flex items-center">
                  <span>
                    <FaReact className="h-6 w-6 mr-3 text-primary stroke-primary" />
                  </span>
                  <span className="cursor-pointer">Code Sample</span>
                </div>
                <IoIosArrowDown className="h-6 w-6 mr-3 stroke-primary" />
              </li>
              <ul
                className={`${
                  codeMenu ? "flex" : "hidden"
                } flex-col pl-10 dropdown2 text-[20px] mb-2`}
              >
                <li className="px-2 py-2 hover:bg-[#E9EFFF] rounded">
                  <Link
                    className="text-xl hover:text-white duration-500"
                    to="/python_board"
                  >
                    Python
                  </Link>
                </li>
                <li className="px-2 py-2 hover:bg-[#E9EFFF] rounded">
                  <Link
                    className="text-xl hover:text-white duration-500"
                    to="/php_board"
                  >
                    PHP
                  </Link>
                </li>
                <li className="px-2 mb-2 py-2 hover:bg-[#E9EFFF] rounded">
                  <Link
                    className="text-xl hover:text-white duration-500"
                    to="/javascript_board"
                  >
                    JavaScript
                  </Link>
                </li>
              </ul>
              <li
                className="flex justify-between hover:text-primary text-[24px] menu-btn3 cursor-pointer"
                onClick={() => setOverviewMenu((prevState) => !prevState)}
              >
                <div className="flex items-center">
                  <span>
                    <BsMenuButtonWideFill className="h-[24px] text-primary w-[24px] mr-3 stroke-2 hover:stroke-3 hover:stroke-primary" />
                  </span>
                  <span className="cursor-pointer">Overview</span>
                </div>
                <IoIosArrowDown className="h-6 w-6 mr-3 stroke-primary" />
              </li>
              <ul
                className={`${
                  overviewMenu ? "flex" : "hidden"
                } flex-col pl-10 dropdown3 text-[20px]`}
              >
                <li className="px-2 py-3 hover:bg-[#E9EFFF] rounded">
                  <a href="#">Lorem</a>
                </li>
                <li className="px-2 py-3 hover:bg-[#E9EFFF] rounded">
                  <a href="#">Lorem</a>
                </li>
                <li className="px-2 py-3 mb-3 hover:bg-[#E9EFFF] rounded">
                  <a href="#">Lorem</a>
                </li>
              </ul>
            </ul>
            <ul className="text-[20px] cursor-pointer">
              {/* <li
          className="mt-0 mb-8 md:mb-0 md:mt-44 flex justify-between hover:text-primary text-[20px] menu-btn4"
        >
          <div className="mt-24 md:mt-0 flex items-center">
                <span>
                  <BiUserCircle className="h-6 w-6 mr-3 stroke-2 hover:stroke-3 hover:stroke-primary" />
            </span>
            <span>femmyte@gmail.com</span>
          <FaArrowRight  className="h-6 w-6 ml-12 stroke-primary"/>
          </div>
            </li> */}
              <li className="mt-4 md:mt-9 flex items-center ">
                <FiLogOut className="h-6 w-6 mr-3 stroke-2 hover:stroke-3 text-red-600 stroke-red-600" />
                <button
                  onClick={handleLogout}
                  className="text-xl hover:text-text_primary duration-500"
                  to="/login"
                >
                  Logout
                </button>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};

export default SideBar;
