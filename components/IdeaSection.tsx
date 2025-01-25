import React from 'react';

const IdeaSection: React.FC = () => {
    return (
        <div className="flex items-center justify-center  bg-white py-28">
            <div className="text-center">
                <h1 className="text-5xl font-medium text-black mb-4">Have an idea?</h1>
                <p className="text-gray-500 mb-6">
                    Need help in turning your idea into a successful product?<br />
                    Talk to us. We can help you build your product quickly and ensure it can scale infinitely.
                </p>
                <button className="bg-gray-900 text-white py-3 px-6 rounded-full transition-transform  hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 text-lg" >
                    Get Free Consulting
                </button>
            </div>
        </div>
    );
};

export default IdeaSection;