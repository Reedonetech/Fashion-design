import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { MdContactEmergency } from "react-icons/md";
import img7 from '../Image/img_23.png'

const Herobody2 = () => {
  return (
    <div>
        <div className='flex flex-col lg:pt-[2%]  lg:px-10 px-[20px] lg:gap-[30px] justify-center'>
            <div className='flex flex-col w-[100%] h-[30%] bg-white shadow-2xl p-4 px-[40px] gap-[20px]'>
                <div className='flex items-center justify-between px-[40px] gap-[50px]'>
                    <div className='flex flex-col items-start gap-[10px]'>
                        <p className='text-[25px] font-bold font-sans'>Who we are </p>
                        <p className='text-[32px] font-semibold font-san'>Expert wardrobe styling from the industry's top stylists.</p>
                    </div>
                    <div className='flex flex-col items-start gap-[10px]'>
                        <p className='w-[45vw] font-serif text-amber-500 text-[19px]'>Ante metus himenaeos eget feugiat commodo nostra. Id felis etiam erat turpis porta eros nunc consequat primis volutpat nullam. Fermentum odio cras maximus gravida aliquet congue.</p>
                        <button className='flex items-center gap-[20px] p-[10px]'><FaArrowCircleRight /> Discover more</button>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between px-[40px] gap-[50px]'>
                    <img className='h-[800px] w-[800px]' src={img7} alt="" />
                    <div className='flex flex-col items-start gap-[10px]'>
                        <div className='flex flex-col items-start p-[20px]'>
                            <FaShoppingBag className='w-[80px] h-[80px]' />
                            <p className='text-[30px] font-bold font-serif'>Personalized Design</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className='flex flex-col items-start p-[20px]'>
                            <GiAmpleDress className='w-[80px] h-[80px]' />
                            <p className='text-[30px] font-bold font-serif'>Expert Guidance</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className='flex flex-col items-start p-[20px]'>
                            <MdContactEmergency className='w-[80px] h-[80px]' />
                            <p className='text-[30px] font-bold font-serif'>Tailored Solutions</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        <div className='flex flex-col items-start p-[20px]'>
                            <MdContactEmergency className='w-[80px] h-[80px]' />
                            <p className='text-[30px] font-bold font-serif'>Tailored Solutions</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herobody2