"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs: Record<string, { question: string; answer: string }[]> = {
  "Onboading": [
    {
      question: "How can I open a stockbroking account?",
      answer:
        'Create a stockbroking account in no time by clicking on the "Create an Account" icon on the MeriTrade mobile app or website (www.meritrade.com) and fill in your Contact Information, Next of Kin Information, Bank Information, and KYC Information.',
    },
    {
      question: "Can I open an account for a minor?",
      answer:
        "YES, you can. The following KYC documents are required: Birth certificate of the minor, passport photograph and parent’s KYC documents.",
    },
    {
      question: "What are the requirements for opening an account for people in the diaspora?",
      answer: "Notarized KYC documents listed above.",
    },
    {
      question: "What is a CSCS account?",
      answer:
        "Central Securities Clearing System (CSCS) is a financial market infrastructure (FMI) for the Nigerian capital market which serves as a central depository for share certificates of companies quoted on the Nigerian stock exchange and sub-registry for all quoted securities (i.e. all shares bought and sold on the exchange are kept here).",
    },
    {
      question: "How long does it take to open a CSCS account?",
      answer: "It takes 24 to 48 hours once all the KYC requirements are met.",
    },
  ],
  "Buying Shares": [
    {
      question: "Do you advise on what shares to buy?",
      answer:
        "Yes. We give weekly stock recommendations to our clients based on strong fundamental and technical analysis. This can be accessed in the “Research” section on the platform.",
    },
    {
      question: "Can I view the historical performance of any stock on your platform?",
      answer:
        "Yes. The “Securities” section on the platform provides you with a list of all stocks that are listed on the Nigerian Exchange and their historical performance.",
    },
    {
      question: "How do I know when companies declare dividends?",
      answer:
        "Once you have notifications enabled on the Meritrade app, you will constantly get dividend declarations of companies as well as other corporate actions.",
    },
  ],
};

const tabs = Object.keys(faqs);

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Onboading");
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  return (
    <section
      id="faq"
      className="py-16 lg:px-6 max-w-3xl mx-auto">
      <div className="py-16 px-6 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight capitalize">
            Frequently asked questions
          </h2>
        </div>

        <div className="mb-8">
          <div className="flex bg-gray-100 rounded-full p-1.5 gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(null);
                }}
                className="relative lg:flex-1 lg:px-10 lg:py-3 py-2 w-full min-w-[140px] lg:min-w-auto rounded-full lg:text-base text-sm font-medium transition-colors duration-200 focus:outline-none"
                style={{
                  color: activeTab === tab ? "#fff" : "#000",
                }}>
                {activeTab === tab && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "#154D34" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3">
            {faqs[activeTab].map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.2 }}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="cursor-pointer rounded-xl border transition-colors duration-200"
                  style={{
                    borderColor: isOpen ? "#154D34" : "#e5e7eb",
                    backgroundColor: "#fff",
                  }}>
                  <div className="flex items-center justify-between px-5 py-4">
                    <span
                      className="lg:text-lg text-base font-medium"
                      style={{ color: "#111827" }}>
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4"
                      style={{
                        backgroundColor: isOpen ? "#154D34" : "#f3f4f6",
                      }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isOpen ? "#fff" : "#154D34"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}>
                        <p
                          className="px-4 pb-5 lg:text-base text-sm leading-relaxed"
                          style={{ color: "#6b7280" }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
