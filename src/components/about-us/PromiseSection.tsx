"use client";

import React from "react";
import { Shield, TrendingUp, Sparkles, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export default function PromiseSection() {
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-30 items-start">
          {/* Icons and values */}
          <motion.div
            className="order-1 lg:order-2"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            <div className="px-20 py-12 bg-[#154D34] text-white bg-[url(/bg-banner.png)] lg:bg-no-repeat bg-repeat bg-center bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 shadow-xl">
              <div className="space-y-8">
                {[
                  {
                    icon: <Handshake className="w-6 h-6 text-emerald-700" />,
                    title: "Friendly Approach",
                    desc: "A warm, approachable team that treats you like family. We prioritize your comfort and ensure every interaction is personal, respectful, and supportive.",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6 text-emerald-700" />,
                    title: "Market Intelligence",
                    desc: "Access to real-time, accurate market data empowers you to make informed investment choices. We turn complex information into clear, actionable insights.",
                  },
                  {
                    icon: <Sparkles className="w-6 h-6 text-emerald-700" />,
                    title: "Wealth Growth",
                    desc: "Strategic planning focused on growing and preserving your wealth sustainably. We combine expertise with foresight to maximize long-term returns.",
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-emerald-700" />,
                    title: "Transparency",
                    desc: "Clear communication and honest reporting are at the heart of everything we do. We ensure you fully understand every action, investment, and outcome.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white shadow-sm"
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.2 }}>
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900 mb-2">{item.title}</h4>
                      <p className="text-emerald-700">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-2 lg:order-1 space-y-6"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            <h2 className="text-2xl lg:text-4xl font-bold text-emerald-900 leading-tight">
              Our Promise
            </h2>

            <p className="text-lg text-emerald-900 leading-relaxed font-medium">
              We are committed to building lasting relationships through a friendly approach,
              precise market intelligence, and strategic wealth growth — all delivered in an
              atmosphere of complete transparency.
            </p>

            <p className="text-lg text-emerald-900 leading-relaxed font-medium">
              Our focus is not just on numbers, but on empowering you to make confident, informed
              decisions. By combining knowledge, guidance, and trust, we help you navigate financial
              opportunities with clarity and assurance.
            </p>

            <p className="text-lg text-emerald-900 leading-relaxed font-medium">
              Every interaction is designed to add value. Whether you're exploring new investment
              avenues or reviewing your portfolio, we ensure that you have the insights and support
              you need to take decisive action.
            </p>

            <p className="text-lg text-emerald-900 leading-relaxed font-medium">
              We understand that the financial world can be complex and ever-changing. That’s why we
              continuously monitor market trends and refine our strategies so that you can benefit
              from timely opportunities and avoid unnecessary risks.
            </p>

            <div className="bg-emerald-50 p-8 border-l-4 border-emerald-800">
              <p className="text-lg text-emerald-800 leading-relaxed italic">
                "We are a friendly company with up-to-date market information to grow wealth in good
                time and in an atmosphere of transparency "
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
