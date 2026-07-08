import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import BenefitsSection from "@/components/stockbrokers/BenefitSection";
import WealthServiceSection from "@/components/stockbrokers/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
// import WealthBoardExecutiveSection from "@/components/stockbrokers/BoardExcutives";
import FAQSection from "@/components/stockbrokers/FAQSection";
import MeristemContactSection from "@/components/ContactSection";
import { AppleStore, GooglePlay, StockbrokersIllustration } from "../assets";
import Image from "next/image";
import { meritradeAppStorUrl, meritradePlayStorUrl } from "@/components/products/ProductPage";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="/stockbroker.png"
        title={
          <span className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Your Best Market Moments, <br /> Powered by Meristem
          </span>
        }
        description="Imagine a one-stop shop, where you can buy and sell stocks, get research information on what the best performing stocks are, work with experts to manage your portfolio, portfolio of your clients and even reconstruct a non-performing portfolio."
      />
      <WhoWeAreSection
        sectionImage={StockbrokersIllustration}
        showMeetings={false}
        descriptions={[
          `Meristem Stockbrokers Limited is a trusted capital market operator committed to helping individuals and institutions achieve their investment objectives through efficient access to the Nigerian capital market. With over two decades of industry experience and Meritrade, Nigeria's pioneering online trading platform, we combine innovative technology, market intelligence, and exceptional service to deliver a seamless investing experience.`,
          `What we do extends beyond trade execution. We provide clients with timely market insights, strategic guidance, and responsive support that empower informed investment decisions in an evolving market environment. By combining cutting-edge technology with the expertise of seasoned professionals, we help clients build resilient portfolios and unlock long-term investment opportunities while upholding the highest standards of governance, transparency, and client service.`,
          `Our unwavering commitment to excellence and enduring client relationships has earned the trust of a diverse clientele, reinforcing our position as a dependable partner in creating and growing sustainable wealth through the capital market.`
          `Meristem Stockbrokers Limited is registered and regulated by the Securities and Exchange Commission, Nigeria.`,
          // `Meristem Stockbrokers Limited (MSBL) is a wholly owned subsidiary of Meristem Securities Limited (MSL). Meristem Stockbrokers Limited It is a Trading License Holder (TLH) of the Nigerian Exchange (NC) and is licensed by the Securities and Exchange Commission (SEC) in Nigeria.`,
          // `MSBL is a leading player, providing equities and other securities brokerage, and research services to a wide array of clients across the African continent, Europe, Middle-East & the USA. The subsidiary has consistently ranked amongst the top 10 brokerage firms in the Nigerian Capital Market since 2008 till date.`,
          // `On September 8, 2014, MSBL set a new chapter in the nearly 60-year history of Nigerian Exchange by executing the single largest trade on the Exchange. MSBL also pioneered the digitally integrated (online real-time) stock trading platform in Nigeria with the launch of her platform- 'Meritrade'`,
        ]}
      />
      <WealthServiceSection />
      <section className="bg-[#154D34] bg-[url(/bg-banner.png)] bg-no-repeat bg-cover bg-center bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 relative overflow-hidden">
        <div className="relative z-10 container mx-auto py-20 px-4 flex flex-col items-center justify-center text-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Download Meritrade
            </h2>

            <p className="text-white text-base md:text-lg leading-relaxed mb-8">
              {/* Meritrade gives you direct access to the Nigerian Stock Exchange, empowering you to
              trade and manage your investments with Meristem Stockbrokers Limited. */}
              Ready to start trading today? Buy and sell NGX stocks in real time, right from your
              phone.
            </p>

            {/* Download buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Play Store */}
              <a
                href={meritradePlayStorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black px-5 py-2 rounded-lg hover:opacity-90 transition">
                <Image
                  src={GooglePlay}
                  alt="Get it on Google Play"
                  className="h-10 w-full"
                />
              </a>

              {/* App Store */}
              <a
                href={meritradeAppStorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black px-5 py-2 rounded-lg hover:opacity-90 transition">
                <Image
                  src={AppleStore}
                  alt="Download on the App Store"
                  className="h-10 w-full"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <BenefitsSection />
      {/* <WealthBoardExecutiveSection /> */}
      <FAQSection />
      <MeristemContactSection />
    </div>
  );
};

export default WealthManagementPage;
