'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the course structure
interface Course {
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  alt: string;
  path: string;
  studentsEnrolled: number;
  lastUpdated: string;
  features: string[];
}

const ExploreCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState("bestSelling");
  const router = useRouter();

  // Data for best selling courses
  const bestSellingCourses: Course[] = [
    {
      title: "Full Stack Web Development",
      description:
        "Build production-ready web applications from scratch. Industry-aligned curriculum with real-world projects.",
      shortDescription: "Industry-Leading Certification",
      image: "/images/web.png",
      alt: "Full Stack Development Course",
      path: "/courses/web-dev",
      studentsEnrolled: 1240,
      lastUpdated: "2024-03",
      features: ["Live Projects", "Industry Mentorship", "Job Support"],
    },
    {
      title: "Master Mobile App Development",
      description:
        "Learn how to build high-performance mobile applications using React Native, Flutter, and native technologies.",
      shortDescription: "Professional Certification",
      image: "/images/app.png",
      alt: "App Development Course Image",
      path: "/courses/app-dev",
      studentsEnrolled: 800,
      lastUpdated: "2024-02",
      features: ["Live Projects", "Industry Mentorship"],
    },
    {
      title: "Become a Python Pro",
      description:
        "Master Python programming from basics to advanced topics, including data science and AI applications.",
      shortDescription: "Expert-Led Training",
      image: "/images/python (2).png",
      alt: "Python Development Course Image",
      path: "/courses/software-dev",
      studentsEnrolled: 1000,
      lastUpdated: "2024-01",
      features: ["Live Projects", "Industry Mentorship"],
    },
  ];

  // Data for other courses
  const otherCourses: Course[] = [
    {
      title: "Digital Marketing Mastery",
      description:
        "Learn the secrets of SEO, content marketing, and paid advertising to grow your online presence.",
      shortDescription: "Digital Marketing",
      image: "/assets/digital.jpeg",
      alt: "Digital Marketing Course Image",
      path: "/courses/digital-marketing",
      studentsEnrolled: 700,
      lastUpdated: "2024-03",
      features: ["Live Projects", "Industry Mentorship"],
    },
  ];

  // Empty array for free courses
  const freeCourses: Course[] = [];

  // Function to render courses
  const renderCourses = (courses: Course[]) => {
    return courses.map((course, index) => (
      <div
        key={index}
        className="relative group bg-gradient-to-b from-gray-900 via-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10"
      >
        <div className="relative">
          <Image
            alt={course.alt}
            src={course.image}
            className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            width={400}
            height={225}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
          <div className="absolute top-3 left-3 bg-gradient-to-r from-gray-700 to-gray-800 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
            <span className="text-xs font-medium text-gray-200">
              {course.shortDescription}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-orange-400 transition-colors">
            {course.title}
          </h2>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {course.features.map((feature, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded-full border border-gray-800"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              {course.studentsEnrolled.toLocaleString()}+ students
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Certificate Included
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push(course.path)}
              className="flex-1 bg-gradient-to-r from-zinc-800 to-zinc-900 text-white px-4 py-2.5 rounded-lg font-medium border border-zinc-700/50 transition-all duration-300 hover:from-zinc-900 hover:to-black hover:border-zinc-600/50 hover:shadow-lg hover:shadow-black/20 active:scale-[0.98]"
            >
              Enroll Now
            </button>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-orange-500/30 hover:border-orange-500/50 hover:bg-orange-500/10 transition-colors"
              aria-label="Contact Us"
            >
              <svg
                className="w-5 h-5 text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-black py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Master Modern Technologies
          </h1>
          <p className="text-gray-400 text-lg">
            Industry-aligned curriculum with real-world projects
          </p>
        </div>

        <div className="mb-10">
          <div className="hidden sm:flex justify-center space-x-4">
            {["bestSelling", "otherCourses", "freeCourses"].map((tab) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gray-900 text-gray-100 border border-gray-700"
                    : "text-gray-400 hover:text-gray-300 border border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "bestSelling"
                  ? "Featured Courses"
                  : tab === "otherCourses"
                  ? "Specialized Tracks"
                  : "Free Resources"}
              </button>
            ))}
          </div>

          <div className="sm:hidden px-4">
            <select
              className="w-full px-4 py-2 rounded-lg text-gray-300 bg-gray-900 border border-gray-800 focus:outline-none focus:border-gray-700"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="bestSelling">Featured Courses</option>
              <option value="otherCourses">Specialized Tracks</option>
              <option value="freeCourses">Free Resources</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "bestSelling" && renderCourses(bestSellingCourses)}
          {activeTab === "otherCourses" && renderCourses(otherCourses)}
          {activeTab === "freeCourses" &&
            (freeCourses.length > 0 ? (
              renderCourses(freeCourses)
            ) : (
              <div className="col-span-full flex items-center justify-center h-64">
                <div className="text-center">
                  <p className="text-xl text-gray-400 mb-2">
                    Free Resources Coming Soon
                  </p>
                  <p className="text-gray-500">
                    Subscribe to our newsletter to get notified
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCourses;
