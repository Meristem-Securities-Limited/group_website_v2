import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import BenefitsSection from "@/components/wealth-management/BenefitSection";
import WealthServiceSection from "@/components/wealth-management/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import WealthBoardExecutiveSection from "@/components/wealth-management/BoardExcutives";
import FAQSection from "@/components/wealth-management/FAQSection";
import MeristemContactSection from "@/components/ContactSection";
import { Taiwo } from "../assets";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={
          <span className="text-3xl md:text-5xl font-semibold text-white -leading-10 capitalize">
            Your Wealth, Expertly Guided
          </span>
        }
        description="We are a client-centric company with an integrated approach to Wealth and Portfolio Management. Our Asset/Wealth Management Service is designed to grow, preserve, and eventually transfer assets to the next generations by optimizing and ensuring we fully actualize our client’s financial and investment goals."
      />
      <WhoWeAreSection
        sectionImage={Taiwo}
        showMeetings={false}
        descriptions={[
          // `Meristem Wealth Management Limited (MWML) is an independent subsidiary of Meristem
          //     Securities Limited (MSL). It metamorphosed from the asset management and business
          //     advisory unit of MSL into a fully-fledged Asset/Wealth Management Company, licensed by
          //     the Securities and Exchange Commission (SEC) as a Funds & Portfolio Manager.
          //   `,
          // `MWML is a client-centric company with an integrated approach to Wealth and Portfolio
          //     Management. Its Assets/Wealth Management Service is designed to grow, preserve and
          //     eventually transfer assets to subsequent generations by addressing all investment
          //     concerns with a view to optimizing the value potentials of existing wealth and fully
          //     actualize clients' financial/investment goals
          //  `,
          `Meristem Wealth Management Limited is a leading wealth management firm committed to helping individuals and 
          institutions grow, preserve, and transfer wealth with confidence. Through a disciplined approach to
          investment management and financial advisory, we deliver solutions that are tailored to each client's objectives and evolving financial needs.`,
          `Our strength lies in combining experienced professionals, sound investment expertise, and a deep understanding of the Nigerian and global financial landscape to provide practical, long-term wealth solutions. We work closely with our clients to develop strategies that preserve capital, create sustainable growth, and support legacy planning. Guided by integrity, professionalism, 
          and a commitment to excellence, we build enduring relationships based on trust while helping our clients achieve lasting financial success.`,
          `In addition to attaining GIPS compliance status ( a standard set by the CFA Institute for best practice among investment management firms globally ) for its asset management division ;  MWML has grown her assets under management (AUM) to N683.5B as of December 31 2025.`,
          // `The company having fulfilled all the requirements of the Global Investment Performance
          //     Standards (GIPS) through its Asset Management Division emerged the first indigenous
          //     Nigerian Asset Manager to claim compliance with GIPS. GIPS, a standard set by the CFA
          //     Institute, is the standard for best practice among investment management firms
          //     globally and our compliance demonstrates a firm wide commitment to ethical best
          //     practices. In addition to attaining GIPS compliance status for its asset management
          //     division (Meristem Asset Management), MWML has grown her assets under management (AUM)
          //     to N426.512 billion as of December 31, 2021.
          //  `,
        ]}
      />
      <WealthServiceSection />
      <BenefitsSection />
      <WealthBoardExecutiveSection />
      <FAQSection />
      <MeristemContactSection />
    </div>
  );
};

export default WealthManagementPage;
