import React, { useContext } from "react";
import { BiBell } from "react-icons/bi";
import Code from "../Code";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../App";

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

const Home = () => {
  // const { state, dispatch } = useContext(AuthContext);

  // if (!state.isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }

  // const { avatar_url, name, public_repos, followers, following } = state.user

  // const handleLogout = () => {
  //   dispatch({
  //     type: "LOGOUT"
  //   });
  // }

  return (
    <>
      <div className="p-8 col-span-3 bg-[#e9effe]">
        <div className="flex justify-between items-center">
          <h1 className="text-[30px] text-center md:text-left md:text-[40px] text-primary">
            Welcome back
          </h1>
          <BiBell className="h-6 w-6" />
        </div>
        {/* <div className="container">
        <button onClick={()=> handleLogout()}>Logout</button>
        <div>
          <div className="content">
            <img src={avatar_url} alt="Avatar"/>
            <span>{name}</span>
            <span>{public_repos} Repos</span>
            <span>{followers} Followers</span>
            <span>{following} Following</span>
          </div>
        </div>
      </div> */}
        <p className="text-[16px] text-justify my-7">
          Auth-wiki provides you with the library ao authentication codes which
          specializes in Python, Javascript and PHP languages. Continue to
          browse through our libraries of authentication codes to aid your work.
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
    </>
  );
};

export default Home;
