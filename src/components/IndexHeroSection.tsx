"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // stagger the children animations
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 80 }, // start offscreen
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative bg-[#154D34] bg-[url(/hero-banner.png)] bg-no-repeat bg-cover bg-center min-h-screen flex items-center overflow-x-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative container mx-auto px-4 sm:px-4 py-32 sm:py-40 md:py-48 lg:mt-24 mt-40">
        <motion.div
          className="text-left max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <motion.h1
            className="text-white font-semibold leading-tight mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            variants={itemVariants}>
            Building Pathways to Wealth that Last
          </motion.h1>

          <motion.p
            className="text-gray-100 leading-relaxed mb-10 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl"
            variants={itemVariants}>
            We provide a full suite of investment, advisory, and trust solutions designed to help
            you grow, preserve, and seamlessly transfer your wealth.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#capabilities"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100 text-sm sm:text-base font-bold text-gray-700 shadow-md transition-all duration-300">
              GET STARTED
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
