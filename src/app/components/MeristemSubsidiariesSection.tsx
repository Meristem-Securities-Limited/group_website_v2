import { ArrowRight } from "lucide-react";

export default function MeristemSubsidiaries() {
  const subsidiaries = [
    {
      number: "01",
      name: "Meristem Stockbrokers Limited",
      description: "Buy & sell stocks",
    },
    {
      number: "02",
      name: "Meristem Registrars and Probate Limited",
      description: "Asset transfer redefined",
    },
    {
      number: "03",
      name: "Meristem Wealth Limited",
      description: "Grow wealth by investing",
    },
    {
      number: "04",
      name: "Meristem Family Office Limited",
      description: "Plan your legacy",
    },
    {
      number: "05",
      name: "Meristem Capital Limited",
      description: "Grow your business",
    },
    {
      number: "06",
      name: "Meristem Finance Limited",
      description: "Grow your business",
    },
    {
      number: "07",
      name: "Meristem Trustees Limited",
      description: "Plan your legacy",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-2xl font-normal text-gray-900 mb-12">Our Subsidiaries</h2>

        <div className="space-y-0">
          {subsidiaries.map((subsidiary, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-8 border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
              <div className="flex items-start gap-8">
                <span className="text-gray-600 text-lg font-medium min-w-[3rem]">
                  {subsidiary.number}
                </span>
                <div className="flex flex-col">
                  <h3 className="text-base md:text-2xl font-semibold text-gray-900 mb-2">
                    {subsidiary.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{subsidiary.description}</p>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
