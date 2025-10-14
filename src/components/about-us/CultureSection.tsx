import React from "react";
import { Users, TrendingUp, Sparkles } from "lucide-react";

export default function CultureSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-emerald-900 mb-6">Our Culture</h2>
          <p className="text-base text-gray-900 mx-auto">
            A Client-Centric, High-Performance organization driven by the zest of its people
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 shadow-lg border-2 border-emerald-700/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center mb-6 shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Client-Centric</h3>
            <p className="text-emerald-800 leading-relaxed mb-4">
              Every decision, strategy, and innovation is designed with your best interests at the
              forefront.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Personalized service approach</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Responsive communication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Long-term relationship building</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 shadow-lg border-2 border-emerald-700/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center mb-6 shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">High-Performance</h3>
            <p className="text-emerald-800 leading-relaxed mb-4">
              Excellence is not just a goal; it's our standard. We continuously raise the bar in
              service delivery.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Results-driven strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Continuous improvement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Measurable outcomes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 shadow-lg border-2 border-emerald-700/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center mb-6 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Passionate People</h3>
            <p className="text-emerald-800 leading-relaxed mb-4">
              Our greatest asset is our team—dedicated professionals with genuine zest for helping
              you succeed.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Expert financial advisors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Collaborative team culture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-emerald-900">Driven by purpose</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#154D34] text-white bg-[url(/bg-banner.png)] lg:bg-no-repeat bg-repeat bg-center bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 p-18 mt-19 text-center">
          <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium mb-6">
            "Our culture creates an environment where excellence thrives, innovation flourishes, and
            client success becomes inevitable."
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-gray-50 backdrop-blur-sm p-7">
              <div className="text-3xl font-bold text-emerald-800 mb-1">20+</div>
              <div className="text-emerald-800">Years Experience</div>
            </div>
            <div className="bg-gray-50 backdrop-blur-sm p-7">
              <div className="text-3xl font-bold text-emerald-800 mb-1">40000+</div>
              <div className="text-emerald-800">Happy Clients</div>
            </div>
            <div className="bg-gray-50 backdrop-blur-sm px-10 py-7">
              <div className="text-3xl font-bold text-emerald-800 mb-1">SEC</div>
              <div className="text-emerald-800">Regulated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
