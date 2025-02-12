'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import courseData from './courseData'; // Import the course data

interface Tool {
  name: string;
  logo: string;
}

interface ToolsCoveredProps {
  courseId: number;
}

const ToolsCovered: React.FC<ToolsCoveredProps> = ({ courseId }) => {
  const course = courseData.find((course) => course.id === courseId);
  const tools: Tool[] = course ? course.tools : [];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollAmount = 150;

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollAmount * index,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (tools.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % tools.length;
        scrollRef.current?.scrollTo({
          left: scrollAmount * newIndex,
          behavior: 'smooth',
        });
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [tools.length]);

  return (
    <div className="bg-white lg:px-32 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Tools Covered</h2>
      <div className="flex overflow-hidden space-x-4 pb-4" ref={scrollRef}>
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`flex-shrink-0 h-24 md:h-40 w-32 flex flex-col items-center justify-center ${
              courseId !== 1 ? 'rounded-lg shadow-md' : ''
            }`}
          >
            <Image
              src={tool.logo}
              alt={tool.name}
              width={180}
              height={180}
              className={`mb-2 px-2 ${courseId !== 1 ? 'h-16' : ''}`}
            />
            {courseId !== 1 && <p className="text-center px-2 text-xs">{tool.name}</p>}
          </div>
        ))}
      </div>
      {tools.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {tools.slice(0, 4).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'} hover:bg-gray-400 focus:outline-none`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolsCovered;
