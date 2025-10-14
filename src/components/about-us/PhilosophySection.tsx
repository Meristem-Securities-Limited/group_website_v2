import React from "react";
import { Target, Heart, Users } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-green-900 mb-4">Our Philosophy</h2>
          <p className="text-lg text-emerald-900 leading-relaxed mb-10 max-w-3xl font-medium">
            Guided by our belief that our success depends entirely on the extent to which our
            clients' objectives are met
          </p>
        </div>

        <div className="container mx-auto">
          <div className="">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-left bg-white shadow-2xl p-10 border-2 border-emerald-800/40">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-emerald-900" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Client-First Mindset</h3>
                <p className="text-emerald-900">
                  We put ourselves in your place and serve you as we would serve ourselves
                </p>
              </div>

              <div className="text-left bg-white shadow-2xl p-10 border-2 border-emerald-800/40">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-emerald-900" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Shared Journey</h3>
                <p className="text-emerald-900">
                  When you're not happy, we have failed. When you smile, we also smile
                </p>
              </div>

              <div className="text-left bg-white shadow-2xl p-10 border-2 border-emerald-800/40">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                  <Target className="w70 -70 text-emerald-900" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">Objective Alignment</h3>
                <p className="text-emerald-900">
                  Your financial goals become our mission, driving every decision we make
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#154D34] text-white bg-[url(/bg-banner.png)] lg:bg-no-repeat bg-repeat bg-center bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 p-18 mt-19 text-center">
            <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium mb-6">
              "This philosophy of empathy and partnership is at the heart of everything we do,
              ensuring that your financial well-being is always our top priority."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
