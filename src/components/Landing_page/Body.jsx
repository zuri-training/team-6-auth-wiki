import React from 'react'
import zuri from '../../img/logo/zuri.png';
import watermark from '../../img/logo/water.png';
import Prism from "prismjs";
import '../../prism.css'
import Code from '../Code';
import auth from '../../img/icons/auth.png'
import code from '../../img/icons/code.png'
import internet from '../../img/icons/internet.png'
import second from '../../img/icons/second.png'
import start from '../../img/icons/start.png'
import time from '../../img/icons/time.png'
import { Link } from 'react-router-dom';

const python = `class AuthInterface:
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
        pass`
const Body = () => {
  return (
      <>
      <section className="max-w-screen bg-[#E9EFFF] py-10 ">
  <div className="container md:flex justify-evenly mx-auto mt-12">
    <div className="col-start-1 w-full">
      <div className="md:w-[600px] flex flex-col justify-center items-center md:block mx-auto px-5 text-text_primary">
        <h1 className="text-xl md:text-[40px] font-bold text-12">Secure Codes for Free</h1>
        <p className="text-text_primary mt-5 mb-10 text-lg">
          We offer free libraries of authentication codes for developers to aid
          speed and ease thier work load in other to make great effort in
          improving “TECH” space.
              </p>
              <Link className="text-xl hover:text-text_primary duration-500" to="/login">
            
    <button className="w-[120px] h-[44px] md:w-[192px] bg-primary md:h-[64px] text-white text-xl rounded">
          Get Started
        </button>
          </Link>
      </div>
    </div>
    <div className="di hidden md:block md:mt-32 mr-28">
      <img
        src={watermark}
        className="w-[220px] h-[100px] md:w-[420.9px] md:h-[200px]"
        alt=""
      />
    </div>
  </div>
</section>
<section
  className="container mx-auto bg-white md:grid grid-cols-4 gap-6 pt-20 text-text_primary px-7 md:px-3"
>
  <div className="col-span-2 my-6 md:ml-20 w-3/4">
    <h1 className="font-m  text-2xl md:text-[40px] text-center md:textleft mb-4 font-bold">What we offer</h1>
    <p className="text-[16px] text-center md:text-justify ">
      We offer free libraries of authentication codes for developers to aid
      speed and ease thier work load in other to make great effort in improving
      “TECH” space.
    </p>
  </div>
  <div className="col-span-1">
    <div className="my-6 flex flex-col items-center justify-center md:block">
            <img src={code} alt="code icon" />
      <h3 className="text-[20px] my-3 font-semibold text-center md:text-justify">
        Making web development as easy as possible
      </h3>
      <p className='text-center md:text-justify'>Teams with flexible support for ever-growing teams</p>
    </div>
    <div className="my-10 text-center md:text-justify flex flex-col items-center justify-center md:block">
            <img src={second} alt="code icon" />
            
      <h3 className="text-[20px] font-semibold my-3 text-center md:text-justify">
        A one-stop shop for your codes.
      </h3>
      <p>WIth our library of authentication codes.</p>
    </div>
          <div className="my-10 text-center md:text-justify flex flex-col items-center justify-center md:block">
            <img src={internet} alt="code icon" />

      <h3 className="text-[16px]text-[20px] my-3 font-semibold">Optimum user experience</h3>
      <p>HR teams with flexible support for ever-growing teams</p>
    </div>
  </div>

  {/* <div className="col-span-1 my-6 md:my-32 text-center md:text-justify"> */}
        <div className="my-6 text-center md:text-justify flex flex-col items-center justify-center md:block">
            <img src={time} alt="code icon" />
    <div className="">
      <h3 className="text-[16px] md:text-[20px] font-semibold">Get codes in minutes!</h3>
      <p>Teams with flexible support for ever-growing teams</p>
    </div>

    {/* <div className="mt-4 md:mt-32 text-center md:text-justify"> */}
                <div className="my-16 text-center md:text-justify flex flex-col items-center justify-center md:block">
            <img src={auth} alt="code icon" />
      <h3 className="text-16 md:text-[20px] my-3 font-semibold">Authentication Libraries.</h3>
      <p>Browse through our library of authentication codes.</p>
    </div>
    {/* <div className="my-4 md:my-24"> */}
                <div className="text-center my-16 md:text-justify flex flex-col items-center justify-center md:block">
            {/* <div className="w-[38px] h-[38px] rounded-t-full bg-[#C6EFFF]"> */}
              
            <img src={start} alt="code icon" />
                  {/* </div> */}
      <h3 className="text-16 md:text-[20px] my-3 font-semibold">Start using for free</h3>
      <p>Our website is free and easy to use.</p>
    </div>
  </div>
</section>
<section className="bg-[#E9EFFF] py-10 min-h-screen">
  <h1 className="text-center text-xl md:text-[35px] mb-10 font-semibold">
    Add authentication in minutes!
  </h1>
  <div className="w-full px-5 md:w-[1200px] mx-auto md:flex gap-8 line-numbers">
    <div className="w-full md:w-[500px] mx-auto">
        <Code code={python} language='javascript' />
    </div>
                  <div className="w-full md:w-[500px] mx-auto">
                      <Code code={python} language='javascript' />
    </div>
  </div>
</section>
<section className="h-[287px] md:flex md:items-center justify-center md:flex-col">
  <h1 className="text-3xl font-bold text-center mt-10 mb-8">Our Partner</h1>
  <div className="mx-auto w-4/5 md:w-96 md:mx-auto px-4 flex items-center gap-9">
      <img
        src='https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png'
        className="w-[100px] h-[28px] md:w-[181.82px] md:h-[44px]"
        alt=""
      />
      <img
        src={zuri}
        className="w-[100px] h-[80px] md:w-[181.82px] md:h-[90px]"
        alt=""
      />
    </div>

      </section>
</>
  )
}

export default Body