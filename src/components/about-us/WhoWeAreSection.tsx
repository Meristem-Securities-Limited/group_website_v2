"use client";

import { GroupMeetings, GroupPicture } from "@/app/assets";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="who-we-are"
      className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 items-center">
          {/* Text Content */}
          <div>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-emerald-900 mb-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              Who we are
            </motion.h2>

            <motion.p
              className="text-lg text-emerald-900 mb-9 leading-relaxed"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              With a legacy spanning over two decades, we&apos;ve established ourselves as the
              trusted financial services partner for individuals and corporations in Nigeria and
              globally.
            </motion.p>

            <motion.p
              className="text-lg text-emerald-900 leading-relaxed"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              Our success is built on exceptional customer service, unparalleled financial
              expertise, and a distinctive workplace culture fostering a team of high-achieving
              professionals. Remaining true to our founding promise, "let&apos;s grow wealth for
              you", we continue to deliver on our commitment to helping our clients thrive
              financially.
            </motion.p>

            <motion.div
              className="w-full h-58 mt-9 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}>
              <Image
                src={GroupMeetings}
                alt="Business meeting"
                priority
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}>
            <div className="h-full">
              <Image
                src={GroupPicture}
                alt="Business meeting"
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
