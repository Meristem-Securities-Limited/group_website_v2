import React from "react";
import { Heart, TrendingUp, Sparkles, Lightbulb } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="bg-emerald-50/30 py-24 px-6">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-emerald-900 mb-6">Our Mission</h2>
          <p className="text-lg text-emerald-900 max-w-4xl leading-relaxed">
            Bonding with our clients to understand and meet their needs, through knowledge,
            information, dedication and creativity of our people while satisfying all stakeholders
            in the environment in which we operate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-19">
          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
            <div className="w-14 h-14 bg-emerald-900 flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Knowledge</h3>
            <p className="text-emerald-800 leading-relaxed">
              Deep expertise and market intelligence to guide your financial decisions
            </p>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
            <div className="w-14 h-14 bg-emerald-900 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Information</h3>
            <p className="text-emerald-800 leading-relaxed">
              Up-to-date market insights and data-driven strategies for optimal outcomes
            </p>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
            <div className="w-14 h-14 bg-emerald-900 flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Dedication</h3>
            <p className="text-emerald-800 leading-relaxed">
              Unwavering commitment to your financial success and long-term goals
            </p>
          </div>

          <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
            <div className="w-14 h-14 bg-emerald-900 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Creativity</h3>
            <p className="text-emerald-800 leading-relaxed">
              Innovative solutions tailored to meet your unique financial needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
