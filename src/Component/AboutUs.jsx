import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight  } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GiAmpleDress, GiTravelDress } from 'react-icons/gi';
import { MdContactEmergency } from 'react-icons/md';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    who: false,
    description: false,
    features: [false, false, false, false]
  });
  
  const sectionRefs = {
    header: useRef(null),
    who: useRef(null),
    description: useRef(null),
    features: [useRef(null), useRef(null), useRef(null), useRef(null)]
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          
          if (id === 'about-header') {
            setIsVisible(prev => ({ ...prev, header: true }));
          } else if (id === 'about-who') {
            setIsVisible(prev => ({ ...prev, who: true }));
          } else if (id === 'about-description') {
            setIsVisible(prev => ({ ...prev, description: true }));
          } else if (id.startsWith('feature-')) {
            const index = parseInt(id.split('-')[1]);
            setIsVisible(prev => {
              const newFeatures = [...prev.features];
              newFeatures[index] = true;
              return { ...prev, features: newFeatures };
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    if (sectionRefs.header.current) observer.observe(sectionRefs.header.current);
    if (sectionRefs.who.current) observer.observe(sectionRefs.who.current);
    if (sectionRefs.description.current) observer.observe(sectionRefs.description.current);
    sectionRefs.features.forEach((ref, index) => {
      if (ref.current) observer.observe(ref.current);
    });
    
    return () => {
      if (sectionRefs.header.current) observer.unobserve(sectionRefs.header.current);
      if (sectionRefs.who.current) observer.unobserve(sectionRefs.who.current);
      if (sectionRefs.description.current) observer.unobserve(sectionRefs.description.current);
      sectionRefs.features.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const fadeIn = "transition-all duration-1000 ease-out";
  const slideUp = "transform transition-all duration-700 ease-out";
  const slideRight = "transform transition-all duration-700 ease-out";

  const featureIconClass = "text-black w-12 h-12 p-2 rounded-full bg-gray-100 shadow-md";

  return (
    <div id="about" className="py-16  px-4 md:px-8 lg:px-16 text-white bg-gradient-to-b from-black to-black">
      {/* Stylish Header */}
      <div 
        id="about-header"
        ref={sectionRefs.header}
        className={`flex flex-col items-center mb-5 ${isVisible.header ? 'opacity-100' : 'opacity-0'} ${fadeIn}`}
      >
        <div className="relative mb-6">
          <h6 className="text-sm tracking-widest uppercase text-white">About Us</h6>
          <div className="h-px w-12 bg-white mx-auto"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-white  tracking-wide text-center mb-2">Who We Are ?</h2>
       
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Who We Are + Description */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center text-center gap-5 mb-20">
        
          
          <div 
            id="about-description"
            ref={sectionRefs.description}
            className={`flex flex-col text-center items-center gap-2 lg:w-3/5 ${isVisible.description ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${slideRight}`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-lg leading-relaxed text-white">
              H3 Fashion House is a modern fashion design academy committed to nurturing creativity and empowering aspiring fashion designers. Founded with a passion for style and innovation, we offer hands-on training, experienced instructors, and a supportive community for learners at all levels.
            </p>
            <p className="text-lg leading-relaxed text-white">
              Our approach combines technical skills with artistic vision, preparing students for success in the ever-evolving fashion industry. Whether you're starting your fashion journey or enhancing your existing skills, H3 Fashion House provides the guidance, resources, and inspiration you need to thrive.
            </p>

             <div className='flex flex-col gap-3 justify-center'>
             <h3 className="text-4xl md:text-5xl font-light text-white border-b-2 border-black py-4 mb-4">Why H3 Fashion House?</h3>
              <h1 className="text-[17px] flex items-center gap-3 leading-relaxed text-white" ><IoMdCheckmarkCircle size={40} className="text-white"/>Over 5 years of fashion design excellence</h1>
              <h1 className="text-[17px]  flex items-center gap-3 leading-relaxed text-white" ><IoMdCheckmarkCircle size={40} className="text-white" />100+ successful graduates</h1>
              <h1 className="text-[17px]   flex items-center gap-3 leading-relaxed text-white" ><IoMdCheckmarkCircle size={40} className="text-white" />Practical-focused learning environment</h1>
              <h1 className="text-[17px]   flex items-center gap-3 leading-relaxed text-white" ><IoMdCheckmarkCircle size={40} className="text-white" />One-on-one mentorship and guidance</h1>
             </div>
        
            <button className="group flex items-center gap-2 mt-4 text-white border-b border-white pb-1 transition-all hover:gap-4">
              Discover more
              <FaArrowRight className="transition-all group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      
        
      
     
      </div>
    </div>
  );
};

export default AboutUs;