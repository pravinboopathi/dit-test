"use client";

import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const worksData = [
  {
    title: "Demo Portal",
    description: "Screenshot of Demo Portal showing a calendar interface with various features.",
    img: "/images/image.png",
    tags: ["Realtime Matching", "Calendar sync", "Notifications", "Reports"],
    gradient: "bg-gradient-to-r from-purple-500 to-blue-500",
  },
  {
    title: "Freelance Platform",
    description: "Screenshot of Freelance platform showing a dark-themed interface with various features.",
    img: "/images/image.png",
    tags: ["Freelance Directory", "Custom Quotation", "Track Progress", "Rating & Reviews"],
    gradient: "bg-gradient-to-r from-orange-400 to-red-500",
  },
  {
    title: "E-Learning Hub",
    description: "Screenshot of an E-Learning platform with interactive courses and user-friendly design.",
    img: "/images/image.png",
    tags: ["Interactive Courses", "User Tracking", "Video Tutorials", "Certifications"],
    gradient: "bg-gradient-to-r from-green-400 to-teal-500",
  },
  {
    title: "E-Commerce Store",
    description: "Screenshot of an online store featuring product listings and checkout functionality.",
    img: "/images/image.png",
    tags: ["Product Catalog", "Secure Payments", "Customer Reviews", "Order Tracking"],
    gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
  },
  {
    title: "Fitness App",
    description: "Screenshot of a fitness app with workout guides and tracking features.",
    img: "/images/image.png",
    tags: ["Workout Plans", "Progress Tracking", "Personalized Coaching", "Health Tips"],
    gradient: "bg-gradient-to-r from-red-400 to-pink-500",
  },
  {
    title: "Travel Booking",
    description: "Screenshot of a travel booking platform with easy reservation features.",
    img: "/images/image.png",
    tags: ["Flight Bookings", "Hotel Reservations", "Package Deals", "24/7 Support"],
    gradient: "bg-gradient-to-r from-indigo-400 to-purple-600",
  },
];

const Works = () => {
  return (
    <div className="font-roboto bg-white py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-normal text-gray-800">Our Works</h1>
        <p className="text-gray-600 font-normal mt-2">Explore our featured projects and platforms</p>
      </div>
      <div className="flex justify-between flex-wrap gap-6 mx-auto max-w-5xl">
        {worksData.map((work, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden w-[48%] min-h-[500px] transition-transform duration-900 hover:shadow-2xl"
          >
            {/* Gradient Header with Image */}
            <div className={`${work.gradient} py-16 px-12 flex flex-col justify-between relative`}>
              {/* Extra h1 Tag at Top Left */}
              <h1 className="absolute top-2 left-1 text-white text-xl font-medium px-3 py-1 rounded">
                {work.title}
              </h1>
              <Image
                src={work.img}
                alt={work.description}
                width={500} // Specify a reasonable width
                height={300} // Specify a reasonable height
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h1 className="text-xl font-semibold text-gray-800">{work.title}</h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {work.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="border border-orange-500 text-black-500 rounded px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
