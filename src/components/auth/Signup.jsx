import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../App";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import img from "../../img/logo/login-img.png";
import { AuthProvider, useAuth } from "./auth";
import { logindata } from "./logindata";
import axios from "../api/axios";
import { FaInfoCircle } from "react-icons/fa";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NUMBER_REGEX =
  /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGISTER_URL = "/register";
const Signup = () => {
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
    setValidName(USER_REGEX.test(user));
  }, [user]);
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(user, pwd);
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username: user, email, password: pwd }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          withCredentials: true,
        }
      );
      // const response = await axios.defaults.headers.post(
      //   REGISTER_URL,
      //   JSON.stringify({ username: user, email, password: pwd }),
      //   {
      //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   }
      // );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setEmail("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response Kindly check your internet connection ");
      } else if (err.response?.status === 409) {
        setErrMsg("User Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      // errRef.current.focus();
    }
  };

  return (
    <>
      {errMsg && (
        <p className="bg-red-600 text-white text-center p-5 text-2xl uppercase font-bold">
          {errMsg}
        </p>
      )}
      {/* {data.errorMessage && <p className="bg-red-600 text-white text-center p-5 text-2xl uppercase font-bold">{data.errorMessage}</p> } */}

      <div className="flex ">
        <div
          className="w-[600px] basis-1/3 h-screen"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="basis-2/3 bg-white h-screen flex items-center">
          <div className="w-[600px] mx-auto">
            <p className="text-[40px] text-center">
              <span className="text-primary">Signup</span> to Auth - Wiki
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
              <div className="mb-1">
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
              </div>
              <button
                type="submit"
                className="text-white font-bold bg-primary w-full p-3 border-none rounded mt-5 hover:bg-text_primary"
                disabled={
                  !validName || !validEmail || !validPwd || !validMatch
                    ? true
                    : false
                }
              >
                Signup
              </button>
            </form>
            <div className="mt-3 w-[550px] mx-auto flex items-center">
              <div className="w-[224px] border-t-4 border-[#B0ADAD]"></div>
              <p className="mx-6"> OR </p>
              <div className="w-[224px] border-t-4 border-[#B0ADAD]"></div>
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
