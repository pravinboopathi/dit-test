"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Using useEffect to detect client-side rendering
  useEffect(() => {
    // Set state to true when component has mounted (client-side only)
    setIsClient(true);
  }, []);

  // Conditional rendering to prevent hydration errors
  if (!isClient) return null; // Prevent rendering until the client-side render

  return (
    <nav className="bg-white sticky top-0 z-50 py-3 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center font-light text-xl">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/divineinfotech.png"
                alt="Logo"
                width={60}
                height={60}
                className="cursor-pointer"
              />
              <span className="ml-2 text-gray-800 font-normal">Divine Infotech</span>
            </Link>
          </div>

          {/* Desktop Links */}
                    <div className="hidden md:flex flex-grow justify-center space-x-6 text-base font-normal">
            <Link href="/service" className="text-gray-800">
              Service
            </Link>
            <Link href="/apps" className="text-gray-800">
              Apps
            </Link>
            <Link href="/product" className="text-gray-800">
              Product
            </Link>
            <Link href="/blog" className="text-gray-800">
              Blog
            </Link>
            <Link href="/career" className="text-gray-800">
              Career
            </Link>
          </div>

          {/* "Contact" Button (Right Aligned) */}
          <div className="hidden md:flex">
            <Link href="/contact">
              <button className="px-4 py-2 text-white text-lg bg-[#343434] rounded-xl">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <span>&#10005;</span> // Close icon (X)
              ) : (
                <span>&#9776;</span> // Hamburger icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white ">
          {/* Left-aligned menu items */}
          <div className="flex flex-col items-start">
            <Link href="/service" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
              Service
            </Link>
            <Link href="/apps" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
              Apps
            </Link>
            <Link href="/product" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
              Product
            </Link>
            <Link href="/blog" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
              Blog
            </Link>
            <Link href="/career" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
              Career
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
