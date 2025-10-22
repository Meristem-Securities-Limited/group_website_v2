"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  HappyFamily,
  HouseDisplay,
  MeritradeMockUp,
  MORE,
  SimpleWill,
  WealthBuddyMockup,
} from "../app/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Meritrade",
    description:
      "Trade equities in real time from anywhere. Our secure online platform puts the Nigerian Stock Exchange and beyond at your fingertips.",
    img: MeritradeMockUp,
    link: "https://meritrade.com",
  },
  {
    id: 2,
    title: "Wealthbuddy",
    description:
      "Invest effortlessly in mutual funds, commercial papers, savings, bonds, and treasury bills. Grow your wealth through curated investment options built around your goals.",
    img: WealthBuddyMockup,
    link: "https://wealthbuddy.ng",
  },
  {
    id: 3,
    title: "Real Estate",
    description:
      "Explore, invest, and manage real estate seamlessly. We provide access to premium property opportunities and professional management that keeps your assets performing at their best.",
    img: HouseDisplay,
    link: "https://realestate.meristemng.com",
  },
  {
    id: 5,
    title: "Simple Will",
    description:
      "Create a Simple Will to clearly state how your assets should be managed even when you are not here. It’s quick, secure, and gives you confidence that your wishes will be respected.",
    img: SimpleWill,
    link: "http://meristemtrustees.com/simple-will/",
  },
  {
    id: 4,
    title: "MORE (Meristem Orientation for Rising Entrepreneurs)",
    description:
      "Learn the essentials of investing and entrepreneurship through engaging content and expert-led sessions designed to empower the next generation of wealth creators.",
    img: MORE,
    link: "https://app.more.meristemng.com",
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
    <section
      id="products"
      className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-12">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-5xl font-semibold text-primary-green">Our Platforms</h2>
            <p className="text-gray-600 mt-3 max-w-2xl text-lg md:text-base">
              Explore Meristem’s innovative platforms designed to simplify how you invest, trade,
              and manage assets. From real estate to financial learning, we make it effortless to
              grow and sustain wealth on your own terms.
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
              className="flex-shrink-0 md:w-[360px] w-full lg:w-[398px] relative flex flex-col">
              <div className="w-full bg-[#154D3433] min-h-[200px] flex items-center justify-center overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.title}
                  className="w-full max-h-[400px] min-h-[400px] h-full object-cover"
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
