"use client";

import React from "react";

import CourseForm from "../CourseForm";
import Breadcrumb from "../Breadcrumb";
import AboutCourse from "../AboutCourse";
import courseData from "../courseData";
import { useRouter } from "next/navigation";
import CourseInfo from "../CourseInfo";
import CertificateSection from "../CertificateSection";
import CourseNavbar from "../CourseNavbar";
import Faq from "../FAQ";
import Benefits from "../Benefits";
import SyllabusAccordion from "../SyllabusAccordion";
import ToolsCovered from "../ToolsCovered";

interface Course {
  id: number;
  name: string;
  tagline: string;
  description: string;
  originalPrice: string;
  price: string;
  savings: string;
  salary?: string;
}

const Fullstack: React.FC = () => {
  const router = useRouter();
  const courseId = 1;
  const course: Course | undefined = courseData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center text-2xl font-semibold py-8">
        Course not found - go to <a href="/">Home Page</a>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Divine Infotech", isActive: false, link: "/" },
    { label: "Courses", isActive: false, link: "/courses" },
    { label: course.name, isActive: true, link: "#" },
  ];

  return (
    <div id="hero" className="flex flex-col relative">
      <div

        className=" px-6 py-12 lg:pt-16 lg:px-28 text-white relative "
      >
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} marginX="md:mx-10" />

        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-3/4 w-full md:px-10 lg:pt-8">
            <h1 className="text-xl lg:text-5xl font-normal   underline underline-offset-3 text-yellow-500 leading-tight mb-2 md:mb-4">
              {course.name}
            </h1>
            <p
              className="md:text-lg text-sm font-medium text-gray-500 mb-6"
              dangerouslySetInnerHTML={{ __html: course.tagline }}
            ></p>
            <p
              className="text-gray-700 mb-8  md:text-xl md:w-[90%]"
              dangerouslySetInnerHTML={{ __html: course.description }}
            ></p>

            <h1 className="text-gray-600 text-xl md:text-2xl font-semibold">Buy this course @</h1>
            <div className="text-xl md:text-2xl font-semibold flex gap-2 md:gap-4">
              <h1 className="line-through text-gray-600">{course.originalPrice}</h1>
              <span className="text-yellow-500">{course.price}</span>
              <button className="bg-[#fef7cd] text-[#cf9203] rounded-full text-xs md:text-base p-2 md:py-2 md:px-4">
                You save {course.savings}!
              </button>
            </div>
            <CourseInfo courseId="1" /> {/* Pass courseId as a prop */}
          </div>
        </div>
      </div>

      <div className="lg:w-1/4 w-full lg:ml-16 z-30 lg:fixed right-0 lg:right-10">
        <CourseForm courseName={course.name} coursePrice={course.price} />
      </div>

      <div className="bg-white">
        <CourseNavbar />
    
        

        <div className='lg:w-3/4'>
        <AboutCourse courseId="1" />
        <SyllabusAccordion courseId={1} />
          <ToolsCovered courseId={1} />
          <Benefits />

        </div>
        <CertificateSection />
        <Faq courseId="1" />
        <div className="flex justify-center items-center py-4 lg:w-3/4 gap-2">
          <button
            onClick={() => {
              if (window.innerWidth >= 1024) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                const enrollElement = document.getElementById("enroll");
                if (enrollElement) {
                  enrollElement.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all duration-300 rounded-md"
          >
            Enroll Now
          </button>
          <button
            onClick={() => router.push("/contactform")}
            className="bg-transparent text-blue-600 border transition-all duration-300 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md"
          >
            Request a Callback ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fullstack;