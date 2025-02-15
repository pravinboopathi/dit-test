'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuccessMetrics = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Measurable Impact
          </h2>
          <p className="text-gray-400">
            Our solutions deliver tangible results that drive business growth
          </p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              metric: "Revenue Growth",
              value: "+150%",
              description: "Average increase in client revenue after implementation"
            },
            {
              metric: "User Engagement",
              value: "3x",
              description: "Improvement in user engagement metrics"
            },
            {
              metric: "Cost Reduction",
              value: "40%",
              description: "Average reduction in operational costs"
            }
          ].map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-xl bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/10"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{item.metric}</h3>
              <div className="text-4xl font-bold text-orange-400 mb-4">{item.value}</div>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessMetrics; 