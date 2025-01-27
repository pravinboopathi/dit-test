"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            name: 'Facebook', 
            icon: <FaFacebookSquare className="text-black hover:text-gray-800 transform hover:scale-110 transition-transform duration-300" />, 
            href: '' 
        },
        { 
            name: 'Instagram', 
            icon: <FaInstagram className="text-black hover:text-gray-800 transform hover:scale-110 transition-transform duration-300" />, 
            href: 'https://www.instagram.com/divine.infotech' 
        },
        { 
            name: 'LinkedIn', 
            icon: <FaLinkedin className="text-black hover:text-gray-800 transform hover:scale-110 transition-transform duration-300" />, 
            href: 'https://www.linkedin.com/company/divineinfotech-edu/' 
        },
    ];

    const usefulLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Courses', href: '/courses' },
        { name: 'Services', href: '/services' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const otherResources = [
        { name: 'Careers', href: '/careers' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacypolicy' },
        { name: 'Refund Policy', href: '/refundpolicy' },
    ];

    const footerClass = "bg-gray-50 text-black";
    const hrColor = "border-gray-400";

    return (
        <footer id='footer' className={`${footerClass} z-50 py-8 px-5 md:pt-20 md:px-20`}>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between lg:justify-evenly">
                    <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
                        <h4 className="md:text-3xl text-2xl font-semibold mb-4">Let's keep in touch!</h4>
                        <h5 className="md:text-lg text-sm mb-6">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <a href="mailto:divineinfotech.edu@gmail.com" className="font-medium hover:underline underline-offset-4 decoration-black hover:cursor-pointer transition-all">
                            Mail : divineinfotech.edu@gmail.com
                        </a>
                        <div className="flex mt-5 space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-200 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none transform hover:scale-110 transition-transform duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex lg:flex-nowrap flex-row justify-between w-full lg:w-auto px-5 gap-5 lg:gap-20">
                        <div className="w-full lg:w-auto mb-8 lg:mb-0">
                            <span className="block uppercase text-black text-sm font-semibold mb-2">Useful Links</span>
                            <ul className="list-none">
                                {usefulLinks.map((link, index) => (
                                    <li key={index} className='pt-2'>
                                        <a
                                            href={link.href}
                                            className="text-black hover:text-gray-800  block text-sm md:text-base underline-offset-4 transition-colors duration-300 hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-auto">
                            <span className="block uppercase text-black text-sm font-semibold mb-2">Other</span>
                            <ul className="list-none">
                                {otherResources.map((link, index) => (
                                    <li key={index} className='pt-2'>
                                        <a
                                            href={link.href}
                                            className="text-black hover:text-gray-800 font- block text-sm md:text-base underline-offset-4 transition-colors duration-300 hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={`my-8 ${hrColor}`} />
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <div className="w-full text-center">
                        <div className="text-md text-black font-normal py-1">
                            Copyright © {currentYear}, Divine Infotech | All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
