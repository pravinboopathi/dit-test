"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: "Rapid Application Development",
      description:
        "We deliver meaningful products quickly. The solutions we build respond to real-world market demands.",
    },
    {
      title: "Partnering with the best",
      description:
        "We only use world-class products like AWS, Azure, and avoid cheap stuff.",
    },
    {
      title: "100% money back guarantee",
      description:
        "We won't charge you a penny if you are not satisfied with the output - never happened. T&C applied.",
    },
    {
      title: "Strictly defined SLAs",
      description:
        "The products that we create follow strict SLAs and have never breached SLA so far.",
    },
    {
      title: "Latest technologies",
      description:
        "We use latest technologies like Flutter, React, Next.js, and TypeScript.",
    },
    {
      title: "Fully Modern UI, UX",
      description:
        "Our design is fully modern and in line with current trends.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a0f] via-[#0d0c13] to-[#0a0a0f] relative overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
            Why Choose Us?
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-[#1a1a24] rounded-xl p-6 h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-white text-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
