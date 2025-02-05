"use client";

import React, { useState } from "react";

interface CourseFormProps {
  courseName: string;
  coursePrice: string;
}

const CourseForm: React.FC<CourseFormProps> = ({ courseName, coursePrice }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate fields
    if (!name || !email || !phone) {
      setError("All fields are required.");
      return;
    }

    // Validate phone number (Indian 10-digit)
    const phoneRegex = /^[789]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setError("");
    setLoading(true);

    const formData = {
      access_key: "5203fa70-07f3-4c97-9ede-b414c14b7e68",
      name,
      email,
      phone,
      courseName,
      coursePrice,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsModalOpen(true);
        setName("");
        setEmail("");
        setPhone("");
      } else {
        const result = await response.json();
        setError(result.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="enroll" className="relative bg-white lg:mt-10 text-black border-2 border-gray-200 p-6 w-full rounded-2xl">
      <h1 className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 border-2 border-gray-200 text-gray-800 font-medium bg-white text-center p-2 rounded-md">
        Premium Course
      </h1>
      <h3 className="text-2xl font-semibold mb-6 text-center pt-6">Get this Course @ {coursePrice}</h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Course Name</label>
          <input
            type="text"
            value={courseName}
            className="w-full px-4 py-2 border rounded-md bg-gray-200 cursor-not-allowed"
            disabled
          />
        </div>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Email ID</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full bg-gray-800 text-white font-normal text-md py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Enroll Now"}
        </button>
      </form>

      <div className="text-center rounded-md mt-2 w-full flex items-center justify-center">
        <p className="text-base text-center p-2 font-medium text-gray-900">
          <i>💙 12300+ enrolled in this course</i>
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg text-center">
            <h2 className="text-lg font-semibold">Thanks for submitting!</h2>
            <p>Our team will contact you soon!</p>
            <p>For more details, reach us at:</p>
            <p>
              WhatsApp:{" "}
              <a href="https://wa.me/919042621178" className="text-blue-500">
                919042621178
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:divineinfotech.edu@gmail.com" className="text-blue-500">
                divineinfotech.edu@gmail.com
              </a>
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-gray-900 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseForm;