import React from "react";
import MeristemSubsidiaries from "@/components/MeristemSubsidiariesSection";
import BoardExecutiveSection from "@/components/about-us/BoardExcutives";
import WhoWeAreSection from "@/components/about-us/WhoWeAreSection";
import AboutUsHeroSection from "@/components/about-us/AboutUsHeroSection";

const MeristemHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHeroSection />
      <WhoWeAreSection />
      <MeristemSubsidiaries />
      <BoardExecutiveSection />
    </div>
  );
};

export default MeristemHomepage;
