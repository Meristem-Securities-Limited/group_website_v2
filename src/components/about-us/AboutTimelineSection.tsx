"use client";

// import { motion } from "framer-motion";

// const timelineData = [
//   {
//     year: "2003",
//     title: "Foundations of Growth",
//     description:
//       "The journey began in 2003 with the incorporation of Great Africa Securities Limited, a spinoff from Great Africa Trust. Starting with a small but determined team, the firm set out with a bold vision to redefine client service in Nigeria’s stockbroking industry. Its focus on quality research and exceptional service quickly set it apart, laying the groundwork for future expansion and the need for a distinct identity.",
//   },
//   {
//     year: "2005",
//     title: "A New Identity",
//     description:
//       "In 2005, the firm rebranded as Meristem Securities Limited. The name, inspired by the biological term meristem the growth tissue in plants symbolized continuous renewal and upward progress. Along with a fresh logo and brand identity, the rebrand reflected a clear mission: to help clients grow, preserve, and transfer wealth across generations. It marked the start of a new chapter in the company’s evolution.",
//   },
//   {
//     year: "2006",
//     title: "Expansion to Norman Williams Street",
//     description:
//       "By Q4 2006, the team moved into a new office complex at 124 Norman Williams Street, Ikoyi. The business had grown from six staff to over twenty across stockbroking, registrars, and issuing house services. With its bright, airy ambience and Meristem’s vision and values on display for all to see, Meristem’s new home foreshadowed things to come.",
//   },
//   {
//     year: "2008",
//     title: "Wealth Management",
//     description:
//       "Building on the outcomes of a pivotal 2007 strategy session, the firm launched an asset management subsidiary with a clear point of difference offering more personalized services to Nigeria’s growing middle class. The new unit matched investment options to individual risk profiles and helped clients grow wealth sustainably over time.",
//   },
//   {
//     year: "2014",
//     title: "Meritrade Launch",
//     description:
//       "After nearly five years in development, Meritrade was launched on the floor of the Nigerian Stock Exchange on March 5, 2014, becoming the first online trading platform in the history of the Nigerian Stock market. Jointly developed by the investment advisory team and homegrown software developers, Meritrade empowered investors to trade on the go.",
//   },
//   {
//     year: "2023",
//     title: "20A Gerrard Road HQ",
//     description:
//       "After two years of construction and unavoidable delays due to COVID-19, the new Meristem headquarters at 20A Gerrard Road, Ikoyi, was completed. Standing over 20 meters tall, the building is a bold symbol of growth, resilience, and our journey of two decades. It reflects our enduring commitment to innovation, excellence, and client-centric service.",
//   },
// ];

// export default function AboutTimelineSection() {
//   return (
//     <section className="py-24 px-6 bg-[#154D34] text-white bg-[url(/bg-banner.png)] lg:bg-no-repeat bg-repeat bg-center bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900">
//       <div className="container mx-auto px-4">
//         <div className="">
//           <motion.div
//             className="pb-6 mb-9"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}>
//             <h2 className="text-3xl md:text-5xl font-semibold text-white">Our History</h2>
//             <p className="text-white mt-5 max-w-2xl">
//               Provides premium financial services that help you grow and preserve your wealth
//               through expert market analysis and personalized investment strategies.
//             </p>
//           </motion.div>
//           <motion.div
//             className="relative py-20"
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}>
//             <div className="relative">
//               <div className="hidden lg:block absolute -top-8 left-0 right-0 h-px bg-red-500/30 mt-8"></div>
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//                 {timelineData.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className="relative"
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.6,
//                       delay: index * 0.2,
//                       ease: "easeOut",
//                     }}
//                     viewport={{ once: true }}>
//                     <div className="hidden lg:block absolute -top-2 left-0 w-6 h-6 bg-red-900 rounded-full border-1 border-white">
//                       <div className="flex items-center justify-center w-full h-full">
//                         <div className="w-1 h-1 bg-green-900 rounded-full border-2 border-white"></div>
//                       </div>
//                     </div>

//                     <div className="lg:hidden flex items-center mb-4">
//                       <div className="w-4 h-4 bg-red-900 rounded-full border-4 border-[#5a0720] mr-4"></div>
//                       <div className="flex-1 h-px bg-white/30"></div>
//                     </div>

