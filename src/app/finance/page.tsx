import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import WealthServiceSection from "@/components/finance/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import WealthBoardExecutiveSection from "@/components/finance/BoardExcutives";
import FAQSection from "@/components/finance/FAQSection";
import MeristemContactSection from "@/components/ContactSection";
import { FinanceIllustration, Mubo } from "../assets";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="/wealth-management.png"
        title={
          <span className="text-3xl md:text-5xl font-semibold text-white leading-tight capitalize">
            Expand your <br /> fleet on our tab
          </span>
        }
        description="We offer negotiable interest friendly loans, that allow businesses and individuals finally achieve their desires."
      />
      <WhoWeAreSection
        showMeetings={false}
        sectionImage={FinanceIllustration}
        descriptions={[
          `Meristem Finance Limited is a customer-centric financial institution providing innovative, flexible, and timely financing solutions that empower businesses and individuals to achieve their growth ambitions. We specialize in structured lending, asset-backed finance, lease finance, bridge finance, LPO finance, and working capital solutions tailored to our clients' unique needs.`,
          `At Meristem Finance, we combine deep market expertise, disciplined risk management, and exceptional service to deliver responsive, value-driven financing solutions. Our relationship-led approach enables us to understand our clients' objectives and provide bespoke financial support that enhances cash flow, unlocks opportunities, and drives sustainable growth.`,
          `Backed by the strength and credibility of the Meristem Group, we are more than a lender; we are a trusted growth partner, committed to delivering financing solutions that enable our clients scale confidently and achieve long-term success.`,
          // `Meristem Finance Limited, the financial arm of Meristem Securities Limited, is equipped to provide financing solutions tailored to propel your business forward.
          // We're a licensed non-banking financial institution and equipment leasing firm, backed by the Central Bank of Nigeria and the Equipment Leasing Association of
          //  Nigeria (ELAN). We help you focus on your Business and equip your Growth by freeing up your capital to focus on what matters most – growing your core business.
          //  We offer a variety of financing options to help you acquire the equipment or vehicles you need, bridge short-term cash flow gaps, or fund long-term projects.`,
        ]}
      />
      <WealthServiceSection />
      <WealthBoardExecutiveSection />
      <FAQSection />
      <MeristemContactSection />
    </div>
  );
};

export default WealthManagementPage;
