"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 3,
    title: "Private Trust",
    description:
      "We partner with you to ensure your wishes are executed with professionalism and efficiency. Thus, making sure your legacy lives on in the manner you have decided.",
    img: "",
    link: "private-trust",
  },
  {
    id: 2,
    title: "Public Trust",
    description:
      "Public trust is the degree to which the public believes that business will act in a particular manner because the business has included the public’s interest into its own.",
    link: "public-trust",
  },
  {
    id: 1,
    title: "Corporate Trust",
    description:
      "Do you run a corporate entity? Do you have asset which you will like better managed to earn you profits? Will you like these profits to form funds for syndicated lending or part of the employee benefit",
    img: "",
    link: "corporate-trust",
  },

  // {
  //   id: 4,
  //   title: "Mutual Funds",
  //   description:
  //     "We offer clients the choice of either money market or equity market funds depending on their investment objectives and risk profile, bearing in mind that the level of risk you take, and ...",
  //   img: "",
  //   link: "mutual-funds",
  // },
  // {
  //   id: 5,
  //   title: "Fixed Income Dealing",
  //   description:
  //     "Under our fixed term investment portfolio, we provide a platform for execution, offering clients access to a broad range of instruments. Based on our client's objectives and return ...",
  //   img: "",
  //   link: "fixed-income-dealing",
  // },
  // {
  //   id: 6,
  //   title: "Structured Products",
  //   description:
  //     "At Meristem Wealth, we offer our clients a range of structured products that meet with varying client needs and objectives.",
  //   img: "",
  //   link: "structured-products",
  // },
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
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
