"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs: Record<string, { question: string; answer: string }[]> = {
  "Fixed Deposits": [
    {
      question: "What are Fixed Deposits?",
      answer:
        "Fixed Deposits are investment instruments where you deposit a lump sum with a financial institution for a fixed tenure at a predetermined interest rate. Your capital is preserved and you earn guaranteed returns.",
    },
    {
      question: "What is the minimum investment amount?",
      answer:
        "The minimum investment amount for Fixed Deposits varies depending on the tenor and type of deposit. Please contact us at crmwealth@meristemng.com for current rates and minimums.",
    },
    {
      question: "Can I withdraw before maturity?",
      answer:
        "Early withdrawal is possible but may attract a penalty. The specific terms depend on the tenor and amount invested. We recommend holding until maturity to earn the full interest.",
    },
  ],
  "Treasury Bills": [
    {
      question: "What are Treasury Bills?",
      answer:
        "Treasury Bills (T-Bills) are short-term government debt instruments issued by the Central Bank of Nigeria on behalf of the Federal Government. They are considered one of the safest investment instruments available.",
    },
    {
      question: "What are the tenors?",
      answer:
        "Treasury Bills are typically issued in three tenors: 91 days (3 months), 182 days (6 months), and 364 days (1 year). Each tenor offers different yields based on market conditions.",
    },
    {
      question: "Who can invest in Treasury Bills?",
      answer:
        "Any individual or corporate entity — both resident and non-resident — can invest in Treasury Bills. You simply need a bank account and a valid means of identification to get started.",
    },
    {
      question: "How can I participate?",
      answer:
        "Auctions take place every fortnight (i.e. once in every 2 weeks). To participate, kindly navigate to https://forms.meristemng.com/mtlip-form/ or send us a mail at crmwealth@meristemng.com",
    },
  ],
  "Mutual Funds": [
    {
      question: "What are Mutual Funds?",
      answer:
        "Mutual Funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, and other securities. They are managed by professional fund managers on your behalf.",
    },
    {
      question: "What types of Mutual Funds do you offer?",
      answer:
        "We offer a range of mutual funds including money market funds, equity funds, fixed income funds, and balanced funds — each suited to different risk appetites and investment goals.",
    },
    {
      question: "How are returns distributed?",
      answer:
        "Returns are distributed based on the fund type. Some funds pay out dividends periodically while others reinvest returns to compound your investment. Your fund manager will provide full details.",
    },
    {
      question: "What are the benefits of investing in the fund?",
      answer:
        "The objective of the Fund is to provide unitholders with long-term capital growth and regular income by investing in a diversified portfolio of fixed income instruments.",
    },
    {
      question:
        "How do interested investors subscribe to the fund and sell or redeem their investment?",
      answer:
        "Investors can subscribe to the Fund by completing the Application Form or through our Wealthbuddy app. Investors can redeem online, through the Wealthbuddy app or by completing and submitting the redemption form. Redemption can be done on part or all the units at the prevailing Bid NAV price (price at which the fund will buy back from investor).",
    },
  ],
};

const tabs = Object.keys(faqs);

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Treasury Bills");
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  return (
    <section
      id="faq"
      className="py-16 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight capitalize">
          Frequently asked questions
        </h2>
      </div>

      <div className="flex justify-center mb-8">
        <div className="flex bg-gray-100 rounded-full p-2 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className="relative px-10 py-3 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none"
              style={{
                color: activeTab === tab ? "#fff" : "#6b7280",
              }}>
              {activeTab === tab && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "green" }}
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
                  borderColor: isOpen ? "green" : "#e5e7eb",
                  backgroundColor: "#fff",
                }}>
                <div className="flex items-center justify-between px-6 py-5">
                  <span
                    className="text-base font-medium"
                    style={{ color: "#111827" }}>
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ml-4"
                    style={{
                      backgroundColor: isOpen ? "green" : "#f3f4f6",
                    }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "#fff" : "green"}
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
                        className="px-6 pb-5 text-sm leading-relaxed"
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
    </section>
  );
}
