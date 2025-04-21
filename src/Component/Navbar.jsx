import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex items-center justify-around py-4">
        {/* Logo */}
        <div className="text-black-500 text-[18px] lg:text-[22px] font-extrabold tracking-wide">
          H3 FASHION HOUSE
        </div>

        {/* Toggle Button (Mobile) */}
        <div className="lg:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 font-semibold text-gray-700">
          <li><a href="#about" className="hover:text-yellow-600">About</a></li>
          <li><a href="#courses" className="hover:text-yellow-600">Courses</a></li>
          <li><a href="#services" className="hover:text-yellow-600">Services</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
        </ul>

       
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen py-10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 font-medium text-white justify-center items-center ">
          <li><a href="#about" className="hover:text-yellow-600">About</a></li>
          <li><a href="#courses" className="hover:text-yellow-600">Courses</a></li>
          <li><a href="#services" className="hover:text-yellow-600">Service</a></li>
          <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
