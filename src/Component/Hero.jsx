import React from 'react'
import img5 from '../Image/imgage.jpg'
// import Herobody from './Herobody'

const Hero = () => {
  return (
    <div className=' flex flex-col items-center lg:items-start  lg:h-[63vh]'>
        {/* <div className='flex flex-col items-center justify-center bg-gray-200 p-4 px-[40px] gap-[40px]'> */}
            <img src={img5} className='lg:w-full w-full lg:flex' alt="" />
            {/* <p className='text-[22px] font-serif text-violet-900'>Take your Fashion carear journey Start</p> */}
        {/* </div> */}
        <div className='lg:relative lg:bottom-[350px] lg:left-[50px] lg:shadow-2xl lg:w-[38vw] lg:h-[38vh] lg:p-[30px]'>
            <div className='flex flex-col items-center justify-start p-4 px-[40px] lg:gap-[20px] gap-[10px] w-[100%] h-[100%]'>
                <h1 className='lg:text-[30px] text-[15px] lg:w-[35vw] font-bold'>Welcome to Our Fashion Store</h1>
                <p className='lg:text-lg text-[15px]'>Discover the latest trends and styles</p>
                <button className='bg-black text-white px-[20px] py-[10px] rounded' id='herobody'>Shop Now</button>
            </div>
        </div>
        {/* <Herobody /> */}
    </div>
  )
}

export default Hero