"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";

// ─── types ────────────────────────────────────────────────────────────────────

type FundTab = "growth" | "value";
type ContentTab =
  | "fund-facts"
  | "holdings"
  | "performance"
  | "documents"
  | "benefits"
  | "mvetfs"
  | "mgetfs";

// ─── animation helpers ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // ✅ cast as tuple
      delay,
    },
  }),
};

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      custom={delay}>
      {children}
    </motion.div>
  );
}

// ─── data ─────────────────────────────────────────────────────────────────────

const funds = {
  growth: {
    label: "Meristem Growth Exchange Traded Fund",
    description: [
      "The Meristem Growth ETF (MERGROWTH) is an open-ended, passively managed ETF which seeks to track the performance of the NGX MERISTEM GROWTH INDEX. The Fund invests 100% of its total assets in the securities that comprise the index, in approximately same weighting as the index.",
      "The Index is composed of highly liquid companies which qualify as growth stocks by virtue of their historical revenue and earnings growth rate, non-cyclical nature, and potential for sustainable growth over the medium-term.",
      "A portion of income earned on the Fund is distributed to qualified unitholders at the end of each financial years.",
    ],
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
    performance: {
      date: "30/06/2022",
      returns: [{ fund: "Meristem Growth ETF", ytd: "2.14%", inception: "65.22%" }],
      price: [
        {
          ticker: "MERGROWTH",
          offerPrice: "₦ 142.50",
          benchmark: "NGX MERISTEM GROWTH INDEX",
        },
      ],
    },
    facts: [
      { label: "Fund Type", value: "Exchange Traded Fund (ETF)" },
      { label: "Ticker", value: "MERGROWTH" },
      { label: "Benchmark", value: "NGX Meristem Growth Index" },
      { label: "Management Style", value: "Passive" },
      { label: "Fund Currency", value: "Nigerian Naira (NGN)" },
      { label: "Dividend Policy", value: "Annual distribution" },
      { label: "Minimum Investment", value: "1 unit" },
      { label: "Fund Manager", value: "Meristem Wealth Management Ltd" },
    ],
    holdings: [
      { stock: "Dangote Cement", ticker: "DANGCEM", weight: "18.42%" },
      { stock: "MTN Nigeria", ticker: "MTNN", weight: "15.30%" },
      { stock: "Airtel Africa", ticker: "AIRTELAFRI", weight: "12.11%" },
      { stock: "Zenith Bank", ticker: "ZENITHBANK", weight: "9.75%" },
      { stock: "GT Holdco", ticker: "GTCO", weight: "8.20%" },
    ],
    benefits: [
      "Diversified exposure to Nigeria's high-growth companies in a single trade.",
      "Low-cost, passively managed structure that minimises fees.",
      "Transparency — full index holdings disclosed daily.",
      "Listed on NGX Exchange, tradable like any ordinary share.",
      "Annual income distribution to unitholders.",
    ],
  },
  value: {
    label: "Meristem Value Exchange Traded Fund",
    description: [
      "The Meristem Value ETF (MERVALUE) is an open-ended, passively managed ETF which seeks to track the performance of the NGX MERISTEM VALUE INDEX. The Fund invests 100% of its total assets in the securities that comprise the index, in approximately same weighting as the index.",
      "The Index is composed of highly liquid companies which qualify as value stocks — trading at a discount relative to their intrinsic fundamentals such as earnings, book value and dividends.",
      "A portion of income earned on the Fund is distributed to qualified unitholders at the end of each financial year.",
    ],
    imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=900&q=80",
    performance: {
      date: "30/06/2022",
      returns: [{ fund: "Meristem Value ETF", ytd: "3.99%", inception: "78.55%" }],
      price: [
        {
          ticker: "MERVALUE",
          offerPrice: "₦ 128.30",
          benchmark: "NGX MERISTEM VALUE INDEX",
        },
      ],
    },
    facts: [
      { label: "Fund Type", value: "Exchange Traded Fund (ETF)" },
      { label: "Ticker", value: "MERVALUE" },
      { label: "Benchmark", value: "NGX Meristem Value Index" },
      { label: "Management Style", value: "Passive" },
      { label: "Fund Currency", value: "Nigerian Naira (NGN)" },
      { label: "Dividend Policy", value: "Annual distribution" },
      { label: "Minimum Investment", value: "1 unit" },
      { label: "Fund Manager", value: "Meristem Wealth Management Ltd" },
    ],
    holdings: [
      { stock: "CADBURY", ticker: "CADBURY NIGERIA PLC", weight: "20.10%" },
      { stock: "CONOIL", ticker: "CONOIL PLC.", weight: "14.55%" },
      //   { stock: "Lafarge Africa", ticker: "WAPCO", weight: "11.30%" },
      //   { stock: "Access Holdings", ticker: "ACCESSCORP", weight: "10.00%" },
      //   { stock: "UBA", ticker: "UBA", weight: "8.90%" },
    ],
    benefits: [
      "Low transaction cost benefits compared to owning and trading individual securities on the exchange.",
      "Limits company-specific risk associated with single stocks thus providing a cost-effective method of diversification.",
      "Exposure to value stocks in your investment portfolio.",
      "Capital gains – price appreciation of stocks.",
      "Dividend Income.",
      "In-kind creation and redemption of ETF units- Exchange of underlying stocks for ETF units",
    ],
  },
};

