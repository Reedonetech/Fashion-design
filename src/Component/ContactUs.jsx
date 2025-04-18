import React from 'react';

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div
        className="flex flex-col border-r-indigo-600 lg:pt-[2%] lg:px-10 px-[20px] lg:gap-[30px] justify-center"
        id="contact">
            
        <div className="w-[100%] h-[100%] bg-white shadow-2xl p-4 px-[40px] gap-[20px]">
          <div className="flex flex-col items-center justify-start p-2 px-[40px] w-[100%] h-[100%]">
            <p className="text-[30px] font-mono font-bold">Contact Us</p>
            <p className="text-center lg:w-[40vw] w-[80vw] lg:text-[40px] text-[20px]">
              We'd love to hear from you!
            </p>
          </div>
          <div>
            <form
              className="flex flex-col gap-[20px] lg:p-4 w-full"
              onSubmit={handleSubmit}
            >
              <input
                className="border-2 border-gray-300 p-2 rounded-md"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                className="border-2 border-gray-300 p-2 rounded-md"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                className="border-2 border-gray-300 p-2 rounded-md"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <p className="text-[15px] font-serif">
                We will get back to you within 24 hours.
              </p>
              <button className="bg-black text-white p-2 rounded-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
