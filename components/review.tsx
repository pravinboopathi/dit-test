"use client"; // Required for using React hooks in Next.js 13+ App Router

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import Head from 'next/head';

interface Review {
  id: number;
  name: string;
  position: string;
  quote: string;
  highlight?: string;     // for "Document360" highlight
  avatar: string;
  companyLogo: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Aarthi Kumar',
    position: 'Principal Knowledge Base Manager, Cascade',
    quote:
      'Since adopting Document360, we have been adding 30% more articles to our knowledge base every quarter.',
    highlight: 'Document360',
    avatar:
      'https://storage.googleapis.com/a1aa/image/0z4UVFkYQXGSIir6FDWgnV3wkJPJUYWAGgjfX-cyuAc.jpg', // Green icon
    companyLogo:
      'https://storage.googleapis.com/a1aa/image/tqldIWvODaS0BkFvNUE5WgBJrPf0BZXQ3MR9sUZs-20.jpg', // Cascade logo
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'CEO, Tech Innovators',
    quote:
      'Using Document360 has drastically improved our workflow efficiency. Highly recommended!',
    highlight: 'Document360',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    companyLogo: 'https://randomuser.me/api/portraits/lego/3.jpg',
  },
  {
    id: 3,
    name: 'Sarah Smith',
    position: 'Marketing Head, BrandBoost',
    quote:
      'A game-changer for our business! The support and functionality exceeded our expectations.',
    highlight: 'Document360',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    companyLogo: 'https://randomuser.me/api/portraits/lego/5.jpg',
  },
];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <>
      {/* Optional: <Head> for metadata if using the Pages Router.
         If using App Router, place <title> in layout/head files. */}
      <Head>
        <title>Testimonials</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Dark background container */}
      <div className="bg-black min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* 2-column layout: text on left, testimonial card on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Heading and Paragraph */}
            <div>
              <h2 className="text-sm text-gray-400 uppercase">Testimonials</h2>
              <h1 className="text-4xl font-bold mt-2 text-white">
                Hear from our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                  happy
                </span>{' '}
                customers
              </h1>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Business owners from across the world share proven ways to work more efficiently
                and drive impact with our suite of products.
              </p>
            </div>

            {/* Right Column: Testimonial Card */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
                {/* Green icon in the top-left corner (overlapping) */}
                <div className="absolute -top-6 -left-6">
                  <img
                    src={currentReview.avatar}
                    alt="Green Icon"
                    className="w-12 h-12 rounded-full"
                  />
                </div>

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition"
                >
                  <FaChevronLeft className="text-gray-400" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition"
                >
                  <FaChevronRight className="text-gray-400" />
                </button>

                {/* Star Rating (5 black stars to match the image) */}
                <div className="flex justify-center mb-4 mt-2">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} className="text-black mx-0.5" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-black text-lg leading-relaxed">
                  &ldquo;Since adopting{' '}
                  <span className="text-purple-600 font-medium">
                    {currentReview.highlight}
                  </span>
                  , {currentReview.quote}&rdquo;
                </p>

                {/* Name & Position */}
                <p className="mt-4 font-bold text-black">{currentReview.name}</p>
                <p className="text-gray-500">{currentReview.position}</p>

                {/* Company Logo */}
                <div className="mt-4">
                  <img
                    src={currentReview.companyLogo}
                    alt="Company Logo"
                    className="mx-auto"
                    width={100}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
