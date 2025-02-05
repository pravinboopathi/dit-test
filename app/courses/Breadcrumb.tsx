"use client";

import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import React from "react";

// Define interfaces for props and items
interface BreadcrumbItem {
  label: string;
  link: string;
  isActive: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  marginX?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items,  
  marginX = "mx-6" 
}) => {
  const router = useRouter();

  const handleNavigation = (path: string): void => {
    router.push(path);
  };

  return (
    <div className={`flex items-center text-[10px] md:text-base ${marginX} mb-4 text-black`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <p
            onClick={() => !item.isActive && handleNavigation(item.link)}
            className={`font-medium cursor-pointer transition text-black duration-300 ease-in-out ${
              item.isActive 
                ? "text-black" 
                : "hover:text-black hover:underline underline-offset-2"
            }`}
          >
            {item.label}
          </p>
          {index < items.length - 1 && (
            <FaChevronRight className="md:mx-2 mx-1 text-black" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
