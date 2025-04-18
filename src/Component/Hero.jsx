import React from 'react'
import img5 from '../Image/bg2.png'
// import Herobody from './Herobody'

const Hero = () => {
  return (
    <div className=' flex flex-col items-center lg:items-start  lg:h-[63vh] pt-[40px]'>
        {/* <div className='flex flex-col items-center justify-center bg-gray-200 p-4 px-[40px] gap-[40px]'> */}
            <img src={img5} className='lg:w-full w-full lg:flex' alt="" />
            {/* <p className='text-[22px] font-serif text-violet-900'>Take your Fashion carear journey Start</p> */}
        {/* </div> */}
        <div className='lg:relative lg:bottom-[350px] lg:left-[50px] lg:shadow-2xl lg:w-[38vw] lg:h-[50vh] lg:p-[30px]'>
            <div className='flex flex-col items-center justify-start p-4 px-[40px] lg:gap-[10px] gap-[10px] w-[100%] h-[100%]'>
                <h1 className='lg:text-[30px] text-[15px] lg:w-[30vw] lg:text-center font-bold'>Unleash Your Creativity at H3 Fashion House</h1>
                <p className='lg:text-[15px] text-[15px]'>Join our premium fashion design academy and learn from industry experts. Enroll today to begin your journey in style, stitching, and success.</p>
                <div className='flex gap-[20px] lg:gap-[40px] lg:pt-[20px] pt-[10px]'>
                  <button className='bg-black text-white px-[20px] py-[10px] rounded' id='herobody'>Enroll Now</button>
                  <button className='bg-black text-white px-[20px] py-[10px] rounded' id='herobody'>View Course</button>
                </div>
            </div>
        </div>
        {/* <Herobody /> */}
    </div>
  )
}

export default Hero