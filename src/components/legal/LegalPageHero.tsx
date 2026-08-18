"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LegalPageHero({
  title,
  effectiveDate,
  intro,
}: {
  title: string;
  effectiveDate?: string;
  intro?: string;
}) {
  return (
    <div
      className="relative w-full text-white bg-[#032f1b] bg-[url(/bg-banner.png)] bg-repeat bg-center lg:bg-no-repeat bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 overflow-hidden"
      style={{ backgroundColor: "#154D34" }}>
      <div className="relative z-10 container mx-auto px-4 pt-48 pb-28 md:py-52 lg:max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          {title}
        </motion.h1>

        {intro ?
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-base md:text-lg mt-6 font-normal text-white leading-relaxed max-w-2xl">
            {intro}
          </motion.p>
        : null}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="text-sm mt-6 font-medium text-white uppercase tracking-wide">
          Last Update At: {effectiveDate || ""}
        </motion.p>
      </div>
    </div>
  );
}
