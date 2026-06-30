import ProductPage from "@/components/products/ProductPage";
import React from "react";
import { notFound } from "next/navigation";
import MeristemContactSection from "@/components/ContactSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export const products = [
  // MERISTEM STOCKBROKERS LIMITED
  {
    slug: "meristem-business-associate",
    id: 1,
    title: "Meristem Business Associate",
    description:
      "Become a Meristem Business Associate and expand your financial services portfolio with our trusted stockbroking infrastructure. This program empowers entrepreneurs, consultants, and existing financial advisors to offer world‑class investment solutions under the Meristem brand. You gain access to real‑time trading platforms, research reports, and client management tools without building your own back‑office systems. Associates earn competitive commissions on every trade executed by their referred clients while receiving dedicated training and marketing support. The program is ideal for individuals looking to monetize their professional networks in the financial services industry. With Meristem’s regulatory license and compliance oversight, you can focus on client relationships while we handle execution and settlement seamlessly.",
    img: "https://images.unsplash.com/photo-1573496130488-f3bd89d03653?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Stockbrokers Limited",
    productBannerImgUrl: "/stockbroker.png",
    sectionImgURL: "",
    list: [
      "The stock market for real-time buying and selling of shares from your comfort zone.",
      "Real-time market information, to help you make the best trading decisions",
      "Real-time monitoring of the market and your shares/portfolio",
      "Buy and sell securities on your behalf at minicost(best execution)",
    ],
  },
  {
    slug: "share-dividend-tracking-recovery",
    id: 2,
    title: "Share & Dividend Tracking & Recovery",
    description:
      "Reclaim lost or unclaimed dividends and locate missing share certificates with Meristem’s specialized tracking and recovery service. Over the years, many investors lose track of their investments due to address changes, company mergers, or simply forgotten accounts. Our team conducts comprehensive searches across registrars, unclaimed dividend lists, and regulatory databases to identify every asset rightfully yours. We handle all the paperwork, including affidavits, indemnities, and registrar applications, to restore your holdings or claim cash dividends. Once recovered, we help you consolidate these assets into a single, manageable portfolio with regular statements. Whether you have a few old share certificates or a complex inheritance situation, our no‑recovery‑no‑fee approach ensures you only pay when we succeed.",
    img: "https://images.unsplash.com/photo-1719464521902-4dc9595b182d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Stockbrokers Limited",
    productBannerImgUrl: "/stockbroker.png",
    getStartedUrl: "https://meriboss.com/",
  },
  {
    slug: "stock-trading",
    id: 3,
    title: "Stock Trading",
    description:
      "Execute real‑time trades on the Nigerian Exchange with Meristem’s robust stock trading platform, designed for both active day traders and long‑term investors. Our platform provides live price feeds, advanced charting tools, and one‑click order placement directly from your dashboard. You can monitor your portfolio performance, track dividend payments, and access historical trade data anytime from desktop or mobile devices. We offer multiple order types including limit orders, stop‑losses, and market orders to help you execute your exact strategy. Settlement is fast and transparent, with trade confirmations sent instantly via email and SMS. Backed by a dedicated customer support team and full regulatory compliance, you can trade with confidence knowing your assets are protected by the Central Securities Clearing System (CSCS).",
    img: "https://images.unsplash.com/photo-1549421263-6064833b071b?q=80&w=3765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Stockbrokers Limited",
    productBannerImgUrl: "/stockbroker.png",
    getStartedUrl: "https://meritrade.com/",
  },

  // MERISTEM WEALTH MANAGEMENT LIMITED
  {
    slug: "asset-portfolio-management",
    id: 4,
    title: "Asset & Portfolio Management",
    productBannerImgUrl:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "Let Meristem’s professional investment managers build and oversee a diversified portfolio tailored to your financial goals and risk tolerance. We start with a deep discovery process to understand your income needs, time horizon, and any ethical or liquidity preferences. Your portfolio is then constructed using a mix of equities, bonds, treasury bills, mutual funds, and alternative assets to optimize returns while managing volatility. We continuously monitor market conditions, rebalancing your holdings as needed to lock in gains or reduce exposure to emerging risks. Quarterly performance reports and annual review meetings keep you fully informed of progress toward your goals. With fiduciary duty at our core, your interests always come first—we are compensated only when your portfolio grows.",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "bond-investments",
    id: 5,
    title: "Bond Investments",
    productBannerImgUrl:
      "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Earn predictable, fixed income by investing in Nigerian government and corporate bonds through Meristem’s bond desk. Bonds offer regular coupon payments (typically semi‑annual) and return of principal at maturity, making them ideal for conservative investors or those nearing retirement. We provide access to FGN bonds, state government bonds, and high‑quality corporate bonds from blue‑chip Nigerian companies. Our team analyzes credit ratings, yield curves, and interest rate trends to recommend bonds that match your income needs and risk appetite. You can invest directly via primary market auctions or purchase existing bonds on the secondary market through our trading platform. With low minimum investment amounts compared to buying directly, Meristem makes bond investing accessible to everyday Nigerians seeking stable, dollar‑like returns in naira.",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "fixed-income-investment",
    id: 6,
    title: "Fixed Term Investment",
    productBannerImgUrl: "/stockbroker.png",
    description:
      "Lock in guaranteed returns for a specific period with Meristem’s Fixed Term Investment product, similar to a fixed deposit but often with higher yields. Choose your investment tenor from 30 days to 365 days, and receive a fixed interest rate that does not change regardless of market fluctuations. Your principal is fully protected, and returns are paid at maturity or periodically as you prefer. This product is ideal for short‑to‑medium term savings goals such as school fees, home renovation, or a business capital reserve. We offer competitive rates that typically exceed standard bank fixed deposits because we invest in high‑quality money market instruments and commercial paper. At maturity, you can roll over automatically or withdraw your full principal plus accrued interest within 24 hours.",
    img: "https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=800&auto=format",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "meri-dollar-investment",
    id: 7,
    title: "Meri-Dollar Investment",
    productBannerImgUrl:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Protect your savings from naira devaluation and earn returns in US dollars with Meristem’s Meri‑Dollar Investment product. This offering allows you to invest legitimate foreign currency (or naira converted at official rates) into dollar‑denominated instruments such as Eurobonds, foreign treasury bills, or dollar mutual funds. Your investment grows in dollar terms, shielding your purchasing power from local currency volatility. We handle all regulatory requirements, including Form A and offshore remittances, so you don’t need a foreign bank account. Returns are paid directly into your designated dollar account or reinvested to compound your wealth. With a minimum investment of just $1,000, Meri‑Dollar is accessible to professionals, business owners, and the diaspora community looking to preserve cross‑border wealth.",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "exchange-trade-funds",
    id: 8,
    title: "Exchange Trade Funds",
    description:
      "Grow your wealth with confidence through Meristem’s professionally managed mutual funds, designed for every type of investor. Choose from a diverse range of funds spanning Nigerian equities, fixed‑income securities, and money market instruments—each expertly structured to match your specific risk appetite and financial timeline. Whether you’re saving for retirement, funding a child’s university education, or building an emergency fund, we have a solution tailored to your goals. Our funds feature low entry barriers, making professional investment management accessible to everyone regardless of their starting capital. Enjoy daily liquidity that allows you to access your money whenever you need it without lengthy withdrawal processes. With transparent monthly reporting and dedicated customer support, you’ll always know exactly how your investments are performing and why.",
    img: "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "mutual-funds",
    id: 8,
    title: "Mutual Funds",
    description:
      "Grow your wealth with confidence through Meristem’s professionally managed mutual funds, designed for every type of investor. Choose from a diverse range of funds spanning Nigerian equities, fixed‑income securities, and money market instruments—each expertly structured to match your specific risk appetite and financial timeline. Whether you’re saving for retirement, funding a child’s university education, or building an emergency fund, we have a solution tailored to your goals. Our funds feature low entry barriers, making professional investment management accessible to everyone regardless of their starting capital. Enjoy daily liquidity that allows you to access your money whenever you need it without lengthy withdrawal processes. With transparent monthly reporting and dedicated customer support, you’ll always know exactly how your investments are performing and why.",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "fixed-income-dealing",
    id: 9,
    title: "Fixed Income Dealing",
    description:
      "Invest in short‑term Nigerian government securities with Meristem’s Treasury Bills service, offering risk‑free returns backed by the full faith of the Federal Government. Treasury bills are issued at a discount to face value and mature in 91, 182, or 364 days, with the difference representing your interest income. We facilitate participation in primary market auctions through the Central Bank of Nigeria, ensuring you get the most competitive rates available. You can also buy and sell existing treasury bills on the secondary market through our trading platform for added flexibility. With zero default risk and exemption from tax on interest income, treasury bills are a favorite for conservative investors and corporate treasury managers. Meristem handles all bidding, settlement, and custody so you can earn predictable returns without administrative hassle.",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "real-estate-investment",
    id: 10,
    title: "Real Estate",
    description:
      "Own a piece of prime Nigerian real estate without the burden of property management through Meristem’s structured real estate investment offerings. We identify high‑potential residential and commercial projects in Lagos, Abuja, and other growth corridors, then pool investor capital to acquire or develop them. Your investment generates returns from rental income and capital appreciation upon sale, distributed pro‑rata to all investors. Unlike direct property ownership, there are no headaches with tenants, repairs, or legal documentation—we handle everything. Minimum investments are affordable, allowing you to diversify across multiple properties rather than putting all your capital into one house. With rigorous due diligence on every project and transparent quarterly valuations, Meristem makes real estate a liquid, accessible asset class for the everyday Nigerian investor.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "retirement-planning",
    id: 11,
    title: "Retirement Planning",
    description:
      "Evergreen by Meristem exists to help you design a customized retirement and estate plan that brings you happiness and peace of mind. This is done by incorporating all assets and liabilities that you may have accumulated before retirement to design a personalized combo plan that helps you achieve your personal goals ranging from financial obligations, social life, hobbies and living conditions after retirement, as well as help grow, preserve and transfer your wealth.",
    // "Build a secure, inflation‑proof retirement income with Meristem’s personalized retirement planning service. We analyze your current age, savings, expected lifestyle, and health factors to determine exactly how much you need to accumulate before retirement. Our team then designs a disciplined investment strategy using a mix of growth assets (equities, real estate) and income assets (bonds, treasury bills) tailored to your time horizon. We also help you optimize contributions to your employer’s pension scheme, RSA, or voluntary retirement accounts to maximize tax benefits. As you near retirement, we gradually shift your portfolio toward capital preservation so market downturns don’t derail your plans. With annual reviews and scenario modeling, you’ll always know whether you’re on track—and what adjustments to make if life throws a curveball.",
    img: "https://images.unsplash.com/photo-1611646890761-494738a85c96?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dt",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "succession-planning",
    id: 12,
    title: "Succession Planning",
    description:
      "Ensure your wealth passes smoothly to the next generation without legal battles or tax erosion through Meristem’s succession planning advisory. We work with you to map out exactly who gets what, when, and under what conditions—whether through wills, trusts, or beneficiary designations. For business owners, we help design buy‑sell agreements, family council structures, and management succession roadmaps that keep the enterprise thriving after you step down. Our team coordinates with your lawyers and accountants to ensure all documents are legally sound and tax‑efficient across multiple jurisdictions. We also conduct family education sessions to prepare heirs for their future responsibilities, reducing the risk of conflict or squandered wealth. With Meristem, your legacy becomes a source of family unity rather than dispute.",
    img: "https://images.unsplash.com/photo-1587822766378-e47b139c56ad?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "structured-products",
    id: 12,
    title: "Structured Products",
    description:
      "Ensure your wealth passes smoothly to the next generation without legal battles or tax erosion through Meristem’s succession planning advisory. We work with you to map out exactly who gets what, when, and under what conditions—whether through wills, trusts, or beneficiary designations. For business owners, we help design buy‑sell agreements, family council structures, and management succession roadmaps that keep the enterprise thriving after you step down. Our team coordinates with your lawyers and accountants to ensure all documents are legally sound and tax‑efficient across multiple jurisdictions. We also conduct family education sessions to prepare heirs for their future responsibilities, reducing the risk of conflict or squandered wealth. With Meristem, your legacy becomes a source of family unity rather than dispute.",
    img: "https://images.unsplash.com/photo-1587822766378-e47b139c56ad?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Wealth Management Limited",
  },

  // MERISTEM TRUSTEES LIMITED
  {
    slug: "corporate-trust",
    id: 13,
    title: "Corporate Trust",
    description:
      "Let Meristem act as an independent trustee for your corporate obligations, ensuring bondholders, employees, or other stakeholders are protected. We serve as trustee for debenture trusts, bond issuance, employee share ownership plans (ESOPs), and pension fund asset holding. Our role includes monitoring compliance with trust deeds, enforcing covenants, distributing interest payments, and representing beneficiary interests in restructuring scenarios. Companies benefit from our impartial oversight, which enhances investor confidence and can lower borrowing costs. We handle all administrative duties including registers, reporting, and regulatory filings with the SEC and FRC. With decades of collective experience in corporate fiduciary services, Meristem provides the professionalism and financial strength that stakeholders demand.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format",
    subsidiary: "Meristem Trustees Limited",
    productBannerImgUrl:
      "https://plus.unsplash.com/premium_photo-1733317239304-a6bf462a2596?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "private-trust",
    id: 14,
    title: "Private Trust",
    description:
      "Protect your family’s wealth and control how it is distributed with Meristem’s Private Trust services, tailored for high‑net‑worth individuals. You can create a Living Trust that manages your assets during your lifetime and seamlessly transfers them upon death, avoiding costly and public probate proceedings. Education Trusts ensure that school fees and university expenses are paid directly from the trust, safeguarding your children’s future even if you are no longer around. For special needs family members, a trust can provide lifetime care without disqualifying them from government benefits. You decide the rules: at what age beneficiaries receive assets, whether distributions require employment or educational milestones, and who the successor trustees are. Meristem administers the trust with strict fiduciary care, providing regular accountings and investment management so your wishes are honored exactly as written.",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format",
    subsidiary: "Meristem Trustees Limited",
  },
  {
    slug: "public-trust",
    id: 15,
    title: "Public Trust",
    description:
      "Serve your community or charitable mission with Meristem’s Public Trust administration services, designed for religious organizations, NGOs, and community foundations. We act as the legal trustee holding assets for a public benefit purpose, ensuring donor intent is honored and funds are used only for specified charitable activities. Our team handles all regulatory compliance, including annual returns to the Charity Commission and tax authorities, so you can focus on program delivery. We also provide investment management for trust assets, aiming to generate sustainable income while preserving capital. Whether you manage a scholarship fund, a mosque or church endowment, or a disaster relief trust, Meristem offers transparent accounting and board reporting. With our independent oversight, donors gain confidence that their contributions will be managed responsibly for generations.",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&auto=format",
    subsidiary: "Meristem Trustees Limited",
  },

  // MERISTEM FINANCE LIMITED
  {
    slug: "bridge-financing",
    id: 16,
    title: "Bridge Financing",
    description:
      "Cover short‑term cash flow gaps with Meristem’s Bridge Financing, designed for businesses awaiting a confirmed inflow of funds. Whether you’re expecting payment from a large contract, a government grant, or an equity injection, we advance a portion of that amount immediately. Repayment is structured to coincide with your expected inflow, often within 30 to 180 days, so you don’t carry debt longer than necessary. Use the funds to meet payroll, purchase inventory, or take advantage of a time‑sensitive opportunity without depleting working capital. Interest is calculated only for the period you actually use the funds, with no prepayment penalties. Approval is fast—often within 48 hours—based on the strength of your receivable rather than traditional collateral. The benfits includes the following: ",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format",
    subsidiary: "Meristem Finance Limited",
    list: [
      "Quick process",
      "Helps in quick finance pursuing and immediate business needs",
      // "Regulatory Filings",
      // "2 Passport Photographs",
      // "Bank Statements (6 month most recent)",
      // "Audited financial statement/Management",
      // "Utility Bill",
      // "Letter of Intent",
      // "Proforma Invoice",
    ],
  },
  {
    slug: "cash-backed-facility",
    id: 17,
    title: "Cash Backed Facility",
    description:
      "Access immediate liquidity by leveraging your existing cash savings or fixed deposits with Meristem’s Cash Backed Facility. You deposit a specified amount into a pledged account, and we lend you up to 90% of that value for any purpose—business expansion, personal investment, or emergency needs. Because the loan is fully collateralized by your own cash, interest rates are significantly lower than unsecured personal loans. You continue to earn interest on your pledged deposit while using the loan proceeds, effectively leveraging your money. Repayment terms are flexible, and you can increase or decrease the facility as your needs change. Once the loan is repaid, your deposit is fully released with all accrued interest intact.",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&auto=format",
    subsidiary: "Meristem Finance Limited",
    list: [
      "Reduce delays and frustrations to clients’ business arising from the urgent nature of such requests.",
      "Meet clients’ needs for short-term funding.",
      "Access to funds in clearing in a structured manner.",
    ],
  },
  {
    slug: "equity-backed-facility",
    id: 18,
    title: "Equity Backed Facility",
    description:
      "Unlock the value of your stock portfolio without selling your shares using Meristem’s Equity Backed Facility. We lend against your listed Nigerian equities, typically up to 60‑70% of their market value, providing cash for any purpose while you retain ownership and dividends. The loan is structured as a non‑recourse facility—if share prices fall significantly, you can simply hand over the shares instead of repaying the loan. Interest rates are competitive because your portfolio serves as collateral, and there are no restrictions on how you use the borrowed funds. You can repay early without penalty or roll over the facility as long as loan‑to‑value ratios remain acceptable. This is ideal for investors who need cash but believe their shares will appreciate further or want to avoid crystallizing capital gains tax.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format",
    subsidiary: "Meristem Finance Limited",
    list: [
      "Quick Access to working capital.",
      "Access to portfolio gain over the period.",
      // "Access to funds in clearing in a structured manner.",
    ],
  },
  {
    slug: "invoice-discounting",
    id: 19,
    title: "Invoice Discounting",
    description:
      "Improve your business’s cash flow by selling unpaid customer invoices to Meristem at a discount, receiving immediate funds instead of waiting 30‑120 days. We advance up to 85% of the invoice value within 24 hours of verification, with the balance (minus our fee) paid when your customer settles. The service is confidential—your customers never know you’re using invoice discounting, as they pay directly into a controlled bank account. This is perfect for B2B businesses with credit sales, from logistics companies to manufacturers and service providers. Unlike a traditional loan, the facility grows with your sales: more invoices mean more available funding. Our online portal allows you to upload invoices, track advances, and monitor customer payment status in real time.",
    img: "https://images.unsplash.com/photo-1554224155-cfa08c2a758f?q=80&w=2626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Finance Limited",
    list: [
      "Easy and fast access to working capital.",
      "Improved cash flow and flexible funding.",
      "Competitive interest and flexible repayment agreements.",
    ],
  },
  {
    slug: "local-purchase-order",
    id: 20,
    title: "Local Purchase Order (LPO) Financing",
    description:
      "Fulfill large supply contracts without straining your working capital using Meristem’s LPO Financing. When you receive a valid purchase order from a creditworthy corporate or government entity, we fund the cost of procuring the required goods or materials. You use the funds to purchase inventory, complete production, and deliver to your customer. Once the customer pays the invoice, we deduct our principal and fee, remitting the profit to you. This facility is particularly useful for small‑to‑medium suppliers who lack the balance sheet to pre‑finance large orders. Approval is based on the creditworthiness of your customer rather than your own financial history. With fast turnaround times—often 3‑5 days from LPO submission—you never miss a business opportunity due to lack of cash.",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format",
    subsidiary: "Meristem Finance Limited",
    list: [
      "Gives clients the ability to carry out supply orders within a given time",
      "Supports business growth and expansion.",
      "Gives clients access to working capital.",
    ],
  },
  {
    slug: "meristem-finance-lease",
    id: 21,
    title: "Meristem Finance Lease",
    description:
      "Acquire essential business assets like vehicles, machinery, or office equipment without a large upfront payment using Meristem’s Finance Lease. We purchase the asset on your behalf, and you make fixed monthly rentals over an agreed period (typically 1‑5 years). At the end of the lease, you have the option to purchase the asset for a nominal residual value, return it, or renew the lease. Unlike a standard loan, lease payments are often fully tax‑deductible as operating expenses, reducing your effective cost. There are no down payments or security deposits, preserving your working capital for other needs. With flexible terms and competitive interest rates, Meristem Finance Lease helps you stay current with modern equipment while maintaining healthy cash flow.",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format",
    subsidiary: "Meristem Finance Limited",
    list: [
      "Company Profile",
      "Corporate Current Bank Account Statements",
      "Regulatory Filings",
      "2 Passport Photographs",
      "Bank Statements (6 month most recent)",
      "Audited financial statement/Management",
      "Utility Bill",
      "Letter of Intent",
      "Proforma Invoice",
    ],
  },
  {
    slug: "working-capital-loan",
    id: 22,
    title: "Working Capital Loan",
    description:
      "Smooth out seasonal fluctuations and cover day‑to‑day operational expenses with Meristem’s flexible Working Capital Loan. This revolving facility allows you to draw funds as needed, repay, and redraw without reapplying—similar to an overdraft but with higher limits and lower interest. Use the funds to pay salaries, rent, utilities, or to purchase inventory ahead of peak sales periods. Interest is charged only on the amount you actually use, not the entire credit line. Repayment schedules are aligned with your cash conversion cycle, whether weekly, monthly, or tailored to your specific inflows. With a simple application process and quick disbursement, Meristem ensures that lack of working capital never holds your business back.",
    img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format",
    subsidiary: "Meristem Finance Limited",
    list: [
      "Covers expenditure gaps",
      "Access to short-term loan",
      "Flexible repayment terms",
      "Helps businesses stay afloat by financing their payment gaps and fulfilling their working capital requirements",
      "Assists businesses fulfil their short-term goals or urgent cash flow shortfalls.",
      "Secures businesses during unexpected circumstances.",
    ],
  },
  {
    slug: "working-capital-loan",
    id: 22,
    title: "Working Capital Loan",
    description:
      "Smooth out seasonal fluctuations and cover day‑to‑day operational expenses with Meristem’s flexible Working Capital Loan. This revolving facility allows you to draw funds as needed, repay, and redraw without reapplying—similar to an overdraft but with higher limits and lower interest. Use the funds to pay salaries, rent, utilities, or to purchase inventory ahead of peak sales periods. Interest is charged only on the amount you actually use, not the entire credit line. Repayment schedules are aligned with your cash conversion cycle, whether weekly, monthly, or tailored to your specific inflows. With a simple application process and quick disbursement, Meristem ensures that lack of working capital never holds your business back.",
    img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format",
    subsidiary: "Meristem Finance Limited",
    list: [
      "Covers expenditure gaps",
      "Access to short-term loan",
      "Flexible repayment terms",
      "Helps businesses stay afloat by financing their payment gaps and fulfilling their working capital requirements",
      "Assists businesses fulfil their short-term goals or urgent cash flow shortfalls.",
      "Secures businesses during unexpected circumstances.",
    ],
  },

  // MERISTEM REGISTRAR AND PROBATE SERVICES LIMITED
  {
    slug: "agm-egm-administration",
    id: 23,
    title: "AGM/EGM Administration",
    description:
      "Run flawless shareholder meetings with Meristem’s end‑to‑end AGM and EGM administration services. We handle every detail: from printing and dispatching notices, proxies, and annual reports to managing attendee registration and voting. Our team ensures full compliance with the Companies and Allied Matters Act (CAMA) and SEC regulations, including filing of resolutions with the Corporate Affairs Commission. We provide electronic voting systems that allow remote shareholders to participate, boosting turnout and satisfaction. After the meeting, we prepare minutes, update the register of members, and process any share allotments or changes. With Meristem, you reduce the administrative burden on your board and legal team while enhancing the shareholder experience.",
    img: "https://plus.unsplash.com/premium_photo-1742932625664-12b3f5519de6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Registrar and Probate Services Limited",
  },
  {
    slug: "bond-register-administration",
    id: 24,
    title: "Bond Register Administration",
    description:
      "Maintain accurate, compliant bondholder records with Meristem’s Bond Register Administration service. We act as the official registrar for your bond issuance, tracking all ownership changes, interest payments, and maturity redemptions. Our system handles electronic transfers, physical certificate issuance, and replacement of lost instruments according to capital market rules. We also manage the payment of coupons (interest) directly to bondholders’ bank accounts, with full tax deduction at source as required. For listed bonds, we reconcile with the Nigerian Exchange and CSCS daily to ensure accurate settlement of secondary market trades. Issuers benefit from our detailed reporting, including bondholder analysis by geography, holding size, and investor type—invaluable for investor relations and future fundraising.",
    img: "https://images.unsplash.com/photo-1740645581653-068ad8fa2765?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Registrar and Probate Services Limited",
  },
  {
    slug: "probate-services",
    id: 25,
    title: "Probate Services",
    description:
      "The loss of a loved one is never an experience to relive. A loss of this nature can be difficult and oftentimes without information for the transfer of their asset. Not knowing what asset (cash, shares, pension, insurance, land, buildings etc.) At Meristem, we recognize the pain of losing a loved one, thus we make it our business to ensure that the transfer of their asset is seamless, prompt and stress-free. We deliver prompt asset transfer services by helping you procure;",
    img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=2716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Registrar and Probate Services Limited",
    list: [
      "Letters of Administration",
      "Grant of Probate",
      "Transmission of Shares",
      "Amendment of Grant",
      "Certificate of Additional Assets",
    ],
  },
  {
    slug: "public-offer-services",
    id: 26,
    title: "Public Offer Services",
    description:
      "Execute successful capital raises with Meristem’s Public Offer Services, acting as receiving registrar for rights issues, IPOs, and offers for subscription. We set up collection centers nationwide (physical and digital) where investors can submit applications and payments. Our system validates applications, rejects invalid ones, and allocates shares according to the offer terms (e.g., pro‑rata or first‑come‑first‑served). We then credit successful applicants’ CSCS accounts or issue physical share certificates, and refund unsuccessful applicants promptly. Throughout the offer period, we provide the issuer with daily reports on subscription levels, investor demographics, and any issues. Post‑offer, we update the central register of members and file all regulatory returns with the SEC and NGX. With Meristem, you get accuracy, speed, and transparency that builds investor confidence.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
    subsidiary: "Meristem Registrar and Probate Services Limited",
  },
  {
    slug: "right-issue-services",
    id: 27,
    title: "Right Issue Services",
    description:
      "Raise additional capital from existing shareholders efficiently with Meristem’s Right Issue Services. We manage the entire process: determining the ratio of new shares to existing holdings, setting the subscription price, and preparing the offer circular. Our team distributes provisional allotment letters to all eligible shareholders via mail, email, and SMS, with clear instructions on how to accept (or renounce) their rights. We handle collection of acceptances and payments, process renunciations and transfers of rights on the secondary market, and allocate shares accordingly. After closure, we credit new shares to shareholders’ CSCS accounts and update the register of members. We also handle all SEC filings and NGX notifications. With Meristem, you maximize participation and minimize administrative headaches during your rights issue.",
    img: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=800&auto=format",
    subsidiary: "Meristem Registrar and Probate Services Limited",
    list: [
      "Processing of rights rue to Shareholders and dispatch of same.",
      "Liaise with other stakeholders on the transaction to ensure a seamless process.",
      "Provision of on-line access to the Issuing House for monitoring of offer data and returns being collated.",
      "Prepare error-free analysis of all returns and produce allotment data for Issuing house usage.",
      "Forward subscription list to Central Securities Clearing System (CSCS) for crediting after the approval of the Securities & Exchange Commission (SEC).",
      "Timely dispatch of return monies on un-allotted/rejected applications to subscribers.",
      "Pay brokerage commission to receiving agents.",
    ],
  },
  {
    slug: "share-registration-services",
    id: 28,
    title: "Share Registration Services",
    description:
      "Maintain a clean, compliant, and up‑to‑date register of members with Meristem’s Share Registration Services. We act as your company’s official registrar, recording all share transfers, name changes, and issuance of new shares. Our online portal allows shareholders to update their contact details, view their holdings, and request duplicate certificates directly. We process dividend payments, bonus issues, and share splits seamlessly, with automatic tax deduction and remittance to relevant authorities. For listed companies, we reconcile daily with the CSCS to capture all electronic transfers. We also respond to shareholder inquiries, provide status letters, and prepare the annual return for filing with CAC. With Meristem, you outsource a complex regulatory function to experts, reducing your internal costs and compliance risk.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    subsidiary: "Meristem Registrar and Probate Services Limited",
    list: [
      "Verification and certification of shareholders` claims",
      "Optimal record-keeping and monitoring of shareholding movement",
      "Proper management of proxies, vote counts and polls",
      "Payment of dividends directly into the shareholders` bank accounts through deployment of secure technologies",
      "Dispatch of e-dividend advice to shareholders",
      "E-lodgment of bonus shares when declared",
      "E-lodgment of Rights Issues/IPO after offers",
      "Dispatch of physical certificates for unquoted shares",
      "Timely, widespread and cost-effective distribution of client company physical/electronic annual reports to shareholders.",
    ],
  },

  // MERISTEM FAMILY OFFICE LIMITED
  {
    slug: "family-governance-advisory",
    id: 29,
    title: "Family Governance Advisory",
    description:
      "Build structures that keep your family united and wealthy across generations with Meristem’s Family Governance Advisory. We help you create a family constitution that articulates shared values, decision‑making processes, and expectations for family members who work in the business. Our team facilitates regular family council meetings, where all members (including in‑laws and future spouses) have a voice without destabilizing management. We also design policies for family employment, loans to members, and conflict resolution mechanisms that prevent disputes from escalating to court. For larger families, we establish branch representation and voting rights that balance influence with accountability. With Meristem, you transform your family from a potential source of conflict into a enduring competitive advantage.",
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format",
    subsidiary: "Meristem Family Office Limited",
  },
  {
    slug: "health-longevity-plan",
    id: 30,
    title: "Health and Longevity Plan",
    description:
      "Protect your most valuable asset—your health—alongside your financial wealth with Meristem’s Health and Longevity Plan. We coordinate with top medical advisors to conduct comprehensive health assessments, identifying risks and creating preventive care roadmaps. For affluent families, we arrange access to executive health programs, concierge medicine, and medical evacuation services across Nigeria and abroad. Our longevity planning includes lifestyle optimization, nutrition guidance, and regular health monitoring to extend both lifespan and healthspan. We also help structure health insurance and critical illness coverage that protects your family from catastrophic medical expenses. With Meristem, you enjoy peace of mind knowing that your wealth won’t be wiped out by a health crisis, and that you’ll live well enough to enjoy the legacy you’re building.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format",
    subsidiary: "Meristem Family Office Limited",
  },
  {
    slug: "investment-advisory-family-office",
    id: 31,
    title: "Investment Advisory",
    description:
      "Receive unbiased, holistic investment advice for your entire family’s wealth with Meristem’s Family Office Investment Advisory. Unlike product‑focused advisors, we start with your family’s goals, values, and risk tolerance before recommending any specific asset class. Our team constructs a global multi‑asset portfolio that may include Nigerian and international equities, fixed income, private equity, real estate, and alternative investments. We monitor performance continuously, rebalancing to maintain target allocations and tax efficiency. For families with direct business interests, we advise on liquidity planning, exit strategies, and how to diversify away from an over‑concentrated position. With quarterly family investment committee meetings and open‑architecture recommendations (no proprietary product push), you get advice that is always in your best interest.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    subsidiary: "Meristem Family Office Limited",
  },
  {
    slug: "legacy-documentation-service",
    id: 32,
    title: "Legacy Documentation Service",
    description:
      "Ensure every legal document that governs your wealth is properly drafted, executed, and securely stored with Meristem’s Legacy Documentation Service. We work with your lawyers to prepare or update your will, living trust, power of attorney, healthcare directive, and any family limited partnership agreements. Our team then stores the original documents in a fireproof, access‑controlled vault, with digital copies encrypted in the cloud. We also maintain a “legacy letter” that captures your personal wishes, values, and instructions that are not legally binding but guide your family after you’re gone. Authorized family members and advisors can access documents instantly via our secure portal when needed (e.g., upon incapacity or death). With Meristem, you eliminate the risk of lost, outdated, or contested documents that can unravel years of careful planning.",
    img: "https://images.unsplash.com/photo-1587822766378-e47b139c56ad?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Family Office Limited",
  },
  {
    slug: "legacy-planning",
    id: 33,
    title: "Legacy Planning",
    description:
      "Go beyond simple wealth transfer to create a lasting family legacy with Meristem’s comprehensive Legacy Planning service. We help you articulate what you want to be remembered for—whether it’s building a family business, funding education, or supporting charitable causes. Our team then designs the legal and financial structures to achieve that vision, from dynastic trusts to donor‑advised funds. We also prepare the next generation through financial literacy training, mentorship programs, and gradual transfer of responsibilities. For business owners, we facilitate succession that keeps the company in family hands (or sells it on the best terms) while maintaining harmony among heirs. With Meristem, your legacy becomes a source of pride and unity, not confusion or resentment.",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format",
    subsidiary: "Meristem Family Office Limited",
  },
  {
    slug: "philanthropy-advisory",
    id: 34,
    title: "Philanthropy",
    description:
      "Turn your charitable intentions into measurable social impact with Meristem’s Philanthropy Advisory service. We help you define your giving mission, whether it’s supporting education, healthcare, the arts, or environmental conservation. Our team researches and vets non‑profit organizations, providing due diligence on their financial health, governance, and program effectiveness. We then structure your giving using vehicles like donor‑advised funds, private foundations, or direct grants, optimizing for tax efficiency under Nigerian law. For families, we involve the next generation in grant‑making decisions, instilling values of generosity and social responsibility. We also measure and report on the outcomes of your donations, so you see the real‑world change you’re creating. With Meristem, you give smarter, not just harder, leaving a philanthropic legacy that endures.",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format",
    subsidiary: "Meristem Family Office Limited",
  },

  // MERISTEM WEALTH MANAGEMENT LIMITED (Investment Advisory)
  {
    slug: "business-advisory",
    id: 35,
    title: "Business Advisory",
    description:
      "Accelerate your company’s growth and profitability with Meristem’s Business Advisory service, tailored for small‑to‑medium enterprises. We conduct a deep diagnostic of your operations, finances, and market positioning to identify bottlenecks and opportunities. Our team provides actionable recommendations on cost optimization, pricing strategy, working capital management, and digital transformation. For businesses seeking expansion, we help evaluate new markets, partnership opportunities, and acquisition targets. We also assist with turnaround situations, including restructuring debt, renegotiating supplier terms, and improving cash flow forecasting. Unlike consultants who deliver a report and leave, Meristem stays as an ongoing advisor, helping you implement changes and track results. With our cross‑functional expertise, you gain a strategic partner committed to your long‑term success.",
    img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&auto=format",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "debt-capital-market-services",
    id: 36,
    title: "Debt Capital Market Services",
    description:
      "Raise cost‑effective, long‑term debt financing from the capital markets with Meristem’s Debt Capital Market (DCM) Services. We advise on the optimal instrument: commercial paper (short‑term), bonds (medium to long‑term), or sukuk (Islamic finance). Our team handles the entire issuance process, from structuring and credit rating to drafting the offer document and obtaining regulatory approvals from the SEC. We then syndicate the issue to institutional investors—pension funds, asset managers, insurance companies—securing the best possible pricing. Post‑issuance, we provide ongoing investor relations, covenant monitoring, and interest payment administration. Whether you need ₦1 billion or ₦50 billion, Meristem’s DCM expertise helps you access deep pools of local currency funding at lower costs than bank loans.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "equity-capital-market-services",
    id: 37,
    title: "Equity Capital Market Services",
    description:
      "Unlock your company’s value and raise growth capital through Meristem’s Equity Capital Market (ECM) Services. We advise on the right strategy: an Initial Public Offering (IPO) to list on the Nigerian Exchange, a rights issue to existing shareholders, or a private placement to select institutional investors. Our team handles valuation, pre‑IPO restructuring, prospectus drafting, SEC filings, and investor roadshows. We leverage our extensive network of domestic and international investors to generate demand and achieve full subscription. Post‑transaction, we support you with market making, investor relations, and further capital raising as needed. Whether you are a family business seeking partial exit or a fast‑growing company needing expansion capital, Meristem’s ECM expertise delivers results with precision and confidentiality.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format",
    subsidiary: "Meristem Wealth Management Limited",
  },
  {
    slug: "financial-advisory",
    id: 38,
    title: "Financial Advisory",
    description:
      "Navigate complex financial transactions with confidence using Meristem’s comprehensive Financial Advisory service. We provide independent advice on mergers and acquisitions (M&A), including target search, valuation, negotiation, due diligence, and post‑merger integration. For companies considering divestitures, we help identify buyers, structure the sale process, and maximize exit proceeds. Our team also advises on project finance, public‑private partnerships (PPPs), and infrastructure investments, ensuring optimal risk allocation and financing structures. We perform fairness opinions, business valuations for tax or litigation purposes, and financial modeling for strategic decisions. With a strict code of ethics and no proprietary dealing in the companies we advise, you receive unbiased recommendations focused entirely on your best interests. From startups to blue‑chip corporations, Meristem is the trusted advisor for Nigeria’s most important transactions.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    subsidiary: "Meristem Wealth Management Limited",
  },

  //cpaital management Limited
  {
    slug: "debt-captial-market",
    title: "Debt Capital Market Service",
    description:
      "We offer Debt Capital market services to a wide range of businesses and give clients an array of debt financing options to guide you through unlocking capital opportunities and help your company raise funds through debt capital market issuances such as bonds, and commercial papers and suggest the best deal for your business. We also connect businesses in securing debt financing from lenders tailored to your specific needs and take care of debt financing regulatory filings.",
    img: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Capital Limited",
    productBannerImgUrl: "/stockbroker.png",
    sectionImgURL: "",
    list: [
      "Debt Capital Market Issuances (Bonds, Commercial Papers, etc.)",
      "Debt Refinancing",
      "Regulatory Filings",
      "Have 6-month current accounts",
    ],
  },
  {
    slug: "equity-captial-market",
    title: "Equity Capital Market Service",
    description:
      "We offer exceptional Equity Capital market services for businesses who need rights issuance, Initial Public Offerings or private placements to raise capital and connect with potential investors. We also ensure businesses' capital raising activities comply with all regulations with our expertise in regulatory filings.",
    img: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Capital Limited",
    productBannerImgUrl: "/stockbroker.png",
    sectionImgURL: "",
    list: ["Rights Issuance", "Private Placement", "Regulatory Filings", "Regulatory Filings"],
  },
  {
    slug: "capital-financial-advisory",
    title: "Financial Advisory",
    description:
      "We offer a robust suite of Financial advisory services ranging from our expert guidance on corporate and share capital restructuring to optimize your operational efficiency, accurate business valuations of your company's worth to help make informed decisions, mergers and acquisitions (M&A) support and advisory and for businesses hoping to sell some assets or divest entire entities, we offer expertise in divestments and buyouts.",
    img: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Capital Limited",
    productBannerImgUrl: "/stockbroker.png",
    sectionImgURL: "",
    list: [
      "Corporate Restructuring",
      "Share Capital Restructuring",
      "Business Valuation",
      "M&A Advisory",
      "Divestments",
      "Buyouts",
    ],
  },
  {
    slug: "capital-business-advisory",
    title: "Business Advisory",
    description:
      "We offer solid business plans that outline our client's goals, strategies, and financial projections and ensure their business idea has strong potential with thorough feasibility studies. We also offer license acquisition support for businesses that need assistance obtaining the necessary licenses and permits.",
    img: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subsidiary: "Meristem Capital Limited",
    productBannerImgUrl: "/stockbroker.png",
    sectionImgURL: "",
    list: ["Business Plans", "Feasibility Studies", "License Acquisitions"],
  },
];

export default function ProductDetail({ params }: Props) {
  const { slug } = React.use(params);
  const product = products.find((exec) => exec.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <ProductPage
        product={product}
        backgroundURL={product?.productBannerImgUrl}
      />
      <MeristemContactSection />
    </>
  );
}
