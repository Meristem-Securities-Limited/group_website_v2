"use client";

import React, { useState } from "react";

export default function OurCoreValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      image: "./clientocracy.jpg",
      title: "Clientocracy",
      content:
        "Government by a particular set of people or according to a particular principle. Where client is king and rules. It’s easier to keep them happy than make new ones.",
    },
    {
      image: "./professional-bg.jpg",
      title: "Esprit de corps",
      content:
        "Team work means feelings of loyalty towards one another; we believe in people helping people because team work makes the dream work and our ability to work together towards a goal makes us stand out and win.",
    },
    {
      image: "./esprit-de-corp.jpg",
      title: "Professionalism and Integrity",
      content:
        "Focuses on the competence or skill that is expected of a professional. This is based on several factors including how you dress, poise, the attitude you have and how you interact with others. Integrity is doing the right thing even if nobody is watching.",
    },
    {
      image: "./ownership.jpg",
      title: "Ownership",
      content:
        "Taking ownership is about taking initiative. We take ownership when we believe taking action is not someone else’s responsibility.",
    },
    {
      image: "./meristar-delight.jpg",
      title: "Einstein",
      content:
        "Being innovative, breaking from the norm and leading the way into new growth paths.",
    },
    {
      image: "./meristem-delight.jpg",
      title: "Meristar-delight",
      content:
        "The success of every organisation rests on its people. We possess the right dose of humor and do know how to have fun. Living CEPOEM gives the opportunity to fully engage our work and bring out the fun and weird side of it.",
    },
  ];

  return (
    <section
      id="core-values"
      className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-emerald-900 mb-12">
          Our Core Values
        </h2>

        {/* Desktop layout (flex with hover) */}
        <div className="hidden md:flex group h-[500px]">
          {values.map((value, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                hoveredIndex === null
                  ? "flex-1"
                  : hoveredIndex === index
                  ? "flex-[2]"
                  : "flex-[0.5]"
              }`}
              style={{
                backgroundImage: `url(${value.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredIndex === index ? "bg-black/40" : "bg-black/60"
                }`}></div>

              <div className="relative h-full flex flex-col justify-end p-8">
                {/* Vertical title (default) */}
                <div
                  className={`absolute left-1/2 bottom-9 transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}>
                  <h3
                    className="text-white text-2xl font-semibold tracking-wider text-center whitespace-nowrap"
                    style={{ writingMode: "sideways-lr", textOrientation: "revert" }}>
                    {value.title}
                  </h3>
                </div>

                {/* Expanded content */}
                <div
                  className={`transition-all duration-500 delay-100 transform ${
                    hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                  <h3 className="text-white text-3xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/90 text-base leading-relaxed max-w-md">
                    {value.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout (stacked cards) */}
        <div className="flex flex-col gap-8 md:hidden">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-md"
              style={{
                backgroundImage: `url(${value.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative p-6 flex flex-col justify-end min-h-[400px]">
                <h3 className="text-white text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{value.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