const contentTabs: { id: ContentTab; label: string }[] = [
  { id: "fund-facts", label: "Fund Facts" },
  { id: "holdings", label: "Fund Holdings Breakdown" },
  { id: "performance", label: "Price and Performance" },
  { id: "documents", label: "Documents" },
  { id: "benefits", label: "Benefits" },
  { id: "mvetfs", label: "MVETFs" },
  { id: "mgetfs", label: "MGETFs" },
];

function FundFacts({ facts }: { facts: { label: string; value: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full lg:text-base text-sm border-collapse">
        <tbody>
          {facts.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-green-50" : "bg-white"}>
              <td className="px-5 py-3 font-semibold text-gray-700 w-1/2 border border-gray-200">
                {row.label}
              </td>
              <td className="px-5 py-3 text-black border border-gray-200">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Holdings({ holdings }: { holdings: { stock: string; ticker: string; weight: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full lg:text-base text-sm border-collapse">
        <thead>
          <tr className="bg-green-800 text-white">
            {["Ticker", "Company"].map((h) => (
              <th
                key={h}
                className="px-5 py-3 text-left font-semibold tracking-wide uppercase text-xs">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {holdings.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-green-50" : "bg-white"}>
              <td className="px-5 py-3 text-gray-700 border-b border-gray-100">{row.stock}</td>
              <td className="px-5 py-3 text-black border-b border-gray-100">{row.ticker}</td>
              {/* <td className="px-5 py-3 font-semibold text-green-700 border-b border-gray-100">
                {row.weight}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Performance({ data }: { data: (typeof funds)["growth"]["performance"] }) {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs text-gray-500 mb-3 font-medium">
          *Performance Data as at- {data.date}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-200 text-gray-800">
                {["Fund", "Year-to-Date Return", "Inception to Date"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-center font-bold uppercase text-xs tracking-wide border border-green-300">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.returns.map((row, i) => (
                <tr
                  key={i}
                  className="bg-white">
                  <td className="px-5 py-3 text-center text-gray-700 border border-gray-200">
                    {row.fund}
                  </td>
                  <td className="px-5 py-3 text-center font-semibold text-green-700 border border-gray-200">
                    {row.ytd}
                  </td>
                  <td className="px-5 py-3 text-center font-semibold text-green-700 border border-gray-200">
                    {row.inception}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className="text-xs text-gray-500 mb-3 font-medium">*Daily Price Data</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-green-200 text-gray-800">
                {["Ticker", "Offer Price (NGN)", "Benchmark Index"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-center font-bold uppercase text-xs tracking-wide border border-green-300">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.price.map((row, i) => (
                <tr
                  key={i}
                  className="bg-white">
                  <td className="px-5 py-3 text-center font-semibold text-gray-800 border border-gray-200">
                    {row.ticker}
                  </td>
                  <td className="px-5 py-3 text-center text-gray-700 border border-gray-200">
                    {row.offerPrice}
                  </td>
                  <td className="px-5 py-3 text-center text-gray-700 border border-gray-200">
                    {row.benchmark}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Benefits({ benefits }: { benefits: string[] }) {
  return (
    <ul className="space-y-4">
      {benefits.map((b, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-sm text-gray-700">
          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-800 text-white flex items-center justify-center text-xs font-bold">
            {i + 1}
          </span>
          {b}
        </li>
      ))}
    </ul>
  );
}

function Documents() {
  const docs = ["Fund Fact Sheet", "Prospectus", "Trust Deed", "Annual Report 2022"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {docs.map((d, i) => (
        <a
          download
          key={i}
          href="https://wealth.meristemng.com/storage//assets/document/MER%20GROWTH%20ETF%20REPORT%20_%20MAY%202026.pdf"
          className="flex items-center gap-3 border border-gray-200 rounded-lg px-5 py-4 hover:border-green-400 hover:bg-green-50 transition-colors group">
          <div className="w-10 h-10 rounded bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
            PDF
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors">
            {d}
          </span>
        </a>
      ))}
    </div>
  );
}

function ComingSoon({ label }: { label: string }) {
  return <div className="py-14 text-center text-gray-400 text-sm">{label} data coming soon.</div>;
}

export default function ETFPage() {
  const [activeFund, setActiveFund] = useState<FundTab>("growth");
  const [activeContent, setActiveContent] = useState<ContentTab>("performance");

  const fund = funds[activeFund];

  function renderContent() {
    switch (activeContent) {
      case "fund-facts":
        return <FundFacts facts={fund.facts} />;
      case "holdings":
        return <Holdings holdings={fund.holdings} />;
      case "performance":
        return <Performance data={fund.performance} />;
      case "documents":
        return <Documents />;
      case "benefits":
        return <Benefits benefits={fund.benefits} />;
      case "mvetfs":
        return <ComingSoon label="MVETFs" />;
      case "mgetfs":
        return <ComingSoon label="MGETFs" />;
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Fund selector ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 pt-12 pb-6 px-6">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
            {(Object.keys(funds) as FundTab[]).map((key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveFund(key);
                  setActiveContent("performance");
                }}
                className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 z-10
                  ${activeFund === key ? "text-white" : "text-black hover:text-green-700"}`}>
                {activeFund === key && (
                  <motion.span
                    layoutId="fund-pill"
                    className="absolute inset-0 bg-green-800 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {funds[key].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fund intro ─────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeFund}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-5">
              {fund.description.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-8 lg:text-base text-sm">
                  {para}
                </p>
              ))}
              {/* <p className="text-sm text-gray-700 pt-1">
                Download{" "}
                <a
                  href="#"
                  className="font-bold underline underline-offset-2 text-gray-900 hover:text-green-700 transition-colors">
                  Meritrade
                </a>{" "}
                to trade!
              </p> */}
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-xl h-60 md:h-100 shadow-md">
              <motion.img
                key={activeFund + "-img"}
                src={fund.imageSrc}
                alt={fund.label}
                className="w-full h-full object-cover"
                initial={{ scale: 1.06, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* ── Content tabs ───────────────────────────────────────────────────── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        {/* Tab strip */}
        <Reveal>
          <div className="flex flex-wrap gap-0 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm mb-8">
            {contentTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveContent(tab.id)}
                className={`relative px-4 py-3 text-sm font-medium transition-colors duration-200 flex-shrink-0 z-10
                  ${
                    activeContent === tab.id ?
                      "text-white"
                    : "text-gray-500 hover:text-green-700 hover:bg-green-50"
                  }`}>
                {activeContent === tab.id && (
                  <motion.span
                    layoutId="content-pill"
                    className="absolute inset-0 bg-green-800 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContent + "-" + activeFund}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
