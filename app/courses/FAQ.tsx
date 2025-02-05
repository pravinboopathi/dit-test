"use client";

import React, { useState, useRef } from 'react';
import courseData from './courseData';

// Define comprehensive interfaces that match your courseData structure
interface FAQ {
  question: string;
  answer: string;
}

interface Course {
  id: number;
  name: string;
  price: string;
  tagline: string;
  description: string;
  about: string;
  savings: string;
  originalPrice: string;
  salary: string;
  duration: string;
  modules: number;
  ratings: number;
  ratingsCount: number;
  language: string;
  syllabus: Array<{
    phase: string;
    topics: Array<{
      title: string;
      details: string[];
    }>;
  }>;
  faqs: FAQ[];
}

interface FAQComponentProps {
  courseId: number | string; // Accept both number and string as courseId can come from URL params
}

const FAQ: React.FC<FAQComponentProps> = ({ courseId }) => {
  // Convert courseId to number if it's a string
  const numericCourseId = typeof courseId === 'string' ? parseInt(courseId, 10) : courseId;

  // Find the course with proper type checking
  const course = (courseData as Course[]).find((course) => course.id === numericCourseId);

  const faqs = course?.faqs || [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Initialize refs for content, ensure the array has the same length as the number of FAQs
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent, index: number): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  // Handle the case when the course is not found
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div id="faq" className="bg-[#f6f7f8]">
      <div className="lg:w-3/4 py-8 px-4 md:px-8 lg:px-40">
        <h2 className="text-3xl text-center font-bold mb-4">
          Still Having
          <span className="relative inline-block ml-2">
            <span className="relative z-10 text-blue-600 mr-2">Doubts?</span>
            <span className="absolute inset-0 z-0 bg-blue-100 h-4 transform translate-y-4"></span>
          </span>
        </h2>
        <div className="space-y-4">
          {faqs.length > 0 ? (
            faqs.map((faq: FAQ, index: number) => (
              <div key={index} className="border-b-2">
                <div
                  className="flex justify-between items-center p-2 md:p-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  <h3 className="md:text-lg text-sm font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                </div>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    height:
                      activeIndex === index && contentRefs.current[index]
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : '0px',
                  }}
                >
                  <div className="p-4 text-sm md:text-base text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No FAQs available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;