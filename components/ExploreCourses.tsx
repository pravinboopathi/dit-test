"use client";

import { useState } from "react";

const ExploreCourses = () => {
    const [activeTab, setActiveTab] = useState("bestSelling");

    // Courses Data
    const bestSellingCourses = [
        {
            title: "Become the Developer Companies Need",
            description: "Struggling to get noticed by tech companies? Our Full Stack Web Development Course covers everything from frontend to backend—HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.",
            shortDescription: "Full Stack Web Development",
            image: "/images/web.png",
            alt: "Full Stack Development Course Image",
            rating: 4.5,
        },
        {
            title: "Become the Developer Companies Need",
            description: "Struggling to get noticed by tech companies? Our Full Stack Web Development Course covers everything from frontend to backend—HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.",
            shortDescription: "Full Stack Web Development",
            image: "/images/app.png",
            alt: "Full Stack Development Course Image",
            rating: 4.2,
        },
        {
            title: "Become the Developer Companies Need",
            description: "Struggling to get noticed by tech companies? Our Full Stack Web Development Course covers everything from frontend to backend—HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.",
            shortDescription: "Full Stack Web Development",
            image: "/images/python (2).png",
            alt: "Full Stack Development Course Image",
            rating: 4.8,
        },
        // Add other courses here
    ];

    const otherCourses = [
        {
            title: "Digital Marketing Mastery",
            description: "Learn the secrets of SEO, content marketing, and paid advertising to grow your online presence.",
            shortDescription: "Digital Marketing",
            image: "/images/digital.jpeg",
            alt: "Digital Marketing Course Image",
            rating: 4.1,
        },
    ];

    const freeCourses = [];

// Function to render course cards
const renderCourses = (courses: any[]) => {
    return courses.map((course, index) => {
        const fullStars = Math.floor(course.rating);
        const halfStar = course.rating % 1 !== 0; // Checks if there is a half-star
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Calculate empty stars

        return (
            <div
                key={index}
                className="bg-white rounded-3xl border-2 border-gray-100 p-6"
            >
                <img
                    alt={course.alt}
                    src={course.image}
                    className="w-full h-56 object-cover rounded-lg"
                    height="500"
                    width="600"
                />
                <h2 className="text-xl font-medium text-gray-700 mt-4">
                    {course.title}
                </h2>
                <p className="text-gray-500 my-2 text-lg ">{course.shortDescription}</p>
                <p className="text-gray-700 mt-2 text-[1em] border-b-2 border-gray-100 pb-4">{course.description}</p>

                {/* Customer Rating */}
                <div className="flex items-center my-2">
                    <span className="text-yellow-500 text-2xl">
                        {/* Render full stars */}
                        {"★".repeat(fullStars)}
                        {/* Render half star if applicable */}
                        {halfStar && "★"}
                        {/* Render empty stars */}
                        {"☆".repeat(emptyStars)}
                    </span>
                    <span className="text-gray-500 text-lg ml-2">{course.rating}</span>
                </div>

                <div className="flex my-4">
                    <button className="border-2 text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:shadow-md">
                        View course
                    </button>
                    <button className= "hover:shadow-xl bg-gray-900 ml-4 text-white px-4 py-2 rounded-md transition-colors duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        );
    });
};

    return (
        <div className="bg-white  text-black my-12">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-5xl font-normal text-center text-gray-800 mb-6">
                    Explore Our Courses
                </h1>
                <div className="flex justify-center mb-8 space-x-4">
                    {["bestSelling", "otherCourses", "freeCourses"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded-full font-medium ${activeTab === tab
                                    ? "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                } transition-all duration-300 transform ${activeTab === tab ? "scale-110" : "scale-100"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === "bestSelling"
                                ? "Best Selling"
                                : tab === "otherCourses"
                                    ? "Other Courses"
                                    : "Free Courses"}
                        </button>
                    ))}
                </div>

                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${activeTab === "bestSelling" ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        display: activeTab === "bestSelling" ? "grid" : "none",
                    }}
                >
                    {renderCourses(bestSellingCourses)}
                </div>

                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${activeTab === "otherCourses" ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        display: activeTab === "otherCourses" ? "grid" : "none",
                    }}
                >
                    {renderCourses(otherCourses)}
                </div>

                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${activeTab === "freeCourses" ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        display: activeTab === "freeCourses" ? "grid" : "none",
                    }}
                >
                    {freeCourses.length > 0 ? (
                        renderCourses(freeCourses)
                    ) : (
                        <div className="flex items-center justify-center w-full h-96">
                            <p className="text-center text-gray-500 text-lg">
                                No free courses available at the moment.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExploreCourses;
