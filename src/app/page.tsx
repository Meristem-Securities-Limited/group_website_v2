import HeroSection from "@/components/IndexHeroSection";
// import CapabilitiesSection from "../components/CapabilitiesSection";
import MeristemContactSection from "../components/ContactSection";
import MeristemTimeline from "../components/MeristemHistoryTimeline";
import MeristemSubsidiaries from "../components/MeristemSubsidiariesSection";
import ProductsSection from "../components/ProductsSection";
import ResearchSection from "../components/ResearchSection";
import WhyChooseMeristem from "../components/WhyChooseMeristemSection";
import { DangoteIpoBannerModal } from "@/components/DangoteIpoBannerModal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MeristemTimeline />
      <MeristemSubsidiaries />
      {/* <CapabilitiesSection /> */}
      <ProductsSection />
      <WhyChooseMeristem />
      <ResearchSection />
      <MeristemContactSection />
      <DangoteIpoBannerModal />
    </>
  );
}
