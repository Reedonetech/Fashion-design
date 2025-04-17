import React from 'react'
import img9 from '../Image/happy-confident-female-fashion-designers.jpg'

const Herobody4 = () => {
  return (
    <div>
        <div className='flex flex-col border-r-indigo-600 lg:pt-[2%]  lg:px-10 px-[20px] lg:gap-[30px] justify-center'>
            <div className='flex flex-col items-center justify-start p-2 px-[40px] w-[100%] h-[100%]'>
                <p className='text-[30px] font-mono font-bold'>✨Our Services</p>
                <p className='text-center lg:w-[40vw] w-[70vw] lg:text-[40px] text-[20px]'>What We Offer</p>
            </div>
            <div className='lg:flex flex-col w-[100%] h-[30%] items-center justify-center bg-white shadow-2xl p-4 lg:px-[40px] gap-[20px]'>
                <div className='lg:flex lg:flex-row flex flex-col gap-[20px] justify-center'>
                    <div className='lg:w-[38%] lg:h-[100%] bg-gray-400 flex flex-col items-start rounded-br-full justify-center p-4 gap-[10px]'>
                        {/* <img className='w-[500px] h-[200px] rounded-br-full' src={img9} alt="" /> */}
                        <p className='lg:text-[25px] text-[18px] font-mono font-bold'> Fashion Design Training</p>
                        <p className='text-[18px] lg:w-[25vw] w-[80vw] text-start'>Our hands-on Fashion Design Training program is built to equip beginners and emerging designers with the skills, tools, and confidence to create stunning, industry-ready designs. From sketching and pattern-making to fabric selection and garment construction, our expert-led sessions offer a complete foundation in the art of fashion.</p>
                        <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                    </div>
                    <div className='lg:w-[38%] lg:h-[100%] flex flex-col items-start bg-gray-400 justify-center rounded-bl-full p-4 gap-[10px]'>
                        {/* <img className='w-[500px] h-[200px] rounded-bl-full' src={img9} alt="" /> */}
                        <p className='lg:text-[25px] text-[18px] font-mono font-bold'>Custom Outfit Services</p>
                        <p className='text-[18px] lg:w-[25vw] text-start'>Our Custom Outfit Services are tailored to bring your personal style to life. Whether it's for a special event, everyday sophistication, or a bold statement piece, we work with you to create garments that fit your body and your vision perfectly.</p>
                        <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                    </div>
                    <div className='lg:w-[38%] lg:h-[100%] flex flex-col bg-gray-400 items-start rounded-tr-full justify-center p-4 gap-[10px]'>
                        {/* <img className='w-[500px] h-[200px] rounded-tr-full' src={img9} alt="" /> */}
                        <p className='lg:text-[25px] text-[18px] font-mono font-bold'> Fashion Mentorship Program</p>
                        <p className='text-[18px] lg:w-[25vw] text-start'>Take your fashion journey further with our one-on-one Mentorship Program. This service connects you with seasoned professionals who offer personalized guidance, constructive feedback, and industry insights tailored to your unique creative path.</p>
                        <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                    </div>
                </div>
                <div className='lg:flex lg:flex-row flex flex-col gap-[20px] justify-between'>
                    <div className='lg:w-[38%] lg:h-[100%] bg-gray-400 flex flex-col items-start rounded-br-full justify-center p-4 gap-[10px]'>
                        {/* <img className='w-[500px] h-[200px] rounded-tr-full' src={img9} alt="" /> */}
                        <p className='lg:text-[25px] text-[18px] font-mono font-bold'>Internship Placement Assistance</p>
                        <p className='text-[18px] lg:w-[25vw] text-start'>We believe real-world experience is the key to success. Our Internship Placement Assistance connects talented individuals with internships at established fashion houses, studios, and events, providing valuable exposure and professional growth.</p>
                        <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                    </div>
                    <div className='lg:w-[38%] lg:h-[100%] bg-gray-400 flex flex-col items-start rounded-tr-full justify-center p-4 gap-[10px]'>
                        {/* <img className='w-[500px] h-[200px] rounded-tr-full' src={img9} alt="" /> */}
                        <p className='lg:text-[25px] text-[18px] font-mono font-bold'>Fashion Events & Showcases</p>
                        <p className='text-[18px] lg:w-[25vw] text-start'>Step into the spotlight with our exclusive fashion events and showcases. From student-run runway shows to industry mixers and seasonal exhibitions, our events offer a platform to celebrate creativity, network, and shine.</p>
                        <button className='bg-yellow-300 p-[5px]'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herobody4