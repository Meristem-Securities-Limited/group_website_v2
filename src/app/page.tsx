import MeristemTimeline from "./components/MeristemHistoryTimeline";
import ProductsSection from "./components/ProductsSection";
import ResearchSection from "./components/ResearchSection";
import WhyChooseMeristem from "./components/WhyChooseMeristemSection";

export default function Home() {
  return (
    <div>
      <section className="bg-white py-28 bg-[url(/hero-bg.png)] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="lg:text-7xl md:text-5xl text-white text-5xl max-w-3xl mx-auto font-medium leading-tight mb-8">
              Building pathways to wealth that last
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Stay ahead with data-driven research, expert market analysis, and actionable insights
              tailored to help you make informed investment decisions.
            </p>

            <div>
              <a
                href="#"
                className="inline-flex items-center px-9 py-5 bg-white text-sm font-bold text-gray-700 border border-gray-300">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </section>
      <MeristemTimeline />
      <ProductsSection />
      <WhyChooseMeristem />
      <ResearchSection />
    </div>
  );
}
