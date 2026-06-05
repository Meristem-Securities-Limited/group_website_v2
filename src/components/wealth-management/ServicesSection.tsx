"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Bridge Financing",
    description:
      "Meristem Wealth Management Limited harnesses its specialized investment management expertise together with the vast resources of the Meristem Group to provide customized solutions.",
    img: "",
    link: "asset-portfolio-management",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
  {
    id: 2,
    title: "Succession Planning",
    description:
      "Meristem Wealth Succession Planning service is our service that provides founders with ability to plan for who succeeds them and carries on their legacy. It is a process of identifying and developing the succession plans that ensure legacy lives on.",
    img: "",
    link: "succession-planning",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
  {
    id: 3,
    title: "Real Estate Services",
    description:
      "Real Estate Investments basically refers to investment in Landed Properties either physically (Direct Holding) or through investment in Real Estate Funds (Indirect Holding). The services...",
    img: "",
    link: "https://realestate.meristemng.com/",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
  {
    id: 4,
    title: "Mutual Funds",
    description:
      "We offer clients the choice of either money market or equity market funds depending on their investment objectives and risk profile, bearing in mind that the level of risk you take, and ...",
    img: "",
    link: "https://wealthbuddy.ng/mutual-funds",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
  {
    id: 5,
    title: "Fixed Income Dealing",
    description:
      "Under our fixed term investment portfolio, we provide a platform for execution, offering clients access to a broad range of instruments. Based on our client's objectives and return ...",
    img: "",
    link: "https://wealthbuddy.ng/mutual-funds",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
  {
    id: 6,
    title: "Structured Products",
    description:
      "At Meristem Wealth, we offer our clients a range of structured products that meet with varying client needs and objectives.",
    img: "",
    link: "structured-products",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
  {
    id: 7,
    title: "Evergreen",
    description:
      "At Meristem Wealth, we understand that retirement planning is not just about having savings in the bank or investments in shares, real estate, and other assets; it is about making the ...",
    img: "",
    link: "evergreen",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
  {
    id: 8,
    title: "Exchange Traded Funds",
    description:
      "At Meristem Wealth, we offer our clients a range of Exchange Traded Funds products that meet with varying client needs and objectives.",
    img: "",
    link: "investment-banking",
    items: [
      "Disciplined investment management process",
      "Insightful support from our research team",
      "Diversified approach towards portfolio construction",
      "Excellent service delivery platform and systems",
      "Extensive risk management framework",
      "Commitment to maintaining client confidentiality",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function WealthServiceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const distance = scrollRef.current.offsetWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };

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
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          {products.map((product) => (
            <Link
              target={product.link.includes("https://") ? "_blank" : "_self"}
              key={product.id}
              href={
                product.link.includes("https://") ?
                  product?.link
                : `wealth-management/${product.link}`
              }
              className="cursor-pointer hover:bg-emerald-800 group hover:scale-100 transition-transform duration-300 p-4 bg-white border border-emerald-700/30">
              <div className="flex flex-col justify-between gap-4 py-4">
                <h3 className="text-lg font-semibold group-hover:text-white text-black">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base group-hover:text-white leading-relaxed">
                  {product.description}
                </p>
                <div className=" mt-9 text-sm lg:text-base flex items-center gap-2 text-black group-hover:text-white font-semibold">
                  <div className="p-2 bg-emerald-800 group-hover:bg-white group-hover:text-green-900 text-white">
                    <ArrowRight size={14} />
                  </div>
                  LEARN MORE
                </div>
              </div>
            </Link>
          ))}
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
