'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
  { name: 'React', icon: '/images/tech/reactjs.png' },
  { name: 'Next.js', icon: '/images/tech/next.svg' },
  { name: 'Node.js', icon: '/images/tech/node.svg' },
  { name: 'TypeScript', icon: '/images/tech/typescript.svg' },
  { name: 'Python', icon: '/images/tech/python.svg' },
  { name: 'AWS', icon: '/images/tech/aws.svg' },
  { name: 'Docker', icon: '/images/tech/docker.svg' },
  { name: 'MongoDB', icon: '/images/tech/mongodb.svg' },
];

const TechnologyStack = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            We use cutting-edge technologies to build robust solutions
          </p>
        </div>

        {/* Mobile Scrollable Container */}
        <div className="relative">
          {/* Gradient Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 md:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 md:hidden" />
          
          {/* Scrollable Container */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide md:overflow-x-visible md:pb-0 md:mx-0 md:px-0">
            <div className="flex md:grid md:grid-cols-4 lg:grid-cols-8 gap-8 min-w-[800px] md:min-w-0">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 flex flex-col items-center"
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack; 