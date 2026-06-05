"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs: Record<string, { question: string; answer: string }[]> = {
  "Services": [
    {
      question: "What services does Capital Limited offer?",
      answer:
        "Meristem Capital Limited offers a range of services such as investment banking, financial and business advisory services, Debt Capital Market services, capital raising, Equity Capital Market services, mergers and acquisitions (M&A), and financial restructuring.",
    },
    {
      question: "How can Meristem Capital Limited help me raise capital for my business?",
      answer:
        "Meristem Capital Limited conducts a preliminary analysis to understand your business need and leverages its extensive network of funders to support your capital-raising endeavours, whether through Private Placements, IPOs, Offer-for-Sale transactions, Right Issues, Bonds, Notes, and Commercial Paper Issuances. As both Issuing House and Financial Adviser, we handle all due diligence, advisory, and administrative tasks, allowing you to focus on the strategic aspects of your business with peace of mind.",
    },
    {
      question: "What is investment banking, and how does it differ from traditional banking?",
      answer:
        "Investment banking is a specialized financial sector focused on strategic advisory and financial matchmaking for large organizations. Investment banks assist with capital raising, mergers and acquisitions, restructuring, and recapitalization for corporations, institutions, and governments, regulated by the SEC, NGX, and FMDQ. Traditional banking, on the other hand, centers on accepting deposits, lending money, and offering basic financial services to businesses and individuals. These include essential services like payments, withdrawals, and account management, all overseen by the Central Bank of Nigeria.",
    },
    {
      question: "How does Meristem Capital Limited provide advisory services?",
      answer:
        "Meristem Capital Limited offers a range of business and financial advisory including strategic planning, valuation analysis, corporate and share capital restructuring, and financial modelling, feasibility studies to help our clients make informed decisions and achieve their business goals.",
    },
  ],
  "Track Records": [
    {
      question: "What industries does Meristem Capital Limited specialize in?",
      answer:
        "Meristem Capital Limited is a sector-agnostic financial advisory company, operating across a wide range of industries including oil and gas, healthcare, manufacturing, energy, finance, and consumer goods, to mention a few.",
    },
  ],
  "Transactions and Fees": [
    {
      question:
        "What is the typical timeline for completing transactions with Meristem Capital Limited?",
      answer: "This varies and depends on the transaction.",
    },
    {
      question: "What sets Meristem Capital Limited apart from other investment banking firms?",
      answer:
        "Meristem Capital Limited has an experienced team of professionals to handle your investment banking needs, with clientocracy as our core we take client service to the next level, a robust track record of successful transactions, and a strong dedication to achieving our client objectives.",
    },
    {
      question: "What are the fees associated with Meristem Capital Limited's services?",
      answer:
        "This depends on what services is being performed. Meristem Capital Limited's services, could entail various fees such as retainer fees, success fees, and transaction-based fees etc all depending on the specific transaction.",
    },
  ],
  "Onboarding": [
    {
      question: "How can I become a client of Meristem Capital Limited?",
      answer: "Send us an email at capital@meristemng.com.",
    },
    {
      question: "How does Meristem Capital Limited ensure confidentiality and privacy?",
      answer:
        "Meristem Capital Limited has a strict adherence to the confidentiality and privacy standards of our clients, by making use of secure communication channels in handling client information, non-disclosure agreements with employees and staff, and compliance with our regulatory requirements.",
    },
  ],
};

const tabs = Object.keys(faqs);

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Services");
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  return (
    <section
      id="faq"
      className="py-16 lg:px-6 max-w-5xl mx-auto">
      <div className="py-16 px-6 mx-auto">
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
                className="relative lg:flex-1 lg:px-10 lg:py-3 py-2 w-full min-w-[140px] lg:min-w-auto rounded-full lg:text-sm text-xs font-medium transition-colors duration-200 focus:outline-none"
                style={{
                  color: activeTab === tab ? "#fff" : "#000",
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
                  <div className="flex items-center justify-between px-5 py-4">
                    <span
                      className="lg:text-base text-sm font-medium"
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
                          className="px-4 pb-5 lg:text-sm text-xs leading-relaxed"
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
