"use client";

import React, { useState } from 'react';
import { FaUpload, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

interface ApplicationFormProps {
  setShowModal: (show: boolean) => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ setShowModal }) => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    position: string;
    resume: File | null;
    message: string;
  }>({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const positions = ['Software Developer', 'Graphic Designer', 'Technical Trainer'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const newErrors: Record<string, string> = {};
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
          formDataToSend.append(key, formData[key as keyof typeof formData] as Blob);
        });

        const response = await axios.post('https://divine-careers-server.onrender.com/api/careers/apply', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const total = progressEvent.total || 1; // Fallback to 1 to avoid division by zero
            const percentCompleted = Math.round((progressEvent.loaded * 100) / total);
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

  return (
    <>
      <section className="mb-20 mt-10">
        <h2 className="text-3xl text-black mb-8 text-center">Take the Leap: Apply Now</h2>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto border border-gray-200">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300`}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="position" className="block text-gray-700 font-medium mb-2">Position</label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border ${errors.position ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300`}
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
            <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">Upload Resume</label>
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
                className={`w-full px-3 py-2 border ${errors.resume ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 cursor-pointer flex items-center justify-center`}
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
                    className="bg-gray-600 h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Uploading: {uploadProgress.toFixed(0)}%</p>
              </div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why You're Perfect for This Role (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
              rows={4}
              placeholder="Tell us why you're excited about this position and what unique skills you bring to the table."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gray-900 text-white px-4 py-3 rounded-md  focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 transition duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Launch Your Career with Us'}
              {!isSubmitting && <FaPaperPlane className="ml-2" />}
            </button>
          </div>
        </form>
      </section>
   
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't Wait — Your Dream Career Starts Here!</h2>
        <p className="text-gray-600 flex items-center justify-center">
          At Divine Infotech, we don't just hire employees; we invest in dreamers, creators, and leaders.
        </p>
      </section>
    </>
  );
};

export default ApplicationForm;