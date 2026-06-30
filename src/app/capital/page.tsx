import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import WealthServiceSection from "@/components/capital/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import WealthBoardExecutiveSection from "@/components/capital/BoardExcutives";
import FAQSection from "@/components/capital/FAQSection";
import TrackRecordSection from "@/components/capital/TrackRecord";
import MeristemContactSection from "@/components/ContactSection";
import { Salawu } from "../assets";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="/wealth-management.png"
        title={
          <span className="text-3xl md:text-5xl font-semibold text-white leading-1.5 capitalize">
            Bespoke financial advisory <br /> services to accelerate your success
          </span>
        }
        description="Whatever, your investment banking needs are, we deliver on your objective by rendering bespoke strategies to meet your expectations."
      />
      <WhoWeAreSection
        sectionImage={Salawu}
        showMeetings={false}
        descriptions={[
          `Meristem Capital Limited (MCL) is the investment banking subsidiary of Meristem Securities Limited, one of Nigeria's leading financial services providers. We partner with corporates, financial institutions, governments, and entrepreneurs to provide tailored capital raising, financial advisory, and corporate finance solutions that support sustainable growth and long-term value creation.`,
          `As a registered Issuing House, we have successfully structured and executed a wide range of capital market transactions, combining deep market expertise with disciplined execution to deliver optimal outcomes for our clients. From transaction origination and structuring to valuation, regulatory guidance, and execution, we work closely with clients to navigate complex financial decisions with confidence.`,
          `At Meristem Capital, our focus is simple: delivering innovative, client-centric solutions that optimize capital structures, unlock growth opportunities, and help our clients achieve their strategic objectives.`,
        ]}
      />
      {/* <BenefitsSection /> */}
      <WealthServiceSection />
      <TrackRecordSection />
      <WealthBoardExecutiveSection />
      <FAQSection />
      <MeristemContactSection />
    </div>
  );
};

export default WealthManagementPage;
