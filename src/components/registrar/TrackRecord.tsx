"use client";

import Image from "next/image";

const trackRecords = [
  {
    company: "Conoil",
    amount: "₦11.28bn",
    type: "Rights issue in 2018",
    logo: "/assets/Conoil.png",
  },
  {
    company: "First Bank Plc",
    amount: "₦187.6bn",
    type: "₦100 Billion Hybrid offer in 2007",
    logo: "/assets/dangote.png",
  },
  {
    company: "Custodian & Allied Insurance PLC",
    amount: "₦116.0bn",
    type: "₦5.1 billion Merger with Crusader Insurance in 2013. N3.9 billion Hybrid offer in 2008",
    logo: "/assets/dangote.png",
  },
  {
    company: "Development Bank of NIG. PLC",
    amount: "₦5.77bn",
    type: "₦60 Billion Rights issue in 2018",
    logo: "/assets/etranzact.png",
  },
  {
    company: "Consolidated Hallmark Insurance",
    amount: "₦50.0bn",
    type: "₦500 Million Hybrid offer. N1.056 billion rights issue in 2019",
    logo: "/assets/dangote.png",
  },
  {
    company: "Zenith Bank PLC",
    amount: "₦50.0bn",
    type: "₦130 billion Hybrid offer 2007 N8 billion Zenith Equity, Ethical and Mutual fund",
    logo: "/assets/dangote.png",
  },
  {
    company: "Nigeria Mortgage Refinance Company",
    amount: "Undisclosed",
    type: "₦140 billion Bond in Series 1, 2, & 3",
    logo: "/assets/iei.png",
  },
  {
    company: "VitaFoam",
    amount: "₦8.6bn",
    type: "₦60 Billion Rights issue in 2018",
    logo: "/assets/eternal-oil.png",
  },
  // {
  //   company: "e-Tranzact",
  //   amount: "₦2.3bn",
  //   type: "Rights Issue",
  //   logo: "/assets/etranzact.png",
  // },
  // {
  //   company: "Law Union and Rock",
  //   amount: "₦601.0mn",
  //   type: "Private Placement",
  //   logo: "/assets/law-union.png",
  // },
  // {
  //   company: "Berger Paints",
  //   amount: "₦544.0mn",
  //   type: "Rights Issue",
  //   logo: "/assets/berger.png",
  // },
  // {
  //   company: "Energy Company Nigeria",
  //   amount: "₦60.0bn",
  //   type: "Private Placement",
  //   logo: "/assets/encon.png",
  // },
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

              <h3 className="font-semibold lg:text-base text-sm text-black mb-2">
                {record.company}
              </h3>

              {/* <p className="text-gray-700 mb-1">{record.amount}</p> */}

              <p className="text-gray-600 lg:text-sm text-xs">{record.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
