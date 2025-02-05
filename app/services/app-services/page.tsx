"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { motion } from "framer-motion";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tailwindcss/tailwind.css";

const worksData = [
  {
    title: "Demo Portal",
    description: "Screenshot of Demo Portal showing a calendar interface with various features.",
    img: "/images/site.png",
    tags: ["Realtime Matching", "Calendar sync", "Notifications", "Reports"],
  },
  {
    title: "Freelance Platform",
    description: "Screenshot of Freelance platform showing a dark-themed interface with various features.",
    img: "/images/site.png",
    tags: ["Freelance Directory", "Custom Quotation", "Track Progress", "Rating & Reviews"],
  },
  {
    title: "E-Learning Hub",
    description: "Screenshot of an E-Learning platform with interactive courses and user-friendly design.",
    img: "/images/site.png",
    tags: ["Interactive Courses", "User Tracking", "Video Tutorials", "Certifications"],
  },
  {
    title: "E-Commerce Store",
    description: "Screenshot of an online store featuring product listings and checkout functionality.",
    img: "/images/site.png",
    tags: ["Product Catalog", "Secure Payments", "Customer Reviews", "Order Tracking"],
  },
];
const features = [
  {
    title: "100% Money Back Guarantee",
    desc: "We ensure complete satisfaction with our app development services. If you're not happy with the final product, we won’t charge you—though it has never happened before!",
  },
  {
    title: "Strictly Defined SLAs",
    desc: "Our app development process follows well-defined SLAs, ensuring timely delivery and top-quality performance. We have never breached an SLA and maintain high service standards.",
  },
  {
    title: "Cutting-Edge Technologies",
    desc: "We build apps using the latest technologies like Flutter, React Native, Next.js, and TypeScript. This guarantees high performance, scalability, and a seamless user experience.",
  },
  {
    title: "Modern UI/UX Design",
    desc: "Our apps feature sleek, modern UI and intuitive UX that align with current trends. We focus on creating visually appealing, user-friendly interfaces that enhance engagement.",
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
    <div className="bg-white text-gray-600 min-h-screen py-12 px-6">

      {/* Hero Section */}
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="text-5xl font-semibold text-gray-800">App Development</h1>
        <p className="mt-4 text-lg text-gray-600">
          At Divine Infotech, we offer professional web development services that cater to your business needs.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-4">
              <FontAwesomeIcon icon={faCheck} className="text-pink-500 mt-1 " />
              <div>
                <h3 className="text-[1.4em] text-gray-900 mb-2 font-semibold">{feature.title}</h3>
                <p className="text-gray-500 font-medium text-[1.1em] max-w-[800px]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     
      {/* Trusted Brands Section */}
      <section className="py-16 ">
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

      {/* Works Section */}
<div className="bg-white py-12">
  <div className="text-center mb-12">
    <h1 className="text-5xl font-medium text-black">Our Product</h1>
    <p className="text-gray-600 font-normal mt-2">
      Explore our featured projects and platforms.
    </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-5xl px-4 mt-12">
    {worksData.slice(0, 4).map((work, index) => (
      <div key={index} className="bg-white border-2 border-gray-100 rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative p-6 pb-2">
          <Image
            src={work.img}
            alt={work.description}
            width={500}
            height={500}
            className="w-full h-68 object-cover border-2 rounded-lg border-black-200"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {work.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-gray-600 rounded-full px-3 py-1 text-sm border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mb-4">{work.description}</p>

          <div className="flex">
            <button className="hover:shadow-xl bg-gray-900 text-white px-4 py-2 rounded-md transition-colors duration-300">
              Demo
            </button>
            <button className="border-2 text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:shadow-md ml-4">
              View More
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Contact CTA */}
<div className="mt-16 text-center  py-12">
  <h2 className="text-3xl text-gray-900 font-bold">Turn Your App Idea Into Reality!</h2>
  <p className="mt-4 text-lg">We build high-performance, scalable, and user-friendly apps tailored to your business needs.</p>
  <Link href="/contact">
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="mt-6 bg-gray-900 text-white px-6 py-3 text-lg rounded-full shadow-md"
    >
      Get in Touch
    </motion.button>
  </Link>
</div>

    </div>
  );
};

export default WebDevelopment;
