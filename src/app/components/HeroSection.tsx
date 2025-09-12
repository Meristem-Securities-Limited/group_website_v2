import React from "react";
import VideoContainer from "./VideoContainer";

const HeroSection = () => {
  return (
    <React.Fragment>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* 2025 Outlook Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-gray-700 border border-gray-300">
              2025 Outlook
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center">
            <h1 className="lg:text-7xl md:text-5xl text-5xl max-w-3xl mx-auto font-medium text-emerald-900 leading-tight mb-8">
              Navigating stability with cautious optimism
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Stay ahead with data-driven research, expert market analysis, and actionable insights
              tailored to help you make informed investment decisions.
            </p>
          </div>
        </div>
      </section>
      <VideoContainer />
    </React.Fragment>
  );
};

export default HeroSection;
