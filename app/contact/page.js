"use client"; // Necessary for using hooks in Next.js app directory

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactServices = ({ bgColor }) => {
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.5 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validatePhoneNumber = (number) => {
    const regex = /^[6-9]\d{9}$/; // Indian mobile number validation
    return regex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.phone)) {
      setErrorMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }
    setErrorMessage("");

    // Sending WhatsApp message
    const whatsappNumber = "9042621178";
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTopic: ${formData.topic}\nMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL);

    // Call Web3Form API to send email
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "5203fa70-07f3-4c97-9ede-b414c14b7e68", // Replace with your actual key
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", topic: "", message: "" }); // Reset form
      } else {
        console.error("Error sending message:", response);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className={`container mx-auto py-12 lg:py-10 px-6 md:px-6 lg:px-40 ${bgColor}`}>
      <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">Let&apos;s Talk</h2>
      <p className="text-center text-xl pt-1 pb-6">Fill out the form or write to us at: <span className="border-b-2 border-gray-800 border-dotted">contact@cybermindworks.com.</span></p>
      <motion.div
        className="bg-white p-6 rounded-xl border-2 border-gray-200 max-w-xl shadow-xl mx-auto"
        ref={ref2}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -50 }}
        transition={{ duration: 0.8 }}
      >
        
        {isSubmitted && <p className="text-green-500 mb-4 text-center">Your message has been sent!</p>}
        {errorMessage && <p className="text-blue-500 font-medium text-lg mb-4 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-5 text-[1.1em]">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              placeholder="Enter your name"
              className="w-full p-2 border border-gray-300 rounded-md"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number </label>
            <input
              placeholder="Enter a valid 10-digit phone number"
              className="w-full p-2 border border-gray-300 rounded"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Related To</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a topic</option>
              <option value="resume building">Resume Building</option>
              <option value="CodeMaster Bootcamp">CodeMaster Bootcamp</option>
              <option value="full stack">Full Stack Development</option>
              <option value="python">Python for Data Science</option>
              <option value="digital marketing">Digital Marketing Mastery</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 border border-gray-300 rounded resize-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
                   <button type="submit" className="bg-gray-950 text-white font-medium py-3 px-4 rounded-full mx-auto block">
            Send Message 
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactServices;