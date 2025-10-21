"use client";

import { motion, Variants } from "framer-motion";

// Animation variants
const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Sample cards (replace with your data)
const cards = [
  {
    icon: <span className="text-white text-2xl font-bold">💡</span>,
    title: "Innovation",
    description: "We innovate to create solutions that drive growth and sustainability.",
  },
  {
    icon: <span className="text-white text-2xl font-bold">🤝</span>,
    title: "Integrity",
    description: "Integrity is the foundation of our operations and client relationships.",
  },
  {
    icon: <span className="text-white text-2xl font-bold">🌍</span>,
    title: "Sustainability",
    description: "Committed to practices that ensure long-term environmental and social impact.",
  },
  {
    icon: <span className="text-white text-2xl font-bold">📈</span>,
    title: "Growth",
    description: "Dedicated to helping clients and stakeholders grow through reliable service.",
  },
];

export default function MissionSection() {
  return (
    <section
      id="mission"
      className="bg-emerald-50/30 py-24 px-6 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated text section */}
        <motion.div
          className="text-left mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}>
          <h2 className="text-3xl lg:text-5xl font-bold text-emerald-900 mb-6">Our Mission</h2>
          <p className="text-lg text-emerald-900 max-w-4xl leading-relaxed">
            Bonding with our clients to understand and meet their needs, through knowledge,
            information, dedication, and creativity of our people while satisfying all stakeholders
            and the environment in which we operate.
          </p>
        </motion.div>

        {/* Animated cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-19"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100 rounded-2xl">
              <div className="w-14 h-14 bg-emerald-900 flex items-center justify-center mb-6 rounded-lg">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{card.title}</h3>
              <p className="text-emerald-800 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
