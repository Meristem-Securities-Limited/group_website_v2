"use client";

import React from "react";
import { Heart, TrendingUp, Sparkles, Lightbulb } from "lucide-react";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function MissionSection() {
  const cards = [
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Knowledge",
      description: "Deep expertise and market intelligence to guide your financial decisions",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Information",
      description: "Up-to-date market insights and data-driven strategies for optimal outcomes",
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Dedication",
      description: "Unwavering commitment to your financial success and long-term goals",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Creativity",
      description: "Innovative solutions tailored to meet your unique financial needs",
    },
  ];

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
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-900 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{card.title}</h3>
              <p className="text-emerald-800 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
