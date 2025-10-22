"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Preview1, Preview2, Preview3 } from "@/app/assets";

const ResearchSection = () => {
  const [researchData, setResearchData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_RESEARCH_API_BASE_URL + "articles-website");
        const data = await res.json();

        setResearchData(data?.data?.articles ?? []);
      } catch (error) {
        console.error("Error fetching research data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearchData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center text-xl text-emerald-800">
          Loading research articles...
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-semibold text-primary-green lg:leading-13 leading-10 max-w-xl">
              Research that guides smarter decisions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-start max-w-md">
            <p className="text-primary-green mb-6 max-w-lg">
              Our group of subsidiaries brings together specialized expertise across the financial
              spectrum, helping individuals, institutions, and businesses achieve their goals.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_RESEARCH_ARTICLE_BASE_URL}
              target="_blank"
              className="border border-primary-green text-primary-green font-semibold px-6 py-2 hover:bg-primary-green hover:text-white transition">
              MERISTEM RESEARCH
            </a>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-15">
          {Array.isArray(researchData) &&
            researchData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-200 flex flex-col">
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="space-y-2 flex-1">
                    <p className="text-sm text-gray-500">{item.category?.name}</p>
                    <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>

                  <div className="mt-auto pt-10">
                    <a
                      href={`${process.env.NEXT_PUBLIC_RESEARCH_ARTICLE_BASE_URL}/article/${item?.slug}`}
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

                {/* {item.img && ( */}
                <Image
                  src={[Preview1, Preview2, Preview3][index]}
                  alt={item.title}
                  className="w-full lg:h-55 h-40 object-cover"
                  width={500}
                  height={300}
                  priority
                />
                {/* )} */}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
