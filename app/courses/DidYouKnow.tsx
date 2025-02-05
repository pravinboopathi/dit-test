"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define props interface
interface DidYouKnowProps {
  salary: number;
}

const DidYouKnow: React.FC<DidYouKnowProps> = ({ salary }) => {
  return (
    <div className="lg:mx-40 mx-4 my-10 lg:w-3/5 rounded-lg overflow-hidden relative">
      {/* Container with background image */}
      <div className="rounded-lg overflow-hidden relative md:h-[250px] h-[150px]">
        <Image
          src="/images/salary-bg.jpg" // Update with your actual image path
          alt="Salary background"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw"
        />
        
        {/* Text content, absolutely positioned over the image */}
        <div className="absolute inset-0 p-6 flex items-start justify-start z-10">
          <div>
            <h2 className="text-white text-lg sm:text-xl md:text-4xl font-bold mb-2">
              Did You Know?
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm md:text-lg mb-2 md:mb-4">
              The average salary is
            </p>
            <div className="mb-1 md:mb-2">
              <span className="text-yellow-300 text-3xl sm:text-4xl md:text-5xl font-bold">
                {salary}L
              </span>
            </div>
            <p className="text-white text-sm sm:text-lg md:text-xl">
              /year in India
            </p>
          </div>
        </div>
      </div>

      <Link href="#hero" className="block">
        <div className="flex justify-center mt-4 items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Enroll Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default DidYouKnow;