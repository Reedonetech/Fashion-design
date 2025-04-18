import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
  { name: 'About', href: '#about' },
];



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-yellow-500 text-2xl font-mono font-bold tracking-wide"
        >
          Fashion House
        </motion.div>

        {/* Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-yellow-500 transition duration-200"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hidden lg:flex gap-10 font-semibold text-gray-700"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-yellow-500 transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Social Icons Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex gap-3"
        >
       
        </motion.div>

        {/* User Info Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-600"
        >
          <span className="bg-yellow-100 px-3 py-1 rounded-full shadow-sm">User</span>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-white px-6 pb-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 font-medium text-gray-700 pt-2">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * navLinks.indexOf(link), duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className="hover:text-yellow-500 transition duration-200 block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex gap-4 mt-4">
            
            </div>
            <div className="mt-4 text-sm font-medium text-gray-600">
              <span className="bg-yellow-100 px-3 py-1 rounded-full shadow-sm">User</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
