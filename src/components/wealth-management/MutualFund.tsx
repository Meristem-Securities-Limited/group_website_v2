// import { WealthBuddyBlackLogo } from "@/app/assets";
// import VideoPlayer from "../VideoPlayer";
// import { useRef, useState } from "react";
// import Link from "next/link";
// import useSWR from "swr";
// import { Reveal, RevealImg } from "./PortfolioManagement";
// // import { ChevronDown } from "lucide-react";

// const fetcher = (url: any) => fetch(url).then((res) => res.json());

// function RateRow({ label, value }: any) {
//   return (
//     <tr>
//       <td className="py-3 pr-4 font-semibold text-gray-700 w-[55%]">{label}</td>
//       <td className="py-3 text-gray-600 font-medium">{value || "Not provided"}</td>
//     </tr>
//   );
// }

// function FundCard({
//   tag,
//   tagColor = "green",
//   title,
//   description,
//   rateTable,
//   videoUrl,
//   cta,
//   ctaHref,
//   reverse,
//   //   details,
//   comingSoon,
//   reportUrl,
//   etfReportUrl,
// }: any) {
//   //   const [showDetails, setShowDetails] = useState(false);

//   const tagColors: any = {
//     green: "bg-[#F3EFF6] text-green-800",
//     blue: "bg-[#EEF4FF] text-blue-800",
//     amber: "bg-[#FFF8EC] text-amber-800",
//     purple: "bg-[#F1F5F9] text-purple-800",
//     orange: "bg-[#FFF3E0] text-orange-800",
//   };

//   return (
//     <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
//       <div
//         className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-0`}>
//         <div className="w-full lg:w-1/2 py-8 px-5 lg:p-10 flex flex-col gap-6 justify-between">
//           <div className="space-y-2">
//             <span
//               className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tagColor]}`}>
//               {tag}
//             </span>
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
//             <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{description}</p>
//             <p className="text-xs lg:text-sm text-gray-500 font-medium">
//               Registered with the Securities and Exchange Commission, Nigeria.
//             </p>
//           </div>

//           {rateTable && (
//             <div className="bg-[#F9F7FC] rounded-2xl p-4 border border-green-100">
//               <p className="text-xs text-gray-500 font-medium mb-3">
//                 Rates for: <strong className="text-gray-700">{new Date().toDateString()}</strong>
//               </p>
//               <table className="w-full text-sm">
//                 <tbody className="divide-y divide-gray-100">{rateTable}</tbody>
//               </table>
//             </div>
//           )}

