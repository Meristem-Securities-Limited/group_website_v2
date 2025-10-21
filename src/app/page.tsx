"use client";

import CapabilitiesSection from "../components/CapabilitiesSection";
import MeristemContactSection from "../components/ContactSection";
import MeristemTimeline from "../components/MeristemHistoryTimeline";
import MeristemSubsidiaries from "../components/MeristemSubsidiariesSection";
import ProductsSection from "../components/ProductsSection";
import ResearchSection from "../components/ResearchSection";
import WhyChooseMeristem from "../components/WhyChooseMeristemSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="relative bg-[#154D34] bg-[url(/hero-bg-banner.png)] bg-no-repeat bg-cover bg-center min-h-screen flex items-center">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative container mx-auto px-4 sm:px-4 py-32 sm:py-40 md:py-48 lg:mt-24 mt-40">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white font-semibold leading-tight mb-6
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Building Pathways to Wealth that Last
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-gray-100 leading-relaxed mb-10
        text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
              We provide a full suite of investment, advisory, and trust solutions designed to help
              you grow, preserve, and seamlessly transfer your wealth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}>
              <a
                href="#capabilities"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100
          text-sm sm:text-base font-bold text-gray-700 shadow-md transition-all duration-300">
                GET STARTED
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CapabilitiesSection />
      <ProductsSection />
      <MeristemTimeline />
      <MeristemSubsidiaries />
      <WhyChooseMeristem />
      <ResearchSection />
      <MeristemContactSection />
    </>
  );
}
