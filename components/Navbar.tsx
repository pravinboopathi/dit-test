"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Import Lucide icon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false); // Service dropdown state
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false); // Product dropdown state

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
          <div className="hidden lg:flex flex-grow justify-end items-center space-x-6 text-lg font-normal mr-6">
            {/* Service Dropdown */}
            <div
              className="relative group px-3 py-2 rounded-md cursor-pointer"
              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
            >
              <button className="text-gray-800 flex items-center focus:outline-none">
                Service
                <ChevronDown className="ml-1 text-pink-500 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
              </button>
              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${
                  isServiceDropdownOpen ? "block" : "hidden"
                } lg:group-hover:block`}
              >
                <Link href="/services/web-service" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Web Development
                </Link>
                <Link href="/services/app-services" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  App Development
                </Link>
                <Link href="/services/software-services" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Software Development
                </Link>
              </div>
            </div>

            {/* Product Dropdown */}
            <div
              className="relative group px-3 py-2 rounded-md cursor-pointer"
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
            >
              <button className="text-gray-800 flex items-center focus:outline-none">
                Product
                <ChevronDown className="ml-1 text-pink-500 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
              </button>
              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${
                  isProductDropdownOpen ? "block" : "hidden"
                } lg:group-hover:block`}
              >
                <Link href="/products/billingpage" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Billing Software
                </Link>
                <Link href="/products/ai-model" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  AI Model
                </Link>
              </div>
            </div>

            <Link href="/blog" className="text-gray-800 px-3 py-2">Blog</Link>
            <Link href="/career" className="text-gray-800 px-3 py-2">Career</Link>

          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <button className="px-4 py-2 text-white text-lg bg-[#343434] rounded-xl">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="flex flex-col items-start px-4 py-2">
            {/* Service Dropdown (Mobile) */}
            <div className="relative w-full">
              <button
                className="flex justify-between w-full text-gray-800 px-4 py-2"
                onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              >
                Service
                <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${isServiceDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`${isServiceDropdownOpen ? "block" : "hidden"}`}>
                <Link href="/services/web-service"className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Web Development
                </Link>
                <Link href="/services/app-services"  className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  App Development
                </Link>
                <Link href="/services/software-services" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Software Development
                </Link>
              </div>
            </div>

            {/* Product Dropdown (Mobile) */}
            <div className="relative w-full">
              <button
                className="flex justify-between w-full text-gray-800 px-4 py-2"
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              >
                Product
                <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${isProductDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`${isProductDropdownOpen ? "block" : "hidden"}`}>
                <Link href="/product/billing-software" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  Billing Software
                </Link>
                <Link href="/product/ai-model" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                  AI Model
                </Link>
              </div>
            </div>

            <Link href="/blog" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Blog</Link>
            <Link href="/career" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Career</Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
