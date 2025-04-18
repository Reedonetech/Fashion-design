import React from 'react';
import img1 from '../Image/facebook.avif';
import img2 from '../Image/instagram.avif';
import img3 from '../Image/twitter.avif';
import img4 from '../Image/pinterest.avif';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-[#f0f02d] text-[20px] font-mono font-bold">
          Fashion House
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex gap-8 font-medium">
          <li><a href="#" className="hover:text-yellow-600">Home</a></li>
          <li><a href="#products" className="hover:text-yellow-600">Products</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
          <li><a href="#about" className="hover:text-yellow-600">About</a></li>
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex gap-4">
          <img src={img1} alt="Facebook" className="w-5 h-5" />
          <img src={img2} alt="Instagram" className="w-5 h-5" />
          <img src={img3} alt="Twitter" className="w-5 h-5" />
          <img src={img4} alt="Pinterest" className="w-5 h-5" />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2 text-sm">
          {/* <img src="..." alt="User" className="w-5 h-5 rounded-full" /> */}
          <span className="font-semibold">User</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
