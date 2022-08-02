import React from 'react'
import zuri from '../../img/logo/zuri.png';
import watermark from '../../img/logo/water.png';
import Prism from "prismjs";
import '../../prism.css'
import Code from '../Code';

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
      <section className="bg-[#E9EFFF] pt-10 h-screen">
  <div className="container md:flex justify-evenly mx-auto mt-12">
    <div className="col-start-1 w-full">
      <div className="md:w-[600px] mx-auto text-text_primary">
        <h1 className="text-[40px] font-bold text-12">Secure Codes for Free</h1>
        <p className="text-text_primary mt-5 mb-10 text-lg">
          We offer free libraries of authentication codes for developers to aid
          speed and ease thier work load in other to make great effort in
          improving “TECH” space.
        </p>
        <button className="w-[192px] bg-primary h-[64px] text-white rounded">
          Get Started
        </button>
      </div>
    </div>
    <div className="mt-32 mr-28">
      <img
        src={watermark}
        className="w-[420.9px] h-[200px]"
        alt=""
      />
    </div>
  </div>
</section>
<section
  className="container mx-auto bg-white md:grid grid-cols-4 gap-6 pt-20 text-text_primary"
>
  <div className="col-span-2 my-6 ml-20 w-3/4">
    <h1 className="font-m text-[40px] mb-4 font-bold">What we offer</h1>
    <p className="text-[16px]">
      We offer free libraries of authentication codes for developers to aid
      speed and ease thier work load in other to make great effort in improving
      “TECH” space.
    </p>
  </div>
  <div className="col-span-1">
    <div className="my-5">
      <svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.875 11.375C18.0292 11.375 4.375 25.0333 4.375 41.8766C4.375 58.7208 18.0292 72.375 34.875 72.375C51.7208 72.375 65.375 58.7208 65.375 41.8766C65.375 25.0333 51.7208 11.375 34.875 11.375ZM12.8312 45.9165H17.5095C18.2923 51.8103 20.7883 57.3446 24.688 61.8326C18.5872 58.7061 14.1025 52.868 12.8312 45.9165ZM17.5095 37.8327H12.8312C14.1033 30.882 18.588 25.0439 24.6888 21.9174C20.7891 26.4052 18.2927 31.9391 17.5095 37.8327ZM30.8327 56.563C28.1965 53.5397 26.4229 49.8624 25.6982 45.9173H30.8327V56.563ZM30.8327 37.8327H25.6982C26.4233 33.8879 28.1969 30.211 30.8327 27.1878V37.8327ZM56.918 37.8327H52.2405C51.4577 31.9396 48.9619 26.4059 45.0628 21.9182C51.162 25.0455 55.6467 30.8836 56.918 37.8327ZM38.9173 56.5614V45.9165H44.0518C43.3262 49.8611 41.5527 53.5379 38.9173 56.5614ZM38.9173 37.8327V27.187C41.5535 30.2103 43.3271 33.8876 44.0518 37.8327H38.9173ZM45.0604 61.8334C48.9607 57.3453 51.4573 51.8107 52.2405 45.9165H56.9188C55.6475 52.8688 51.162 58.7069 45.0604 61.8334Z"
          fill="#1F5AF3"
        />
      </svg>
      <h3 className="text-[20px] my-3 font-semibold">
        Making web development as easy as possible
      </h3>
      <p>Teams with flexible support for ever-growing teams</p>
    </div>
    <div className="my-5">
      <svg
        width="61"
        height="61"
        viewBox="0 0 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M59.093 30.5L44.7961 5.71875H28.562L23.3389 14.7734H39.567L48.6396 30.5L39.567 46.2266H23.3389L28.562 55.2812H44.7961L59.093 30.5Z"
          fill="#1F5AF3"
        />
        <path
          d="M21.4334 46.2266L12.3596 30.5L21.4334 14.7734L26.6565 5.71875H16.2031L1.90625 30.5L16.2031 55.2812H26.6565L21.4334 46.2266Z"
          fill="#1F5AF3"
        />
      </svg>
      <h3 className="text-[20px] font-semibold my-3">
        A one-stop shop for your codes.
      </h3>
      <p>WIth our library of authentication codes.</p>
    </div>
    <div className="my-5">
      <svg
        width="81"
        height="81"
        viewBox="0 0 81 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9" />
        <path
          d="M56.2087 60.375V55.2917C56.2087 52.5953 55.1375 50.0094 53.2309 48.1027C51.3243 46.1961 48.7384 45.125 46.042 45.125H25.7087C23.0123 45.125 20.4264 46.1961 18.5197 48.1027C16.6131 50.0094 15.542 52.5953 15.542 55.2917V60.375"
          stroke="#1F5AF3"
          stroke-width="1.92"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35.8747 34.9583C41.4896 34.9583 46.0413 30.4066 46.0413 24.7917C46.0413 19.1768 41.4896 14.625 35.8747 14.625C30.2598 14.625 25.708 19.1768 25.708 24.7917C25.708 30.4066 30.2598 34.9583 35.8747 34.9583Z"
          stroke="#1F5AF3"
          stroke-width="1.92"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M71.458 60.3747V55.2913C71.4563 53.0387 70.7066 50.8505 69.3265 49.0701C67.9464 47.2898 66.0141 46.0182 63.833 45.4551"
          stroke="#1F5AF3"
          stroke-width="1.92"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53.667 14.9551C55.8539 15.515 57.7922 16.7869 59.1764 18.5701C60.5606 20.3534 61.3119 22.5466 61.3119 24.804C61.3119 27.0615 60.5606 29.2547 59.1764 31.038C57.7922 32.8212 55.8539 34.0931 53.667 34.653"
          stroke="#1F5AF3"
          stroke-width="1.92"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h3 className="text-[20px] my-3 font-semibold">Optimum user experience</h3>
      <p>HR teams with flexible support for ever-growing teams</p>
    </div>
  </div>

  <div className="col-span-1 my-32">
    <div className="">
      <h3 className="text-[20px] font-semibold">Get codes in minutes!</h3>
      <p>Teams with flexible support for ever-growing teams</p>
    </div>

    <div className="mt-32">
      <h3 className="text-[20px] my-3 font-semibold">Authentication Libraries.</h3>
      <p>Browse through our library of authentication codes.</p>
    </div>
    <div className="my-24">
      <h3 className="text-[20px] my-3 font-semibold">Start using for free</h3>
      <p>Our website is free and easy to use.</p>
    </div>
  </div>
</section>
<section className="bg-[#E9EFFF] py-10 min-h-screen">
  <h1 className="text-center text-[35px] mb-10 text-6xl font-semibold">
    Add authentication in minutes!
  </h1>
  <div className="md:w-[1200px] mx-auto md:flex gap-8 line-numbers">
    <div className="w-[500px] mx-auto">
        <Code code={python} language='javascript' />
    </div>
                  <div className="w-[500px] mx-auto">
                      <Code code={python} language='javascript' />
    </div>
  </div>
</section>
<section className="h-[287px] md:flex md:items-center justify-center md:flex-col">
  <h1 className="text-3xl font-bold text-center mt-10 mb-8">Our Partner</h1>
  <div className="mx-auto flex items-center gap-9">
      <img
        src='https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png'
        className="w-[181.82px] h-[44px]"
        alt=""
      />
      <img
        src={zuri}
        className=""
        alt=""
      />
    </div>

      </section>
</>
  )
}

export default Body