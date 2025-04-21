import React from 'react'
import { FaArrowRight, } from 'react-icons/fa';
// import Herobody from './Herobody'

const Hero = () => {
  return (
      
    <div className='flex items-center justify-center w-[100%] h-[100vh]'>
        <div className='w-[80%] flex flex-col gap-5 justify-center h-full items-center text-center'>
          <h1 className='w-[100%] text-[25px] lg:text-[35px] font-bold'>Become A Pro Fashion Designer in few Months </h1>
          <p className='w-[100%] lg:text-[18px] text-[15px]'>Join our premium fashion design academy and learn from industry experts. Enroll today to begin your journey in style, stitching, and success.</p>
            <div className='flex gap-[20px] lg:gap-[40px] lg:pt-[20px] pt-[10px]'>
              <button className='bg-black text-white flex items-center gap-2  px-[35px] py-[10px] rounded hover:bg-inherit border-black border-solid border-[3px] hover:text-black' id='herobody'>Enroll Now<FaArrowRight className="transition-all group-hover:translate-x-1" /></button>
            </div>
        </div>
    </div>
  )
}

export default Hero