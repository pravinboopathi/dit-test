import React from "react";

const IdeaSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-[#080808] py-32 px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold text-gray-200 mb-6 tracking-wide">
          Have an Idea?
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Need help in turning your idea into a successful product? <br />
          Let’s bring it to life! We build scalable, innovative solutions to
          transform your vision into reality.
        </p>
        <button className="relative text-white bg-gradient-to-r from-orange-400 to-red-400 py-4 px-8 text-xl font-normal  rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
  Get Free Consulting
  <span className="absolute inset-0 rounded-full opacity-30 blur-md bg-orange-400 transition-all duration-500"></span>
</button>

      </div>
    </div>
  );
};

export default IdeaSection;
