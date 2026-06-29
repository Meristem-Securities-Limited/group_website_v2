"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppleStore, GooglePlay } from "@/app/assets";
import { ContactForm } from "../ContactSection";
import { CheckCircle2 } from "lucide-react";
import TrustServices from "../TrusteeTabs";
import PortfolioManagementPage from "../wealth-management/PortfolioManagement";
import RealEstateServicePage from "../wealth-management/RealEstateManagement";
import StructuredProductsPage from "../wealth-management/StructuredProducts";
import FixedIncomeServicePage from "../wealth-management/FixedIncomeManagement";
import MutualFundPage from "../wealth-management/MutualFund";
import ETFPage from "../wealth-management/ETF";

// const faqs = [
//   {
//     question: "What services do you offer?",
//     answer:
//       "We provide a wide range of financial services including wealth management, investment advisory, and corporate finance solutions.",
//   },
//   {
//     question: "How long have you been in business?",
//     answer:
//       "We have been serving clients for over two decades, building a legacy of trust and expertise.",
//   },
//   {
//     question: "Do you operate internationally?",
//     answer: "Yes, we serve individuals and corporations both in Nigeria and globally.",
//   },
//   {
//     question: "What makes your company unique?",
//     answer:
//       "Our success is built on exceptional customer service, unparalleled financial expertise, and a distinctive workplace culture.",
//   },
//   {
//     question: "How can I get started?",
//     answer:
//       "You can reach out to our team via our contact page to schedule a consultation and begin your journey with us.",
//   },
// ];

