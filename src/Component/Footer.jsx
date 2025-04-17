import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 text-white flex flex-col lg:flex-row items-center justify-between p-4">
        <p className="text-lg font-bold">H3 Fashion House</p>
        <div className="flex gap-4 mt-2 lg:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white">WhatsApp</a>
        </div>
      </div>

      <div className="bg-gray-700 text-white p-4 flex flex-col items-center gap-6">
        <p className="lg:text-[40px] text-[30px] font-semibold text-center">H3 Fashion House</p>

        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="flex flex-col items-start p-4 lg:w-1/4">
            <p className="lg:text-[24px] text-[18px] font-bold mb-2">Workshop</p>
            <p>H3 Fashion House Studio, Ilorin, Kwara State, Nigeria.</p>
          </div>

          <div className="flex flex-col items-start p-4 lg:w-1/4">
            <p className="lg:text-[24px] text-[18px] font-bold mb-2">Email Us</p>
            <p>info@h3fashionhouse.com</p>
            <a href="mailto:info@h3fashionhouse.com" className="text-yellow-300 hover:underline">Send Email</a>
          </div>

          <div className="flex flex-col items-start p-4 lg:w-1/4">
            <p className="lg:text-[24px] text-[18px] font-bold mb-2">Customer Support</p>
            <p>+234 xxx xxx xxxx</p>
            <a href="tel:+234xxxxxxxxxx" className="text-yellow-300 hover:underline">Let's Talk</a>
          </div>

          <div className="flex flex-col items-start p-4 lg:w-1/4">
            <p className="lg:text-[24px] text-[18px] font-bold mb-2">Opening Hours</p>
            <p>Monday - Friday : 09:00 - 17:00</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 text-center">
          <p className="text-[16px] lg:text-[18px]">© {new Date().getFullYear()} H3 Fashion House. All rights reserved.</p>
          <p className="text-[16px] lg:text-[18px]">
            <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
