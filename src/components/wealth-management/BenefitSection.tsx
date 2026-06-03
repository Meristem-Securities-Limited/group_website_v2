"use client";

import { motion } from "framer-motion";
import { cardVariants } from "../about-us/CultureSection";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: "ti-trending-up",
    color: "#7F77DD",
    title: "Investment management process",
    description:
      "Our investment management process logically combines a set of activities to help our clients preserve and grow their investments.",
    listLabel: null,
    items: ["Planning", "Execution", "Monitoring", "Feedback"],
  },
  {
    icon: "ti-shield-check",
    color: "#1D9E75",
    title: "Risk management framework",
    description:
      "Our team of risk managers and compliance officers provide a two-level control system which ensures that mandate guidelines and portfolio restrictions are fully adhered to by portfolio managers.",
    listLabel: null,
    items: [],
  },
  {
    icon: "ti-award",
    color: "#D85A30",
    title: "Our success factor",
    description:
      "Our products and services are unique and distinctive solutions geared specifically towards our client's investment objectives.",
    listLabel: "Some of our key success factors",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="mission"
      className="py-24 px-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-sm lg:text-base text-gray-700 mb-1">Why choose us</p>
        <h2 className="text-3xl lg:text-5xl font-semibold text-emerald-900 mb-10 capitalize">
          Benefits of Investing with us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              initial="hidden"
              custom={index}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              key={benefit.title}
              className="bg-white border border-emerald-700 p-6 flex flex-col gap-4">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: benefit.color }}>
                <i className={`ti ${benefit.icon} text-white text-xl`} />
              </div>
              <h3 className="text-base lg:text-xl font-semibold text-emerald-900">
                {benefit.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                {benefit.description}
              </p>

              {benefit.items.length > 0 && (
                <div className="flex flex-col gap-2">
                  {benefit.listLabel && (
                    <p className="text-sm lg:text-base font-medium text-gray-800">
                      {benefit.listLabel}
                    </p>
                  )}
                  <ul className="flex flex-col gap-2">
                    {benefit.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                        <span className="text-emerald-800">
                          <CheckCircle2
                            color="currentColor"
                            size={22}
                          />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
