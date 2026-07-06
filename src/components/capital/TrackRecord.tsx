"use client";

import {
  Berger,
  CapitalHotels,
  Dangote,
  Encoin,
  EternalOil,
  ETranzact,
  Evans,
  internationalBreweries,
  Neimeth,
  Pcmn,
  Stac,
} from "@/app/assets";
import Image from "next/image";

const trackRecords = [
  {
    company: "Capital Hotels",
    amount: "₦11.28bn",
    type: "Private Placement",
    logo: CapitalHotels,
  },
  {
    company: "Dangote Industries Ltd",
    amount: "₦187.6bn",
    type: "Bond Issue",
    logo: Dangote,
  },
  {
    company: "Dangote Cement",
    amount: "₦116.0bn",
    type: "Bond Issue",
    logo: Dangote,
  },
  {
    company: "e-Tranzact",
    amount: "₦5.77bn",
    type: "Rights Issue",
    logo: ETranzact,
  },
  {
    company: "Dangote Cement",
    amount: "₦50.0bn",
    type: "Bond Issue",
    logo: Dangote,
  },
  {
    company: "Dangote Cement",
    amount: "₦50.0bn",
    type: "Commercial Paper",
    logo: Dangote,
  },
  {
    company: "International Energy Insurance Plc",
    amount: "Undisclosed",
    type: "Acquisition of 50.61% by NAPL",
    logo: internationalBreweries,
  },
  {
    company: "Eternal Oil",
    amount: "₦8.6bn",
    type: "Equity Issue",
    logo: EternalOil,
  },
  {
    company: "e-Tranzact",
    amount: "₦2.3bn",
    type: "Rights Issue",
    logo: ETranzact,
  },
  {
    company: "Law Union and Rock",
    amount: "₦601.0mn",
    type: "Private Placement",
    logo: Pcmn,
  },
  {
    company: "Berger Paints",
    amount: "₦544.0mn",
    type: "Rights Issue",
    logo: Berger,
  },
  {
    company: "Energy Company Nigeria",
    amount: "₦60.0bn",
    type: "Private Placement",
    logo: Encoin,
  },
  {
    company: "PCMN",
    amount: "₦2.6bn",
    type: "Private Placement",
    logo: Pcmn,
  },
  {
    company: "Crusader Group",
    amount: "₦2.6bn",
    type: "Bond Issue",
    logo: internationalBreweries,
  },
  {
    company: "Staco Insurance",
    amount: "₦2.0bn",
    type: "Private Placement",
    logo: Stac,
  },
  {
    company: "Evans Medical",
    amount: "₦1.2bn",
    type: "Rights Issue",
    logo: Neimeth,
  },
  {
    company: "PMCN",
    amount: "₦24.0mn",
    type: "Divestment",
    logo: Evans,
  },
  {
    company: "International Breweries",
    amount: "₦1.5bn",
    type: "Rights Issue",
    logo: internationalBreweries,
  },
  {
    company: "Neimeth International Pharmaceuticals",
    amount: "₦1.2bn",
    type: "Rights Issue",
    logo: Neimeth,
  },
];

export default function TrackRecordSection() {
  return (
    <section className="py-24 bg-[#F5F3F3]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-black mb-16 uppercase">
          Our Track Records
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {trackRecords.map((record) => (
            <div
              key={`${record.company}-${record.amount}`}
              className="bg-[#ECE8E8] rounded-md p-8 flex flex-col items-center text-center min-h-[260px] hover:shadow-md transition-all">
              <div className="h-20 flex items-center justify-center mb-5">
                <Image
                  src={record?.logo}
                  alt={record.company}
                  width={120}
                  height={60}
                  className="object-contain h-14 w-full"
                />
              </div>

              <h3 className="font-semibold text-lg text-black mb-2">{record.company}</h3>

              <p className="text-gray-700 mb-1">{record.amount}</p>

              <p className="text-gray-600 text-sm">{record.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
