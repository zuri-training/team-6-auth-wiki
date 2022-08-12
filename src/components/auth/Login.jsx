import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../App";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
// import img from "../../img/logo/login-img.png";
import img from "../../img/logo/login.png";
import { AuthProvider, useAuth } from "./auth";
// import qs from "qs";
// import axios from "../api/axios";
// import axios from "axios";

// const baseURL = "http://myapi.dataxis.ng/login";
const LOGIN_URL = "/login";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [token, setToken] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/dashboard";

  const handleLogin = async (e) => {
    e.preventDefault();

    let demo = async () => {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${token}`);
      let response = await fetch(
        "https://team6authwikiapi.zurifordummies.com/login",
        {
          method: "post",
          headers: myHeaders,
          body: JSON.stringify({
            email: name,
            password: password,
          }),
        }
      );
      let data = await response.json();
      console.log(data);
      if (data?.error === false) {
        const accessToken = data?.token;
        const userData = data?.user;
        auth.login({ userData, accessToken });
        auth.getStorage(accessToken);
        setPassword("");
        setName("");
        navigate(redirectPath, { replace: true });
      } else {
        setErrMessage(data.error);
      }
    };
    demo();
  };
  // google auth
  const responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.profileObj);
    const user = response.profileObj;
    auth.login(user);
    // console.log(user);
    auth.setIsGoogle(true);
    if (user) {
      navigate(redirectPath, { replace: true });
    }

    //     email: "sanyaoluadefemi@gmail.com"
    // familyName: "Adefemi"
    // givenName: "Sanyaolu"
    // googleId: "107281195968002164127"
    // imageUrl: "https://lh3.googleusercontent.com/a-/AFdZucpE1W9Vk9Nb4xFNU1f0Z3InLLTms5v3mTtwta54Mg=s96-c"
    // name: "Sanyaolu Adefemi"
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
      {errMessage && (
        <p className="bg-red-600 text-white text-center p-5 text-2xl uppercase font-bold">
          {errMessage}
        </p>
      )}
      {data.errorMessage && (
        <p className="bg-red-600 text-white text-center p-5 text-2xl uppercase font-bold">
          {data.errorMessage}
        </p>
      )}
      <div className="block md:flex ">
        <div
          // className="w-screen object-cover md:w-[600px] md:basis-1/3 h-[428px] md:h-screen"
          className="object-contain  md:basis-2/5 h-[428px] md:h-screen"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="mx-auto md:basis-3/5 bg-white h-screen flex items-center">
          <div className="w-5/6 md:w-[600px] mx-auto">
            <p className="text-2xl md:text-[40px] text-center">
              <span className="text-primary">Login</span> to Auth - Wiki
            </p>
            <form>
              <div className="w-full my-5">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  autoComplete="off"
                  value={name}
                  className={`${
                    errMessage && "border-red-500"
                  } w-full p-3 rounded border-2 my-2`}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  className={`${
                    errMessage && "border-red-500"
                  } w-full p-3 rounded border-2 my-2`}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-left">
                  Forget Password
                </a>
              </div>
              <button
                className="text-white font-bold bg-primary w-full p-3 border-none rounded mt-5"
                disabled={!name || !password ? true : false}
                onClick={handleLogin}
              >
                Login
              </button>

              <p className="mt-4">
                Don’t have an account?{" "}
                <Link className="font-bold text-primary" to="/signup">
                  Sign Up
                </Link>{" "}
              </p>
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
                    <a
                      className="login-link flex items-center justify-center p-3 rounded border-2 border-black-400 w-full"
                      href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                      onClick={() => {
                        setData({ ...data, errorMessage: "" });
                      }}
                    >
                      <AiOutlineGithub className="mr-3" />
                      <span className="text-primary">
                        Login with <span className="font-bold">GitHub</span>
                      </span>
                    </a>
                  </>
                )}
              </div>
              <div className="gmail ">
                <GoogleLogin
                  clientId="917362236368-ogbbb58fg24nn76js03ste4lsr2sph4m.apps.googleusercontent.com"
                  buttonText="Login WIth Google"
                  className="bg-white flex item-center justify-center text-primary p-3 rounded border-2 border-black-600 w-full"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                {/* <button className='bg-white flex item-center justify-center text-primary p-3 rounded border-2 border-black-400 w-full'>  <FcGoogle className='mr-3' />Login with  <span className='font-bold'>Google</span></button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
