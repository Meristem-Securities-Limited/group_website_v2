"use client";

import CapabilitiesSection from "./components/CapabilitiesSection";
import MeristemContactSection from "./components/ContactSection";
import MeristemTimeline from "./components/MeristemHistoryTimeline";
import MeristemSubsidiaries from "./components/MeristemSubsidiariesSection";
import ProductsSection from "./components/ProductsSection";
import ResearchSection from "./components/ResearchSection";
import WhyChooseMeristem from "./components/WhyChooseMeristemSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="bg-[#154D34] bg-[url(/hero-banner.webp)] bg-no-repeat bg-cover bg-center flex items-center">
        <div className="container mx-auto lg:pt-52 pt-40 pb-18 px-4">
          <motion.div
            initial={{ opacity: 0, x: 100 }} // start off to the right
            whileInView={{ opacity: 1, x: 0 }} // slide into place
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-left pt-15">
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:text-7xl md:text-5xl text-white text-5xl max-w-2xl font-medium leading-tight mb-8">
              Building pathways to wealth that last
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-100 max-w-3xl mb-12 leading-relaxed">
              We provide a full suite of investment, advisory, and trust solutions designed to help
              you grow, preserve, and seamlessly transfer your wealth.
            </motion.p>

            {/* Optional button with delay */}
            {/* 
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <a
          href="#"
          className="inline-flex items-center px-7 py-5 bg-white text-sm font-bold text-gray-700 border border-gray-300"
        >
          GET STARTED
        </a>
      </motion.div>
      */}
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
