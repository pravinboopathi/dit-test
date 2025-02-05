"use client";

import React from "react";
import { motion } from "framer-motion";
import courseData from "./courseData";

// Define the expected structure of a course
interface Course {
  id: number; // Changed to number since we're using parseInt
  modules: number;
  duration: string;
  ratings: number;
  ratingsCount: number;
  language: string;
}

interface CourseInfoProps {
  courseId: string;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ courseId }) => {
  // Safely parse the courseId to number
  const parsedCourseId = parseInt(courseId);
  
  // Type guard to ensure courseData is Course[]
  const course: Course | undefined = Array.isArray(courseData) 
    ? courseData.find((c) => c.id === parsedCourseId)
    : undefined;

  // Handle invalid courseId or parsing error
  if (!course || isNaN(parsedCourseId)) {
    return (
      <div className="p-4 text-red-500 text-center">
        <p>Course not found</p>
      </div>
    );
  }

  return (
    <motion.div
      className="course-info border-2 border-gray-200 rounded-2xl mt-5 p-4 text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Modules Info */}
        <div className="flex flex-col items-center space-y-1 relative">
          <p className="text-lg font-medium course-info-head">
            {course.modules} Modules
          </p>
          <p className="text-sm text-gray-400">with Certifications</p>
          <div className="block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-400"></div>
        </div>

        {/* Duration Info */}
        <div className="flex flex-col items-center space-y-1 relative">
          <p className="text-lg font-medium course-info-head">
            {course.duration}
          </p>
          <p className="text-sm text-gray-400">of Live Learning</p>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-400"></div>
        </div>

        {/* Ratings Info */}
        <div className="flex flex-col items-center space-y-1 relative">
          <p className="text-lg font-medium course-info-head">
            {course.ratings} Ratings
          </p>
          <p className="text-sm text-gray-400">by {course.ratingsCount} Learners</p>
          <div className="block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-400"></div>
        </div>

        {/* Language Info */}
        <div className="flex flex-col items-center space-y-1">
          <p className="text-lg font-medium course-info-head">
            {course.language}
          </p>
          <p className="text-sm text-gray-400">Language</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseInfo;