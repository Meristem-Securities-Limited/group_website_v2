"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs: Record<string, { question: string; answer: string }[]> = {
  "Trust": [
    {
      question: "When should I establish a Trust?",
      answer:
        "When you have amassed wealth to an extent, intending to transfer it to your beneficiaries.",
    },
    {
      question: "Who owns the property in a Trust?",
      answer:
        "By law the assets in a trust are owned by the Trustee, however such ownership is restricted by the terms of the trust and legal constraints.",
    },
    {
      question: "What kind of assets are important to establish a Trust?",
      answer:
        "Everything of value can be put in a Trust E.g. Real Estate, Stocks, Investments etc.",
    },
    {
      question: "Can a beneficiary withdraw money from a Trust?",
      answer:
        "A beneficiary can only access the Trust fund in accordance with the provision of the Trust deed.",
    },
    {
      question: "What are the advantages of a Trust?",
      answer:
        "Yes, however the extent of control is as provided by applicable law and the Trust deed.",
    },
    {
      question: "I have a living trust already; do I also need a will?",
      answer:
        "This is largely dependent on your estate planning objective and the kind of assets owned, some assets may be suitably planned by writing a will.",
    },
    {
      question: "Can I have multiple Trusts?",
      answer: "Yes, as long as those trust do not touch on the same subject matter.",
    },
  ],
  "Estate Planning": [
    {
      question: "What is the process of transferring assets to beneficiaries?",
      answer: "Through a will, a deed of gift or a trust",
    },
    {
      question: "Who can be my beneficiaries?",
      answer:
        "Anyone you choose to give part of your assets to e.g., children, spouse, siblings, friends.",
    },
    {
      question: "How do I revise my will?",
      answer: "To amend your will, kindly send an email to trustees@meristemng.com",
    },
  ],
  "MAPP": [
    {
      question: "What kind of assets are important to track on MAPP?",
      answer: "Everything of value can be monitored and tracked using MAPP by Meristem.",
    },
    {
      question: "Why should I use MAPP By Meristem when I already have an Estate Plan?",
      answer:
        "MAPP by Meristem gives you the opportunity to view all your assets, no matter the type and wherever they are. It also gives your beneficiary an idea of what your assets are, and where they may be found. This is relevant for the purpose of processing Letters of Administration for example.",
    },
  ],
  "SIMPLE WILL": [
    {
      question:
        "Is it possible to meet virtually with an in-house solicitor while writing a simple Will?",
      answer:
        "No. there is no option to meet with an in-house solicitor. The Simple Will process is fully automated.",
    },
    {
      question:
        "Is there a benchmark for how much assets you need to have before you can create a Simple Will?",
      answer:
        "There is no benchmark for the assets. Any bank account, Retirement Savings Account (RSA), and CSCS account is acceptable regardless of the amount in it.",
    },
    {
      question: "Wills writing usually require a third-party witness, who can be my witness?",
      answer:
        "The Witness will should be with you to fill their details on the form before submission. Please note that the beneficiaries or executors cannot be a witness.",
    },
    {
      question: "Who can be my Will executor?",
      answer: "Any Trusted person above the age of 18.",
    },
    {
      question: "Can I include real estate & tangible properties in the Simple Will?",
      answer:
        "The Simple Will does not accommodate those, but you can send an email to Trustees@meristemng.com to draft a more comprehensive Will.",
    },
    {
      question: "Would anyone find out what I have documented in my Will?",
      answer: "No, A Will is a confidential document.",
    },
    {
      question: "Can a beneficiary also be an executor?",
      answer: "Yes",
    },
  ],
};

const tabs = Object.keys(faqs);

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Trust");
  const [openIndex, setOpenIndex] = useState<number | null>(3);

  return (
    <section
      id="faq"
      className="py-16 lg:px-6 max-w-5xl mx-auto">
      <div className="py-16 px-6 max-w-5xl mx-auto">
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
