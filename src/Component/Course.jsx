import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { GiAmpleDress } from 'react-icons/gi'
import { MdContactEmergency } from 'react-icons/md'

const Course = () => {
  return (
    <div className="flex flex-col lg:pt-[2%] lg:px-10 px-[20px] justify-center">
      <div className="w-full bg-white shadow-2xl pt-[70px] px-4 lg:px-[40px] gap-[20px] flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-[20px] lg:text-[30px] font-bold font-sans">
            Explore Our Fashion Courses
          </p>
          <p className="text-amber-500 text-[16px] lg:text-[19px] lg:w-[45vw] w-[80vw] font-serif">
            Whether you're a beginner or looking to refine your skills, H3 Fashion House has the right course for you.
          </p>
        </div>

        {/* Courses */}
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-[50px] py-10">
          {/* Course 1 */}
          <div className="flex flex-col items-start p-5 gap-3 max-w-[90vw] lg:max-w-[35vw] border rounded-md shadow hover:shadow-lg transition-all">
            <FaShoppingBag className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] text-yellow-600" />
            <p className="text-[18px] lg:text-[24px] font-bold font-serif">Beginner’s Fashion Design</p>
            <p>Learn the basics of sewing, fabric selection, and sketching.</p>
            <p className="text-[16px] lg:text-[20px] font-serif font-bold">Duration: 3 Months</p>
          </div>

          {/* Course 2 */}
          <div className="flex flex-col items-start p-5 gap-3 max-w-[90vw] lg:max-w-[35vw] border rounded-md shadow hover:shadow-lg transition-all">
            <GiAmpleDress className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] text-yellow-600" />
            <p className="text-[18px] lg:text-[24px] font-bold font-serif">Advanced Dressmaking & Tailoring</p>
            <p>Perfect your cutting and finishing skills with advanced techniques.</p>
            <p className="text-[16px] lg:text-[20px] font-serif font-bold">Duration: 4 Months</p>
          </div>

          {/* Course 3 */}
          <div className="flex flex-col items-start p-5 gap-3 max-w-[90vw] lg:max-w-[35vw] border rounded-md shadow hover:shadow-lg transition-all">
            <MdContactEmergency className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] text-yellow-600" />
            <p className="text-[18px] lg:text-[24px] font-bold font-serif">Pattern Drafting & Fashion Illustration</p>
            <p>Master the art of professional pattern making and design sketches.</p>
            <p className="text-[16px] lg:text-[20px] font-serif font-bold">Duration: 2 Months</p>
          </div>

          {/* Course 4 */}
          <div className="flex flex-col items-start p-5 gap-3 max-w-[90vw] lg:max-w-[35vw] border rounded-md shadow hover:shadow-lg transition-all">
            <MdContactEmergency className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] text-yellow-600" />
            <p className="text-[18px] lg:text-[24px] font-bold font-serif">Bridal & Event Wear Design</p>
            <p>Learn to design and sew wedding dresses and special occasion outfits.</p>
            <p className="text-[16px] lg:text-[20px] font-serif font-bold">Duration: 5 Months</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course