//                     <div className="lg:pt-12">
//                       <h2 className="text-white text-2xl lg:text-4xl font-bold mb-4">
//                         {item.year}
//                       </h2>
//                       <h3 className="text-white text-xl lg:text-2xl font-semibold mb-4">
//                         {item.title}
//                       </h3>
//                       <p className="text-white/90 text-base lg:text-lg leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2003",
    title: "Foundations of Growth",
    description:
      "The journey began in 2003 with the incorporation of Great Africa Securities Limited, a spinoff from Great Africa Trust. Starting with a small but determined team, the firm set out with a bold vision to redefine client service in Nigeria’s stockbroking industry. Its focus on quality research and exceptional service quickly set it apart, laying the groundwork for future expansion and the need for a distinct identity.",
  },
  {
    year: "2005",
    title: "A New Identity",
    description:
      "In 2005, the firm rebranded as Meristem Securities Limited. The name, inspired by the biological term meristem; the growth tissue in plants symbolised continuous renewal and upward progress. Along with a fresh logo and brand identity, the rebrand reflected a clear mission: to help clients grow, preserve, and transfer wealth across generations.",
  },
  {
    year: "2006",
    title: "Expansion to Norman Williams Street",
    description:
      "By Q4 2006, the team moved into a new office complex at 124 Norman Williams Street, Ikoyi. The business had grown from six staff to over twenty across stockbroking, registrars, and issuing house services. With its bright airy ambience and Meristem’s vision and values on display for all to see, Meristem’s new home foreshadowed things to come.",
  },
  {
    year: "2008",
    title: "Wealth Management",
    description:
      "Building on the outcomes of a pivotal 2007 strategy session, the firm launched an asset management subsidiary with a clear point of difference offering more personalized services to Nigeria’s growing middle class. The new unit matched investment options to individual risk profiles and helped clients grow wealth sustainably over time.",
  },
  {
    year: "2014",
    title: "Meritrade Launch",
    description:
      "After nearly five years in development, Meritrade was launched on the floor of the Nigerian Stock Exchange on March 5, 2014, becoming the first online trading platform in the history of the Nigerian Stock market. Jointly developed by the investment advisory team and homegrown software developers, Meritrade empowered investors to trade on the go.",
  },
  {
    year: "2022",
    title: "20A Gerrard Road HQ",
    description:
      "After two years of construction and unavoidable delays due to COVID-19, the new Meristem headquarters at 20A Gerrard Road, Ikoyi, was completed. Standing over 20 meters tall, the building is a bold symbol of growth, resilience, and our journey of two decades.",
  },
];

export default function TimelineSection() {
  return (
    <section
      id="our-history"
      className="py-24 px-6 bg-[#154D34] text-white bg-[url(/bg-banner.png)] lg:bg-no-repeat bg-cover min-h-screen bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900">
      <div className="container mx-auto lg:px-4">
        <div className="">
          <motion.div
            className="pb-6 mb-9"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
              Over the years...
            </h2>
            {/* <p className="text-white mt-5 max-w-2xl">
              Provides premium financial services that help you grow and preserve your wealth
              through expert market analysis and personalized investment strategies.
            </p> */}
          </motion.div>
          <motion.div
            className="relative container mx-auto lg:px-12 mt-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}>
            {/* Red vertical line - always visible */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-white lg:block"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}></motion.div>

            <div className="flex flex-col space-y-12 lg:space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                  }`}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}>
                  {/* Timeline bullet */}
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-emerald-900 shadow-md absolute left-1/2 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2">
                    <div className="w-2 h-2 bg-emerald-900 rounded-full"></div>
                  </div>

                  {/* Connector Line (Dash) */}
                  <div
                    className={`hidden lg:block absolute top-1/2 w-1/4 border-t-2 border-dashed border-white ${
                      index % 2 === 0 ? "left-1/2 translate-x-0" : "right-1/2 -translate-x-0"
                    }`}
                    style={{
                      transform:
                        index % 2 === 0
                          ? "translateY(-50%) translateX(0.5rem)"
                          : "translateY(-50%) translateX(-0.5rem)",
                    }}></div>

                  {/* Content Card */}
                  <motion.div
                    className={`mt-6 lg:mt-0 w-full lg:w-5/12 bg-[#fefefe] border border-red-100 p-6 shadow-md ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.3 + 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}>
                    <h2 className="text-emerald-900 text-xl lg:text-3xl font-bold mb-3">
                      {item.year}
                    </h2>
                    <h3 className="text-emerald-900 text-lg lg:text-xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-emerald-900/80 text-base lg:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
