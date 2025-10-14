"use client";

import React from "react";
import { motion } from "framer-motion";
import MemberCard from "@/components/MemberCard";
import { boardMembers } from "@/app/board-members/[slug]/page";
import Link from "next/link";

const executiveMembers = [
  {
    name: "AVM Ishaya Shekarri (RTD), OON, Mni",
    role: "Chairman",
    image: "https://meristemng.com/storage//assets/images/AVM,%20ISHAYA%20SHEKARRI.jpg",
  },
  {
    name: "Olusegun Olusanya",
    role: "Vice Chairman",
    image: "https://meristemng.com/storage//assets/images/OLUSEGUN%20OLUSANYA.jpg",
  },
  {
    name: "Laitan Onolaja (OFR)",
    role: "Director",
    image: "https://meristemng.com/storage//assets/images/Laitan%20Onolaja.jpg",
  },
  {
    name: "Christopher Attah",
    role: "Director",
    image: "https://meristemng.com/storage//assets/images/Christopher%20Attah.jpg",
  },
  {
    name: "Chief Michael Ade-Ojo (OON)",
    role: "Director",
    image: "https://meristemng.com/storage//assets/images/CHIEF%20SYLVERIUS%20I.%20C.%20OKOLI.jpg",
  },
  {
    name: "Yakubu Abubakar",
    role: "Director",
    image: "https://meristemng.com/storage//assets/images/DSC02549%20copy%20(24).jpg",
  },
  {
    name: "Chief Michael Ade-Ojo (OON)",
    role: "Director",
    image: "https://meristemng.com/storage//assets/images/Michael%20Ade-Ojo.png",
  },
  {
    name: "Wole Abegunde",
    role: "Director",
    image: "https://meristemng.com/storage//assets/images/olu%20-%20Copy.png",
  },
  {
    name: "Sulaiman Adedokun, CFA",
    role: "Group Managing Director",
    image: "https://meristemng.com/storage//assets/images/DSC02549%20copy%20(2).jpg",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.19,
    },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const itemVariantsUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function BoardExecutiveSection() {
  return (
    <div className="bg-gray-50 text-black py-20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Executive Management */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mb-20">
          <motion.div
            variants={itemVariantsRight}
            className="text-left mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Board of Directors</h2>
            <p className="text-left text-lg mx-auto">
              Distinguished professionals providing strategic oversight and governance
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
            {executiveMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariantsUp}>
                <MemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Board of Directors */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}>
          <motion.div
            variants={itemVariantsRight}
            className="text-left mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Executive Management</h2>
            <p className="text-left text-lg mx-auto">
              Our executive leadership team driving strategic vision and operational excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariantsUp}>
                <Link href={`/board-members/${member.slug}`}>
                  <MemberCard member={member} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
