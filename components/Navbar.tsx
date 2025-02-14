"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#080808] sticky top-0 z-50 py-4 ">
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center font-light text-xl">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/divineinfotech.png"
                alt="Logo"
                width={55}
                height={55}
                className="cursor-pointer"
              />
              <span className="ml-2 text-white font-light">Divine Infotech</span>
            </Link>
          </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-lg py-3 px-5 text-gray-300 font-light bg-[#0e0e0e] rounded-full ml-16 border border-[#212020]">
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About</Link>
          <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link>
          <Link href="/features" className="hover:text-orange-400 transition">Feature</Link>

          {/* Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              className="flex items-center hover:text-orange-400 transition"
            >
              Products <ChevronDown className="ml-1 w-5 h-5" />
            </button>
            {isProductDropdownOpen && (
              <div className="absolute left-0 mt-4 w-48 text-gray-300 border border-[#252525] shadow-lg rounded-lg py-2">
                <Link href="/products/billingpage" className="block px-4 py-2 ">Billing Software</Link>
                <Link href="/products/ai-model" className="block px-4 py-2 ">AI Model</Link>
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
  <Link href="/login">
    <button className="px-6 py-2 border text-lg font-light border-[#212020] text-gray-300  rounded-full shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
      Login
    </button>
  </Link>
  <Link href="/contact">
  <button className="px-6 py-2 text-lg border-[#212020] font-normal border bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300">
  Get Started
</button>

  </Link>
</div>


        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black text-white py-4 px-6 space-y-4">
          <Link href="/" className="block hover:text-orange-400">Home</Link>
          <Link href="/about" className="block hover:text-orange-400">About</Link>
          <Link href="/contact" className="block hover:text-orange-400">Contact</Link>
          <Link href="/features" className="block hover:text-orange-400">Feature</Link>
          <Link href="/login" className="block hover:text-orange-400">Login</Link>
          <Link href="/get-started" className="block hover:text-orange-400">Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
