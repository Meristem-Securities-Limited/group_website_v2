import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import WealthServiceSection from "@/components/wealth-management/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import WealthBoardExecutiveSection from "@/components/wealth-management/BoardExcutives";
import FAQSection from "@/components/wealth-management/FAQSection";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="/wealth-management.png"
        title={
          <span className="text-4xl md:text-6xl font-semibold text-white leading-tight capitalize">
            Expand your <br /> fleet on our tab
          </span>
        }
        description="We offer negotiable interest friendly loans, that allow businesses and individuals finally achieve their desires."
      />
      <WhoWeAreSection
        showMeetings={false}
        descriptions={[
          `Meristem Finance Limited, the financial arm of Meristem Securities Limited, is equipped to provide financing solutions tailored to propel your business forward.
          We're a licensed non-banking financial institution and equipment leasing firm, backed by the Central Bank of Nigeria and the Equipment Leasing Association of
           Nigeria (ELAN). We help you focus on your Business and equip your Growth by freeing up your capital to focus on what matters most – growing your core business.
           We offer a variety of financing options to help you acquire the equipment or vehicles you need, bridge short-term cash flow gaps, or fund long-term projects.`,
        ]}
      />
      <WealthServiceSection />
      <WealthBoardExecutiveSection />
      <FAQSection />
    </div>
  );
};

export default WealthManagementPage;
