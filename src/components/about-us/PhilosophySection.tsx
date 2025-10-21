"use client";
import React from "react";
import { Target, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="philosophy"
      className="bg-white py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-left mb-16"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-2xl lg:text-4xl font-bold text-green-900 mb-4">Our Philosophy</h2>
          <p className="text-lg text-emerald-900 leading-relaxed mb-10 w-full font-medium">
            Guided by our belief that our success depends entirely on the extent to which our
            clients&apos; objectives are met;
          </p>
        </motion.div>

        <div className="container mx-auto">
          <div className="">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {[
                {
                  icon: <Users className="w-7 h-7 text-emerald-900" />,
                  title: "Client-First Mindset",
                  desc: "We put ourselves in your place and serve you as we would serve ourselves",
                },
                {
                  icon: <Heart className="w-7 h-7 text-emerald-900" />,
                  title: "Shared Journey",
                  desc: "When you're not happy, we have failed. When you smile, we also smile",
                },
                {
                  icon: <Target className="w-7 h-7 text-emerald-900" />,
                  title: "Objective Alignment",
                  desc: "Your financial goals become our mission, driving every decision we make",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-left bg-white shadow-2xl p-10 border-2 border-emerald-800/40"
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.2 }}>
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-3">{item.title}</h3>
                  <p className="text-emerald-900">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="bg-[#154D34] text-white bg-[url(/bg-banner.png)] lg:bg-no-repeat bg-repeat bg-center bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 p-18 mt-19 text-center"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium mb-6">
              &lsquo;This philosophy of empathy and partnership is at the heart of everything we
              do,&lsquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
