import React from 'react'
import { useState } from 'react'
import img1 from '../Image/facebook.avif'
import img2 from '../Image/instagram.avif'
import img3 from '../Image/twitter.avif'
import img4 from '../Image/pinterest.avif'

const Navbar = () => {
  return (
    <div>
        
        <div className='flex flex-row items-center bg-gray-200 p-4 px-[40px] gap-[40px]'>
            <div className='flex items-center'>
                <h1>Logo</h1>
            </div>
            <div className='flex flex-row items-center justify-between w-full gap-[30px]'>
                <div className='flex items-center gap-[10px]'>
                    <ul className='lg:flex flex-row gap-[20px] px-[60px] hidden'>
                        <li>Home</li>
                        <li>Products</li>
                        <a href="#contact"><li>Contact</li></a>
                        <a href="#about"><li>About</li></a>
                    </ul>
                    <div className='lg:flex flex-row gap-[50px] hidden'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className='flex flex-row items-center gap-[20px]'>
                    <div className='flex items-center gap-[10px]'>
                        {/* <img src="https://via.placeholder.com/20" alt="User" /> */}
                        <h1>User</h1>
                    </div>
                    <input className='w-[20vw] p-[5px]' type="text" placeholder='Search...' />
                    <button className='bg-black text-white px-[10px]'>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar