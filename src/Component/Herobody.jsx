import React from 'react'
import img6 from '../Image/fashion 2.jpg'

const Herobody = () => {
  return (
    <div>
        <div>
            <div className='lg:flex-row lg:flex flex flex-col pt-[2%]  lg:px-10 px-[20px] lg:gap-[30px] justify-center'>
                <div className='flex flex-col lg:w-[30%] lg:h-[30%]  shadow-2xl p-4 px-[40px] gap-[20px]'>
                    <div className='flex flex-col-reverse items-center justify-start p-4 px-[40px] gap-[20px] w-[100%] h-[100%]'>
                        <h1>About Our Fashion School</h1>
                        <img src={img6} alt="" />
                    </div>
                </div>
                <div className='flex flex-col lg:w-[30%] lg:h-[30%]  bg-white shadow-2xl p-4 px-[40px] gap-[20px]'>
                    <div className='flex flex-col-reverse items-center justify-start p-4 px-[40px] gap-[20px] w-[100%] h-[100%]'>
                        <h1>About Our Fashion School</h1>
                        <img src={img6} alt="" />
                    </div>
                </div>
                <div className='flex flex-col lg:w-[30%] lg:h-[30%]  bg-white shadow-2xl p-4 px-[40px] gap-[20px]'>
                    <div className='flex flex-col-reverse items-center justify-start p-4 px-[40px] gap-[20px] w-[100%] h-[100%]'>
                        <h1>About Our Fashion School</h1>
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herobody