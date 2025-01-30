"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { motion } from "framer-motion";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const features = [
  {
    title: "100% Money Back Guarantee",
    desc: "We won't charge you a penny if you are not satisfied with the output - never happened.",
  },
  {
    title: "Strictly Defined SLAs",
    desc: "The products that we create follow strict SLAs and have never breached SLA so far.",
  },
  {
    title: "Latest Technologies",
    desc: "We use the latest technologies like Flutter, React, Next.js, and TypeScript.",
  },
  {
    title: "Fully Modern UI, UX",
    desc: "Our design is fully modern and in line with current trends.",
  },
];

const WebDevelopment: React.FC = () => {
  const [logos, setLogos] = useState<{ src: string; alt: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = {
          data: [
            { src: "/images/react.png", alt: "Canva Logo" },
            { src: "/images/html.png", alt: "Adobe Logo" },
            { src: "/images/java.png", alt: "Microsoft Logo" },
            { src: "/images/javascript.png", alt: "Google Logo" },
            { src: "/images/python.png", alt: "Apple Logo" },
            { src: "/images/nodejs.png", alt: "Amazon Logo" },
          ],
        };
        setLogos(response.data);
      } catch (error) {
        console.error("Error fetching logos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen py-12 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="text-5xl font-normal">Web Development</h1>
        <p className="mt-4 text-lg">
          At Divine Infotech, we offer professional web development services that cater to your business needs. From responsive website design to robust backend solutions, we deliver high-quality web development that drives results.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 px-6 justify-center mt-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faCheck} className="text-pink-500 mt-1 text-[1.6em]" />
              <div>
                <h3 className="text-[1.4em] text-gray-900 mb-2 font-semibold">{feature.title}</h3>
                <p className="text-gray-500 font-medium text-[1.1em] max-w-[800px]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Brands Section */}
      <section className="py-16">
        <div className="max-w-screen-full mx-auto text-center">
          <h2 className="text-5xl font-medium mb-16 text-gray-800">Tech stack Used.</h2>
          <div className="relative overflow-hidden">
            {isLoading ? (
              <p className="text-gray-600">Loading logos...</p>
            ) : (
              <Marquee speed={50} gradient={false} className="flex items-center">
                {logos.concat(logos, logos).map((logo, index) => (
                  <div key={index} className="flex items-center justify-center mx-8 " style={{ flexShrink: 0 }}>
                    <Image src={logo.src} alt={logo.alt} width={75} height={75} className="object-contain" />
                  </div>
                ))}
              </Marquee>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold">Let's Build Your Website</h2>
        <p className="mt-4 text-lg">
          Get a high-performance website tailored to your needs.
        </p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md"
          >
            Contact Us
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default WebDevelopment;
