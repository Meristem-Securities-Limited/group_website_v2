"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const MeristemTimeline = () => {
  const timelineData = [
    {
      year: "2003",
      title: "Foundations of Growth",
      description:
        "The journey began in 2003 with the incorporation of Great Africa Securities Limited, a spinoff from Great Africa Trust. Starting with a small but determined team, the firm set out with a bold vision — to redefine client service in Nigeria’s stockbroking industry. Its focus on quality research and exceptional service quickly set it apart, laying the groundwork for future expansion and the need for a distinct identity.",
    },
    {
      year: "2005",
      title: "A New Identity",
      description:
        "In 2005, the firm rebranded as Meristem Securities Limited. The name, inspired by the biological term meristem — the growth tissue in plants — symbolized continuous renewal and upward progress. Along with a fresh logo and brand identity, the rebrand reflected a clear mission: to help clients grow, preserve, and transfer wealth across generations. It marked the start of a new chapter in the company’s evolution",
    },
    {
      year: "2008",
      title: "Expansion Into Wealth Management",
      description:
        "Building on the outcomes of a pivotal 2007 strategy session, the firm launched an asset management subsidiary with a clear point of difference — offering more personalized services to Nigeria’s growing middle class. The new unit was designed to match investment options to individual risk profiles and help clients grow wealth sustainably over time. Born out of strategic foresight and propelled by rapid changes in the investment landscape, this marked a major step in diversifying beyond stockbroking into broader wealth management.",
    },
  ];

  return (
    <section className="bg-[#154D34] bg-[url(/bg-banner.png)] bg-no-repeat bg-cover bg-center bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 relative overflow-hidden">
      <div className="relative z-10 container mx-auto py-20 px-4">
        {/* Header */}
        <motion.div
          className="pb-6 mb-9"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-semibold text-white">Our History</h2>
          <p className="text-white mt-5 max-w-2xl">
            Provides premium financial services that help you grow and preserve your wealth through
            expert market analysis and personalized investment strategies.
          </p>
        </motion.div>

        {/* Group Container */}
        <motion.div
          className="flex justify-between items-center gap-9"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}>
          <div className="lg:p-10 p-4 bg-[#154D34] w-auto">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white text-sm font-medium tracking-wider uppercase mb-6">
              A LEGACY OF FINANCIAL EXCELLENCE
            </motion.h3>

            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}>
              <p className="text-white text-base lg:text-lg  leading-relaxed mb-8">
                Founded in 2003 (originally as Great Africa Securities before rebranding in 2005),
                Meristem is a leading capital markets conglomerate in Nigeria. With seven
                subsidiaries, Meristem offers a comprehensive suite of financial services including
                stockbroking, wealth & asset management, investment banking, trusteeship & estate
                planning, registrars & probate services, lease & loan financing, and capital market
                advisory. Regulated by the Securities and Exchange Commission, we are committed to
                creating, preserving, and transferring wealth for individuals, institutions, and
                enterprises.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 text-white pr-3 hover:text-green-900 font-semibold hover:bg-white transition-colors">
                <div className="lg:p-3 p-2 bg-white">
                  <ArrowRight
                    size={20}
                    color="#154D34"
                  />
                </div>
                LEARN MORE ABOUT MERISTEM
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative py-20 lg:px-10 px-4 bg-[#154D34]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}>
          <div className="relative">
            <div className="hidden lg:block absolute -top-8 left-0 right-0 h-px bg-white/30 mt-8"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}>
                  {/* Timeline bullet */}
                  <div className="hidden lg:block absolute -top-2 left-0 w-6 h-6 bg-green-900 rounded-full border-1 border-white">
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="w-1 h-1 bg-green-900 rounded-full border-2 border-white"></div>
                    </div>
                  </div>

                  <div className="lg:hidden flex items-center mb-4">
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-[#1bc076] mr-4"></div>
                    <div className="flex-1 h-px bg-white/30"></div>
                  </div>

                  <div className="lg:pt-12">
                    <h2 className="text-white text-2xl lg:text-4xl font-medium mb-4">
                      {item.year}
                    </h2>
                    <h3 className="text-white text-xl lg:text-2xl font-medium mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeristemTimeline;
