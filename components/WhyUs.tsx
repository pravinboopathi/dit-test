"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: "Rapid Application Development",
      description:
        "We deliver meaningful products quickly. The solutions we build respond to real-world market demands.",
    },
    {
      title: "Partnering with the best",
      description:
        "We only use world-class products like AWS, Azure, and avoid cheap stuff.",
    },
    {
      title: "100% money back guarantee",
      description:
        "We won't charge you a penny if you are not satisfied with the output - never happened.",
    },
    {
      title: "Strictly defined SLAs",
      description:
        "The products that we create follow strict SLAs and have never breached SLA so far.",
    },
    {
      title: "Latest technologies",
      description:
        "We use latest technologies like Flutter, React, Next.js, and TypeScript.",
    },
    {
      title: "Fully Modern UI, UX",
      description:
        "Our design is fully modern and in line with current trends.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-8 py-12">
        <h2 className="text-5xl font-normal text-center mb-16 font-jua">Why Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-center pl-8 sm:pl-16 md:pl-28">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* FontAwesomeIcon used here */}
              <FontAwesomeIcon
                icon={faCheck}
                className="text-pink-500 mt-5 text-[1.6em]"
              />
              <div>
                <h3 className="text-[1.4em] font-semibold py-3">{reason.title}</h3>
                <p className="text-gray-500 font-medium text-[1.1em] max-w-[500px]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
