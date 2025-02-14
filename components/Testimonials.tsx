"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Haasini",
    role: "Principal Knowledge Base Manager",
    company: "Cascade",
    avatar: "/images/girl.jpg", // Add your reviewer images
    quote: "Since adopting their solutions, we have been adding 30% more articles to our knowledge base every quarter.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tino Britty",
    role: "Developer",
    company: "Clover Technologies",
    avatar: "/images/tino.jpg",
    quote: "Their web development team delivered our project ahead of schedule with exceptional quality. The attention to detail was remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arun Kumar",
    role: "Digital Transformation Director",
    company: "InnovateNow",
    avatar: "/images/boy.avif",
    quote: "The AI integration services provided by the team have revolutionized our business processes, resulting in a 40% efficiency increase.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-b from-[#0a0a0f] via-[#0d0c13] to-[#0a0a0f] py-12 sm:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-gray-300 text-sm font-semibold tracking-wider uppercase mb-3">
            TESTIMONIALS
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl text-gray-300 font-bold">
            Hear from our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              happy
            </span>{" "}
            customers
          </h3>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1a1a24] rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col items-center gap-8">
                {/* Reviewer Image */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover rounded-full border-4 border-purple-500/20"
                  />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium text-center">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author info */}
                <div className="text-center">
                  <h4 className="text-white font-semibold text-lg sm:text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons - Adjusted for better mobile experience */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center px-2 sm:px-4 pointer-events-none">
            <button
              onClick={handlePrevious}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-purple-500"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 