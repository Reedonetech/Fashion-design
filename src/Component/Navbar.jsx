

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import img1 from '../Image/facebook.avif';
import img2 from '../Image/instagram.avif';
import img3 from '../Image/twitter.avif';
import img4 from '../Image/pinterest.avif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-yellow-500 text-2xl font-extrabold tracking-wide">
          Fashion House
        </div>

        {/* Toggle Button (Mobile) */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 font-semibold text-gray-700">
          <li><a href="/" className="hover:text-yellow-600">Home</a></li>
          <li><a href="#products" className="hover:text-yellow-600">Products</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
          <li><a href="#about" className="hover:text-yellow-600">About</a></li>
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex gap-4">
          <img src={img1} alt="Facebook" className="w-5 h-5" />
          <img src={img2} alt="Instagram" className="w-5 h-5" />
          <img src={img3} alt="Twitter" className="w-5 h-5" />
          <img src={img4} alt="Pinterest" className="w-5 h-5" />
        </div>

        {/* User Info */}
        <div className="hidden lg:flex items-center gap-2 text-sm text-gray-800">
          <span className="font-semibold">User</span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gray-100 px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 font-medium text-gray-800">
          <li><a href="/" className="hover:text-yellow-600">Home</a></li>
          <li><a href="#products" className="hover:text-yellow-600">Products</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
          <li><a href="#about" className="hover:text-yellow-600">About</a></li>
        </ul>
        <div className="flex gap-4 mt-4">
          <img src={img1} alt="Facebook" className="w-5 h-5" />
          <img src={img2} alt="Instagram" className="w-5 h-5" />
          <img src={img3} alt="Twitter" className="w-5 h-5" />
          <img src={img4} alt="Pinterest" className="w-5 h-5" />
        </div>
        <div className="mt-2 text-sm font-semibold text-gray-700">User</div>
      </div>
    </nav>
  );
};

export default Navbar;
