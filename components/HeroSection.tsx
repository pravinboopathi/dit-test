"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For animations
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const HeroSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["AI Tools", "Solutions", "Automation", "Innovation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const handleGoClick = () => {
    if (selectedOption) {
      setIsLoading(true);
      setTimeout(() => {
        alert(`You selected: ${selectedOption}`);
        setIsLoading(false);
      }, 1500); // Simulates a loading process
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="container mx-auto text-center pt-[150px] px-4 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#343434] w-11/12 sm:w-10/12 mb-6 mx-auto text-center">
          Next-Generation
          <span className="text-purple-500 ml-2">
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
            >
              {words[currentWordIndex]}
            </motion.span>
          </span>{" "}
          for Smarter Business
        </h1>
        <p className="text-base sm:text-lg text-[#343434] mb-2 w-11/12 sm:w-9/12 mx-auto">
          Transform the way you do business with our AI-powered SaaS platform.
          Our cutting-edge technology leverages advanced machine learning
          algorithms and data analytics.
        </p>

        {/* Product Selector and Go Button */}
        <div className="flex flex-wrap justify-center gap-4 py-6">
          {/* Dropdown */}
          <div className="relative">
            <select
              aria-label="Product Selector"
              className="border px-3 py-2 text-base sm:text-lg rounded-lg text-gray-900 bg-white border-gray-200"
              value={selectedOption || ""}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="" disabled>
                Choose an option
              </option>
              <option value="option1">Product 1</option>
              <option value="option2">Product 2</option>
              <option value="option3">Product 3</option>
            </select>
          </div>

          {/* Go Button */}
          <button
            onClick={handleGoClick}
            disabled={isLoading}
            className={`${
              isLoading ? "bg-gray-700" : "bg-gray-950 hover:bg-gray-800"
            } text-white px-6 py-2 text-base sm:text-lg rounded-lg flex items-center transition-colors`}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Go"
            )}
          </button>
        </div>

        {/* Features List */}
        <div className="flex flex-wrap justify-center gap-4 text-[#343434] text-sm sm:text-base mb-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-orange-500 " />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-orange-500" />
            14-days free trial
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-orange-500" />
            Generate in seconds using AI
          </div>
        </div>
      </div>

      {/* Floating 3D Images */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Floating 3D cube with gradient colors"
          height={50}
          src="/images/ss.png"
          width={80}
          className="absolute animate-float top-10 sm:top-20 left-10 sm:left-40"
        />
        <Image
          alt="Floating 3D oval with gradient colors"
          height={70}
          src="/images/sc.png"
          width={70}
          className="absolute animate-rotate top-5 sm:top-10 right-10 sm:right-40"
        />
        <Image
          alt="Floating 3D sphere with gradient colors"
          height={50}
          src="/images/scc.png"
          width={50}
          className="absolute animate-float bottom-2 sm:bottom-5 left-10 sm:left-60"
        />
        <Image
          alt="Floating 3D cube with gradient colors"
          height={70}
          src="/images/ss.png"
          width={70}
          className="absolute animate-float bottom-2 sm:bottom-5 right-10 sm:right-60"
        />
      </div>
    </div>
  );
};

export default HeroSection;