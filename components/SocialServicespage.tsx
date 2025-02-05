import React from "react";
import { MdStar } from "react-icons/md"; // React Icons for star rating
import { FaLinkedin, FaGoogle, FaInstagram } from "react-icons/fa";

const SocialServicespage: React.FC = () => {
  return (
    <div className="bg-white text-black">
      {/* Awards and Social Media Section */}
      <div className="mt-16 md:mt-20 text-center pb-14 px-2 md:pb-10">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
          We are awarded by people&apos;s support through social media
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://www.linkedin.com/company/divineinfotech-edu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="flex flex-col items-center">
              <FaLinkedin className="text-6xl text-blue-700" />
              <p className="text-base md:text-lg mt-2 text-black">LinkedIn</p>
              <p className="text-gray-700 text-sm">100+ Followers</p>
            </div>
          </a>
          <a
            href="https://g.co/kgs/SVKDJGT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Reviews"
          >
            <div className="flex flex-col items-center">
              <FaGoogle className="text-6xl text-red-600" />
              <p className="text-base md:text-lg mt-2 text-black">
                Google Reviews
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <MdStar
                    key={i}
                    className={`text-xl ${
                      i < 4 ? "text-yellow-500" : "text-gray-400"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm">
                Rated 4.7/5 500+ Reviews
              </p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/divine.infotech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className="flex flex-col items-center">
              <FaInstagram className="text-6xl text-pink-500" />
              <p className="text-base md:text-lg mt-2 text-black">Instagram</p>
              <p className="text-gray-700 text-sm">5k+ Followers</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialServicespage;