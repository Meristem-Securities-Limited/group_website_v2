import MeristemTimeline from "./components/MeristemHistoryTimeline";
import MeristemSubsidiaries from "./components/MeristemSubsidiariesSection";
import ProductsSection from "./components/ProductsSection";
import ResearchSection from "./components/ResearchSection";
import WhyChooseMeristem from "./components/WhyChooseMeristemSection";

export default function Home() {
  return (
    <>
      <section className="bg-white bg-[url(/herobanner.png)] bg-no-repeat bg-cover bg-center min-h-screen flex items-center">
        <div className="container mx-auto lg:pt-52 pt-40 px-4">
          <div className="text-left">
            <h1 className="lg:text-7xl md:text-5xl text-white text-5xl max-w-2xl font-medium leading-tight mb-8">
              Building pathways to wealth that last
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mb-12 leading-relaxed">
              Provides premium financial services that help you grow and preserve your wealth
              through expert market analysis and personalized investment strategies.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center px-7 py-5 bg-white text-sm font-bold text-gray-700 border border-gray-300">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>

      <MeristemTimeline />
      <ProductsSection />
      <MeristemSubsidiaries />
      <WhyChooseMeristem />
      <ResearchSection />
    </>
  );
}
