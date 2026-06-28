// ─── ETFFeatures.tsx ─────────────────────────────────────────────────────────
// Drop this component into the product page between the description section
// and the download CTA section, rendered only for the ETF product.

import { motion } from "framer-motion";

const ETF_STATS = [
  { label: "Min. investment", value: "₦5,000" },
  { label: "Avg. expense ratio", value: "0.2–0.5%" },
  { label: "Trading hours", value: "10am – 2:30pm" },
  { label: "Settlement", value: "T+3 days" },
];

const ETF_FEATURES = [
  {
    icon: "📊",
    title: "Instant diversification",
    description:
      "One ETF gives you exposure to dozens of securities, reducing single-stock risk without managing each position individually.",
  },
  {
    icon: "💸",
    title: "Low cost",
    description:
      "Passive ETFs carry significantly lower management fees than actively managed funds, keeping more returns in your pocket.",
  },
  {
    icon: "⚡",
    title: "Intraday liquidity",
    description:
      "Buy or sell your ETF units at any point during NGX trading hours, unlike traditional mutual funds priced at end of day.",
  },
  {
    icon: "🌍",
    title: "Local and global access",
    description:
      "Invest in Nigerian equity ETFs on the NGX or gain exposure to global indices like the S&P 500 through dollar-denominated instruments.",
  },
  {
    icon: "👁",
    title: "Full transparency",
    description:
      "ETF holdings are published daily, so you always know exactly what you own — no black-box fund management.",
  },
  {
    icon: "🛡",
    title: "SEC-regulated",
    description:
      "All ETFs traded through Meristem are regulated by the Securities and Exchange Commission of Nigeria.",
  },
];

const ETF_TYPES = [
  {
    title: "Equity ETFs",
    description:
      "Track Nigerian stock indices such as the NGX 30 or sector-specific baskets (banking, consumer goods).",
    color: "border-emerald-600",
  },
  {
    title: "Fixed income ETFs",
    description:
      "Exposure to government and corporate bond baskets, offering regular income with lower volatility.",
    color: "border-blue-600",
  },
  {
    title: "Commodity ETFs",
    description:
      "Invest in commodities like gold without physically holding the asset — useful for portfolio hedging.",
    color: "border-amber-600",
  },
  {
    title: "International ETFs",
    description:
      "Dollar-denominated ETFs tracking global indices — diversify beyond naira and Nigerian market cycles.",
    color: "border-rose-600",
  },
];

const HOW_TO_STEPS = [
  {
    step: 1,
    title: "Open a Wealthbuddy account",
    description:
      "Register on the Wealthbuddy app or web portal. Your account is linked to a Meristem stockbroking account for exchange access.",
  },
  {
    step: 2,
    title: "Complete KYC verification",
    description:
      "Upload a valid ID and proof of address. Verification typically takes one business day.",
  },
  {
    step: 3,
    title: "Fund your wallet",
    description:
      "Transfer funds via bank transfer or card. Minimum funding is ₦5,000 for naira-denominated ETFs.",
  },
  {
    step: 4,
    title: "Select and buy",
    description:
      "Browse available ETFs, review the fund factsheet, and place a buy order. Units are credited after T+3 settlement.",
  },
];

export function ETFFeatures() {
  return (
    <div className="container mx-auto px-4 py-20 space-y-16">
      {/* Intro */}
      <div>
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">
          What is an ETF?
        </p>
        <p className="text-base leading-8 text-gray-700 max-w-2xl">
          Exchange-Traded Funds (ETFs) are investment funds traded on a stock exchange, combining
          the diversification of a mutual fund with the flexibility of equity trading. Meristem
          offers access to both Nigerian and global ETFs through the NGX and international markets.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ETF_STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-50 rounded-xl p-5">
            <p className="text-xs text-gray-400 mb-2">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Why ETFs */}
      <div>
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-5">
          Why ETFs with Meristem
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ETF_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-xl p-6 space-y-3">
              <span className="text-2xl">{feature.icon}</span>
              <p className="text-base font-semibold text-gray-900">{feature.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ETF types */}
      <div>
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-5">
          ETF types available
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ETF_TYPES.map((type) => (
            <div
              key={type.title}
              className={`border-l-4 ${type.color} pl-5`}>
              <p className="text-base font-semibold text-gray-900 mb-1">{type.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to get started */}
      <div>
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-5">
          How to get started
        </p>
        <div className="space-y-8">
          {HOW_TO_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5 items-start">
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-semibold text-emerald-700">{step.step}</span>
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900 mb-1">{step.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── In ProductPage.tsx ───────────────────────────────────────────────────────
// Import ETFFeatures and add this block after the description section,
// before the CTA banner. The condition matches only the ETF product slug.

// import { ETFFeatures } from "@/components/ETFFeatures";

// Inside the ProductPage return, after the description <div>:
