"use client";

import Image from "next/image";

const trackRecords = [
  {
    company: "Capital Hotels",
    amount: "₦11.28bn",
    type: "Private Placement",
    logo: "/images/track-records/capital-hotels.png",
  },
  {
    company: "Dangote Industries Ltd",
    amount: "₦187.6bn",
    type: "Bond Issue",
    logo: "/images/track-records/dangote.png",
  },
  {
    company: "Dangote Cement",
    amount: "₦116.0bn",
    type: "Bond Issue",
    logo: "/images/track-records/dangote.png",
  },
  {
    company: "e-Tranzact",
    amount: "₦5.77bn",
    type: "Rights Issue",
    logo: "/images/track-records/etranzact.png",
  },
  {
    company: "Dangote Cement",
    amount: "₦50.0bn",
    type: "Bond Issue",
    logo: "/images/track-records/dangote.png",
  },
  {
    company: "Dangote Cement",
    amount: "₦50.0bn",
    type: "Commercial Paper",
    logo: "/images/track-records/dangote.png",
  },
  {
    company: "International Energy Insurance Plc",
    amount: "Undisclosed",
    type: "Acquisition of 50.61% by NAPL",
    logo: "/images/track-records/iei.png",
  },
  {
    company: "Eternal Oil",
    amount: "₦8.6bn",
    type: "Equity Issue",
    logo: "/images/track-records/eternal-oil.png",
  },
  {
    company: "e-Tranzact",
    amount: "₦2.3bn",
    type: "Rights Issue",
    logo: "/images/track-records/etranzact.png",
  },
  {
    company: "Law Union and Rock",
    amount: "₦601.0mn",
    type: "Private Placement",
    logo: "/images/track-records/law-union.png",
  },
  {
    company: "Berger Paints",
    amount: "₦544.0mn",
    type: "Rights Issue",
    logo: "/images/track-records/berger.png",
  },
  {
    company: "Energy Company Nigeria",
    amount: "₦60.0bn",
    type: "Private Placement",
    logo: "/images/track-records/encon.png",
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
                  src="https://placehold.co/600x400"
                  alt={record.company}
                  width={120}
                  height={60}
                  className="object-contain"
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
