import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Phone, Mail, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animations when component mounts
    setIsVisible(true);
    
    // Optional: Add intersection observer for when footer comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);
    
    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);
  
  const fadeIn = "transition-all duration-1000 ease-out";
  const slideUp = "transform transition-all duration-1000 ease-out";
  
  return (
    <footer className="font-sans">
      {/* Top bar with logo and social links */}
      <div className={`bg-black text-white flex flex-col lg:flex-row items-center justify-between p-6 ${isVisible ? 'opacity-100' : 'opacity-0'} ${fadeIn}`}>
        <p className="text-xl font-light tracking-widest">H3 FASHION HOUSE</p>
        <div className="flex gap-6 mt-4 lg:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-gradient-to-b from-black  to-black text-white p-8">
        {/* Brand name with elegant animation */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slideUp}`} style={{ transitionDelay: '300ms' }}>
          <h2 className="lg:text-5xl text-3xl font-light tracking-widest text-center border-b border-gray-700 pb-4 px-8">
            H3 FASHION HOUSE
          </h2>
        </div>

        {/* Contact information with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Workshop */}
          <div className={`flex flex-col items-start p-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slideUp}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center mb-4 text-gray-300">
              <MapPin size={20} className="mr-2" />
              <p className="text-lg text-white font-medium">LOCATION</p>
            </div>
            <p className="text-white leading-relaxed">H3 Fashion House Studio, Ilorin, Kwara State, Nigeria.</p>
          </div>

          {/* Email */}
          <div className={`flex flex-col items-start p-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slideUp}`} style={{ transitionDelay: '500ms' }}>
            <div className="flex items-center mb-4 text-white">
              <Mail size={20} className="mr-2" />
              <p className="text-lg text-white font-medium">EMAIL</p>
            </div>
            <p className="text-white mb-2">info@h3fashionhouse.com</p>
            <a href="mailto:info@h3fashionhouse.com" className="text-white border-b border-gray-600 hover:border-white transition-colors duration-300 pb-1">Send Email</a>
          </div>

          {/* Customer Support */}
          <div className={`flex flex-col items-start p-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slideUp}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex items-center mb-4 text-gray-300">
              <Phone size={20} className="mr-2" />
              <p className="text-lg text-white font-medium">CONTACT</p>
            </div>
            <p className="text-white mb-2">+234  </p>
            <a href="tel:+234xxxxxxxxxx" className="text-white border-b border-gray-600 hover:border-white transition-colors duration-300 pb-1">Let's Talk</a>
          </div>

          {/* Opening Hours */}
          <div className={`flex flex-col items-start p-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slideUp}`} style={{ transitionDelay: '700ms' }}>
            <div className="flex items-center mb-4 text-gray-300">
              <Clock size={20} className="mr-2" />
              <p className="text-lg text-white font-medium">HOURS</p>
            </div>
            <p className="text-white">Monday - Friday</p>
            <p className="text-white">09:00 - 17:00</p>
          </div>
        </div>

        {/* Copyright and links */}
        <div className={`flex flex-col items-center text-center pt-8 border-t border-gray-800 ${isVisible ? 'opacity-100' : 'opacity-0'} ${fadeIn}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-sm text-white mb-2">© {new Date().getFullYear()} H3 Fashion House. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Shipping</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;