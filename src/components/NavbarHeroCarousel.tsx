"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AppleStore, GooglePlay, MeritradeApp, WealthbuddyApp } from "@/app/assets";
import Link from "next/link";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [0, 1, 2]; // total slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative bg-gray-50 overflow-hidden h-full">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full min-h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <div className="min-w-full relative h-full bg-[url('/cp-bg-banner.png')] bg-cover bg-no-repeat">
          <div className="bg-[url('/overlay-bg.png')] bg-cover bg-no-repeat h-full flex px-10 items-center gap-8">
            <div className="flex-1">
              <h3 className="text-white text-3xl font-bold mb-4">
                Download the
                <br />
                Meritrade app
              </h3>
              <p className="text-emerald-100 text-sm mb-6">
                Trade equities and bonds in real time from
                <br />
                anywhere.
              </p>
              <div className="flex gap-2">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-34 min-h-12"
                  href="https://apps.apple.com/us/app/meritrade/id977562417?ls=1">
                  <Image
                    src={AppleStore}
                    alt="apple logo"
                    className="w-full h-full"
                  />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-34 min-h-12"
                  href="https://play.google.com/store/apps/details?id=com.meristem.meritradeapp&pli=1">
                  <Image
                    src={GooglePlay}
                    alt="google logo"
                    className="w-full h-full"
                  />
                </Link>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative w-full h-full">
              <Image
                src={MeritradeApp}
                priority
                alt="meritrade-mockup.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="min-w-full relative h-full bg-[url('/cp-bg-banner.png')] bg-cover bg-no-repeat">
          <div className="bg-[url('/wealthbuddy-overlay.png')] bg-cover bg-no-repeat h-full flex px-10 items-center gap-8">
            <div className="flex-1">
              <h3 className="text-white text-3xl font-bold mb-4">
                Download the
                <br />
                WealthBuddy app
              </h3>
              <p className="text-emerald-100 text-sm mb-6">
                Save and invest smarter with flexible plans built around your goals.
              </p>
              <div className="flex gap-2">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-34 min-h-12"
                  href="https://apps.apple.com/ng/app/wealthbuddy/id1501395579">
                  <Image
                    src={AppleStore}
                    alt="apple logo"
                    className="w-full h-full"
                  />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-34 min-h-12"
                  href="https://play.google.com/store/apps/details?id=com.merristem.wealthbuddy&hl=en">
                  <Image
                    src={GooglePlay}
                    alt="google logo"
                    className="w-full h-full"
                  />
                </Link>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative w-full h-full top-5">
              <Image
                src={WealthbuddyApp}
                priority
                alt="meritrade-mockup.png"
                className="w-full h-full object-contain px-2"
              />
            </div>
          </div>
        </div>

        <div className="min-w-full relative h-full bg-[url('/cp-bg-banner.png')] bg-cover bg-no-repeat">
          <div className="bg-[url('/overlay-bg.png')] bg-cover bg-no-repeat bg-transparent h-full p-10 flex flex-col justify-center">
            <h3 className="text-white text-3xl font-bold mb-4 leading-tight">
              Dangote Sugar Refinery
              <br />
              Series 2 & 3 up to N50b
              <br />
              Commercial Paper Issuance
            </h3>
            <p className="text-emerald-100 text-sm">
              Minimum Subscription N5 Million & multiples
              <br />
              Of N1,000 thereafter
            </p>
            <div className="py-9">
              <a
                href="https://app.wealthbuddy.ng/investments"
                target="_blank"
                className="bg-white text-emerald-900 px-6 py-3 text-sm font-semibold hover:bg-emerald-50 transition-colors w-fit">
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 p-4 ml-8 left-15 transform -translate-x-1/2 flex gap-2">
        {slides.map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-1 transition-all ${
              currentSlide === index ? "bg-white w-8" : "bg-white/20 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2ll transition-colors backdrop-blur-sm"
        aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2ll transition-colors backdrop-blur-sm"
        aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button> */}
    </div>
  );
}
