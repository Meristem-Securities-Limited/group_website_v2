import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Preview1, Preview2, Preview3 } from "../assets";

const researchData = [
  {
    category: "Market Updates",
    title: "Daily Market Update – 7th May 2025",
    date: "August 25, 2025",
    img: Preview1,
  },
  {
    category: "Economic Reports",
    title: "Macroeconomic Update – GDP Report – Q4-2024",
    date: "August 25, 2025",
    img: Preview2,
  },
  {
    category: "Equity Research Report",
    title: "Banking Sector Update – Beyond the Forbearance Era",
    date: "August 25, 2025",
    img: Preview3,
  },
];

const ResearchSection = () => {
  return (
    <section className="lg:py-30 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 lg:leading-13 leading-10 max-w-xl">
              Research that guides smarter decisions
            </h2>
          </div>

          <div className="flex flex-col items-start max-w-md">
            <p className="text-gray-600 mb-6 max-w-lg">
              Our group of subsidiaries brings together specialized expertise across the financial
              spectrum, helping individuals, institutions, and businesses achieve their goals.
            </p>
            <a
              href="#"
              className="border border-green-800 text-green-800 font-semibold px-6 py-2 hover:bg-green-700 hover:text-white transition">
              MERISTEM RESEARCH
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 flex flex-col justify-between">
              <div className="p-6 flex flex-col justify-between h-auto mdLh-full gap-5">
                <div className="space-y-5">
                  <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                  <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                </div>
                <div>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-[#154D34] font-medium text-sm">
                    <div className="bg-[#154D34] p-2">
                      <ArrowRight
                        size={14}
                        color="white"
                      />
                    </div>
                    CONTINUE READING
                  </a>
                </div>
              </div>

              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-70 object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
