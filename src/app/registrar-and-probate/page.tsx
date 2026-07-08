import React from "react";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
// import BenefitsSection from "@/components/registrar/BenefitSection";
import WealthServiceSection from "@/components/registrar/ServicesSection";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
// import WealthBoardExecutiveSection from "@/components/registrar/BoardExcutives";
import FAQSection from "@/components/registrar/FAQSection";
import MeristemContactSection from "@/components/ContactSection";
import { RegistrarsIllustration } from "../assets";
import TrackRecordSection from "@/components/registrar/TrackRecord";

const WealthManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection
        backgroundImage="https://images.unsplash.com/photo-1528746901924-d886b501e255?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title={
          <span className="text-3xl md:text-5xl font-bold text-white leading-1 capitalize">
            {/* Redefining <br /> Shareholders <br /> Management and <br /> Probate Services */}
            Modern Shareholder & <br /> Probate Solutions
          </span>
        }
        description="Unlock the full potential of probate and share registration. We're redefining the landscape with innovative solutions that simplify processes, increase transparency, and go beyond your expectations. Join us on a journey to revolutionize the way you manage your assets and navigate probate."
      />
      <WhoWeAreSection
        sectionImage={RegistrarsIllustration}
        showMeetings={false}
        descriptions={[
          `At Meristem Registrars and Probate Services Limited, we bridge the gap between corporate efficiency and personal peace of mind.`,
          `A subsidiary of Meristem Securities Limited and registered with the Securities and Exchange Commission (SEC), MRPSL combines two core service offerings—Registrar Services and Probate Services to advance the financial wellbeing of our clients.`,
          `Through our technology-driven share registration platform, we deliver efficient, accurate, and reliable registrar services while maintaining 
          the highest standards of confidentiality, regulatory compliance, and service excellence. When it matters most, our dedicated probate team guides families through the complexities of estate administration—simplifying asset recovery, securing inheritances, and protecting the wealth built across generations.
          Meristem Registrars and Probate Services Limited is registered and regulated by the Securities and Exchange Commission, Nigeria
          `,
          // Building wealth is a remarkable achievement. Preserving it across generations requires intention, structure, and stewardship.

          //   `Meristem Registrars and Probate Services Limited (MRPSL) is a subsidiary of Meristem Securities Limited, registered with the Securities and Exchange Commission (SEC)..
          //           `,
          //   `MRPSL offers a combination of two key service offerings: Registrar and Probate Services. It operates an automated Share registration system with state-of-the -art technologies that offer efficient, accurate and reliable services to meet tailored client needs based on confidentiality policies while operating within industry requirements and regulatory guidelines.
          //          `,
          //   `As Probate Service provides, MRPSL identified the need to fill the gap experienced in the estate administration space, and this served as the birthplace of Probate Management Service.  `,
          //
        ]}
      />
      <WealthServiceSection />
      <TrackRecordSection />
      {/* <BenefitsSection /> */}
      {/* <WealthBoardExecutiveSection /> */}
      <FAQSection />
      <MeristemContactSection />
    </div>
  );
};

export default WealthManagementPage;
