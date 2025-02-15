'use client';

import { useState } from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-[#080808] flex flex-col md:flex-row items-center justify-center px-6 py-24 text-[#d0d0d0] max-w-[1600px] mx-auto">
      <div className="md:w-1/2 max-w-xl mr-24 p-6">
        <h1 className="text-7xl  font-extralight mb-6">Need any help? Contact us today!</h1>
        <p className="text-lg mb-6 font-extralight">
          Reach out to us today for help and support with any questions or issues you may have. 
          You will get here what you exactly need!
        </p>
        <div className="flex items-center">
          <Image 
            src="/images/tino.png" 
            alt="Portrait of Aarav Dev" 
            width={64}
            height={64}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-normal text-lg ">Tino Britty Jameskennady</p>
            <p className='font-extralight'>Founder & CEO, Divine Infotech</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 p-6 bg-[#080808] max-w-xl    border-2 border-[#212020] rounded-lg shadow-xl">
        <h2 className="text-2xl font-extralight mb-4">Fill the form below</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <FaUser className="absolute left-4 top-5 text-[#9e9d9d]" />
            <input 
              type="text" 
              name="name" 
              placeholder="Your full name" 
                 className="w-full p-4 pl-12 border border-[#212020] bg-transparent text-[#d0d0d0] rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-[#d0d0d0]"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 relative">
  <FaEnvelope className="absolute left-4 top-5 text-[#9e9d9d] " />
  <input 
    type="email" 
    name="email" 
    placeholder="Your email" 
    className="w-full p-4 pl-12 border border-[#212020] bg-transparent text-[#d0d0d0] rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-[#d0d0d0]"
    value={formData.email}
    onChange={handleChange}
    required
  />
</div>

          <div className="mb-4 relative">
            <FaComment className="absolute left-4 top-5 text-[#9e9d9d] text-md" />
            <textarea 
              name="message" 
              placeholder="Message" 
    className="w-full p-4 pl-12 border-2 border-[#212020] bg-transparent text-[#d0d0d0] rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-[#d0d0d0]"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <p className="text-[1em] mb-6 text-[#9e9d9d]">By clicking &quot;Submit&quot; you agree to the TOS & Privacy Policy.</p>
          
          <button className="px-6 py-2 w-full text-lg border-[#212020] font-normal border-2 bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text rounded-xl">
           Submit
</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
