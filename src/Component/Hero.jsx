import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Image/pic1.jpg';
import img2 from '../Image/pic2.jpg';
import img3 from '../Image/pic3.jpg';
import img4 from '../Image/pic4.jpg';
import img5 from '../Image/pic5.jpg';

const Hero = () => {
  const backgroundImages = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleEnrollClick = () => {
    navigate('/enroll'); // <-- route to enroll page
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center transition-all duration-1000'
        style={{
          backgroundImage: `url(${backgroundImages[currentIndex]})`,
        }}
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-60'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-5 justify-center items-center text-center w-full h-full px-4'>
        <h1 className='text-[25px] lg:text-[35px] font-bold text-white drop-shadow-lg'>
          Become A Pro Fashion Designer in few Months
        </h1>
        <p className='lg:text-[18px] text-[15px] font-bold text-white drop-shadow w-[80vw] lg:w-[50vw]'>
          Join our premium fashion design academy and learn from industry experts.
          Enroll today to begin your journey in style, stitching, and success.
        </p>
        <div className='flex gap-[20px] lg:gap-[40px] pt-[10px] lg:pt-[20px]'>
          <button className='bg-black text-white px-[35px] py-[10px] rounded hover:bg-inherit border-black border-solid border-[3px] hover:text-black' onClick={handleEnrollClick}>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
