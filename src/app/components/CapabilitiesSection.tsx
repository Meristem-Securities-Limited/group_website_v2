"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HappyFamily, HouseDisplay, MeritradeMockUp, WealthBuddyMockup } from "../assets";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Stockbroking (Meritrade)",
    description:
      "Buy and sell equities and bonds in real time through Meristem’s online trading platform. Access market research, monitor portfolios, and execute trades seamlessly.",
    img: MeritradeMockUp,
    link: "#stockbroking",
  },
  {
    id: 2,
    title: "Mutual Funds",
    description:
      "Invest in professionally managed mutual funds across equities, fixed income, and money market instruments designed to meet diverse financial goals.",
    img: WealthBuddyMockup,
    link: "#mutual-funds",
  },
  {
    id: 3,
    title: "Fixed Income & Bonds",
    description:
      "Secure stable returns with treasury bills, bonds, and fixed income portfolios, tailored to investors seeking predictable and low-risk income streams.",
    img: HouseDisplay,
    link: "#fixed-income",
  },
  {
    id: 4,
    title: "Dollar Investments",
    description:
      "Preserve and grow wealth in foreign currency through products like the Meristem Dollar Fund and Structured Dollar Portfolios, offering global exposure and stability.",
    img: HappyFamily,
    link: "#dollar-investments",
  },
  {
    id: 5,
    title: "Real Estate-Backed Portfolios",
    description:
      "Diversify your investment with secure real estate opportunities — including Real Estate Advantage and Ethical Portfolios backed by physical assets.",
    img: MeritradeMockUp,
    link: "#real-estate",
  },
  {
    id: 6,
    title: "Advisory & Wealth Management",
    description:
      "Comprehensive wealth management, financial advisory, retirement planning, and estate succession services to help preserve and transfer wealth effectively.",
    img: WealthBuddyMockup,
    link: "#wealth-management",
  },
];

export default function CapabilitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white lg:py-28 py-19">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-semibold text-primary-green">
              Our Capabilities
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-gray-600 mt-3 max-w-2xl">
              Provides premium financial services that help you grow and preserve your wealth
              through expert market analysis and personalized investment strategies.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-green-900 text-white hover:bg-primary-green transition">
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-green-900 text-white hover:bg-primary-green transition">
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* Products */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth mt-17">
          {products.map((product, index) => (
            <motion.a
              href={product.link}
              key={product.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-shrink-0 hover:bg-green-50 hover:scale-105 lg:p-4 md:w-[320px] lg:w-[398px] pr-3 md:pr-0 max-w-full relative flex flex-col">
              <div className="flex flex-col flex-1 py-5 gap-9">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary-green">{product.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="w-auto">
                    <a
                      href={product.link}
                      className="flex items-center gap-2 text-primary-green font-semibold">
                      <div className="p-2 bg-primary-green text-white">
                        <ArrowRight
                          size={16}
                          color="currentColor"
                        />
                      </div>
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
