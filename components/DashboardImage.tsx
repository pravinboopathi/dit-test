"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const DashboardImage: React.FC = () => {
  // Array of image data
  const images = [
    { src: "/images/website.jpg", alt: "Website Preview 1" },
    { src: "/images/website.jpg", alt: "Website Preview 2" },
    { src: "/images/website.jpg", alt: "Website Preview 3" },
  ];

  return (
    <div className="flex justify-center items-center px-2 sm:px-6 bg-[#080808] lg:px-8 my-10">
      <div className="w-full max-w-[1000px]"> {/* Adjusted max width */}
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade" // Enables fade transition
          fadeEffect={{ crossFade: true }} // Smooth fade effect
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000, // Change image every 3 seconds
            disableOnInteraction: false, // Autoplay continues after user interaction
          }}
          className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src} // Ensure images are in the 'public/images' folder
                alt={image.alt}
                layout="responsive"
                width={400} // Adjusted size
                height={200} // Adjusted size
                className="object-cover w-full h-auto border border-[#343434] p-2 rounded-2xl bg-[rgba(17,17,17,0.37)] backdrop-blur-[15px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DashboardImage;