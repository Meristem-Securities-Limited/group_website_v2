"use client";

import React, { useState } from "react";

export default function OutCoreValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-12">Our Core Values</h2>

        <div className="flex group">
          {[
            {
              image: "./clientocracy.jpg",
              title: "Clientocracy",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            },
            {
              image: "./esprit-de-corp.jpg",
              title: "Esprit de corp",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            },
            {
              image: "./professional-bg.jpg",
              title: "Professionalism and Integrity",
              content:
                "We believe passionately in what we do and never compromise on our standards and values.We believe passionately in what we do and never compromise on our standards and values.",
            },
            {
              image: "./ownership.jpg",
              title: "Ownership",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            },
            {
              image: "./einstein.jpg",
              title: "Einstein",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            },
            {
              image: "./meristar-delight.jpg",
              title: "Meristar-delight",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            },
          ].map((value, index) => (
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
                minHeight: "500px",
                height: "500px",
                maxHeight: "500px",
              }}>
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  hoveredIndex === index ? "bg-black/40" : "bg-black/60"
                }`}></div>

              {/* Content container */}
              <div className="relative h-full flex flex-col justify-end p-8">
                {/* Vertical title (default state) */}
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

                {/* Expanded content (hover state) */}
                <div
                  className={`transition-all duration-500 delay-100 transform ${
                    hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}>
                  <h3 className="text-white text-3xl font-bold mb-4">{value.title}</h3>
                  {value.content && (
                    <p className="text-white/90 text-base leading-relaxed max-w-md">
                      {value.content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
