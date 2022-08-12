import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../App";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import img from "../../img/logo/login-img.png";
import { AuthProvider, useAuth } from "./auth";
// import axios from "../api/axios";
import { FaInfoCircle } from "react-icons/fa";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NUMBER_REGEX =
  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGISTER_URL = "/register";
const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // setValidName(USER_REGEX.test(user));
    setValidName(user);
  }, [user]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    // setValidMatch(pwd === matchPwd);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd]);
  const redirectPath = location.state?.path || "/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    // const v1 = USER_REGEX.test(user);
    // const v2 = EMAIL_REGEX.test(email);
    // const v3 = PWD_REGEX.test(pwd);
    // if (!v1 || !v2 || !v3) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    console.log("clicked");
    let demo = async () => {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // myHeaders.append(
      //     "Authorization",
      //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjAxNjMzNzgsIm5iZiI6MTY2MDE2MzM3OCwidWlkIjozLCJlbWFpbCI6ImJ1YmJhQGV4YW1wbGUuY29tIn0.mvIGRddVcIlBMzPgCqBM3dwZY1hclUlwLer5sukbhwM"
      // );

      let response = await fetch("https://team6authwikiapi.zurifordummies.com/register", {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify({
          email: email,
          username: user,
          password: pwd,
        }),
      });
      let data = await response.json();
      // console.log(data);
      if (data.error === false) {
        navigate(redirectPath, { replace: true });
      } else {
        setErrMsg(data.error);
      }
    };
    demo();
  };
  const GoogleredirectPath = location.state?.path || "/dashboard";

  // google auth
  const responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.profileObj);
    const user = response.profileObj;
    auth.login(user);
    // console.log(user);
    auth.setIsGoogle(true);
    if (user) {
      navigate(GoogleredirectPath, { replace: true });
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  // ============= github login ================
  // const { state, dispatch } = useContext(AuthProvider);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = auth.state;

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1],
      };

      const proxy_url = auth.state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          auth.dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true },
          });
        })
        .catch((error) => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed",
          });
        });
    }
  }, [auth.state, auth.dispatch, data]);

  if (auth.state.isLoggedIn) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    <>
      {errMsg && (
        <p className="bg-red-600 text-white text-center p-5 text-2xl uppercase font-bold">
          {errMsg}
        </p>
      )}
      {data.errorMessage && (
        <p className="bg-red-600 text-white text-center p-5 text-2xl uppercase font-bold">
          {data.errorMessage}
        </p>
      )}

      <div className="block md:flex ">
        <div
          className="w-screen md:w-[600px] md:basis-1/3 h-[428px] md:h-screen"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="mx-auto md:basis-2/3 bg-white h-screen flex items-center">
          <div className="w-5/6 md:w-[600px] mx-auto">
            <p className="text-2xl md:text-[40px] text-center">
              <span className="text-primary">Create</span> your free account
            </p>
            <form onSubmit={handleSubmit}>
              <div className="w-full my-5">
                <input
                  type="text"
                  placeholder="Fullname"
                  name="user"
                  value={user}
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className={`${
                    validName ? "border-green-500" : "border-red-500"
                  } w-full p-3 rounded border-2 my-2`}
                />
              </div>
              <div className="w-full my-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className={`${
                    validEmail ? "border-green-500" : "border-red-500"
                  } w-full p-3 rounded border-2 my-2`}
                />
              </div>
              <div className="mb-1">
                <input
                  type="password"
                  name="pwd"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="Password"
                  className={`${
                    validPwd ? "border-green-500" : "border-red-500"
                  } w-full p-3 rounded border-2 my-2`}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd
                      ? "instructions text-red-600"
                      : "hidden"
                  }
                >
                  <FaInfoCircle />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
              </div>
              {/* <div className="mb-1">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPass"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className={`${
                    validMatch && matchPwd
                      ? "border-green-500"
                      : "border-red-500"
                  } w-full p-3 rounded border-2 my-2`}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch
                      ? "instructions text-red-500"
                      : "hidden"
                  }
                >
                  <FaInfoCircle />
                  Must match the first password input field.
                </p>
              </div> */}
              <button
                type="submit"
                className="text-white font-bold bg-primary w-full p-3 border-none rounded mt-5 hover:bg-text_primary"
              >
                Signup
              </button>
            </form>
            <div className="mt-7 w-5/6 md:w-[550px] mx-auto flex items-center">
              <div className="w-[224px] border-t-4 border-[#B0ADAD]"></div>
              <p className="mx-6"> OR </p>
              <div className="w-[224px] border-t-4 border-[#B0ADAD]"></div>
            </div>
            <div className="">
              <div className="github py-5">
                {/* <span>{data.errorMessage}</span> */}
                {data.isLoading ? (
                  <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <>
                    {
                      // Link to request GitHub access
                    }
                    <a
                      className="login-link flex items-center justify-center p-3 rounded border-2 border-black-400 w-full"
                      href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                      onClick={() => {
                        setData({ ...data, errorMessage: "" });
                      }}
                    >
                      <AiOutlineGithub className="mr-3" />
                      <span className="text-primary">
                        Sign up with <span className="font-bold">GitHub</span>
                      </span>
                    </a>
                  </>
                )}
              </div>
              <div className="gmail ">
                <GoogleLogin
                  clientId="917362236368-ogbbb58fg24nn76js03ste4lsr2sph4m.apps.googleusercontent.com"
                  buttonText="Sign up with Google"
                  className="bg-white flex item-center justify-center text-primary p-3 rounded border-2 border-black-600 w-full"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                {/* <button className='bg-white flex item-center justify-center text-primary p-3 rounded border-2 border-black-400 w-full'>  <FcGoogle className='mr-3' />Login with  <span className='font-bold'>Google</span></button> */}
              </div>
            </div>
            <div className="flex justify-end">
              <p className="text-primary mt-4">
                Already have an account?{" "}
                <Link className="font-bold text-primary" to="/login">
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
