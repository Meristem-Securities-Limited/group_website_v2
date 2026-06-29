"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// const fadeIn = {
//   hidden: { opacity: 0, y: 32 },
//   show: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
//   }),
// };

// const fadeIn = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     transition: { staggerChildren: 0.1 },
//   },
// };

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.65 },
  },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div
      ref={ref}
      className={className}
      //   variants={fadeIn}
      //   initial="hidden"
      //   animate={inView ? "show" : "hidden"}
      //   custom={delay}>
    >
      {children}
    </div>
  );
}

export function RevealImg({
  src,
  alt,
  className = "",
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-xl ${className}`}
      //   variants={fadeIn}
      //   initial="hidden"
      //   animate={inView ? "show" : "hidden"}
      //   custom={delay}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        // initial={{ scale: 1.06 }}
        // animate={inView ? { scale: 1 } : { scale: 1.06 }}
        // transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </div>
  );
}

// ─── data ─────────────────────────────────────────────────────────────────────

const offerings = [
  {
    id: "discretionary",
    title: "Discretionary Portfolio Management",
    body: "Under this portfolio management style, investment decisions are made by the portfolio managers who are given discretion to manage your portfolio to achieve your investment objectives. The portfolio manager constructs and rebalances your portfolio based on your investment objectives, risk appetite and liquidity needs. The benefits of our discretionary portfolio management service include:\n• A dedicated portfolio manager to monitor and manage your portfolio.\n• Regular performance reports.\n• Access to a broad range of securities, asset classes and markets.\n• Bespoke portfolio construction aligned with your goals.",
    imageSide: "right" as const,
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    imageAlt: "Portfolio manager reviewing charts",
  },
  {
    id: "non-discretionary",
    title: "Non-Discretionary Portfolio Management / Portfolio Advisory",
    body: "We act as investment consultants, drawing on our research and risk management competence. This is an advisory service which allows you to be directly involved in the ongoing decisions affecting your investment portfolio and our responsibilities are limited to advisory and execution.\nThe benefits of our non-discretionary portfolio management service include:\n• Provision of investment advice across various ranges of assets based on our research capabilities.\n• Investment decision at the discretion of the client.\n• Dedicated investment manager who will be on hand to review your portfolio, make recommendations and discuss strategy.",
    imageSide: "left" as const,
    imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    imageAlt: "Analyst working on financial data",
  },
  {
    id: "consultancy",
    title: "Consultancy",
    body: "Our consultancy services are rendered to third party individual and corporate entities which include trainings, asset manager selection, asset valuation and fairness opinion.",
    imageSide: "right" as const,
    imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    imageAlt: "Consultants in a meeting",
  },
];

// ─── sub-components ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className=" mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold tracking-widest text-gray-900 uppercase">
            Meristem
          </span>
          <span className="text-[9px] tracking-[0.2em] text-purple-700 uppercase font-medium">
            Wealth Management Limited
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
          {["About us", "Products and Services", "Track Records", "FAQs"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-purple-700 transition-colors duration-150">
              {item}
            </a>
          ))}
        </div>

        <button className="flex items-center gap-2 border border-purple-700 text-purple-700 text-sm font-medium px-4 py-2 rounded hover:bg-purple-50 transition-colors duration-150">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Menu
        </button>
      </div>
    </nav>
  );
}

// function Hero() {
//   return (
//     <section className="relative h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
//       {/* background image */}
//       <div
//         className="absolute inset-0"
//         // initial={{ scale: 1.08 }}
//         // animate={{ scale: 1 }}
//             //   transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//           >
//         <img
//           src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&q=80"
//           alt="Portfolio management hero"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gray-900/60" />
//       </div>

//       <div className="relative z-10 text-center px-6">
//         <h1
//           className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest uppercase"
//         //   initial={{ opacity: 0, y: 24 }}
//         //   animate={{ opacity: 1, y: 0 }}
//                 //   transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               >
//           Asset/Portfolio Management
//         </h1>
//       </div>
//     </section>
//   );
// }

function IntroSection() {
  const ref = useRef(null);
  //   const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-gray-50 py-20 px-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <p
            className="text-gray-700 text-base leading-8"
            // variants={fadeIn}
            // initial="hidden"
            // animate={inView ? "show" : "hidden"}
            //   custom={0}
          >
            Meristem Wealth Management Limited harnesses specialized investment management expertise
            together with the vast resources of the Meristem Group to provide customized solutions
            to clients&apos; diverse investment needs, through Portfolio Management, Portfolio
            Advisory and Consultancy.
          </p>
          <p
            className="text-gray-700 text-base leading-8"
            // variants={fadeIn}
            // initial="hidden"
            // animate={inView ? "show" : "hidden"}
            //   custom={0.1}
          >
            Our Portfolios are customized to meet client needs and are managed according to each
            client&apos;s investment objectives. They are managed either as full discretionary
            portfolios or non-discretionary portfolios.
          </p>
        </div>

        <RevealImg
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
          alt="Financial advisors collaborating"
          className="h-72 md:h-80 shadow-lg"
          delay={0.15}
        />
      </div>
    </section>
  );
}

function OfferingCard({ offering, index }: { offering: (typeof offerings)[0]; index: number }) {
  const ref = useRef(null);
  //   const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = offering.imageSide === "left";

  return (
    <div
      ref={ref}
      className="bg-gray-50 rounded-2xl overflow-hidden container mx-auto">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${isLeft ? "md:flex-row" : ""}`}>
        {/* Image — left side */}
        {isLeft && (
          <div
            className="overflow-hidden h-72 md:h-auto min-h-[320px]"
            // variants={fadeIn}
            // initial="hidden"
            // animate={inView ? "show" : "hidden"}
            //   custom={0}
          >
            <img
              src={offering.imageSrc}
              alt={offering.imageAlt}
              className="w-full h-full object-cover"
              //   initial={{ scale: 1.06 }}
              //   animate={inView ? { scale: 1 } : { scale: 1.06 }}
              //   transition={{
              //     duration: 0.9,
              //     ease: [0.22, 1, 0.36, 1],
              //   }}
            />
          </div>
        )}

        {/* Text */}
        <div className="p-8 md:p-12 flex flex-col justify-center gap-5">
          <h3
            className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide"
            // variants={fadeIn}
            // initial="hidden"
            // animate={inView ? "show" : "hidden"}
            // custom={0.1}>
          >
            {offering.title}
          </h3>

          <div
            className="space-y-3"
            // variants={fadeIn}
            // initial="hidden"
            // animate={inView ? "show" : "hidden"}
            //   custom={0.18}
          >
            {offering.body.split("\n").map((line, i) => (
              <p
                key={i}
                className={`text-gray-600 leading-7 lg:text-base text-sm ${line.startsWith("•") ? "pl-2" : ""}`}>
                {line}
              </p>
            ))}
          </div>

          {/* <div
          // variants={fadeIn}
          // initial="hidden"
          // animate={inView ? "show" : "hidden"}
          //   custom={0.26}
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-200 group">
              Get Started
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div> */}
        </div>

        {!isLeft && (
          <div
            className="overflow-hidden h-72 md:h-auto min-h-[320px]"
            // variants={fadeIn}
            // initial="hidden"
            // animate={inView ? "show" : "hidden"}
            //   custom={0}
          >
            <img
              src={offering.imageSrc}
              alt={offering.imageAlt}
              className="w-full h-full object-cover"
              //   initial={{ scale: 1.06 }}
              //   animate={inView ? { scale: 1 } : { scale: 1.06 }}
              //   transition={{
              //     duration: 0.9,
              //     ease: [0.22, 1, 0.36, 1],
              //   }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function OfferingsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className=" mx-auto space-y-8">
        <Reveal className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-widest">
            Our Asset/Portfolio Management Offerings
          </h2>
        </Reveal>

        <div className="space-y-8">
          {offerings.map((offering, i) => (
            <OfferingCard
              key={offering.id}
              offering={offering}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-sm text-center">
//       <p>
//         &copy; {new Date().getFullYear()} Meristem Wealth Management Limited. All rights reserved.
//       </p>
//     </footer>
//   );
// }

export default function PortfolioManagementPage() {
  return (
    <div className="pt-16">
      <IntroSection />
      <OfferingsSection />
    </div>
  );
}
