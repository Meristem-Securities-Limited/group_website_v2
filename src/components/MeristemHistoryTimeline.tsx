"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const MeristemTimeline = () => {
  // const timelineData = [
  //   {
  //     year: "2003",
  //     title: "Foundations of Growth",
  //     description:
  //       "Meristem Securities Limited is established to provide world-class stockbroking and investment services in Nigeria.",
  //   },
  //   {
  //     year: "2005",
  //     title: "A New Identity",
  //     description:
  //       "Launch of our Research Unit, setting a benchmark for market intelligence and forecasting accuracy.",
  //   },
  //   {
  //     year: "2008",
  //     title: "Expansion Into Wealth Management",
  //     description:
  //       "Creation of Meristem Wealth Management to offer bespoke portfolio and retirement planning solutions.",
  //   },
  // ];

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
                href="/about-us"
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
      </div>
    </section>
  );
};

export default MeristemTimeline;
