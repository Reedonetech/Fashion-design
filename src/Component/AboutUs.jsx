import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { MdContactEmergency } from "react-icons/md";
import { GiTravelDress } from "react-icons/gi";
import img7 from '../Image/img_23.png'

const AboutUs = () => {
  return (
    <div>
        <div className='flex flex-col border-r-indigo-600 lg:pt-[2%] lg:px-10 px-[20px] lg:gap-[30px] justify-center'id='about'>
            <div className='w-[100%] h-[100%] bg-white shadow-2xl p-4 lg:px-[40px] gap-[20px]'>
                <div className='flex flex-col items-center justify-start p-2 lg:px-[40px] w-[100%] h-[100%]'>
                    <p className='text-[30px] font-mono font-bold'>About us</p>
                    {/* <p className='text-center lg:w-[70vw] w-[75vw] lg:text-[35px]'>Clothing that makes you feel beautiful and confident.</p> */}
                </div>
                <div className='flex flex-col w-[100%] h-[30%] p-4 px-[48px] gap-[20px]'>
                    <div className='lg:flex lg:flex-row flex flex-col items-center justify-between px-[40px] lg:gap-[50px] gap-[20px]'>
                        <div className='flex flex-col items-start gap-[10px]'>
                            <p className='lg:text-[25px] text-start font-bold font-sans'>Who we are </p>
                            <p className='lg:text-[17px] lg:w-[35vw] w-[80vw] font-semibold font-san'>- Over 5 years of fashion design excellence</p>
                            <p className='lg:text-[17px] lg:w-[35vw] w-[80vw] font-semibold font-san'>- 100+ successful graduates.</p>
                            <p className='lg:text-[17px] lg:w-[35vw] w-[80vw] font-semibold font-san'>- Practical-focused learning environment.</p>
                            <p className='lg:text-[17px] lg:w-[35vw] w-[80vw] font-semibold font-san'>- One-on-one mentorship and guidance.</p>
                        </div>
                        <div className='flex flex-col items-start gap-[10px]'>
                            <p className='lg:w-[43vw] w-[80vw] font-serif text-amber-500 lg:text-[19px]'>H3 Fashion House is a modern fashion design academy committed to nurturing creativity and empowering aspiring fashion designers. Founded with a passion for style and innovation, we offer hands-on training, experienced instructors, and a supportive community for learners at all levels.</p>
                            <button className='flex items-center gap-[20px] p-[10px]'><FaArrowCircleRight /> Discover more</button>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center justify-between px-[40px] gap-[50px]'>
                        <img className='lg:h-[800px] lg:w-[800px]' src={img7} alt="" />
                        <div className='flex flex-col items-start gap-[10px]'>
                            <div className='flex flex-col items-start p-[20px]'>
                                <FaShoppingBag className='lg:w-[80px] w-[30px] lg:h-[80px] h-[30px]' />
                                <p className='lg:text-[30px] w-[80vw] lg:w-[30vw] font-bold font-serif'>Personalized Design</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className='flex flex-col items-start p-[20px]'>
                                <GiAmpleDress className='lg:w-[80px] w-[30px] lg:h-[80px] h-[30px]' />
                                <p className='lg:text-[30px] font-bold font-serif'>Expert Guidance</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className='flex flex-col items-start p-[20px]'>
                                <GiTravelDress className='lg:w-[80px] w-[30px] lg:h-[80px] h-[30px]' />
                                <p className='lg:text-[30px] font-bold font-serif'>Tailored Solutions</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className='flex flex-col items-start p-[20px]'>
                                <MdContactEmergency className='lg:w-[80px] w-[30px] lg:h-[80px] h-[30px]' />
                                <p className='lg:text-[30px] font-bold font-serif'>Tailored Solutions</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                                                
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutUs