import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import courseData from './courseData';

interface TopicDetail {
  title: string;
  details: string[];
}

interface Phase {
  phase: string;
  topics: TopicDetail[];
}

interface Course {
  id: number;
  syllabus: Phase[];
}

const SyllabusAccordion: React.FC<{ courseId: number }> = ({ courseId }) => {
  const course = courseData.find((course) => course.id === courseId);
  if (!course) return <div className="text-left text-gray-600 text-lg">Course not found</div>;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="syllabus" className="bg-white text-black py-12  lg:px-40 text-left">
      <div className="mx-auto">
        <h2 className="font-normal text-4xl md:text-5xl mb-8">Topics You Will Learn</h2>
        <div className="space-y-6">
          {course.syllabus.map((phase, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
              <div
                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 px-6 py-4 cursor-pointer transition duration-300"
                onClick={() => toggleSection(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold">{phase.phase}</h3>
                <span className="text-xl">{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
              >
                <div className="bg-white px-6 py-4">
                  {phase.topics.map((topic, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="text-lg font-semibold border-b pb-2 mb-2">{topic.title}</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {topic.details.map((detail, i) => (
                          <li key={i} className="text-gray-700">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusAccordion;