import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import BenefitsSection from "@/components/wealth-management/BenefitSection";
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
          <span className="text-3xl md:text-5xl font-semibold text-white leading-tight capitalize">
            Grow your Wealth <br /> for generations
          </span>
        }
        description="We are a client-centric company with an integrated approach to Wealth and Portfolio Management. Our Asset/Wealth Management Service is designed to grow, preserve, and eventually transfer assets to the next generations by optimizing and ensuring we fully actualize our client’s financial and investment goals."
      />
      <WhoWeAreSection
        showMeetings={false}
        descriptions={[
          `Meristem Wealth Management Limited (MWML) is an independent subsidiary of Meristem
                    Securities Limited (MSL). It metamorphosed from the asset management and business
                    advisory unit of MSL into a fully-fledged Asset/Wealth Management Company, licensed by
                    the Securities and Exchange Commission (SEC) as a Funds & Portfolio Manager.
                  `,
          // `MWML is a client-centric company with an integrated approach to Wealth and Portfolio
          //     Management. Its Assets/Wealth Management Service is designed to grow, preserve and
          //     eventually transfer assets to subsequent generations by addressing all investment
          //     concerns with a view to optimizing the value potentials of existing wealth and fully
          //     actualize clients' financial/investment goals
          //  `,
          `The company having fulfilled all the requirements of the Global Investment Performance
                    Standards (GIPS) through its Asset Management Division emerged the first indigenous
                    Nigerian Asset Manager to claim compliance with GIPS. GIPS, a standard set by the CFA
                    Institute, is the standard for best practice among investment management firms
                    globally and our compliance demonstrates a firm wide commitment to ethical best
                    practices. In addition to attaining GIPS compliance status for its asset management
                    division (Meristem Asset Management), MWML has grown her assets under management (AUM)
                    to N426.512 billion as of December 31, 2021.
                 `,
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
