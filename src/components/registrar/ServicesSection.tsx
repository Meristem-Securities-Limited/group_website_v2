"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Share Registration Services",
    description:
      "We block the leaks in your shareholder management. A risk is likely to occur when your business is running without a Registrar or the right Registrar partner. Your shareholders are an important part of your company and echoing that is what we do best at Meristem Registrars. We put ease into shareholder management and ensure your shareholders have a great experience investing in your company.",
    img: "",
    link: "https://meritrade.com/",
    items: [
      "Debt Capital Market Issuances (Bonds, Commercial Papers, etc.)",
      "Debt Refinancing",
      "Regulatory Filings",
      "Have 6-month current accounts",
    ],
  },
  {
    id: 2,
    title: "Public Offer Services",
    description:
      "At Meristem, we understand the need to access a wider pool of investors and raise significant funds for optimal business growth. This is why we make it our duty to walk you through the process, from planning to listing, ensuring compliance and connecting you with investors.",
    img: "",
    link: "share-dividend",
    items: ["Rights Issuance", "Private Placement", "Regulatory Filings"],
  },
  {
    id: 3,
    title: "Right Issue Services",
    description:
      "Will you like to raise capital without increasing the number of shareholders you have? Then this service is for you. As a business, the need for growth is paramount, but at what cost?",
    img: "",
    link: "https://meriboss.com/",
    items: [
      "Corporate Restructuring",
      "Share Capital Restructuring",
      "Business Valuation",
      "M&A Advisory",
      "Divestments",
      "Buyouts",
    ],
  },
  {
    id: 4,
    title: "Bond Register Administration",
    description:
      "The operational requirements of raising capital from the public tends to cause companies to fall short of regulatory expectations. Companies have been fined and worse for not complying with regulations.",
    img: "",
    link: "mutual-funds",
    items: ["Business Plans", "Feasibility Studies", "License Acquisitions"],
  },
  {
    id: 5,
    title: "AGM/EGM Administration",
    description:
      "Officiating at Annual General Meetings (AGM) & Extraordinary General Meetings (EGM); handling proxies and polling activities at these meetings.",
    img: "",
    link: "fixed-income-dealing",
  },
  {
    id: 6,
    title: "Probate Services",
    description:
      "At Meristem, we recognize the pain of losing a loved one, thus we make it our business to ensure that the transfer of their asset is seamless, prompt and stress-free.",
    img: "",
    link: "structured-products",
  },
  // {
  //   id: 7,
  //   title: "Evergreen",
  //   description:
  //     "At Meristem Wealth, we understand that retirement planning is not just about having savings in the bank or investments in shares, real estate, and other assets; it is about making the ...",
  //   img: "",
  //   link: "evergreen",
  // },
  // {
  //   id: 8,
  //   title: "Exchange Traded Funds",
  //   description:
  //     "At Meristem Wealth, we offer our clients a range of Exchange Traded Funds products that meet with varying client needs and objectives.",
  //   img: "",
  //   link: "investment-banking",
  // },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function WealthServiceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="capabilities"
      className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-primary-green">
              Our Products & Services
            </h2>

            <p className="text-gray-600 mt-3 max-w-2xl">
              We offer a wide range of products and services to meet the unique needs of our
              clients.
            </p>
          </div>

          {/* <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-green-900 text-white hover:bg-emerald-800 transition">
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-green-900 text-white hover:bg-emerald-800 transition">
              <ArrowRight size={20} />
            </button>
          </div> */}
        </motion.div>

        <motion.div
          ref={scrollRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {products.map((product) =>
            product?.link.includes("https://") ?
              <a
                key={product.id}
                target="_blank"
                href={product.link}
                className="cursor-pointer hover:bg-emerald-800 group hover:scale-100 transition-transform duration-300 p-4 bg-white border border-emerald-700/30">
                <div className="flex flex-col justify-between gap-4 py-4">
                  <h3 className="text-lg font-semibold group-hover:text-white text-black">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base group-hover:text-white leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  {/* <div className=" mt-9 text-sm lg:text-base flex items-center gap-2 text-black group-hover:text-white font-semibold">
                    <div className="p-2 bg-emerald-800 group-hover:bg-white group-hover:text-green-900 text-white">
                      <ArrowRight size={14} />
                    </div>
                    LEARN MORE
                  </div> */}
                  {/* {product.items.length > 0 && (
                    <div className="flex flex-col gap-2 mt-5">
                      <ul className="flex flex-col gap-2 pt-3">
                        {product.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 py-1 text-sm lg:text-base text-gray-700 group-hover:text-white">
                            <span className="group-hover:text-white text-emerald-800">
                              <CheckCircle2
                                color="currentColor"
                                size={22}
                              />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                  <div className=" mt-9 text-sm lg:text-base flex items-center gap-2 text-black group-hover:text-white font-semibold">
                    <div className="p-2 bg-emerald-800 group-hover:bg-white group-hover:text-green-900 text-white">
                      <ArrowRight size={14} />
                    </div>
                    LEARN MORE
                  </div>
                </div>
              </a>
            : <Link
                key={product.id}
                href={`our-products/${product.link}`}
                className="cursor-pointer hover:bg-emerald-800 group hover:scale-100 transition-transform duration-300 p-4 bg-white border border-emerald-700/30">
                <div className="flex flex-col justify-between gap-4 py-4">
                  <h3 className="text-lg font-semibold group-hover:text-white text-black">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base group-hover:text-white leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  {/* <div className=" mt-9 text-sm lg:text-base flex items-center gap-2 text-black group-hover:text-white font-semibold">
                    <div className="p-2 bg-emerald-800 group-hover:bg-white group-hover:text-green-900 text-white">
                      <ArrowRight size={14} />
                    </div>
                    LEARN MORE
                  </div> */}
                  {/* {product.items.length > 0 && (
                    <div className="flex flex-col gap-2">
                      <ul className="flex flex-col gap-2">
                        {product.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm lg:text-base text-gray-700 group-hover:text-white">
                            <span className="group-hover:text-white text-emerald-800">
                              <CheckCircle2
                                color="currentColor"
                                size={22}
                              />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )} */}
                  <div className=" mt-9 text-sm lg:text-base flex items-center gap-2 text-black group-hover:text-white font-semibold">
                    <div className="p-2 bg-emerald-800 group-hover:bg-white group-hover:text-green-900 text-white">
                      <ArrowRight size={14} />
                    </div>
                    LEARN MORE
                  </div>
                </div>
              </Link>,
          )}
        </motion.div>

        {/* <motion.div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`wealth-management/${product.link}`}
              className="flex-shrink-0 min-w-[280px] sm:min-w-[300px] md:w-[320px] lg:w-[398px] max-w-full cursor-pointer hover:bg-green-50 hover:scale-100 transition-transform duration-300 p-4 bg-white border border-purple-700/30">
              <div className="flex flex-col justify-between gap-4 py-4">
                <h3 className="text-lg font-semibold text-primary-green">{product.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {product.description}
                </p>
                <div className=" mt-9 text-sm lg:text-base flex items-center gap-2 text-primary-green font-semibold">
                  <div className="p-2 bg-emerald-800 text-white">
                    <ArrowRight size={14} />
                  </div>
                  LEARN MORE
                </div>
              </div>
            </Link>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}
