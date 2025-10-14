import React from "react";
import MeristemSubsidiaries from "@/components/MeristemSubsidiariesSection";
import BoardExecutiveSection from "@/components/about-us/BoardExcutives";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";
import OurCoreValuesSection from "@/components/OurCoreValuesSection";
import CultureSection from "@/components/about-us/CultureSection";
import MissionSection from "@/components/about-us/MissionSection";
import PhilosophySection from "@/components/about-us/PhilosophySection";
import PromiseSection from "@/components/about-us/PromiseSection";
import VisionSection from "@/components/about-us/VisionSection";
import AboutTimelineSection from "@/components/about-us/AboutTimelineSection";

const MeristemHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection />
      <WhoWeAreSection />
      <AboutTimelineSection />
      <OurCoreValuesSection />
      <CultureSection />
      <VisionSection />
      <MissionSection />
      <PhilosophySection />
      <PromiseSection />
      <BoardExecutiveSection />
      <MeristemSubsidiaries />
    </div>
  );
};

export default MeristemHomepage;
