import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { MdContactEmergency } from "react-icons/md";
import img7 from '../Image/img_23.png'

const Course = () => {
  return (
    <div>
        <div className='flex flex-col lg:pt-[2%]  lg:px-10 px-[20px] lg:gap-[30px] justify-center'>
            <div className='flex flex-col w-[100%] h-[30%] bg-white shadow-2xl pt-[70px] px-[40px] gap-[20px]'>
                <div className='flex flex-col items-center justify-between px-[40px] gap-[10px]'>
                    <div className='flex flex-col items-start gap-[10px]'>
                        <p className='lg:text-[30px] text-[20px] w-[80vw] text-center font-bold font-sans'>Explore Our Fashion Courses</p>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <p className='lg:w-[45vw] text-center w-[80vw] font-serif text-amber-500 lg:text-[19px]'>Whether you're a beginner or looking to refine your skills, H3 Fashion House has the right course for you.</p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-between px-[40px] gap-[50px]'>
                    {/* <img className='lg:h-[800px] lg:w-[800px]' src={img7} alt="" /> */}
                    <div className='flex flex-col lg:flex items-start gap-[10px]'>
                        <div className='lg:flex lg:flex-row flex flex-col items-start justify-between px-[40px] gap-[50px]'>
                            <div className='flex flex-col items-start p-[20px] gap-[10px]'>
                                <FaShoppingBag className='lg:w-[80px] w-[30px] lg:h-[80px] h-[30px]' />
                                <p className='lg:text-[24px] w-[80vw] lg:w-[35vw] font-bold font-serif'>Beginner’s Fashion Design</p>
                                <p> Learn the basics of sewing, fabric selection, and sketching.</p>
                                <p className='lg:text-[20px] font-serif font-bold'>Duration: 3 Months</p>
                            </div>
                            <div className='flex flex-col items-start p-[20px] gap-[10px]'>
                                <GiAmpleDress className='lg:w-[80px] w-[30px] lg:h-[80px] h-[30px]' />
                                <p className='lg:text-[24px] w-[80vw] lg:w-[35vw] font-bold font-serif'>Advanced Dressmaking & Tailoring</p>
                                <p> Perfect your cutting and finishing skills with advanced techniques.</p>
                                <p className='lg:text-[20px] font-serif font-bold'>Duration: 4 Months</p>
                            </div>
                        </div>
                        <div className='lg:flex lg:flex-row flex flex-col items-start justify-between px-[40px] gap-[50px]'>
                            <div className='flex flex-col items-start p-[20px] gap-[10px]'>
                                <MdContactEmergency className='lg:w-[80px] w-[30px] lg:h-[80px] h-[30px]' />
                                <p className='lg:text-[24px] w-[80vw] lg:w-[35vw] font-bold font-serif'>Pattern Drafting & Fashion Illustration</p>
                                <p>Master the art of professional pattern making and design sketches.</p>
                                <p className='lg:text-[20px] font-serif font-bold'>Duration: 2 Months</p>
                            </div>
                            <div className='flex flex-col items-start p-[20px] gap-[10px]'>
                                <MdContactEmergency className='lg:w-[80px] w-[30px] lg:h-[80px] h-[30px]' />
                                <p className='lg:text-[24px] w-[80vw] lg:w-[35vw] font-bold font-serif'>Bridal & Event Wear Design</p>
                                <p> Learn to design and sew wedding dresses and special occasion outfits. </p>
                                <p className='lg:text-[20px] font-serif font-bold'>Duration: 5 Months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course