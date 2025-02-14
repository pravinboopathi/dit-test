"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TextFloat = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      x: "50%",
      opacity: 0.5,
    },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a0f] via-[#0d0c13] to-[#0a0a0f] relative">
      {/* Enhanced top gradient with multiple layers */}
      <div className="absolute top-0 left-0 right-0 h-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-transparent" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" /> */}
      </div>

      <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-screen 
                    flex items-center justify-center overflow-hidden 
                    px-4 py-16 sm:py-24 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" /> */}
          {/* <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse" /> */}
        </div>

        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="text-center w-full px-4 sm:px-6 relative z-10"
        >
          {/* Enhanced mobile text container */}
          <div className="max-w-[90vw] sm:max-w-none mx-auto">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold transform-gpu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-transparent bg-clip-text 
                           bg-gradient-to-r from-white via-purple-200 to-pink-100
                           px-2 py-1">
                <span className="block sm:hidden">#Together</span>
                <motion.span 
                  className="block sm:hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  WeGrow
                </motion.span>
                <span className="hidden sm:block whitespace-nowrap">#TogetherWeGrow</span>
              </span>
            </motion.h2>
          </div>
          
          {/* Enhanced mobile description with animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 block sm:hidden"
          >
            <p className="text-base text-gray-300 font-medium mb-2">
              Building the future together
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-75" />
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced bottom gradient with multiple layers */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-purple-500/10" /> */}
      </div>
    </div>
  );
};

export default TextFloat;
