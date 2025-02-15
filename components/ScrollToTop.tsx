'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);

      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#1a1a1a] text-white shadow-lg cursor-pointer group border border-gray-700/50"
          aria-label="Scroll to top"
        >
          {/* Gradient background with reduced opacity */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gray-500/20 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          
          {/* Icon container */}
          <div className="relative">
            <FaArrowUp className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#1a1a1a] text-gray-300 text-sm py-1.5 px-3 rounded-lg whitespace-nowrap border border-gray-700/50">
              Scroll to top
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop; 