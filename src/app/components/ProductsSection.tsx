"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HappyFamily, HouseDisplay, MeritradeMockUp, WealthBuddyMockup } from "../assets";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Meritrade",
    description:
      "Trade equities and bonds in real time from anywhere. Our secure online platform puts the Nigerian Stock Exchange and beyond at your fingertips.",
    img: MeritradeMockUp,
    link: "#",
  },
  {
    id: 2,
    title: "Real Estate",
    description:
      "Buy or sell premium properties through a secure platform backed by Meristem. Access curated listings, seamless transactions, and expert support — all in one place.",
    img: HouseDisplay,
    link: "#",
  },
  {
    id: 3,
    title: "Wealthbuddy",
    description:
      "Save and invest smarter with flexible plans built around your goals. WealthBuddy helps you grow your money effortlessly while keeping it accessible.",
    img: WealthBuddyMockup,
    link: "#",
  },
  {
    id: 4,
    title: "MAPP",
    description:
      "Mapp is designed to simplify the complexities of wealth management and wealth transfer, providing you with the tools needed to organize, track and transfer your assets effortlessly.",
    img: HappyFamily,
    link: "#",
  },
  {
    id: 5,
    title: "MeriAssitant",
    description:
      "Mapp is designed to simplify the complexities of wealth management and wealth transfer, providing you with the tools needed to organize, track and transfer your assets effortlessly.",
    img: MeritradeMockUp,
    link: "#",
  },
];

export default function ProductsSection() {
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-12">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-semibold text-primary-green">Our Platform</h2>
            <p className="text-gray-600 mt-3 max-w-2xl text-lg md:text-base">
              Provides premium financial services that help you grow and preserve your wealth
              through expert market analysis and personalized investment strategies.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex gap-3 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-green-900 text-white hover:bg-primary-green">
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-green-900 text-white hover:bg-primary-green">
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex-shrink-0 w-[360px] sm:w-[320px] md:w-[398px] relative flex flex-col">
              <div className="w-full bg-[#154D3433] flex items-center justify-center overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
