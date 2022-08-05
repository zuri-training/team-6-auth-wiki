import React, {useState} from 'react';
import logo from '../../img/logo/logo2.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/auth';
import { GrMenu, } from 'react-icons/gr';

const Nav = () => {
  const auth = useAuth()
  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
        // let list = document.querySelector("ul");
        // e.name == "menu"
        //   ? ((e.name = "close"),
        //     list.classList.add("top-[80px]"),
        //     list.classList.add("opacity-100"))
        //   : ((e.name = "menu"),
        //     list.classList.remove("top-[80px]"),
        //     list.classList.remove("opacity-100"));
      }
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
        <GrMenu onClick={handleMenu} />
    </span>
  </div>
        {/* <div className={`${menu ? 'top-[80px] opacity-100 bg-gray-200' : 'hidden'} nav-menu md:flex md:justify-between`} > */}
        <ul className={`${menu ? 'top-[80px] opacity-100 pb-6' : 'hidden'} md:justify-between md:flex md:items-center md:static absolute md:bg-transparent bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:mr-20`}>
      <li className="md:mx-6 my-3 md:my-0">
        <a href="#" className="text-xl hover:text-text_primary duration-500">Doc</a>
      </li>
      <li className="md:mx-6 my-3 md:my-0">
              <Link className="text-xl hover:text-text_primary duration-500" to="dashboard">Wiki</Link>
    
      </li>
      <li className="md:mx-6 my-3 md:my-0">
        <a href="#" className="text-xl hover:text-text_primary duration-500"
          >About Us</a
        >
      </li>
    {/* <li className="block md:flex md:items-center md:static absolute md:ml-4 "> */}
      {/* <span
        className="rounded border w-[348px] pl-2 h-[49px] border-[#B3B3B3] md:mx-5"
      >
      
        <input
          type="search"
          placeholder="search"
          className="rounded m-0 bg-transparent h-[48px] focus:outline-none border-none w-[311px]"
          />
        </span> */}
        
            <span className="block md:inline md:mx-4 my-6 md:my-0 md:">
              {
                !auth.user && (
                  <Link className="text-xl hover:text-text_primary duration-500" to="/login">Login</Link>
                  )
                }
              
            </span>
              <Link className="text-xl hover:text-text_primary duration-500" to="/signup">
            
      <button
        className="bg-primary hover:bg-text_primary text-white duration-500 px-6 py-2 md:mx-4 rounded"
        >
        Signup
              </button>
          </Link>
            {/* </li> */}
        </ul>
    {/* </div> */}
  {/* </div> */}
</nav>

      
            
      
      </>

  )
}

export default Nav