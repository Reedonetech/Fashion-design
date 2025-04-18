import React from 'react';
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

const Herobody4 = () => {
  return (
    <div className='flex flex-col items-center pt-10 px-5 lg:px-10 gap-8'>
      <div className='text-center'>
        <p className='text-[30px] font-mono font-bold'>✨Our Services</p>
        <p className='lg:text-[40px] text-[20px] font-semibold'>
          What We Offer
        </p>
      </div>

      <div className='flex flex-col gap-10 w-full'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className='bg-gray-100 flex flex-col items-center rounded-2xl shadow-xl p-6 gap-4'
            >
              {service.img && (
                <img
                  className='w-[100px] h-[100px] object-contain'
                  src={service.img}
                  alt={service.title}
                />
              )}
              <p className='text-[22px] font-mono font-bold text-center'>
                {service.title}
              </p>
              <p className='text-[16px] text-start max-w-[90%]'>
                {service.description}
              </p>
              <button className='bg-black px-4 py-1 rounded-md hover:bg-yellow-400 text-white transition'>
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className='bg-gray-100 flex flex-col items-center rounded-2xl shadow-xl p-6 gap-4'
            >
              {service.img && (
                <img
                  className='w-[100px] h-[100px] object-contain'
                  src={service.img}
                  alt={service.title}
                />
              )}
              <p className='text-[22px] font-mono font-bold text-center'>
                {service.title}
              </p>
              <p className='text-[16px] text-start max-w-[90%]'>
                {service.description}
              </p>
              <button className='bg-black px-4 py-1 rounded-md hover:bg-yellow-400 text-white transition'>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herobody4;
