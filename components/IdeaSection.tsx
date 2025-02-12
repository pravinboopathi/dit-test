import React from "react";

const IdeaSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-[#080808] py-32 px-6">
      <div className="text-center max-w-3xl">
      <h1 className="text-6xl font-extralight bg-transparent mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent tracking-wide">
  Have an Idea?
</h1>

        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Need help in turning your idea into a successful product? <br />
          Let’s bring it to life! We build scalable, innovative solutions to
          transform your vision into reality.
        </p>
        <button className="relative py-4 px-8 text-xl font-normal rounded-full shadow-lg transition-all duration-300 transform border-[#1c1c1c] hover:scale-105 hover:shadow-2xl border">
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Get Free Consulting
          </span>
          
        </button>

      </div>
    </div>
  );
};

export default IdeaSection;
