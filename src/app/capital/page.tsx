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
          `Meristem Capital Limited (MCL) is the investment banking subsidiary of Meristem Securities Limited. It is a fast-growing Investment Bank that offers bespoke services/strategies, to meet our client's corporate finance and advisory needs, with special emphasis placed on achieving their objectives while optimizing capital structure and minimizing cost of capital.`,
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
