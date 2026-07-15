"use client";

import { GroupPicture } from "@/app/assets";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAreSection({
  // showMeetings = true,
  sectionImage = GroupPicture,
  htmldescription,
  descriptions = [
    `With a legacy spanning over two decades, we've established ourselves as the trusted
        financial services partner for individuals and corporations in Nigeria and globally.`,

    `Our success is built on exceptional customer service, unparalleled financial expertise, and
        a distinctive workplace culture fostering a team of high-achieving professionals. Remaining
        true to our founding promise, "let's grow wealth for you", we continue to deliver on
        our commitment to helping our clients thrive financially.`,
  ],
}: {
  showMeetings?: boolean;
  htmldescription?: string;
  descriptions?: Array<string>;
  sectionImage?: any;
}) {
  return (
    <section
      id="who-we-are"
      className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-28 items-start">
          {/* Text Content */}
          <div>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-emerald-900 mb-6 capitalize"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}>
              Who we are
            </motion.h2>

            {descriptions.length > 0 &&
              descriptions.map((description, index) => (
                <motion.p
                  key={index}
                  className="lg:text-lg text-base text-emerald-900 mb-9 leading-relaxed"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.3 }}>
                  {description}
                </motion.p>
              ))}
            {htmldescription && (
              <motion.div
                className="lg:text-lg text-base text-emerald-900 mb-9 leading-relaxed"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + 0.3 }}
                dangerouslySetInnerHTML={{ __html: htmldescription }}></motion.div>
            )}

            {/* {showMeetings && (
              <motion.div
                className="w-full h-58 mt-9 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}>
                <Image
                  src={GroupMeetings}
                  alt="Business meeting"
                  priority
                  className="w-full h-auto max-h-100 object-cover object-center"
                />
              </motion.div>
            )} */}
          </div>

          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}>
            <Image
              src={sectionImage}
              width={"900"}
              height={"400"}
              alt="Business meeting"
              priority
              className="w-auto h-auto sm:max-h-100 lg:max-h-180 object-contain object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
