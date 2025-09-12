import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { VideoThumbnail } from "../assets";

const researchData = [
  {
    category: "Market Updates",
    title: "Daily Market Update – 7th May 2025",
    date: "August 25, 2025",
    img: "https://via.placeholder.com/400x200/4CAF50/FFFFFF?text=Market",
  },
  {
    category: "Economic Reports",
    title: "Macroeconomic Update – GDP Report – Q4-2024",
    date: "August 25, 2025",
    img: "https://via.placeholder.com/400x200/FF9800/FFFFFF?text=Economic",
  },
  {
    category: "Equity Research Report",
    title: "Banking Sector Update – Beyond the Forbearance Era",
    date: "August 25, 2025",
    img: "https://via.placeholder.com/400x200/FFC107/000000?text=Equity",
  },
];

const ResearchSection = () => {
  return (
    <section className="lg:py-30 py-20 px-6 md:px-12 lg:px-0 bg-white">
      <div className="container mx-auto">
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
              <div className="p-6 flex flex-col gap-3">
                <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                <div>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-green-900 font-medium text-sm">
                    <div className="bg-green-900 p-2">
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
                src={VideoThumbnail}
                alt={item.title}
                className="w-full h-60 object-cover"
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
