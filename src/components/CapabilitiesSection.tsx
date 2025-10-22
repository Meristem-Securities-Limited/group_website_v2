"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HappyFamily, HouseDisplay, MeritradeMockUp, WealthBuddyMockup } from "../app/assets";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    title: "Stockbroking (Meritrade)",
    description:
      "Buy and sell equities in real time through Meristem’s online trading platform. Access market research, monitor portfolios, and execute trades seamlessly.",
    img: MeritradeMockUp,
    link: "#stockbroking",
  },
  {
    id: 2,
    title: "Mutual Funds",
    description:
      "Invest in professionally managed mutual funds spanning equities, fixed income, and money market instruments, expertly structured to help you achieve your short and long-term financial goals.",
    img: WealthBuddyMockup,
    link: "#mutual-funds",
  },
  {
    id: 3,
    title: "Loans and Leases",
    description:
      "Access tailored financing solutions for personal and business needs. We offer flexible loan options and asset leasing services designed to support growth and financial stability.",
    img: WealthBuddyMockup,
    link: "#mutual-funds",
  },
  {
    id: 4,
    title: "Probate Services",
    description:
      "We deliver structured and transparent estate administration, ensuring that every process, from asset gathering to transfer, is handled efficiently, securely, and in full compliance.",
    img: HouseDisplay,
    link: "#fixed-income",
  },
  {
    id: 5,
    title: "Trusteeship",
    description:
      "Safeguard and transfer wealth seamlessly with Meristem Trustees Limited. Our services include Wills, Living Trusts, Education Trusts, and Corporate Trusts, as well as the Diaspora Trust for Nigerians living abroad.",
    img: HappyFamily,
    link: "#dollar-investments",
  },
  {
    id: 6,
    title: "Family Office",
    description:
      "Provides personalised wealth management and succession planning solutions. including Legacy Planning, Investment Management, Business Advisory, Philanthropy, Family Governance, and Health & Longevity Planning.",
    img: MeritradeMockUp,
    link: "#real-estate",
  },
  {
    id: 7,
    title: "Investment Banking",
    description:
      "We provide tailored financial advisory and capital-raising solutions that help businesses unlock growth opportunities. From mergers and acquisitions to debt and equity financing, we deliver strategic insights with precision, confidentiality, and excellence.",
    img: WealthBuddyMockup,
    link: "#wealth-management",
  },
];

export default function CapabilitiesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useRouter();
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
      id="capabilities"
      className="bg-white lg:pt-30 pt-20 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-12">
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
              We provide premium financial services designed to help you grow, manage, and preserve
              your wealth through expert market insights and personalised investment strategies.
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
              href={product?.link}
              onClick={() => navigate.push(product.link)}
              key={product.id}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-shrink-0 cursor-pointer hover:bg-green-50 hover:scale-105 lg:p-4 md:w-[320px] lg:w-[398px] pr-3 md:pr-0 max-w-full relative flex flex-col">
              <div className="flex flex-col flex-1 py-5 gap-9">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary-green">{product.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed font-normal">
                    {product.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="w-auto">
                    <span className="flex items-center gap-2 text-primary-green font-semibold">
                      <div className="p-2 bg-primary-green text-white">
                        <ArrowRight
                          size={16}
                          color="currentColor"
                        />
                      </div>
                      LEARN MORE
                    </span>
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
