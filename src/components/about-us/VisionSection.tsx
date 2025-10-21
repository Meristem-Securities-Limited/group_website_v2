"use client";

import React from "react";
import { TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionSection() {
  const slideInVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const statsSlideIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-white py-24 px-6">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-40 items-start">
          <motion.div
            className=""
            variants={slideInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            <h1 className="text-3xl lg:text-5xl font-bold text-emerald-900 leading-tight">
              Our Vision
            </h1>
            <p className="text-base text-emerald-800 leading-relaxed">
              To be the distinct and preferred financial services provider
            </p>

            <div className="space-y-9 pt-4 mt-8">
              <motion.div
                className="flex items-start gap-4"
                variants={slideInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                <div className="w-12 h-12 bg-emerald-900 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">
                    Distinctive Excellence
                  </h3>
                  <p className="text-emerald-800 leading-loose">
                    We redefine standards through creativity, precision, and a relentless pursuit of
                    quality. Every solution we deliver is crafted to inspire trust and admiration,
                    combining innovative ideas with flawless execution to exceed expectations and
                    set new benchmarks in service delivery.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                variants={slideInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}>
                <div className="w-12 h-12 bg-emerald-900 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-1">Client Preference</h3>
                  <p className="text-emerald-800 leading-loose">
                    Our clients are at the heart of every decision. We nurture meaningful
                    relationships built on trust, reliability, and value. By understanding their
                    evolving needs and anticipating opportunities, we ensure that we are not just a
                    service provider but a preferred partner in their journey toward success.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={statsSlideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-50 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 border-2 border-emerald-900">
              <div className="space-y-6">
                <div className="bg-emerald-50/30 p-6 border border-emerald-100">
                  <div className="text-4xl font-bold text-emerald-800 mb-2">600B+</div>
                  <div className="text-emerald-900">Assets Under Management (NGN)</div>
                </div>
                <div className="bg-emerald-50/30 p-6 border border-emerald-100">
                  <div className="text-4xl font-bold text-emerald-800 mb-2">3 Locations</div>
                  <div className="text-emerald-900">Located in Lagos, Rivers, FCT</div>
                </div>
                <div className="bg-emerald-50/30 p-6 border border-emerald-100">
                  <div className="text-4xl font-bold text-emerald-800 mb-2">7</div>
                  <div className="text-emerald-900">Specialised Subsidiaries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
}
