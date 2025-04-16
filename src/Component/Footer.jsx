import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-gray-800 text-white items-center p-4 flex justify-between'>
            <p className='text-lg font-bold'>Fashion Hub</p>
            <div className='flex gap-4 mt-2 '>
                <a href="#" className='text-gray-400 hover:text-white'>Facebook</a>
                <a href="" className='text-gray-400 hover:text-white'>Instagram</a>
                <a href="" className='text-gray-400 hover:text-white'>Twitter</a>
            </div>
        </div>
        <div className='bg-gray-700 text-white p-2 flex justify-center flex-col items-center'>
            <p className='lg:text-[40px] text-[30px]'>Designed by Your Name</p>
            <div className='flex flex-col justify-between lg:flex-row lg:w-[100%] w-[100%]'>
                <div className='flex flex-col items-start p-4'>
                    <p className='lg:text-[30px] text-[18px]'>Workshop</p>
                    <p>Cempaka Wangi No 22 Jakarta - Indonesia 13910</p>
                </div>
                <div className='flex flex-col items-start p-4'>
                    <p className='lg:text-[30px] text-[18px]'>Email us</p>
                    <p>hello@yourdomain.tld</p>
                    <p>Send Email</p>
                </div>
                <div className='flex flex-col items-start p-4'>
                    <p className='lg:text-[30px] text-[18px]'>Customer Support</p>
                    <p>(888) 4000 234</p>
                    <p>Let's Talk</p>
                </div>
                <div className='flex flex-col items-start p-4'>
                    <p className='lg:text-[30px] text-[18px]'>OPening Hours</p>
                    <p>Monday - Friday : 09.00-17.00</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center p-4'>
                <p className='lg:text-[20px] text-[18px]'>© {new Date().getFullYear()} Fashion Hub. All rights reserved.</p>
                <p className='lg:text-[20px] text-[18px]'>Terms of Service | Privacy Policy</p>
            </div>
        </div>
        
    </div>
  )
}

export default Footer