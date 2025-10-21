"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Home, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const glowX = (mousePos.x / window.innerWidth) * 100;
  const glowY = (mousePos.y / window.innerHeight) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background glow */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(139, 92, 246, 0.3), transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-700 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-white">404</h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-white blur-2xl opacity-50 animate-pulse">
            404
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Page Not Found</h2>
          <p className="text-lg text-white max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered into the void. Let's get you
            back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={"/"}
            className="group relative px-8 py-4 bg-gradient-to-r bg-white font-semibold text-emerald-900 overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <button
            onClick={() => router.back()}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* <div className="mt-12 flex items-center justify-center gap-2 text-emerald-400 text-sm">
          <Search className="w-4 h-4" />
          <span>Try searching for what you need</span>
        </div> */}
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
}
