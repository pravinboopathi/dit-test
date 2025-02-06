"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaRocket, FaBalanceScale, FaPaperPlane, FaExclamationTriangle, FaTimes, FaUpload, FaCheckCircle, FaLightbulb, FaChartLine, FaStar, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import { MdDeveloperMode, MdDesignServices, MdCastForEducation } from 'react-icons/md';
import axios from 'axios';


const Careers = () => {
  interface FormData {
    name: string;
    email: string;
    phone: string;
    position: string;
    resume: File | null;
    message: string;
  }
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {}

  const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleFileChange = (e: FileChangeEvent) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prevErrors => ({ ...prevErrors, resume: 'File size should be less than 5MB' }));
      } else if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setErrors(prevErrors => ({ ...prevErrors, resume: 'Only PDF, DOC, and DOCX files are allowed' }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          resume: file
        }));
        if (errors.resume) {
          setErrors(prevErrors => ({ ...prevErrors, resume: '' }));
        }
      }
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid 10-digit phone number is required";
    if (!formData.position) newErrors.position = "Please select a position";
    if (!formData.resume) newErrors.resume = "Please upload your resume";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
          formDataToSend.append(key, formData[key as keyof FormData] as any);
        });

        const response = await axios.post('https://divine-careers-server.onrender.com/api/careers/apply', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = progressEvent.total ? Math.round((progressEvent.loaded * 100) / progressEvent.total) : 0;
            setUploadProgress(percentCompleted);
          }
        });

        if (response.status === 200) {
          setShowModal(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            position: '',
            resume: null,
            message: ''
          });
          setUploadProgress(0);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const benefits = [
    { icon: <FaLightbulb className="text-4xl text-yellow-400" />, title: 'Innovative Environment', description: 'Work with a team that challenges norms and inspires innovation.' },
    { icon: <FaChartLine className="text-4xl text-green-500" />, title: 'Rapid Growth', description: 'Clear paths to growth and skill development in a fast-paced, learning-oriented culture.' },
    { icon: <FaStar className="text-4xl text-purple-500" />, title: 'Impactful Work', description: 'Be part of projects that shape industries and empower learners worldwide.' },
    { icon: <FaBalanceScale className="text-4xl text-blue-500" />, title: 'Work-Life Harmony', description: 'Enjoy flexible schedules, remote options, and a culture that values your well-being and personal growth.' },
    { icon: <FaGlobeAmericas className="text-4xl text-indigo-500" />, title: 'Global Exposure', description: 'Collaborate with diverse teams and clients from around the world.' },
    { icon: <FaHandshake className="text-4xl text-red-500" />, title: 'Inclusive Culture', description: 'Be part of a workplace that celebrates diversity and fosters belonging.' },
  ];

  const positions = ['Software Developer', 'Graphic Designer', 'Technical Trainer'];

  const problems = [
    "Feeling undervalued despite your talent and hard work?",
    "Stuck in a role where you're not learning or growing?",
    "Lacking a platform to showcase your creativity and technical skills?",
    "Seeking a more collaborative and innovative work environment?",
  ];

  const roleDetails = [
    { 
      title: "Software Development", 
      icon: <MdDeveloperMode className="text-5xl text-blue-500 mb-4" />,
      description: "Working on cutting-edge projects with the latest technologies, turning ideas into impactful solutions.",
      tasks: [
        "Build and deploy modern web and mobile applications.",
        "Work with technologies like React, Node.js, Python, and more.",
        "Solve real-world problems with scalable solutions."
      ]
    },
    { 
      title: "Graphic Designing", 
      icon: <MdDesignServices className="text-5xl text-green-500 mb-4" />,
      description: "Creating designs that truly stand out and build stunning visuals that leave lasting impressions.",
      tasks: [
        "Craft visually compelling designs for web, social media, and branding.",
        "Use tools like Adobe Suite, Figma, and Canva.",
        "Collaborate with a creative team to deliver stunning visuals."
      ]
    },
    { 
      title: "Technical Training", 
      icon: <MdCastForEducation className="text-5xl text-purple-500 mb-4" />,
      description: "Lead & engaging sessions, mentoring passionate learners, and changing lives with our expertise.",
      tasks: [
        "Teach and mentor students in web development, Python, AI, and more.",
        "Develop innovative teaching methodologies.",
        "Make learning fun, interactive, and impactful."
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
          Join Our <span className="text-indigo-600">Visionary</span> Team
        </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Are you ready to elevate your career and make a real impact in the tech world?
          </p>
        </header>

        <section className="mb-16">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 flex items-center justify-center">
        <FaExclamationTriangle className="mr-2 text-yellow-500" />
        The Challenges You Might Be Facing:
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500"
      >
        <ul className="list-none space-y-4">
          {problems.map((problem, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="text-yellow-500 mr-2">•</span>
              <span className="text-gray-700">{problem}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
        
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Why Divine Infotech?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roleDetails.map((role, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl text-center"
              >
                {role.icon}
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
      <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">What Makes Us Different?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
          >
            <div className="text-4xl text-blue-500 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Your Role, Your Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {roleDetails.map((role, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{role.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {role.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Take the Leap: Apply Now</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-blue-100">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="position" className="block text-gray-700 font-bold mb-2">Position</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${errors.position ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              >
                <option value="">Select a position</option>
                {positions.map((position, index) => (
                  <option key={index} value={position}>{position}</option>
                ))}
              </select>
              {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">Upload Resume</label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <label
                  htmlFor="resume"
                  className={`w-full px-3 py-2 border ${
                    errors.resume ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer flex items-center justify-center`}
                >
                  <FaUpload className="mr-2" />
                  {formData.resume ? formData.resume.name : 'Choose file'}
                </label>
              </div>
              {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Uploading: {uploadProgress.toFixed(0)}%</p>
                </div>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Why You're Perfect for This Role (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Tell us why you're excited about this position and what unique skills you bring to the table."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Launch Your Career with Us'}
                {!isSubmitting && <FaPaperPlane className="ml-2" />}
              </button>
            </div>
          </form>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Don't Wait — Your Dream Career Starts Here!</h2>
          <p className="text-gray-600 flex items-center justify-center">
            <FaLightbulb className="mr-2" />
            At Divine Infotech, we don't just hire employees; we invest in dreamers, creators, and leaders.
          </p>
        </section>
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Trusted By Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['Google', 'Amazon', 'Microsoft', 'Apple', 'Facebook'].map((company, index) => (
              <div key={index} className="text-gray-400 font-bold text-xl">{company}</div>
            ))}
          </div>
        </section>
      </motion.div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md w-full"
            >
              <div className="text-center">
                <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-blue-700 mb-4">Application Submitted Successfully!</h2>
                <p className="text-gray-600 mb-6">Thank you for your interest in joining our team. We're excited to review your application and will be in touch soon.</p>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center mx-auto"
                >
                  Close <FaTimes className="ml-2" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;

