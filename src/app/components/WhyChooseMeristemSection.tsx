import React from "react";
import { BarChart, BubbleChart, CheckDouble } from "../assets";
import Image from "next/image";

const features = [
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
    title: "Secure & Transparent",
    description:
      "Your investments are protected by robust security measures and regulatory compliance, giving you confidence at every step.",
    icon: CheckDouble,
  },
  {
    title: "Trusted Expertise",
    description:
      "Decades of financial experience and deep market insights ensure your decisions are guided by seasoned professionals.",
    icon: BarChart,
  },
];

const WhyChooseMeristem = () => {
  return (
    <section className="py-16 px-0 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Meristem</h2>
          <p className="mt-2">To advance the financial wellbeing of our clients</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 border border-gray-200">
              <Image
                src={feature.icon}
                alt={feature.title}
                className="text-green-700 text-4xl mb-4"
              />
              <h3 className="lg:text-2xl text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeristem;
