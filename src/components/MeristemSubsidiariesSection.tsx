"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function MeristemSubsidiaries() {
  const subsidiaries = [
    {
      number: "01",
      name: "Meristem Stockbrokers Limited",
      description: "Equities trading and brokerage services with a difference",
      link: "https://stockbroking.meristemng.com",
    },
    {
      number: "02",
      name: "Meristem Registrars and Probate Services Limited",
      description: "Redefining Shareholder Management and Probate Services",
      link: "https://registrars.meristemng.com",
    },
    {
      number: "03",
      name: "Meristem Wealth Management Limited",
      description: "Tailored strategies for wealth creation and preservation",
      link: "https://meristemwealth.com/",
    },
    {
      number: "04",
      name: "Meristem Family Office Limited",
      description: "Preserve the legacy. Protect the future.",
      link: "https://familyoffice.meristemng.com",
    },
    {
      number: "05",
      name: "Meristem Capital Limited",
      description: "Raising capital. Realising potential. Reshaping businesses.",
      link: "https://capital.meristemng.com",
    },
    {
      number: "06",
      name: "Meristem Finance Limited",
      description: "Financing solutions tailored to you.",
      link: "https://finance.meristemng.com",
    },
    {
      number: "07",
      name: "Meristem Trustees Limited",
      description: "Leave the things you love for those you love.",
      link: "https://trustees.meristemng.com",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20 bg-white">
        <div className="pb-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary-green">
            Our Subsidiaries
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Provide premium financial services that help you grow and preserve your wealth through
            expert market analysis and personalised investment strategies.
          </p>
        </div>

        <div className="space-y-0 mt-5">
          {subsidiaries.map((subsidiary, index) => (
            <motion.a
              href={subsidiary.link}
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }} // slide in when visible
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex items-center justify-between py-8 border-b border-gray-300 group hover:bg-emerald-50 transition-colors duration-200 cursor-pointer">
              <div className="flex items-start lg:gap-17 gap-6">
                <div>
                  <span className="text-emerald-600 text-lg font-medium min-w-[3rem]">
                    {subsidiary.number}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-base md:text-2xl font-semibold text-emerald-900 mb-2">
                    {subsidiary.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{subsidiary.description}</p>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-emerald-800 group-hover:text-emerald-600 transition-colors duration-200 flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
