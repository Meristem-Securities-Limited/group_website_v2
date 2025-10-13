"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MeristemSubsidiaries() {
  const subsidiaries = [
    {
      number: "01",
      name: "Meristem Stockbrokers Limited",
      description: "is a wholly owned subsidiary of Meristem Securities Limited (MSL) and a licensed Trading License Holder (TLH) of the Nigerian Exchange (NGX), regulated by the Securities and Exchange Commission (SEC). MSBL is a leading brokerage and research firm serving clients across Africa, Europe, the Middle East, and the USA. It has consistently ranked among the top 10 brokerage firms in Nigeria since 2008 and made history in 2014 by executing the largest single trade on the NGX. The firm also pioneered online real-time stock trading in Nigeria with the launch of its digital platform, Meritrade.",
    },
    {
      number: "02",
      name: "Meristem Registrars and Probate Limited",
      description: "Redefining Shareholder Management And Probate Services",
    },
    {
      number: "03",
      name: "Meristem Wealth Management Limited",
      description: "Tailored strategies for wealth creation and preservation",
    },
    {
      number: "04",
      name: "Meristem Family Office Limited",
      description: "Preserve the legacy. Protect the future.",
    },
    {
      number: "05",
      name: "Meristem Capital Limited",
      description: "Raising capital. Realising potential. Reshaping businesses.",
    },
    {
      number: "06",
      name: "Meristem Finance Limited",
      description: "Financing Solutions Tailored to You",
    },
    {
      number: "07",
      name: "Meristem Trustees Limited",
      description: "Leave the Things You Love for Those You Love",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 bg-white">
        <div className="pb-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-green">
            Our Subsidiaries
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Provides premium financial services that help you grow and preserve your wealth through
            expert market analysis and personalized investment strategies.
          </p>
        </div>

        <div className="space-y-0 mt-5">
          {subsidiaries.map((subsidiary, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }} // start off-screen to the right
              whileInView={{ opacity: 1, x: 0 }} // slide in when visible
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center justify-between py-8 border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
              <div className="flex items-start lg:gap-17 gap-6">
                <div>
                  <span className="text-gray-600 text-lg font-medium min-w-[3rem]">
                    {subsidiary.number}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2">
                    {subsidiary.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{subsidiary.description}</p>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
