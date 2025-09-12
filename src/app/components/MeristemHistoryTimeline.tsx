import { ArrowRight } from "lucide-react";
import React from "react";

const MeristemTimeline = () => {
  const timelineData = [
    {
      year: "2003",
      title: "Founded",
      description:
        "Meristem Securities Limited is established to provide world-class stockbroking and investment services in Nigeria.",
    },
    {
      year: "2005",
      title: "First Milestone",
      description:
        "Launch of our Research Unit, setting a benchmark for market intelligence and forecasting accuracy.",
    },
    {
      year: "2008",
      title: "Expansion Into Wealth Management",
      description:
        "Creation of Meristem Wealth Management to offer bespoke portfolio and retirement planning solutions.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-16 lg:mb-20">
          <h3 className="text-white text-sm font-medium tracking-wider uppercase mb-6">
            A LEGACY OF FINANCIAL EXCELLENCE
          </h3>
          <div className="max-w-4xl">
            <p className="text-white text-xl lg:text-2xl leading-relaxed mb-8">
              Since 2003, Meristem has stood at the forefront of Nigeria's financial markets. With
              subsidiaries spanning wealth management, stockbroking, capital markets, trusteeship,
              probate, and non-bank finance, we deliver solutions that empower individuals,
              institutions, and enterprises.
            </p>
            <a
              href="#"
              className="inline-flex gap-3 items-center bg-white text-emerald-800 px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
              <ArrowRight size={24} />
              LEARN MORE ABOUT MERISTEM
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute -top-8 left-0 right-0 h-px bg-white/30 mt-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative">
                <div className="hidden lg:block absolute -top-2 left-0 w-4 h-4 bg-white rounded-full border-4 border-emerald-700"></div>

                <div className="lg:hidden flex items-center mb-4">
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-emerald-700 mr-4"></div>
                  <div className="flex-1 h-px bg-white/30"></div>
                </div>

                <div className="lg:pt-12">
                  <h2 className="text-white text-4xl lg:text-4xl font-semibold mb-4">
                    {item.year}
                  </h2>
                  <h3 className="text-white text-xl lg:text-2xl font-medium mb-4">{item.title}</h3>
                  <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeristemTimeline;
