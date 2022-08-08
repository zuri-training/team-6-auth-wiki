import React from 'react'

const Footer = () => {
  return (
      <>
          <footer className="footer w-full md:h-[425px] bg-[#505050] p-8">
  <div className="md:grid grid-cols-8 gap-4 mx-auto text-center text-white text-xl">
    <div className="col-start-2 col-span-2 my-8 md:my-5">
      <h3 className="text-3xl  md:mb-0">Docs</h3>
      <ul>
        <li className="my-3">PHP</li>
        <li className="my-3">JavaScript</li>
        <li className="my-3">Python</li>
      </ul>
    </div>
    <div className="col-span-2 my-8 md:my-5">
      <h3 className="text-3xl">Community</h3>
      <ul>
        <li className="my-3">Community Resources</li>
        <li className="my-3">codes of Conduct</li>
      </ul>
    </div>
    <div className="col-span-2 col-end-8 my-5">
      <h3 className="text-3xl">More</h3>
      <ul>
        <li className="my-3">About</li>
        <li className="my-3">Blog</li>
        <li className="my-3">Privacy</li>
      </ul>
    </div>
        </div>
        <div className="md:flex w-80 md:justify-between md:items-center md:w-[800px] mx-auto ">
  
      <div className="w-40 mx-auto mt-9 md:mt-0 md:ml-16">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    </div>
    <div className="mx-auto my-9 md:my-5">
      <input type="text" className="w-6/7 mx-auto md:w-[350px] md:mx-7 bg-transparent border-b-gray-400 border-b-2 border-t-0 border-l-0 border-r-0 focus:outline-none focus:ring focus:border-white text-2xl " placeholder='subscribe to email updates' />
    </div>
    <div className="mx-auto w-40  mt-10 md:mr-12 md:my-5 ">
      <button className='w-[152px] h-[40px] bg-primary text-white'>Submit</button>
    </div>
  </div>
</footer>
      </>
  )
}

export default Footer