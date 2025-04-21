
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    WhatsApp: "",
    state: "",
    city: "",
    training: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  
  const serviceOptions = [
    "Choose training type",
    "Beginner’s Fashion Design",
    "Advanced Dressmaking & Tailoring",
    "Pattern Drafting & Fashion Illustration",
    "Bridal & Event Wear Design"
];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchApi = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("https://forms-io.onrender.com/submit-form/e42cabb3-88fd-42e8-817b-9f7c2608d152", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          whatsapp: formData.WhatsApp,
          state: formData.state,
          training: formData.training,
          city: formData.city,
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          WhatsApp: "",
          state: "",
          city: "",
          training: "",
          message: "",
        });
      } else {
        toast.success("✅ Message sent successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌Message not sent!");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <ToastContainer />
      <form onSubmit={fetchApi} className="w-full max-w-5xl px-4 py-10">
        <div className="text-center mb-10">
      
          <h2 className="text-3xl font-bold text-[black] mt-4">Enroll For Our Training</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
          <Input label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />

          <Input label="WhatsApp Number" name="WhatsApp" value={formData.WhatsApp} onChange={handleChange} /> 
          <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">SERVICE TYPE</label>
                        <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2f3093] focus:ring focus:ring-[#2f3093] focus:ring-opacity-20 transition duration-200"
                        >
                            <option value="" disabled>Select Service</option>
                            {serviceOptions.map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
       

          <Input label="State" name="state" value={formData.state} onChange={handleChange} />
          <Input label="City" name="city" value={formData.city} onChange={handleChange} />
        </div>

        <div className="mt-6">
          <label className="font-semibold block mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message"
          />
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            disabled={sending}
            className="bg-[black] text-white font-semibold py-3 px-12 rounded-lg shadow-md hover:bg-[#fffff] transition"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </div>

       
      </form>
   
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="font-semibold block mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder={`Enter ${label}`}
    />
  </div>
);

export default Page;
