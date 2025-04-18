import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import img9 from '../Image/schedule_4647162.png';
import img1 from '../Image/help-desk_6788536.png';
import img2 from '../Image/jacket_1001088.png';
import img3 from '../Image/support_11208549.png';
import img4 from '../Image/last.png';

const services = [
  {
    img: img9,
    title: 'Fashion Design Training',
    description:
      'Our hands-on Fashion Design Training program is built to equip beginners and emerging designers with the skills, tools, and confidence to create stunning, industry-ready designs. From sketching and pattern-making to fabric selection and garment construction, our expert-led sessions offer a complete foundation in the art of fashion.',
  },
  {
    img: img1,
    title: 'Custom Outfit Services',
    description:
      'Our Custom Outfit Services are tailored to bring your personal style to life. Whether it\'s for a special event, everyday sophistication, or a bold statement piece, we work with you to create garments that fit your body and your vision perfectly.',
  },
  {
    img: img2,
    title: 'Fashion Mentorship Program',
    description:
      'Take your fashion journey further with our one-on-one Mentorship Program. This service connects you with seasoned professionals who offer personalized guidance, constructive feedback, and industry insights tailored to your unique creative path.',
  },
  {
    img: img3,
    title: 'Internship Placement Assistance',
    description:
      'We believe real-world experience is the key to success. Our Internship Placement Assistance connects talented individuals with internships at established fashion houses, studios, and events, providing valuable exposure and professional growth.',
  },
  {
    img: img4,
    title: 'Fashion Events & Showcases',
    description:
      'Step into the spotlight with our exclusive fashion events and showcases. From student-run runway shows to industry mixers and seasonal exhibitions, our events offer a platform to celebrate creativity, network, and shine.',
  },
];

const Services = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Get the index from the data attribute
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    // Observe all service cards
    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      document.querySelectorAll('.service-card').forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  const fadeUpClass = "transition-all duration-700 ease-out";
  
  return (
    <div className="bg-white py-20 px-6 md:px-10 lg:px-20">
      {/* Header Section with Elegant Animation */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className={`overflow-hidden mb-2 ${fadeUpClass}`}>
          <p className="text-lg tracking-widest uppercase text-gray-500 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-px after:bg-black after:mt-4">Our Services</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-light tracking-wide mt-4 mb-10">
          What We Offer
        </h2>
        <div className="w-full max-w-2xl">
          <p className="text-gray-600 text-lg">
            Discover our range of services tailored to elevate your fashion journey, from training to custom creations and professional development.
          </p>
        </div>
      </div>
      
      {/* First Row of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            data-index={index}
            className={`service-card group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl ${
              visibleItems.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            } ${fadeUpClass}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative p-6 pb-20">
              <div className="flex items-center justify-center h-32 mb-4">
                {service.img && (
                  <img
                    className="h-28 w-28 object-contain transition-transform duration-500 group-hover:scale-110"
                    src={service.img}
                    alt={service.title}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Button positioned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <button className="flex items-center justify-center w-full py-3 bg-black text-white group-hover:bg-gray-900 transition-all duration-300 overflow-hidden relative">
                  <span className="relative z-10 flex items-center">
                    Learn More 
                    <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-full bg-yellow-400 transition-all duration-300 group-hover:w-full z-0"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Second Row of Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.slice(3).map((service, index) => (
          <div
            key={index + 3}
            data-index={index + 3}
            className={`service-card group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl ${
              visibleItems.includes(index + 3) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            } ${fadeUpClass}`}
            style={{ transitionDelay: `${(index + 3) * 150}ms` }}
          >
            <div className="relative p-6 pb-20">
              <div className="flex items-center justify-center h-32 mb-4">
                {service.img && (
                  <img
                    className="h-28 w-28 object-contain transition-transform duration-500 group-hover:scale-110"
                    src={service.img}
                    alt={service.title}
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              {/* Button positioned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <button className="flex items-center justify-center w-full py-3 bg-black text-white group-hover:bg-gray-900 transition-all duration-300 overflow-hidden relative">
                  <span className="relative z-10 flex items-center">
                    Learn More 
                    <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-full bg-yellow-400 transition-all duration-300 group-hover:w-full z-0"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;