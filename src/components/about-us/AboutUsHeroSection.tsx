"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUsHeroSection() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/meristem-building.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/20 to-gray-900/90"></div>

      <div className="relative z-10 container px-4 mx-auto flex items-end h-full min-h-[680px]">
        <div className="px-4 text-left h-full mb-29">
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-medium text-white leading-tight">
            Two decades of building
            <br />
            wealth, trust and innovation
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
