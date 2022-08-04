import React from 'react';
import logo from '../../img/logo/logo2.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/auth';
const Nav = () => {
  const auth = useAuth()
  return (
      <>
      <nav
  className="py-3 md:px-8 bg-[#E9EFFF] max-h-[94px] w-full mb-1 md:flex md:items-center md:justify-between text-2xl"
>
  <div className="flex justify-between items-center">
 
    <img
      src={logo}
      className="ml-3 h-[44.16px]"
      alt="auth wiki logo"
    />
    <span className="text-3xl cursor-pointer mx-3 md:hidden block">
        <i></i>
    </span>
  </div>
  <div className="nav-menu flex md:justify-between">
    <ul className="md:flex md:items-center md:static absolute md:mr-20">
      <li className="md:mx-6 my-6 md:my-0">
        <a href="#" className="text-xl hover:text-text_primary duration-500">Doc</a>
      </li>
      <li className="md:mx-6 my-6 md:my-0">
              <Link className="text-xl hover:text-text_primary duration-500" to="dashboard">Wiki</Link>
    
      </li>
      <li className="md:mx-6 my-6 md:my-0">
        <a href="#" className="text-xl hover:text-text_primary duration-500"
          >About Us</a
        >
      </li>
    </ul>
    <div className="md:flex md:items-center md:static absolute md:ml-4">
      {/* <span
        className="rounded border w-[348px] pl-2 h-[49px] border-[#B3B3B3] md:mx-5"
      >

        <input
          type="search"
          placeholder="search"
          className="rounded m-0 bg-transparent h-[48px] focus:outline-none border-none w-[311px]"
        />
      </span> */}
            <span className="md:mx-4 my-6 md:my-0 md:">
              {
                !auth.user && (
                  <Link className="text-xl hover:text-text_primary duration-500" to="/login">Login</Link>
                )
              }
              
            </span>
              <Link className="text-xl hover:text-text_primary duration-500" to="/signup">
            
      <button
        className="bg-primary hover:bg-text_primary text-white duration-500 px-6 py-2 mx-4 rounded"
      >
        Signup
              </button>
              </Link>
    </div>
  </div>
</nav>

      
            
      
      </>

  )
}

export default Nav