"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Bridge Financing",
    description:
      "Bridge financing, also known as bridge loans, is short-term financing designed to provide companies with funds until they to real estate development firms working on projects with off-takers. It helps these firms meet deadlines, hedge against inflation, and cover expenses before receiving full off-take payments.",
    img: "",
    link: "#",
    items: [
      "Company Profile",
      "Corporate Current Bank Account Statements",
      "Regulatory Filings",
      "2 Passport Photographs",
      "Bank Statements (6 month most recent)",
      "Audited financial statement/Management",
      "Utility Bill",
      "Letter of Intent",
      "Proforma Invoice",
    ],
  },
  {
    id: 2,
    title: "Meristem Finance Lease",
    description:
      "This interest-rate-friendly option helps you access the capital to acquire the equipment needed to boost your growth. We finance a significant portion of the cost, with flexible repayment plans. All you must do is pay an affordable and convenient monthly or annual rental.",
    img: "",
    link: "share-dividend",
    items: [
      "Company Profile",
      "Corporate Current Bank Account Statements",
      "Regulatory Filings",
      "2 Passport Photographs",
      "Bank Statements (6 month most recent)",
      "Audited financial statement/Management",
      "Utility Bill",
      "Letter of Intent",
      "Proforma Invoice",
    ],
  },
  {
    id: 3,
    title: "Working Capital Loan",
    description:
      "We offer a robust suite of Financial advisory services ranging from our expert guidance on corporate and share capital restructuring to optimize your operational efficiency, accurate business valuations of your company's worth to help make informed decisions, mergers and acquisitions (M&A) support and advisory and for businesses hoping to sell some assets or divest entire entities, we offer expertise in divestments and buyouts.",
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
    title: "Local Purchase Order (LPO) Financing",
    description:
      "We offer solid business plans that outline our client's goals, strategies, and financial projections and ensure their business idea has strong potential with thorough feasibility studies.",
    img: "",
    link: "mutual-funds",
    items: ["Business Plans", "Feasibility Studies", "License Acquisitions"],
  },
  {
    id: 5,
    title: "Local Purchase Order (LPO) Financing",
    description:
      "We offer solid business plans that outline our client's goals, strategies, and financial projections and ensure their business idea has strong potential with thorough feasibility studies.",
    img: "",
    link: "mutual-funds",
    items: ["Business Plans", "Feasibility Studies", "License Acquisitions"],
  },

  {
    id: 55,
    title: "Invoice Discounting",
    description:
      "Get access to working capital quickly by leveraging your unpaid invoices. We offer competitive interest rates and flexible repayment plans.",
    img: "",
    link: "fixed-income-dealing",
  },
  {
    id: 68,
    title: "Cash Backed Facility",
    description:
      "Need a quick cash injection? Use your existing cash reserves to secure short-term, cash-backed loans for immediate liquidity.",
    img: "",
    link: "structured-products",
  },
  {
    id: 70,
    title: "Equity Backed Facility",
    description:
      "Unlock the potential of your existing investments. Access loans secured by your equities without the need to sell them.",
    img: "",
    link: "evergreen",
  },
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
                  <p className="text-gray-600 text-sm md:text-base group-hover:text-white leading-relaxed line-clamp-2">
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
                  <p className="text-gray-600 text-sm md:text-base group-hover:text-white leading-relaxed line-clamp-2">
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
                      <ArrowRight
                        size={14}
                        color="currentColor"
                      />
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
