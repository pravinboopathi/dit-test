import Image from 'next/image';
import React from 'react';

const DashboardImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ">
        <Image
          src="/images/website.jpg" // Ensure the image is in the 'public/images' folder
          alt="Dashboard Preview"
          width={1000}
          height={250}
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default DashboardImage;