//           <div className="flex items-center gap-3 flex-wrap">
//             {!comingSoon ?
//               <Link
//                 href={ctaHref || "https://app.wealthbuddy.ng/get-started"}
//                 className="bg-primary rounded-full px-8 py-3.5 font-semibold bg-green-100 text-green-800 inline-block text-sm hover:bg-green-800 hover:text-white transition-colors self-start">
//                 {cta || "Start Investing Today"}
//               </Link>
//             : <span className="inline-block bg-[#b9f261] cursor-not-allowed border border-[#b9f261]/30 text-black opacity-60 font-semibold text-sm px-6 py-3 rounded-full">
//                 Coming Soon
//               </span>
//             }
//             {reportUrl && (
//               <a
//                 target="_blank"
//                 download
//                 href={reportUrl}
//                 className="bg-primary rounded-full px-8 py-3.5 font-semibold bg-green-800 text-white inline-block text-sm hover:bg-green-700 transition-colors self-start">
//                 Download Montly Report
//               </a>
//             )}
//             {etfReportUrl && (
//               <a
//                 target="_blank"
//                 download
//                 href={etfReportUrl}
//                 className="bg-primary rounded-full px-8 py-3.5 font-semibold bg-green-800 text-white inline-block text-sm hover:bg-green-700 transition-colors self-start">
//                 Download ETF Montly Report
//               </a>
//             )}
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 py-10 lg:p-0 bg-gradient-to-br from-[#F3EFF6] to-[#EDF7ED] min-h-[320px] lg:min-h-auto">
//           <VideoPlayer
//             thumbnailUrl={WealthBuddyBlackLogo}
//             videoUrl={videoUrl}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function OfferingsSection() {
//   const { data, error, isLoading } = useSWR("/api/mutual-funds", fetcher);

//   if (isLoading) {
//     return (
//       <div className="text-center font-bold pt-20">
//         <p className="py-20">Loading....</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-500 font-bold pt-20">
//         <p className="py-20">Failed to load data</p>
//       </div>
//     );
//   }

//   return (
//     <section className="bg-white py-20 px-6">
//       <div className=" mx-auto space-y-8">
//         <Reveal className="text-center mb-14">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-widest">
//             Our Mutual Funds Offerings
//           </h2>
//         </Reveal>

//         <div className="space-y-8 container mx-auto">
//           <div className="space-y-10 max-w-8xl mx-auto">
//             <FundCard
//               tag="For Stability and Easy Access"
//               tagColor="green"
//               title="Money Market Fund"
//               reportUrl="/reports-pdf/MMMF Monthly Report - JULY 2026.pdf"
//               description="Earn competitive returns while keeping your funds relatively low risk. Ideal for emergency funds, short-term goals, and investors who want steady growth with easy access to their money. Invests in Government securities, Bank placements, Commercial papers and promissory notes."
//               videoUrl="https://res.cloudinary.com/dptx3beqe/video/upload/v1749630618/wb2videos/MONEY_MARKET_FUND_wzfhcu.mp4"
//               details={[
//                 { label: "Name", value: "Meristem Money Market Fund (MMMF)" },
//                 { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
//                 { label: "Investment Category", value: "Money Market" },
//                 {
//                   label: "Investment Securities",
//                   value: "High quality investment grade securities with max. tenor of 365 days.",
//                 },
//                 { label: "Investment Denomination", value: "Naira" },
//                 { label: "Minimum Tenor", value: "30 Days" },
//                 {
//                   label: "Interest Payment",
//                   value: "Quarterly distribution of return or reinvestment of same",
//                 },
//                 { label: "Minimum Investment", value: "₦10,000.00 (Ten Thousand Naira)" },
//                 { label: "Principal Repayment", value: "Upon client's request" },
//                 {
//                   label: "Other Investment Details",
//                   value: [
//                     "The product is for investors with low-risk appetites.",
//                     "The fund is invested in money market instruments such as commercial papers, treasury bills and term deposits.",
//                     "It is open-ended and constituted under a trust deed.",
//                     "Return is not static and is subject to market dynamics.",
//                     "Clients who pre-liquidate in less than 30 days will be subject to a 0.5% charge on accrued interest.",
//                   ],
//                 },
//               ]}
//               rateTable={
//                 <>
//                   <RateRow
//                     label="Bid"
//                     value="₦10.00"
//                   />
//                   <RateRow
//                     label="Offer"
//                     value="₦10.00"
//                   />
//                   <RateRow
//                     label="Effective Yield"
//                     value={
//                       data?.moneyMarketRate?.effective_yield ?
//                         `${data.moneyMarketRate.effective_yield}%`
//                       : null
//                     }
//                   />
//                   <RateRow
//                     label="Gross Yield"
//                     value={
//                       data?.moneyMarketRate?.gross_yield ?
//                         `${data.moneyMarketRate.gross_yield}%`
//                       : null
//                     }
//                   />
//                 </>
//               }
//             />

//             {/* Fixed Income Fund */}
//             <FundCard
//               tag="For Consistent Income"
//               tagColor="purple"
//               title="Fixed Income Fund"
//               reportUrl="/reports-pdf/meristem-fixed-income-fund-report-july 2026.pdf"
//               description="Invest primarily in bonds and other income-generating securities designed to provide predictable returns and long-term capital preservation. Provides unit holders with long-term capital growth and regular income through a diversified portfolio of fixed income instruments."
//               videoUrl="https://res.cloudinary.com/dptx3beqe/video/upload/v1749630687/wb2videos/MFIF_cay6o7.mp4"
//               reverse
//               details={[
//                 { label: "Name", value: "Meristem Fixed Income Fund" },
//                 { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
//                 { label: "Trustee", value: "Emerging Africa Trustees Limited" },
//                 { label: "Minimum Tenor", value: "90 Days" },
//                 { label: "Investment Denomination", value: "Naira" },
//                 { label: "Investment Securities", value: "Bonds and Money Market Instruments" },
//                 { label: "Minimum Investment", value: "100 units" },
//                 { label: "Principal Repayment", value: "Upon client's request" },
//                 { label: "Interest Payment", value: "Bi-annual distribution of interest" },
//                 {
//                   label: "Early/Premature Redemption by Holder",
//                   value: [
//                     "Early redemption by the holder is allowable with the following additional conditions:",
//                     "Lock-in period: 3 months",
//                     "Notice period: 5 business days",
//                     "Penalty: 20% charge on accrued income.",
//                   ],
//                 },
//                 {
//                   label: "Other Investment Details",
//                   value:
//                     "The objective of the fund is to achieve competitive returns by investing in high-quality fixed income instruments.",
//                 },
//               ]}
//               rateTable={
//                 <>
//                   <RateRow
//                     label="Bid"
//                     value={
//                       data?.fixedIncomeFundRate?.bid ? `₦ ${data.fixedIncomeFundRate.bid}` : null
//                     }
//                   />
//                   <RateRow
//                     label="Offer"
//                     value={
//                       data?.fixedIncomeFundRate?.offer ?
//                         `₦ ${data.fixedIncomeFundRate.offer}`
//                       : null
//                     }
//                   />
//                 </>
//               }
//             />

//             {/* Equity Market Fund */}
//             <FundCard
//               tag="For Long-Term Growth"
//               tagColor="green"
//               title="Equity Market Fund"
//               reportUrl="/reports-pdf/MEMF MONTHLY REPORT - JULY (2026).pdf"
//               description="Gain exposure to carefully selected stocks with the potential for higher long-term returns. Suitable for investors willing to take on more risk in pursuit of greater growth. Invests in a basket of high-quality equity securities, with a focus on Nigerian companies."
//               videoUrl="https://res.cloudinary.com/dptx3beqe/video/upload/v1749630649/wb2videos/MEMF_vqijvz.mp4"
//               details={[
//                 { label: "Name", value: "Meristem Equity Market Fund (MEMF)" },
//                 { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
//                 { label: "Investment Category", value: "Equity Securities" },
//                 { label: "Minimum Tenor", value: "30 days" },
//                 { label: "Dividends Distribution", value: "When declared by the fund manager." },
//                 { label: "Investment Denomination", value: "Naira" },
//                 { label: "Minimum Investment", value: "1,000 units" },
//                 { label: "Principal Repayment", value: "Upon client's request" },
//                 {
//                   label: "Other Investment Details",
//                   value: [
//                     "It is for investors who are willing to take more risk for a better return on investment.",
//                     "The fund is invested in a basket of high-quality equity securities.",
//                     "Return is not static and is subject to market dynamics.",
//                   ],
//                 },
//               ]}
//               rateTable={
//                 <>
//                   <RateRow
//                     label="Bid"
//                     value={data?.equityMarketRate?.bid ? `₦ ${data.equityMarketRate.bid}` : null}
//                   />
//                   <RateRow
//                     label="Offer"
//                     value={
//                       data?.equityMarketRate?.offer ? `₦ ${data.equityMarketRate.offer}` : null
//                     }
//                   />
//                   <RateRow
//                     label="YTD Return"
//                     value={
//                       data?.equityMarketRate?.ytd_return ?
//                         `${data.equityMarketRate.ytd_return}%`
//                       : null
//                     }
//                   />
//                 </>
//               }
//             />

//             {/* Dollar Fund */}
//             <FundCard
//               tag="Protect and Grow Wealth in Dollars"
//               tagColor="amber"
//               title="Dollar Fund"
//               description="Invest in dollar-denominated assets and diversify beyond the naira. Invests in Investment grade sovereign and corporate Eurobonds, and other qualifying USD instruments issued by Nigerian entities. Ideal for investors seeking global exposure and protection against currency fluctuations."
//               videoUrl="https://res.cloudinary.com/dptx3beqe/video/upload/v1762509263/wb2videos/DOLLAR_FUND_n1t13t.mp4"
//               reverse
//               reportUrl="/reports-pdf/MFIF MONTHLY REPORT-JULY 2026.pdf"
//               cta="Get Started"
//               ctaHref="https://forms.meristemng.com/meristem-dollar-fund/"
//               details={[
//                 { label: "Name", value: "Meristem Dollar Mutual Fund" },
//                 { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
//                 { label: "Trustee", value: "Emerging Africa Trustees Limited" },
//                 { label: "Minimum Tenor", value: "180 Days" },
//                 { label: "Investment Denomination", value: "USD" },
//                 { label: "Investment Securities", value: "Bonds and Money Market Instruments" },
//                 { label: "Minimum Investment", value: "50 Units" },
//                 { label: "Minimum Withdrawal", value: "$500 (USD)" },
//                 { label: "Principal Repayment", value: "Upon client's request" },
//                 { label: "Interest Payment", value: "Bi-annually distribution of interest" },
//                 {
//                   label: "Early/Premature Redemption by Holder",
//                   value: [
//                     "Lock in period: 6 months",
//                     "Notice period: 5 business days.",
//                     "Penalty: 20% charge on accrued income",
//                   ],
//                 },
//                 {
//                   label: "Other Investment Details",
//                   value:
//                     "The objective of the fund is to achieve competitive returns by investing in high-quality fixed-income instruments.",
//                 },
//               ]}
//               rateTable={
//                 <>
//                   <RateRow
//                     label="Gross Yield"
//                     value="8.95%"
//                   />
//                   <RateRow
//                     label="Effective Yield"
//                     value="6.99%"
//                   />
//                   <RateRow
//                     label="Net Asset Value Per Unit"
//                     value={null}
//                   />
//                 </>
//               }
//             />

//             {/* Commodities Fund */}
//             <FundCard
//               tag="Invest Beyond Traditional Assets"
//               tagColor="amber"
//               title="Commodities Fund"
//               reportUrl="/reports-pdf/MMMF Monthly Report - JULY 2026.pdf"
//               description="Access opportunities in commodity-linked investments that can help diversify your portfolio and provide exposure to alternative sources of growth."
//               details={[
//                 { label: "Name", value: "Meristem Commodities Fund" },
//                 { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
//                 { label: "Trustee", value: "Cordros Trustees" },
//                 { label: "Minimum Holding Period", value: "90 Days" },
//                 { label: "Investment Denomination", value: "Naira" },
//                 {
//                   label: "Investment Securities",
//                   value:
//                     "Agricultural commodities, solid minerals, listed equities and commodities linked money market instruments",
//                 },
//                 {
//                   label: "Minimum Investment",
//                   value: "₦5,000,000 (and multiples of ₦1,000 thereafter)",
//                 },
//                 {
//                   label: "Returns",
//                   value:
//                     "Annual income distributions (75% of the declared dividend is paid out to investors yearly; 25% is reinvested). Capital appreciation as the value of the units grows over time.",
//                 },
//                 { label: "Early/Premature Redemption by Holder", value: "20% of accrued profits" },
//               ]}
//               comingSoon
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function IntroSection() {
//   const ref = useRef(null);
//   //   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section
//       ref={ref}
//       className="bg-gray-50 py-20 px-6 container mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div className="space-y-5">
//           <p
//             className="text-gray-700 text-base leading-8"
//             // variants={fadeIn}
//             // initial="hidden"
//             // animate={inView ? "show" : "hidden"}
//             //   custom={0}
//           >
//             A Mutual Fund is a financial intermediary that pools the savings of investors for
//             collective investment in a diversified portfolio of securities which may include bonds,
//             stocks, money market instrument, other securities, real estate, etc.
//           </p>
//           <p
//             className="text-gray-700 text-base leading-8"
//             // variants={fadeIn}
//             // initial="hidden"
//             // animate={inView ? "show" : "hidden"}
//             //   custom={0.1}
//           >
//             We offer clients the choice of various funds depending on their investment objectives
//             and risk profile, bearing in mind that the level of risk you take and potential returns
//             are directly related.
//           </p>
//         </div>

//         <RevealImg
//           src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Financial advisors collaborating"
//           className="h-72 md:h-80 shadow-lg"
//           delay={0.15}
//         />
//       </div>
//     </section>
//   );
// }

// export default function MutualFundPage() {
//   return (
//     <div className="pt-16">
//       {/* <IntroSection /> */}
//       <OfferingsSection />
//     </div>
//   );
// }
import { WealthBuddyBlackLogo } from "@/app/assets";
import VideoPlayer from "../VideoPlayer";
import { useRef, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { Reveal, RevealImg } from "./PortfolioManagement";
// import { ChevronDown } from "lucide-react";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

function RateRow({ label, value }: any) {
  return (
    <tr>
      <td className="py-3 pr-4 font-semibold text-gray-700 w-[55%]">{label}</td>
      <td className="py-3 text-gray-600 font-medium">{value || "Not provided"}</td>
    </tr>
  );
}

function FundCard({
  tag,
  tagColor = "green",
  title,
  description,
  rateTable,
  videoUrl,
  cta,
  ctaHref,
  reverse,
  endButtons = false,
  //   details,
  comingSoon,
  reportUrl,
  etfReportUrl,
}: any) {
  //   const [showDetails, setShowDetails] = useState(false);

  const tagColors: any = {
    green: "bg-[#F3EFF6] text-green-800",
    blue: "bg-[#EEF4FF] text-blue-800",
    amber: "bg-[#FFF8EC] text-amber-800",
    purple: "bg-[#F1F5F9] text-purple-800",
    orange: "bg-[#FFF3E0] text-orange-800",
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div
        className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-0`}>
        <div className="w-full lg:w-1/2 py-8 px-5 lg:p-10 flex flex-col gap-6 justify-between">
          <div className="space-y-2">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tagColor]}`}>
              {tag}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{description}</p>
            <p className="text-xs lg:text-sm text-gray-500 font-medium">
              Registered with the Securities and Exchange Commission, Nigeria.
            </p>
          </div>

          {rateTable && (
            <div className="bg-[#F9F7FC] rounded-2xl p-4 border border-green-100">
              <p className="text-xs text-gray-500 font-medium mb-3">
                Rates for: <strong className="text-gray-700">{new Date().toDateString()}</strong>
              </p>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">{rateTable}</tbody>
              </table>
            </div>
          )}

          <div className="flex items-center gap-3 flex-wrap">
            {!comingSoon ?
              !endButtons ?
                <Link
                  href={ctaHref || "https://app.wealthbuddy.ng/get-started"}
                  className="bg-primary rounded-full px-8 py-3.5 font-semibold bg-green-100 text-green-800 inline-block text-sm hover:bg-green-800 hover:text-white transition-colors self-start">
                  {cta || "Start Investing Today"}
                </Link>
              : null
            : !endButtons ?
              <span className="inline-block bg-[#b9f261] cursor-not-allowed border border-[#b9f261]/30 text-black opacity-60 font-semibold text-sm px-6 py-3 rounded-full">
                Coming Soon
              </span>
            : null}
            {reportUrl && (
              <a
                target="_blank"
                download
                href={reportUrl}
                className="bg-primary rounded-full px-8 py-3.5 font-semibold bg-green-800 text-white inline-block text-sm hover:bg-green-700 transition-colors self-start">
                Download Montly Report
              </a>
            )}
            {etfReportUrl && (
              <a
                target="_blank"
                download
                href={etfReportUrl}
                className="bg-primary rounded-full px-8 py-3.5 font-semibold bg-green-800 text-white inline-block text-sm hover:bg-green-700 transition-colors self-start">
                Download Montly Report
              </a>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2 py-10 lg:p-0 bg-gradient-to-br from-[#F3EFF6] to-[#EDF7ED] min-h-[320px] lg:min-h-auto">
          <VideoPlayer
            thumbnailUrl={WealthBuddyBlackLogo}
            videoUrl={videoUrl}
          />
        </div>
      </div>
    </div>
  );
}

function OfferingsSection() {
  const { data, error, isLoading } = useSWR("/api/mutual-funds", fetcher);

  if (isLoading) {
    return (
      <div className="text-center font-bold pt-20">
        <p className="py-20">Loading....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-bold pt-20">
        <p className="py-20">Failed to load data</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className=" mx-auto space-y-8">
        <Reveal className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-widest">
            Our Mutual Funds Offerings
          </h2>
        </Reveal>

        <div className="space-y-8 container mx-auto">
          <div className="space-y-10 max-w-8xl mx-auto">
            <FundCard
              tag="For Stability and Easy Access"
              tagColor="green"
              title="Money Market Fund"
              reportUrl="/reports-pdf/MMMF Monthly Report - JULY 2026.pdf"
              description="Earn competitive returns while keeping your funds relatively low risk. Ideal for emergency funds, short-term goals, and investors who want steady growth with easy access to their money. Invests in Government securities, Bank placements, Commercial papers and promissory notes."
              videoUrl="https://res.cloudinary.com/dptx3beqe/video/upload/v1749630618/wb2videos/MONEY_MARKET_FUND_wzfhcu.mp4"
              details={[
                { label: "Name", value: "Meristem Money Market Fund (MMMF)" },
                { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
                { label: "Investment Category", value: "Money Market" },
                {
                  label: "Investment Securities",
                  value: "High quality investment grade securities with max. tenor of 365 days.",
                },
                { label: "Investment Denomination", value: "Naira" },
                { label: "Minimum Tenor", value: "30 Days" },
                {
                  label: "Interest Payment",
                  value: "Quarterly distribution of return or reinvestment of same",
                },
                { label: "Minimum Investment", value: "₦10,000.00 (Ten Thousand Naira)" },
                { label: "Principal Repayment", value: "Upon client's request" },
                {
                  label: "Other Investment Details",
                  value: [
                    "The product is for investors with low-risk appetites.",
                    "The fund is invested in money market instruments such as commercial papers, treasury bills and term deposits.",
                    "It is open-ended and constituted under a trust deed.",
                    "Return is not static and is subject to market dynamics.",
                    "Clients who pre-liquidate in less than 30 days will be subject to a 0.5% charge on accrued interest.",
                  ],
                },
              ]}
              rateTable={
                <>
                  <RateRow
                    label="Bid"
                    value="₦10.00"
                  />
                  <RateRow
                    label="Offer"
                    value="₦10.00"
                  />
                  <RateRow
                    label="Effective Yield"
                    value={
                      data?.moneyMarketRate?.effective_yield ?
                        `${data.moneyMarketRate.effective_yield}%`
                      : null
                    }
                  />
                  <RateRow
                    label="Gross Yield"
                    value={
                      data?.moneyMarketRate?.gross_yield ?
                        `${data.moneyMarketRate.gross_yield}%`
                      : null
                    }
                  />
                </>
              }
            />

            {/* Fixed Income Fund */}
            <FundCard
              tag="For Consistent Income"
              tagColor="purple"
              title="Fixed Income Fund"
              reportUrl="/reports-pdf/meristem-fixed-income-fund-report-july 2026.pdf"
              description="Invest primarily in bonds and other income-generating securities designed to provide predictable returns and long-term capital preservation. Provides unit holders with long-term capital growth and regular income through a diversified portfolio of fixed income instruments."
              videoUrl="https://res.cloudinary.com/dptx3beqe/video/upload/v1749630687/wb2videos/MFIF_cay6o7.mp4"
              reverse
              details={[
                { label: "Name", value: "Meristem Fixed Income Fund" },
                { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
                { label: "Trustee", value: "Emerging Africa Trustees Limited" },
                { label: "Minimum Tenor", value: "90 Days" },
                { label: "Investment Denomination", value: "Naira" },
                { label: "Investment Securities", value: "Bonds and Money Market Instruments" },
                { label: "Minimum Investment", value: "100 units" },
                { label: "Principal Repayment", value: "Upon client's request" },
                { label: "Interest Payment", value: "Bi-annual distribution of interest" },
                {
                  label: "Early/Premature Redemption by Holder",
                  value: [
                    "Early redemption by the holder is allowable with the following additional conditions:",
                    "Lock-in period: 3 months",
                    "Notice period: 5 business days",
                    "Penalty: 20% charge on accrued income.",
                  ],
                },
                {
                  label: "Other Investment Details",
                  value:
                    "The objective of the fund is to achieve competitive returns by investing in high-quality fixed income instruments.",
                },
              ]}
              rateTable={
                <>
                  <RateRow
                    label="Bid"
                    value={
                      data?.fixedIncomeFundRate?.bid ? `₦ ${data.fixedIncomeFundRate.bid}` : null
                    }
                  />
                  <RateRow
                    label="Offer"
                    value={
                      data?.fixedIncomeFundRate?.offer ?
                        `₦ ${data.fixedIncomeFundRate.offer}`
                      : null
                    }
                  />
                </>
              }
            />

            {/* Equity Market Fund */}
            <FundCard
              tag="For Long-Term Growth"
              tagColor="green"
              title="Equity Market Fund"
              reportUrl="/reports-pdf/MEMF MONTHLY REPORT - JULY (2026).pdf"
              description="Gain exposure to carefully selected stocks with the potential for higher long-term returns. Suitable for investors willing to take on more risk in pursuit of greater growth. Invests in a basket of high-quality equity securities, with a focus on Nigerian companies."
              videoUrl="https://res.cloudinary.com/dptx3beqe/video/upload/v1749630649/wb2videos/MEMF_vqijvz.mp4"
              details={[
                { label: "Name", value: "Meristem Equity Market Fund (MEMF)" },
                { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
                { label: "Investment Category", value: "Equity Securities" },
                { label: "Minimum Tenor", value: "30 days" },
                { label: "Dividends Distribution", value: "When declared by the fund manager." },
                { label: "Investment Denomination", value: "Naira" },
                { label: "Minimum Investment", value: "1,000 units" },
                { label: "Principal Repayment", value: "Upon client's request" },
                {
                  label: "Other Investment Details",
                  value: [
                    "It is for investors who are willing to take more risk for a better return on investment.",
                    "The fund is invested in a basket of high-quality equity securities.",
                    "Return is not static and is subject to market dynamics.",
                  ],
                },
              ]}
              rateTable={
                <>
                  <RateRow
                    label="Bid"
                    value={data?.equityMarketRate?.bid ? `₦ ${data.equityMarketRate.bid}` : null}
                  />
                  <RateRow
                    label="Offer"
                    value={
                      data?.equityMarketRate?.offer ? `₦ ${data.equityMarketRate.offer}` : null
                    }
                  />
                  <RateRow
                    label="YTD Return"
                    value={
                      data?.equityMarketRate?.ytd_return ?
                        `${data.equityMarketRate.ytd_return}%`
                      : null
                    }
                  />
                </>
              }
            />

            {/* Dollar Fund */}
            <FundCard
              tag="Protect and Grow Wealth in Dollars"
              tagColor="amber"
              title="Dollar Fund"
              description="Invest in dollar-denominated assets and diversify beyond the naira. Invests in Investment grade sovereign and corporate Eurobonds, and other qualifying USD instruments issued by Nigerian entities. Ideal for investors seeking global exposure and protection against currency fluctuations."
              videoUrl="https://res.cloudinary.com/dptx3beqe/video/upload/v1762509263/wb2videos/DOLLAR_FUND_n1t13t.mp4"
              reverse
              reportUrl="/reports-pdf/MFIF MONTHLY REPORT-JULY 2026.pdf"
              cta="Get Started"
              ctaHref="https://forms.meristemng.com/meristem-dollar-fund/"
              details={[
                { label: "Name", value: "Meristem Dollar Mutual Fund" },
                { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
                { label: "Trustee", value: "Emerging Africa Trustees Limited" },
                { label: "Minimum Tenor", value: "180 Days" },
                { label: "Investment Denomination", value: "USD" },
                { label: "Investment Securities", value: "Bonds and Money Market Instruments" },
                { label: "Minimum Investment", value: "50 Units" },
                { label: "Minimum Withdrawal", value: "$500 (USD)" },
                { label: "Principal Repayment", value: "Upon client's request" },
                { label: "Interest Payment", value: "Bi-annually distribution of interest" },
                {
                  label: "Early/Premature Redemption by Holder",
                  value: [
                    "Lock in period: 6 months",
                    "Notice period: 5 business days.",
                    "Penalty: 20% charge on accrued income",
                  ],
                },
                {
                  label: "Other Investment Details",
                  value:
                    "The objective of the fund is to achieve competitive returns by investing in high-quality fixed-income instruments.",
                },
              ]}
              rateTable={
                <>
                  <RateRow
                    label="Gross Yield"
                    value="8.95%"
                  />
                  <RateRow
                    label="Effective Yield"
                    value="6.99%"
                  />
                  <RateRow
                    label="Net Asset Value Per Unit"
                    value={null}
                  />
                </>
              }
            />

            {/* ETF (Exchange Traded Fund) */}
            <FundCard
              tag="Trade a Diversified Basket on the Exchange"
              tagColor="orange"
              title="Meristem Exchange Traded Fund (ETF)"
              etfReportUrl="/reports-pdf/MER GROWTH ETF REPORT _ JULY 2026.pdf"
              description="Gain exposure to a diversified basket of securities through a single, exchange-listed instrument that combines the diversification of a mutual fund with the flexibility of trading a stock in real time. Ideal for investors who want broad market exposure with intraday liquidity."
              reverse
              details={[
                { label: "Name", value: "Meristem Exchange Traded Fund" },
                { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
                { label: "Investment Category", value: "Exchange Traded Fund" },
                {
                  label: "Investment Securities",
                  value: "Diversified basket of listed equities and/or fixed income instruments.",
                },
                { label: "Investment Denomination", value: "Naira" },
                { label: "Trading", value: "Bought and sold on the exchange during trading hours" },
                {
                  label: "Other Investment Details",
                  value:
                    "Returns are not static and are subject to market dynamics. Full details, including NAV and pricing, will be published once the fund is live.",
                },
              ]}
              comingSoon
              endButtons={true}
            />

            {/* Value ETF */}
            <FundCard
              tag="Trade Undervalued Opportunities on the Exchange"
              tagColor="orange"
              title="Meristem Value ETF"
              etfReportUrl="/reports-pdf/MER-VALUE ETF REPORT JULY_ 2026.pdf"
              description="Gain exposure to a diversified basket of fundamentally undervalued, high-potential listed securities through a single, exchange-traded instrument. Ideal for investors seeking long-term capital appreciation by tracking companies trading below their intrinsic value, with the added flexibility of intraday trading on the exchange."
              details={[
                { label: "Name", value: "Meristem Value Exchange Traded Fund" },
                { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
                { label: "Investment Category", value: "Exchange Traded Fund - Value Strategy" },
                {
                  label: "Investment Securities",
                  value:
                    "Basket of listed equities selected using a value-investing strategy (low relative valuation, strong fundamentals).",
                },
                { label: "Investment Denomination", value: "Naira" },
                { label: "Trading", value: "Bought and sold on the exchange during trading hours" },
                {
                  label: "Other Investment Details",
                  value:
                    "Returns are not static and are subject to market dynamics. Full details, including NAV and pricing, will be published once the fund is live.",
                },
              ]}
              comingSoon
              endButtons={true}
            />

            {/* Commodities Fund */}
            <FundCard
              tag="Invest Beyond Traditional Assets"
              tagColor="amber"
              title="Commodities Fund"
              reportUrl="/reports-pdf/MMMF Monthly Report - JULY 2026.pdf"
              description="Access opportunities in commodity-linked investments that can help diversify your portfolio and provide exposure to alternative sources of growth."
              details={[
                { label: "Name", value: "Meristem Commodities Fund" },
                { label: "Fund Manager", value: "Meristem Wealth Management Limited" },
                { label: "Trustee", value: "Cordros Trustees" },
                { label: "Minimum Holding Period", value: "90 Days" },
                { label: "Investment Denomination", value: "Naira" },
                {
                  label: "Investment Securities",
                  value:
                    "Agricultural commodities, solid minerals, listed equities and commodities linked money market instruments",
                },
                {
                  label: "Minimum Investment",
                  value: "₦5,000,000 (and multiples of ₦1,000 thereafter)",
                },
                {
                  label: "Returns",
                  value:
                    "Annual income distributions (75% of the declared dividend is paid out to investors yearly; 25% is reinvested). Capital appreciation as the value of the units grows over time.",
                },
                { label: "Early/Premature Redemption by Holder", value: "20% of accrued profits" },
              ]}
              comingSoon
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
            A Mutual Fund is a financial intermediary that pools the savings of investors for
            collective investment in a diversified portfolio of securities which may include bonds,
            stocks, money market instrument, other securities, real estate, etc.
          </p>
          <p
            className="text-gray-700 text-base leading-8"
            // variants={fadeIn}
            // initial="hidden"
            // animate={inView ? "show" : "hidden"}
            //   custom={0.1}
          >
            We offer clients the choice of various funds depending on their investment objectives
            and risk profile, bearing in mind that the level of risk you take and potential returns
            are directly related.
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

export default function MutualFundPage() {
  return (
    <div className="pt-16">
      {/* <IntroSection /> */}
      <OfferingsSection />
    </div>
  );
}