export default function ProductPage({
  product,
  backgroundURL = "/meristem-building.webp",
}: {
  product: any;
  backgroundURL?: string;
}) {
  console.log(product);
  const [showModal, setShowModal] = useState<boolean>(false);

  const wealthbuddyPlayStorUrl =
    "https://play.google.com/store/apps/details?id=com.merristem.wealthbuddy";

  const wealthbuddyAppStorUrl = "https://apps.apple.com/ng/app/wealthbuddy/id1501395579";

  const meritradePlayStorUrl =
    "https://play.google.com/store/apps/details?id=com.meristem.meritradeapp";

  const meritradeAppStorUrl = "https://apps.apple.com/ng/app/meritrade/id977562417";

  return (
    <section className="bg-white">
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${backgroundURL}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/20 to-gray-900/90"></div>

        <div className="relative z-10 container lg:px-4 mx-auto flex items-end h-full lg:min-h-[480px] min-h-[400px]">
          <div className="px-4 text-left h-full mb-20 space-y-3">
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              {product.title}
            </motion.h1>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="md:text-xl text-base font-medium text-white leading-tight">
              Managed By: {product.subsidiary}
            </motion.h2>
          </div>
        </div>
      </div>

      {product?.subsidiary === "Meristem Trustees Limited" ?
        <div className=" container mx-auto px-4 bg-white text-black flex items-center justify-center">
          <div className="py-20">
            <TrustServices type={product?.title.toLowerCase()} />
          </div>
        </div>
      : (
        product?.subsidiary === "Meristem Wealth Management Limited" &&
        product?.slug === "asset-portfolio-management"
      ) ?
        <PortfolioManagementPage />
      : (
        product?.subsidiary === "Meristem Wealth Management Limited" &&
        product?.slug === "real-estate-investment"
      ) ?
        <RealEstateServicePage />
      : (
        product?.subsidiary === "Meristem Wealth Management Limited" &&
        product?.slug === "structured-products"
      ) ?
        <StructuredProductsPage />
      : (
        product?.subsidiary === "Meristem Wealth Management Limited" &&
        product?.slug === "fixed-income-dealing"
      ) ?
        <FixedIncomeServicePage />
      : (
        product?.subsidiary === "Meristem Wealth Management Limited" &&
        product?.slug === "mutual-funds"
      ) ?
        <MutualFundPage />
      : (
        product?.subsidiary === "Meristem Wealth Management Limited" &&
        product?.slug === "exchange-trade-funds"
      ) ?
        <ETFPage />
      : <div className=" container mx-auto px-4 bg-white text-black flex items-center justify-center">
          <div className="w-full flex flex-col md:flex-row md:gap-16 gap-10 lg:py-28 py-20">
            <div className="flex-1">
              <div className="min-w-full lg:min-h-120 h-100 w-140">
                <Image
                  width={500}
                  height={500}
                  src={product.img}
                  alt={product.name ?? product.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div
                className="text-base leading-9 font-normal"
                dangerouslySetInnerHTML={{ __html: product.description }}></div>

              {Array.isArray(product.list) && product.list.length > 0 && (
                <div className="flex flex-col gap-2 mt-10">
                  <ul className="flex flex-col gap-2 list-inside">
                    {product.list.map((item: any) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 font-normal py-1 text-sm lg:text-base group-hover:text-white">
                        <span className="group-hover:text-white text-white bg-emerald-800 rounded-full">
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
              )}

              {product?.getStartedUrl && (
                <div className="mt-9">
                  <a
                    target="_blank"
                    className="px-9 py-4 bg-green-800 text-white hover:bg-green-700 cursor-pointer"
                    href={product?.getStartedUrl}>
                    Get Started
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      }

      {product?.subsidiary.includes(
        "Meristem Wealth Management Limited",
        "Meristem Stockbrokers Limited",
      ) && (
        <section className="bg-[#154D34] bg-[url(/bg-banner.png)] bg-no-repeat bg-cover bg-center bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 relative overflow-hidden">
          <div className="relative z-10 container mx-auto py-20 px-4 flex flex-col items-center justify-center text-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {product?.subsidiary === "Meristem Wealth Management Limited" ?
                  "Download Wealthbuddy"
                : product?.subsidiary === "Meristem Stockbrokers Limited" ?
                  "Download Meritrade"
                : "Get In Touch"}
              </h2>

              <p className="text-white text-base md:text-lg leading-relaxed mb-8">
                {product?.subsidiary === "Meristem Wealth Management Limited" ?
                  "Wealthbuddy helps you plan, save, and invest seamlessly with expert guidance from Meristem Wealth Management Limited."
                : product?.subsidiary === "Meristem Stockbrokers Limited" ?
                  "Meritrade gives you direct access to the Nigerian Stock Exchange, empowering you to trade and manage your investments with Meristem Stockbrokers Limited."
                : "Reach out to us today to learn more about our services and how we can support your financial journey."
                }
              </p>

              {/* Download buttons */}
              {(
                ["Meristem Wealth Management Limited", "Meristem Stockbrokers Limited"].includes(
                  product?.subsidiary,
                )
              ) ?
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* Play Store */}
                  <a
                    href={
                      product?.subsidiary === "Meristem Wealth Management Limited" ?
                        wealthbuddyPlayStorUrl
                      : meritradePlayStorUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-black px-5 py-2 rounded-lg hover:opacity-90 transition">
                    <Image
                      src={GooglePlay}
                      alt="Get it on Google Play"
                      className="h-10 w-full"
                    />
                  </a>

                  {/* App Store */}
                  <a
                    href={
                      product?.subsidiary === "Meristem Wealth Management Limited" ?
                        wealthbuddyAppStorUrl
                      : meritradeAppStorUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-black px-5 py-2 rounded-lg hover:opacity-90 transition">
                    <Image
                      src={AppleStore}
                      alt="Download on the App Store"
                      className="h-10 w-full"
                    />
                  </a>
                </div>
              : null}
            </div>
          </div>
        </section>
      )}

      {/* <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold text-emerald-900 mb-12"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          FAQs
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}>
              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <span className="text-lg font-medium text-emerald-900">{faq.question}</span>
                <span className="text-emerald-600 font-bold">
                  {openIndex === index ? "-" : "+"}
                </span>
              </motion.div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-3 text-gray-700 leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}>
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div> */}

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-1050"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className="bg-white rounded-lg shadow-lg max-w-xl w-full relative overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                ✕
              </button>
              <ContactForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
