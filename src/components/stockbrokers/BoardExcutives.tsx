"use client";

import React from "react";
import { motion } from "framer-motion";
import MemberCard from "@/components/MemberCard";
import Link from "next/link";
import { stockbrokersBoardMembers } from "@/app/stockbrokers/board-members/[slug]/page";

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

export default function WealthBoardExecutiveSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.section
          id="board-members"
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="mb-10">
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
            {stockbrokersBoardMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariantsUp}>
                <Link href={`stockbrokers/board-members/${member.slug}`}>
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
