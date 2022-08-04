import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineGithub, } from 'react-icons/ai';
import { FcGoogle, } from 'react-icons/fc';
// import { AuthContext } from "../../App";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script"
import img from '../../img/logo/login-img.png'
import { AuthProvider } from "./auth";
const Signup = () => {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);

  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  // github login
    const { state, dispatch } = useContext(AuthProvider);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;

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
        code: newUrl[1]
      };

      const proxy_url = state.proxy_url;

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true }
          });
        })
        .catch(error => {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed"
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
    return <Navigate to="/dashboard" replace={true} />;
  }


  return (
      <>
          <div className="flex ">
              <div className="w-[600px] basis-1/3 h-screen" style={{backgroundImage: `url(${img})`}}>
              </div>
              <div className="basis-2/3 bg-white h-screen flex items-center">
                  <div className="w-[600px] mx-auto">
                      <p className='text-[40px] text-center'><span className='text-primary'>Login</span> to Auth - Wiki</p>
                      <form>
                          <div className="w-full my-5">
                              <input type="text" placeholder='Fullname' className='w-full p-3 border-2 rounded-md border-black-400' />
                          </div>
                          <div className="w-full my-5">
                              <input type="email" placeholder='Email Address' className='w-full p-3 border-2 rounded-md border-black-400' />
                          </div>
                            <div className="mb-1">
                              <input type="password" placeholder='Password' className='w-full p-3 rounded border-2 border-black-400' />
                          </div>
                          <button className='text-white font-bold bg-primary w-full p-3 border-none rounded mt-5'>Login</button>
 </form>
                      <div className="mt-3 w-[550px] mx-auto flex items-center">
                          <div className="w-[224px] border-t-4 border-[#B0ADAD]"></div>
                            <p className='mx-6'> OR </p>
                          <div className="w-[224px] border-t-4 border-[#B0ADAD]"></div>
            </div>
            <div className="">
                      <div className="github py-3">
                          <span>{data.errorMessage}</span>
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
                           <span className='text-primary'>Signup with <span className='font-bold'>GitHub</span></span>
                </a>
                                  </>
                                   )}
                      </div>
              <div className="gmail ">
                <GoogleLogin clientId="917362236368-ogbbb58fg24nn76js03ste4lsr2sph4m.apps.googleusercontent.com"
                  buttonText="Signup WIth Google"
                  className='bg-white flex item-center justify-center text-primary p-3 rounded border-2 border-black-400 w-full'
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
                          {/* <button className='bg-white flex item-center justify-center text-primary p-3 rounded border-2 border-black-400 w-full'>  <FcGoogle className='mr-3' />Login with  <span className='font-bold'>Google</span></button> */}
                      </div>
              <div className="flex justify-end">
                <p className='text-primary mt-4'>Already have an account? <Link className="font-bold text-primary" to="/login">Login</Link> </p>

                      </div>
            </div>
            </div>
              </div>
        </div>
      </>
  )
}

export default Signup