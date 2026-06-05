import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import BenefitsSection from "@/components/stockbrokers/BenefitSection";
import WealthServiceSection from "@/components/stockbrokers/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import WealthBoardExecutiveSection from "@/components/stockbrokers/BoardExcutives";
import FAQSection from "@/components/stockbrokers/FAQSection";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="/wealth-management.png"
        title={
          <span className="text-3xl md:text-5xl font-semibold text-white leading-tight capitalize">
            Access the best of <br />
            the stock market
          </span>
        }
        description="Imagine a one-stop shop, where you can buy and sell stocks, get research information on what the best performing stocks are, work with experts to manage your portfolio, portfolio of your clients and even reconstruct a non-performing portfolio."
      />
      <WhoWeAreSection
        showMeetings={false}
        descriptions={[
          `Meristem Stockbrokers Limited (MSBL) is a wholly owned subsidiary of Meristem Securities Limited (MSL). Meristem Stockbrokers Limited It is a Trading License Holder (TLH) of the Nigerian Exchange (NC) and is licensed by the Securities and Exchange Commission (SEC) in Nigeria.`,
          `MSBL is a leading player, providing equities and other securities brokerage, and research services to a wide array of clients across the African continent, Europe, Middle-East & the USA. The subsidiary has consistently ranked amongst the top 10 brokerage firms in the Nigerian Capital Market since 2008 till date.`,
          `On September 8, 2014, MSBL set a new chapter in the nearly 60-year history of Nigerian Exchange by executing the single largest trade on the Exchange. MSBL also pioneered the digitally integrated (online real-time) stock trading platform in Nigeria with the launch of her platform- 'Meritrade'`,
        ]}
      />
      <WealthServiceSection />
      <BenefitsSection />
      <WealthBoardExecutiveSection />
      <FAQSection />
    </div>
  );
};

export default WealthManagementPage;
