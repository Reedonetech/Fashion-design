import React from 'react'
import { FaArrowCircleRight, FaShoppingBag } from 'react-icons/fa'
import { GiAmpleDress, GiTravelDress } from 'react-icons/gi'
import { MdContactEmergency } from 'react-icons/md'
import img7 from '../Image/img_23.png'

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col lg:pt-[2%] px-[20px] lg:px-10 justify-center">
      <div className="w-full bg-white shadow-2xl p-4 lg:px-[40px]">
        {/* Title Section */}
        <div className="flex flex-col items-center p-2">
          <p className="text-[30px] font-mono font-bold">About us</p>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-[40px] py-4 px-[10px] lg:px-[48px]">
          {/* Top Section: Who We Are + Description */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
            <div className="flex flex-col items-start gap-2">
              <p className="lg:text-[25px] text-start font-bold font-sans">Who we are</p>
              <ul className="text-[16px] lg:text-[17px] font-sans font-semibold list-disc ml-5">
                <li>Over 5 years of fashion design excellence</li>
                <li>100+ successful graduates</li>
                <li>Practical-focused learning environment</li>
                <li>One-on-one mentorship and guidance</li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="lg:text-[19px] text-[16px] font-serif lg:w-[43vw] w-[80vw]">
                H3 Fashion House is a modern fashion design academy committed to nurturing creativity and empowering aspiring fashion designers. Founded with a passion for style and innovation, we offer hands-on training, experienced instructors, and a supportive community for learners at all levels.
              </p>
              <button className="flex items-center gap-3 text-gray-500 hover:underline">
                <FaArrowCircleRight /> Discover more
              </button>
            </div>
          </div>

          {/* Bottom Section: Image + Feature Blocks */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[50px]">
            <img src={img7} alt="Fashion" className="w-full lg:w-[45%] object-contain rounded-xl shadow-md" />
            <div className="flex flex-col gap-6 w-full lg:w-[50%]">
              {/* Feature 1 */}
              <div className="flex flex-col gap-2">
                <FaShoppingBag className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] text-gray-500" />
                <p className="text-[20px] lg:text-[26px] font-bold font-serif">Personalized Design</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col gap-2">
                <GiAmpleDress className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] text-gray-500" />
                <p className="text-[20px] lg:text-[26px] font-bold font-serif">Expert Guidance</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col gap-2">
                <GiTravelDress className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] text-gray-500" />
                <p className="text-[20px] lg:text-[26px] font-bold font-serif">Tailored Solutions</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col gap-2">
                <MdContactEmergency className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] text-gray-500" />
                <p className="text-[20px] lg:text-[26px] font-bold font-serif">Dedicated Support</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
