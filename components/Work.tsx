"use client";

import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const worksData = [
  {
    title: "Demo Portal",
    description: "Screenshot of Demo Portal showing a calendar interface with various features.",
    img: "/images/site.png",
    tags: ["Realtime Matching", "Calendar sync", "Notifications", "Reports"],
  },
  {
    title: "Freelance Platform",
    description: "Screenshot of Freelance platform showing a dark-themed interface with various features.",
    img: "/images/site.png",
    tags: ["Freelance Directory", "Custom Quotation", "Track Progress", "Rating & Reviews"],
  },
  {
    title: "E-Learning Hub",
    description: "Screenshot of an E-Learning platform with interactive courses and user-friendly design.",
    img: "/images/site.png",
    tags: ["Interactive Courses", "User Tracking", "Video Tutorials", "Certifications"],
  },
  {
    title: "E-Commerce Store",
    description: "Screenshot of an online store featuring product listings and checkout functionality.",
    img: "/images/site.png",
    tags: ["Product Catalog", "Secure Payments", "Customer Reviews", "Order Tracking"],
  },
  {
    title: "Fitness App",
    description: "Screenshot of a fitness app with workout guides and tracking features.",
    img: "/images/site.png",
    tags: ["Workout Plans", "Progress Tracking", "Personalized Coaching", "Health Tips"],
  },
  {
    title: "Travel Booking",
    description: "Screenshot of a travel booking platform with easy reservation features.",
    img: "/images/site.png",
    tags: ["Flight Bookings", "Hotel Reservations", "Package Deals", "24/7 Support"],
  },
];

const Works = () => {
  return (
    <div className="bg-white py-12 relative overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-normal text-black">Our Works.</h1>
        <p className="text-gray-600 font-normal mt-2">
          Explore our featured projects and platforms
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-[1100px] px-4 relative">
        {worksData.map((work, index) => (
          <div key={index} className="bg-white border-2 border-gray-100 rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative p-6 pb-2">
              <Image
                src={work.img}
                alt={work.description}
                width={500}
                height={500}
                className="w-full h-68 object-cover border-2 rounded-lg border-black-200"
              />
            </div>

            {/* Content Section */}
            <div className="px-7 py-2 pb-4">
              <h2 className="text-2xl pb-1 font-semibold text-gray-900 mb-2">{work.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {work.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-gray-600 rounded-full px-3 py-1 text-sm border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{work.description}</p>

              <div className="flex">
                <button className="hover:shadow-xl bg-gray-900 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  Demo
                </button>
                <button className="border-2 text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:shadow-md ml-4">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

{/* Decorative Circles */}
<div>
  {/* Top-Right Circle */}
  <div className="absolute top-[10%] right-[-180px]">
    <img src="/images/circle2.png" alt="Top Right Circle" className="w-74 h-74" />
  </div>

  {/* Bottom-Left Circle */}
  <div className="absolute bottom-[40%] left-[-180px]">
    <img src="/images/circle2.png" alt="Bottom Left Circle" className="w-74 h-74" />
  </div>

  {/* Bottom-Right Circle */}
  <div className="absolute bottom-[-10%] right-[-120px]">
    <img src="/images/circle2.png" alt="Bottom Right Circle" className="w-74 h-74" />
  </div>
</div>


    </div>
  );
};

export default Works;
