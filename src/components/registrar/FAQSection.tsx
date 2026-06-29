"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs: Record<string, { question: string; answer: string }[]> = {
  "Shares": [
    {
      question: "How can I find out how many shares I hold?",
      answer:
        "You can determine the number of shares you hold by adding up all the units on your share certificates and holdings in CSCS, or by contacting Meristem Registrars.",
    },
    {
      question: "How can l claim my outstanding share certificate?",
      answer:
        "Kindly submit all your share certificates (if any) to your stockbroker for full dematerialization of your shareholdings into your CSCS account.",
    },
    {
      question: "My shareholding with you and that at CSCS/stockbroker differs:",
      answer:
        "Please contact us for balance units (indemnity/full dematerialisation) of your shareholdings into your CSCS account",
    },
    // {
    //   question: "How does Meristem Capital Limited provide advisory services?",
    //   answer:
    //     "Meristem Capital Limited offers a range of business and financial advisory including strategic planning, valuation analysis, corporate and share capital restructuring, and financial modelling, feasibility studies to help our clients make informed decisions and achieve their business goals.",
    // },
  ],
  "Dividends": [
    {
      question: "How do I get my dividend paid directly into my bank account?",
      answer:
        "Kindly download the e-dividend form, complete the downloaded form and scan the form to info@meristemregistrars.com for onward processing through e-Dividend Mandate Management System (e-DMMS) portal",
    },
  ],
  "Right Issues": [
    {
      question:
        "I need to subscribe to the Zenith Bank Rights Issue but I do not know my Registrars Account Number (RAN). How can I get my RAN?",
      answer:
        "Open this link: https://vericlient.zenithbank.com/rightscircular/ then search for your name and pick the Registrars Account Number (RAN) that is by your name.",
    },
    // {
    //   question: "What sets Meristem Capital Limited apart from other investment banking firms?",
    //   answer:
    //     "Meristem Capital Limited has an experienced team of professionals to handle your investment banking needs, with clientocracy as our core we take client service to the next level, a robust track record of successful transactions, and a strong dedication to achieving our client objectives.",
    // },
    // {
    //   question: "What are the fees associated with Meristem Capital Limited's services?",
    //   answer:
    //     "This depends on what services is being performed. Meristem Capital Limited's services, could entail various fees such as retainer fees, success fees, and transaction-based fees etc all depending on the specific transaction.",
    // },
  ],
};

const tabs = Object.keys(faqs);

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Shares");
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  return (
    <section
      id="faq"
      className="py-16 lg:px-6 max-w-4xl mx-auto">
      <div className="py-16 px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight capitalize">
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
