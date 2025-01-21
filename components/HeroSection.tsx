"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="container mx-auto text-center pt-[150px] px-4 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-normal text-[#343434] w-11/12 sm:w-10/12 mb-6 mx-auto text-center">
          Next-Generation
          <span className="text-purple-500"> AI Tools</span> for Smarter Business
        </h1>
        <p className="text-base sm:text-lg text-[#343434] mb-10 w-11/12 sm:w-9/12 mx-auto">
          Transform the way you do business with our AI-powered SaaS platform. Our cutting-edge technology leverages advanced machine learning algorithms and data analytics.
        </p>
        <div className="flex flex-wrap justify-center mb-6 gap-4">
          <button className="text-black border px-3 py-2 text-base sm:text-lg rounded-lg flex items-center">
            View Product
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m13 16 4-4-4-4M7 16l4-4-4-4"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="bg-[#343434] border text-white px-3 py-2 text-base sm:text-lg rounded-lg flex items-center">
            Contact
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-[#343434] text-sm sm:text-base mb-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-orange-500" />
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

      <div className="absolute inset-0 z-0">
        <img
          alt="Floating 3D cube with gradient colors"
          height="50"
          src="/images/ss.png"
          width="80"
          className="absolute animate-float top-10 sm:top-20 left-10 sm:left-40"
        />
        <img
          alt="Floating 3D oval with gradient colors"
          height="70"
          src="/images/sc.png"
          width="70"
          className="absolute animate-rotate top-5 sm:top-10 right-10 sm:right-40"
        />
        <img
          alt="Floating 3D sphere with gradient colors"
          height="50"
          src="/images/scc.png"
          width="50"
          className="absolute animate-float bottom-2 sm:bottom-5 left-10 sm:left-60"
        />
        <img
          alt="Floating 3D cube with gradient colors"
          height="70"
          src="/images/ss.png"
          width="70"
          className="absolute animate-float bottom-2 sm:bottom-5 right-10 sm:right-60"
        />
      </div>
    </div>
  );
};

export default HeroSection;
