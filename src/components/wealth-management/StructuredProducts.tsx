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

// const fadeIn = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, duration: 0.65 },
//   },
// };

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  //   const inView = useInView(ref, { once: true, margin: "-80px" });
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

function RevealImg({
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

const offerings = [
  {
    id: "discretionary",
    title: "Meri-Dollar Investment Portfolio (M-DIP)",
    body: `This portfolio creates exposure to US Dollar denominated investments. It offers investment diversification benefits where investors are guaranteed principal and a competitive rate of return on investment. Investors have zero exposure to exchange rate volatility with potentials to earn both exchange gain and investment income.`,
    imageSide: "right" as const,
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    imageAlt: "Portfolio manager reviewing charts",
  },
  {
    id: "non-discretionary",
    title: "Meristem Ethical Earnings Portfolio (MEEP)",
    body: `Meristem Ethical Earnings Portfolio is a unique portfolio product offered to investors as a means of portfolio diversification especially for investors precluded from interest generating investments for religious or other ethical reasons. It is backed by an investment in high quality revenue generating infrastructure projects.`,
    imageSide: "left" as const,
    imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    imageAlt: "Analyst working on financial data",
  },
  {
    id: "consultancy",
    title: "Meristem Treasury Linked Investment Portfolio (M-TLIP)",
    body: `This is a proprietary holding portfolio through which we meet the needs of investors who desire to hold FGN Treasury bills but do not have the required minimum. This product mirrors the Features of the FGN Treasury Bills.`,
    imageSide: "right" as const,
    imageSrc: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    imageAlt: "Consultants in a meeting",
  },
];

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
            At Meristem Wealth, we offer our clients a range of structured products that meet with
            varying client needs and objectives. Some of which are:
          </p>
        </div>

        <RevealImg
          src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Our Structured Products Offerings
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

export default function StructuredProductsPage() {
  return (
    <div className="pt-16">
      <IntroSection />
      <OfferingsSection />
    </div>
  );
}
