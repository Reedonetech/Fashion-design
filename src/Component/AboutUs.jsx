import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';
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
    <div id="about" className="py-16 px-4 md:px-8 lg:px-16 text-white bg-gradient-to-b from-gray-900 to-black">
      {/* Stylish Header */}
      <div 
        id="about-header"
        ref={sectionRefs.header}
        className={`flex flex-col items-center mb-16 ${isVisible.header ? 'opacity-100' : 'opacity-0'} ${fadeIn}`}
      >
        <div className="relative mb-6">
          <h6 className="text-sm tracking-widest uppercase text-white">About Us</h6>
          <div className="h-px w-12 bg-black mx-auto"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-white  tracking-wide text-center mb-8">
          Our <span className="font-normal">Story</span>
        </h2>
        <p className="text-white text-center max-w-2xl mx-auto">
          Crafting elegance and empowering creativity since 2019
        </p>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Who We Are + Description */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          <div 
            id="about-who"
            ref={sectionRefs.who}
            className={`flex flex-col items-start gap-4 lg:w-2/5 ${isVisible.who ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} ${slideRight}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-medium text-white border-b-2 border-black pb-2 mb-4">Who We Are</h3>
            <ul className="space-y-4">
              {[
                'Over 5 years of fashion design excellence',
                '100+ successful graduates',
                'Practical-focused learning environment',
                'One-on-one mentorship and guidance'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-1 w-1 bg-black rounded-full"></div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div 
            id="about-description"
            ref={sectionRefs.description}
            className={`flex flex-col items-start gap-6 lg:w-3/5 ${isVisible.description ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${slideRight}`}
            style={{ transitionDelay: '400ms' }}
          >
            <p className="text-lg leading-relaxed text-white">
              H3 Fashion House is a modern fashion design academy committed to nurturing creativity and empowering aspiring fashion designers. Founded with a passion for style and innovation, we offer hands-on training, experienced instructors, and a supportive community for learners at all levels.
            </p>
            <p className="text-lg leading-relaxed text-white">
              Our approach combines technical skills with artistic vision, preparing students for success in the ever-evolving fashion industry. Whether you're starting your fashion journey or enhancing your existing skills, H3 Fashion House provides the guidance, resources, and inspiration you need to thrive.
            </p>
            <button className="group flex items-center gap-2 mt-4 text-white border-b border-white pb-1 transition-all hover:gap-4">
              Discover more
              <FaArrowRight className="transition-all group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Features Section (now full width) */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            {
              icon: <FaShoppingBag className={featureIconClass} />,
              title: "Personalized Design",
              description: "We believe in creating unique fashion experiences tailored to individual style preferences and body types, ensuring every piece is as special as the person wearing it."
            },
            {
              icon: <GiAmpleDress className={featureIconClass} />,
              title: "Expert Guidance",
              description: "Our team of seasoned fashion professionals provides mentorship and instruction, sharing valuable industry insights and techniques to elevate your design skills."
            },
            {
              icon: <GiTravelDress className={featureIconClass} />,
              title: "Tailored Solutions",
              description: "From concept to creation, we develop customized approaches to address unique fashion challenges, helping you express your vision with confidence."
            },
            {
              icon: <MdContactEmergency className={featureIconClass} />,
              title: "Dedicated Support",
              description: "Our commitment to your success extends beyond the classroom, with ongoing assistance and resources to help you navigate the fashion industry's demands."
            }
          ].map((feature, index) => (
            <div 
              id={`feature-${index}`}
              key={index}
              ref={sectionRefs.features[index]}
              className={`flex gap-6 ${isVisible.features[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slideUp}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">{feature.title}</h4>
                <p className="text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Journey Timeline - New Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h3 className={`text-2xl font-medium text-center mb-12 ${isVisible.header ? 'opacity-100' : 'opacity-0'} ${fadeIn}`} style={{ transitionDelay: '300ms' }}>
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {[
                {
                  year: "2019",
                  title: "The Beginning",
                  description: "H3 Fashion House was founded with a vision to blend traditional craftsmanship with modern design principles."
                },
                {
                  year: "2020",
                  title: "Growth & Expansion",
                  description: "Expanded our curriculum to include specialized courses in sustainable fashion and digital design technologies."
                },
                {
                  year: "2021",
                  title: "Community Building",
                  description: "Established partnerships with local designers and launched our first student showcase event."
                },
                {
                  year: "Present",
                  title: "Innovation & Excellence",
                  description: "Continuing to set new standards in fashion education while nurturing the next generation of creative talent."
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black"></div>
                  
                  {/* Year marker */}
                  <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className={`bg-black text-white rounded-full py-2 px-4 w-24 text-center ${isVisible.header ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} transition-all duration-700 ease-out`} style={{ transitionDelay: `${600 + index * 200}ms` }}>
                      {item.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slideUp}`} style={{ transitionDelay: `${700 + index * 200}ms` }}>
                    <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;