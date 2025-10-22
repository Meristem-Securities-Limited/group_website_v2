"use client";

import React, { useEffect, useState } from "react";
import { BarChart, BubbleChart, CheckDouble } from "../app/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Personalised Wealth Strategies",
    description:
      "No two clients are alike. We take the time to understand your goals and design bespoke strategies that align with your aspirations.",
    icon: CheckDouble,
  },
  {
    title: "Trusted Expertise",
    description:
      "Decades of financial experience and deep market insights ensure your decisions are guided by seasoned professionals.",
    icon: BarChart,
  },
  {
    title: "End-to-End Solutions",
    description:
      "From trading and savings to trusteeship and real estate, we offer a complete suite of services under one roof.",
    icon: BubbleChart,
  },
  {
    title: "Secure & Transparent",
    description:
      "Your investments are protected by robust security measures and regulatory compliance, giving you confidence at every step.",
    icon: CheckDouble,
  },
  {
    title: "Innovative Platforms",
    description:
      "Access intuitive digital tools like Merittrade, WealthBuddy, and our Real Estate Marketplace to invest, save, and transact from anywhere.",
    icon: BarChart,
  },
  {
    title: "Proven Track Record",
    description:
      "Our legacy is built on results. Year after year, clients trust us because we deliver consistent performance and measurable impact.",
    icon: BarChart,
  },
];

const WhyChooseMeristem = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-emerald-900">
            Why Choose Meristem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 text-gray-600">
            We exist to advance the financial wellbeing of our clients
          </motion.p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: isClient && window.innerWidth >= 1024 ? 60 : 0,
                y: isClient && window.innerWidth < 1024 ? 40 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-start p-6 border border-gray-200">
              <Image
                src={feature.icon}
                alt={feature.title}
                className="text-green-700 text-4xl mb-4"
              />
              <h3 className="lg:text-2xl text-xl font-semibold text-emerald-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeristem;
