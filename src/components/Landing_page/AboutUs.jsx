import {useEffect} from 'react'
import Nav from './Nav'
import nav_bg from '../../img/about-bg.png'
import easy from '../../img/easy.png'
import flexible from '../../img/flexible.png'
import secure from '../../img/secure.png'
import open from '../../img/open.png'
import ingressive from '../../img/logo/ingressive.png'
import zuri from '../../img/logo/zuri.png'
import Footer from './Footer'
import { motion, useAnimation } from 'framer-motion'
import {useInView } from "react-intersection-observer";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const AboutUs = () => {
  const { ref, inView } = useInView({threshold:0.2})
  // USE TO START AND STOP ANIMATION
  const animation = useAnimation()
  // USE THIS TO MONITOR WHEN ITEM COMES IN VIEW
  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: {
  //         type: "spring", duration: 1, bounce: 0.3
  //       }
  //     })
  //   }
  //   if (!inView) {
  //     animation.start({x: '-100vw'})
  //   }
  // },[inView])

//   const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{x: window.innerWidth, transition: { duration: 0.3}}}
    >
      <Nav />
      <main ref={ref}>
      <section className="w-screen h-[128px] md:h-[335px]" animate={animation}>
      <img src={nav_bg} alt="" className='w-full h-full' />
    </section>

    <motion.section className="bg-[#E9EFFF] w-screen h-[287px] md:h-[462px]" animate={animation}>
      <div className="flex flex-col pt:5 md:pt-14 pb-4 ml-[120px] mr-[85px]">
        <p className="pb-[9.5px] font-semibold text-[40px]">About us</p>
        <p className="md:pt-[9.5px] text-[14px] md:text-[24px]">We are a team of Designers and developers building open-source products that simplify development. we are on a mission to make development easier for everyone, and our products are used by millions of people all over the world. We strive to make our products easy to use and easy to learn, and we take pride in our commitment to customer support. Our products are used by some of the largest companies in the world, and we are constantly working to make them even better.</p>
      </div>
      </motion.section>
      <motion.section className='flex flex-col md:flex-row md:justify-around items-stretch h-[699px] md:h-[429px] justify-around py-6' animate={animation}>
        <div className="flex flex-col items-center justify-center">
          <img src={easy} alt="" className='h-[128px] w-[128px] md:h-[200px] md:w-[200px]' />
          <h3 className='mt-3 text-[24px] md:text-[40px] font-bold'>Easy</h3>
        </div>
        <div className="flex flex-col items-center md:my-0 justify-center">
          <img src={flexible} alt="flexible image" className='h-[128px] w-[128px] md:h-[200px] md:w-[200px]' />
          <h3 className='mt-3 text-[24px] md:text-[40px] font-bold'>Flexible</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={secure} alt="secure image" className='h-[128px] w-[128px] md:h-[200px] md:w-[200px]' />
          <h3 className='mt-3 text-[24px] md:text-[40px] font-bold'>Secure</h3>
        </div>
        </motion.section>
      <section className="bg-[#E9EFFF] py-9 min-h-[447px] md:h-[671px] flex flex-row justify-center items-center" >
        <div className="flex flex-col md:flex-row w-[80%] items-center justify-center md:gap-4">
          <img src={open} alt="open source image" className='w-[343px] md:w-[488px] md:h-[430] h-[204px]' />
          <div className="">
            <h3 className='text-[24px] md:text-[40px] my-3 font-bold'>Why open-source ?</h3>
            <p className='text-[15px] md:text-[24px]'>Open-source software is important for a number of reasons. First, it allows for collaboration and input from various people. This makes for better software overall, as more eyes on the code means more potential for finding and fixing bugs. Additionally, open-source software is usually free to use and distribute, making it more accessible to everyone. Finally, open-source projects tend to be more secure than closed-source software, as anyone can audit the code for security issues.
In short, open source software is important because it is better for everyone. It is more collaborative, more accessibleand more secure. and that is why we should all support open-source projects.</p>
          </div>
        </div>
      </section>
        <motion.section className="h-[287px] md:flex md:items-center justify-center w-5/6 mx-auto md:flex-col">
        <h1 className="text-3xl font-bold text-center mt-10 mb-8">
          Our Partner
        </h1>
        <div className=" flex items-center justify-evenly gap-9">
          <img
            src={ingressive}
            className="w-[100px] h-[28px] md:w-[181.82px] md:h-[44px]"
            alt=""
          />
          <img
            src={zuri}
            className="w-[100px] h-[80px] md:w-[181.82px] md:h-[90px]"
            alt=""
            />
        </div>
      </motion.section>
            </main>
      <Footer />
      </motion.div>
  )
}

export default AboutUs