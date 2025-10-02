"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ProfilePage({ member: executive }: { member: any }) {
  return (
    <section className="bg-white">
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/meristem-building.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/20 to-gray-900/90"></div>

        <div className="relative z-10 container lg:px-4 mx-auto flex items-end h-full lg:min-h-[480px] min-h-[400px]">
          <div className="px-4 text-left h-full mb-20 space-y-3">
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              {executive.name}
            </motion.h1>
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="md:text-xl text-base font-medium text-white leading-tight">
              {executive.role}
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="min-h-screen container mx-auto px-4 bg-white text-black flex items-center justify-center">
        <div className="w-full flex flex-col md:flex-row md:gap-16 gap-10 lg:py-20 py-10">
          <div className="h-[800px] flex-1">
            <Image
              src={executive.image}
              alt={executive.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 flex flex-col">
            {/* <h1 className="lg:text-3xl text-xl font-bold mb-1">{executive.name}</h1>
            <h2 className="text-base lg:text-lg font-medium mb-3">{executive.role}</h2> */}
            <p
              className="text-sm lg:text-base leading-relaxed !font-medium"
              dangerouslySetInnerHTML={{ __html: executive.description }}></p>
          </div>
        </div>
      </div>
    </section>
  );
}
