"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Cpu, ShieldCheck, Database } from "lucide-react";

const features = [
  { icon: <Code />, title: "Custom Software Solutions", desc: "Tailored software to meet unique business needs." },
  { icon: <Cpu />, title: "AI & Automation", desc: "AI-powered solutions for automation and efficiency." },
  { icon: <ShieldCheck />, title: "Secure & Scalable", desc: "High-security standards with scalable architectures." },
  { icon: <Database />, title: "Cloud & Database Solutions", desc: "Cloud-based software with optimized databases." },
];

export default function SoftwareDevelopment() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">
          <span className="text-blue-600">Software Development</span> Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We build high-quality, secure, and scalable software tailored to your business.
        </p>
        <Link href="/contact">
          <motion.button whileHover={{ scale: 1.1 }} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">
            Get a Free Quote
          </motion.button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-500 text-4xl mx-auto">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Build Your Software with Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          Let's create powerful software that drives your business forward.
        </p>
        <Link href="/contact">
          <motion.button whileHover={{ scale: 1.1 }} className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md">
            Contact Us
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
