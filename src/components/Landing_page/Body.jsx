import React, {useEffect} from "react";
import zuri from "../../img/logo/zuri.png";
import watermark from "../../img/logo/water.png";
import Prism from "prismjs";
import "../../prism.css";
import Code from "../Code";
import auth from "../../img/icons/auth.png";
import code from "../../img/icons/code.png";
import internet from "../../img/icons/internet.png";
import second from "../../img/icons/second.png";
import start from "../../img/icons/start.png";
import time from "../../img/icons/time.png";
import { Link } from "react-router-dom";
import Highlighter from "../Dashboard/Highlighter";
import Card from './Card'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        pass`;

const coding = "(num) => num + 1";
const Body = () => {
  const { ref, inView } = useInView({threshold:0.2})

  // USE TO START AND STOP ANIMATION
  const animation = useAnimation()

  // USE THIS TO MONITOR WHEN ITEM COMES IN VIEW
  
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.3
        }
      })
    }
    if (!inView) {
      animation.start({x: '-100vw'})
    }
  },[inView])
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{x: window.innerWidth, transition: { duration: 0.3}}}>
      <section className="max-w-screen bg-[#E9EFFF] py-10  md:max-h-screen ">
        <motion.div
          className="container md:flex justify-evenly mx-auto mt-12"
        >
          <div className="col-start-1 w-full">
            <div className="md:w-[600px] flex flex-col justify-center items-center md:block mx-auto px-5 text-text_primary">
              <h1 className="text-xl md:text-[40px] font-bold text-12">
                Secure Codes for Free
              </h1>
              <p className="text-text_primary mt-5 mb-10 text-lg">
                We offer free libraries of authentication codes for developers
                to aid speed and ease thier work load in other to make great
                effort in improving “TECH” space.
              </p>
              <Link
                className="text-xl hover:text-text_primary duration-500"
                to="/signup"
              >
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
        </motion.div>
      </section>
      <section className="container mx-auto bg-white md:grid grid-cols-4 gap-6 pt-20 text-text_primary px-7 md:px-3">
        <div className="col-span-2 my-6 md:ml-20 w-3/4 mx-auto">
          <h1 className="font-m  text-2xl md:text-[40px] text-center md:textleft mb-4 font-bold">
            What we offer
          </h1>
          <p className="text-[16px] text-center md:text-justify ">
            We offer free libraries of authentication codes for developers to
            aid speed and ease thier work load in other to make great effort in
            improving “TECH” space.
          </p>
        </div>
        <div className="col-span-1" >
          {/* <div className="my-6 flex flex-col items-center justify-center md:block">
            <img src={code} alt="code icon" />
            <h3 className="text-[20px] my-3 font-semibold text-center md:text-justify">
              Making web development as easy as possible
            </h3>
            <p className="text-center md:text-justify">
              Teams with flexible support for ever-growing teams
            </p>
          </div> */}
        <Card image={code} title='Making web development as easy as possible' content='Ceams with flexible support for ever-growing teams'/>
          
          <Card image={second} title='A one-stop shop for your codes.' content='WIth our library of authentication codes.' trans={{delay: 1.2, type: 'spring', stiffness: 120}} />
        
          <Card image={internet} title='Optimum user experience' content='HR teams with flexible support for ever-growing teams' trans={{delay: 1.6, type: 'spring', stiffness: 120}} />
        </div>
        <div className="my-3 text-center md:text-justify flex flex-col items-center justify-center md:block">

            <Card image={time} title='Get codes in minutes!' content='Teams with flexible support for ever-growing teams' trans={{delay: 1.9, type: 'spring', stiffness: 120}} />
          <Card image={auth} title='Authentication Libraries.' content='Browse through our library of authentication codes.' trans={{delay: 2.3, type: 'spring', stiffness: 120}} />
        
          <Card image={start} title='Start using for free' content='Our website is free and easy to use.'
          trans={{delay: 2.6, type: 'spring', stiffness: 120}} />
        </div>
      </section>
      <section className="bg-[#E9EFFF] py-10 min-h-screen">
        <h1 className="text-center text-xl md:text-[35px] mb-10 font-semibold">
          Add authentication in minutes!
        </h1>
        <div className="w-full px-5 md:w-[1200px] mx-auto md:flex gap-8 line-numbers">
          <div className="w-full md:w-[500px] mx-auto">
            <Code code={python} language="javascript" />
          </div>
          <div className="w-full md:w-[500px] mx-auto">
            <Code code={python} language="javascript" />
          </div>
        </div>
      </section>
      <section className="h-[287px] md:flex md:items-center justify-center w-5/6 mx-auto md:flex-col">
        <h1 className="text-3xl font-bold text-center mt-10 mb-8">
          Our Partner
        </h1>
        <div className=" flex items-center justify-evenly gap-9">
          <img
            src="https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png"
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
    </motion.div>
  );
};

export default Body;
