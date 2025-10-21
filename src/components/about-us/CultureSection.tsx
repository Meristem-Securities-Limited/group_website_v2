"use client";

import React from "react";
import { Users, TrendingUp, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function CultureSection() {
  const cards = [
    {
      title: "Client-Centric",
      icon: <Users className="w-6 h-6 text-white" />,
      description:
        "Every decision, strategy, and innovation is designed with your best interests at the forefront.",
      points: [
        "Personalized service approach",
        "Responsive communication",
        "Long-term relationship building",
      ],
    },
    {
      title: "High-Performance",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      description:
        "Excellence is not just a goal; it's our standard. We continuously raise the bar in service delivery.",
      points: ["Result-driven strategies", "Continuous improvement", "Measurable outcomes"],
    },
    {
      title: "Passionate People",
      icon: <Sparkles className="w-6 h-6 text-white" />,
      description:
        "Our greatest asset is our team of dedicated professionals with genuine zest for helping you succeed.",
      points: ["Expert financial advisors", "Collaborative team culture", "Driven by purpose"],
    },
  ];

  return (
    <section
      id="culture"
      className="bg-white py-24 px-6">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-6">Our Culture</h2>
          <p className="text-base text-gray-900 mx-auto">
            A client-centric, high-performance organisation driven by the zest of its people.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-white p-8 shadow-lg border-2 border-emerald-700/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center mb-6 shadow-lg">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">{card.title}</h3>
              <p className="text-emerald-800 leading-relaxed mb-4">{card.description}</p>
              <ul className="space-y-2">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-emerald-900 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-emerald-900">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
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
              <div className="text-3xl font-bold text-emerald-800 mb-1">50,000+</div>
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
