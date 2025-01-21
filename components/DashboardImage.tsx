import Image from "next/image";
import React from "react";

const DashboardImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300">
        <Image
          src="/images/website.jpg" // Ensure the image is in the 'public/images' folder
          alt="Dashboard Preview"
          width={1100} // Desktop width
          height={300} // Desktop height
          className="object-cover w-[300px] h-[1100px] sm:w-full sm:h-auto"
        />
      </div>
    </div>
  );
};

export default DashboardImage;
