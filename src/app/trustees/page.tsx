import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import WealthServiceSection from "@/components/trustee/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import WealthBoardExecutiveSection from "@/components/trustee/BoardExcutives";
import FAQSection from "@/components/trustee/FAQSection";
// import BenefitsSection from "@/components/trustee/BenefitSection";
import { Damilola } from "../assets";
import MeristemContactSection from "@/components/ContactSection";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="https://images.unsplash.com/photo-1666885181590-b86279a06b28?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={
          <span className="text-4xl md:text-6xl font-semibold text-white leading-tight capitalize">
            Leave the Things <br /> You Love for <br /> Those You Love
          </span>
        }
        description="Our trust services are designed not just for individuals, but for corporations and institutions. Our clients value the separation between the legal ownership and management of assets."
      />
      <WhoWeAreSection
        sectionImage={Damilola}
        showMeetings={false}
        descriptions={[
          `Meristem Trustees Limited (MTL) is a subsidiary of Meristem Wealth Management Limited. 
          It was incorporated by the Corporate Affairs Commission (CAC) as a Private Limited Liability Company in April 2012 and
          licensed by the Securities & Exchange Commission (SEC) to carry out the roles and functions of Trustees in the Capital market in June 2012.`,
          `MTL is also an active Member of Association of Corporate Trustees, Nigeria (umbrella body of licensed Trust Companies in Nigeria).`,
          `In 2015, MTL launched Meristem Diaspora Trust, a product designed for Nigerians abroad with interests in having investments back home. Investment responsibilities are thus transferred to Meristem Trustee who represents and protect the interests of the owner with a view to ensuring that those objectives are achieved.`,
        ]}
      />
      <WealthServiceSection />
      {/* <BenefitsSection /> */}
      <WealthBoardExecutiveSection />
      <FAQSection />
      <MeristemContactSection />
    </div>
  );
};

export default WealthManagementPage;
