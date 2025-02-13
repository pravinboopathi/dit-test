"use client";

import React, { useState, useRef } from "react";
import courseData from "./courseData";

// Define comprehensive interfaces
interface FAQ {
  question: string;
  answer: string;
}

interface Course {
  id: number;
  name: string;
  faqs: FAQ[];
}

interface FAQComponentProps {
  courseId: number | string; // Can be a number or string (from URL params)
}

const FAQ: React.FC<FAQComponentProps> = ({ courseId }) => {
  const numericCourseId = typeof courseId === "string" ? parseInt(courseId, 10) : courseId;
  const course = (courseData as Course[]).find((c) => c.id === numericCourseId);
  const faqs = course?.faqs || [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  const toggleFAQ = (index: number): void => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  if (!course) {
    return <div className="text-center text-red-500">Course not found</div>;
  }

  return (
    <div id="faq" className="bg-[#f6f7f8] py-8 px-4 md:px-8 lg:px-40">
      <h2 className="text-3xl text-center font-bold mb-6">
        Still Having
        <span className="relative inline-block ml-2">
          <span className="relative z-10 text-blue-600 mr-2">Doubts?</span>
          <span className="absolute inset-0 z-0 bg-blue-100 h-4 transform translate-y-4"></span>
        </span>
      </h2>

      <div className="space-y-4">
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div key={index} className="border-b-2">
              <button
                className="flex justify-between items-center w-full text-left p-4 cursor-pointer focus:outline-none"
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="md:text-lg text-sm font-medium text-gray-800">{faq.question}</h3>
                <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
              </button>

              <div
                ref={(el) => contentRefs.current.set(index, el)}
                id={`faq-content-${index}`}
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="p-4 text-sm md:text-base text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No FAQs available</div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
