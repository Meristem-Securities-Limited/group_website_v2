import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import WealthServiceSection from "@/components/capital/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import WealthBoardExecutiveSection from "@/components/capital/BoardExcutives";
import FAQSection from "@/components/capital/FAQSection";
import TrackRecordSection from "@/components/capital/TrackRecord";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="/wealth-management.png"
        title={
          <span className="text-3xl md:text-5xl font-semibold text-white leading-tight capitalize">
            Bespoke financial advisory <br /> services to accelerate your success
          </span>
        }
        description="Whatever, your investment banking needs are, we deliver on your objective by rendering bespoke strategies to meet your expectations."
      />
      <WhoWeAreSection
        showMeetings={false}
        descriptions={[
          `At Meristem Capital, our commitment is rooted in leveraging over a decade of best practices to tailor solutions 
          that align with our clients' distinct needs. Whether you're exploring expansion opportunities, navigating strategic
          pivots, or seeking expert business advisory, we are dedicated to partnering with you at every stage of your journey.
          Our comprehensive array of services is designed to support you effectively and sustainably, ensuring that together,
          we can achieve your goals and drive lasting success.`,
        ]}
      />
      {/* <BenefitsSection /> */}
      <WealthServiceSection />
      <TrackRecordSection />
      <WealthBoardExecutiveSection />
      <FAQSection />
    </div>
  );
};

export default WealthManagementPage;
