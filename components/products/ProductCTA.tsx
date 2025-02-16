'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProductCTA = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-pink-500/10 p-[1px] rounded-3xl"
          >
            <div className="bg-[#0C0C0C] rounded-3xl px-8 py-12 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our AI solutions for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full hover:opacity-90 transition-opacity">
                    Schedule a Demo
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 border border-orange-500/20 text-white rounded-full hover:bg-orange-500/10 transition-colors">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA; 