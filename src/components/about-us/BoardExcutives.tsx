"use client";

import React from "react";
import { motion } from "framer-motion";
import MemberCard from "@/components/MemberCard";
import { boardMembers } from "@/app/executive-members/[slug]/page";
import Link from "next/link";
import { Adejumoke, Ahmed, GMD, Ify, Mubo2, Ohis, Oyebamiji, Reginald } from "@/app/assets";

const executiveMembers = [
  {
    name: "DR. REGINALD CHIKA STANLEY, MFR",
    role: "Chairman",
    image: Reginald,
  },
  {
    name: "SULAIMAN ADEDOKUN, CFA",
    role: "Group Managing Director",
    image: GMD,
  },
   {
    name: "MUBO OLASOKO",
    role: "Deputy, Group Managing Director",
    image: Mubo2,
  },
  {
    name: "ADEJUMOKE AWOLUMATE",
    role: "Director",
    image: Adejumoke,
  },
  {
    name: "AMINA MAINA",
    role: "Director",
    image: "",
  },
  {
    name: "EMMANUEL ADEYEYE OYEBANJI, S.A.N",
    role: "Director",
    image: Oyebamiji,
  },
  {
    name: "IFY OKOLI-WATSON",
    role: "Director",
    image: Ify,
  },
  {
    name: "OHIS OHIWEREI",
    role: "Director",
    image: Ohis,
  },
  {
    name: "TAIWO ADE-OJO",
    role: "Director",
    image: "",
  },
  {
    name: "UMAR SHUAIB AHMED",
    role: "Director",
    image: Ahmed,
  },
  
  // {
  //   name: "FEYI OLUSANYA, CFA",
  //   role: "Director",
  //   image: "",
  // },
  
  
  

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
    <div className="bg-gray-50 text-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Executive Management */}
        <motion.section
          id="board-of-directors"
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mb-10 pt-24">
          <motion.div
            variants={itemVariantsRight}
            className="text-left mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-emerald-900 mb-4">
              Board of Directors
            </h2>
            <p className="text-left text-lg mx-auto text-emerald-900">
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
        </motion.section>

        {/* Board of Directors */}
        <motion.section
          id="executive-management"
          initial="hidden"
          animate="show"
          variants={containerVariants}>
          <motion.div
            variants={itemVariantsRight}
            className="text-left mb-12 pt-24">
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
                <Link href={`/executive-members/${member.slug}`}>
                  <MemberCard member={member} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
