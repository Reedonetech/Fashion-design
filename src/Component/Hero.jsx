import React from 'react';
import img5 from '../Image/bg2.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:h-[63vh] pt-[40px] overflow-hidden">
      {/* Hero Image */}
      <motion.img
        src={img5}
        alt=""
        className="lg:w-full w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Text Box */}
      <motion.div
        className="lg:relative lg:bottom-[350px] lg:left-[50px] lg:shadow-2xl lg:w-[38vw] lg:h-[50vh] lg:p-[30px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
      >
        <div className="flex flex-col items-center justify-start p-4 px-[40px] lg:gap-[10px] gap-[10px] w-full h-full">
          <motion.h1
            className="lg:text-[30px] text-[15px] lg:w-[30vw] lg:text-center font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Unleash Your Creativity at H3 Fashion House
          </motion.h1>

          <motion.p
            className="lg:text-[15px] text-[15px] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Join our premium fashion design academy and learn from industry experts. Enroll today to begin your journey in style, stitching, and success.
          </motion.p>

          <motion.div
            className="flex gap-[20px] lg:gap-[40px] lg:pt-[20px] pt-[10px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button className="bg-black text-white px-[20px] py-[10px] rounded hover:scale-105 transition-transform duration-200" id="herobody">
              Enroll Now
            </button>
            <button className="bg-black text-white px-[20px] py-[10px] rounded hover:scale-105 transition-transform duration-200" id="herobody">
              View Course
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
