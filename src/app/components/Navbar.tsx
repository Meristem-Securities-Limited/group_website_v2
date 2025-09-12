"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { Logo, WhiteLogo } from "../assets";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-transparent relative">
      <div className="container mx-auto py-9 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex-shrink-0">
            <Image
              src={WhiteLogo}
              alt="Meristem Logo"
              width={160}
              height={50}
              priority></Image>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative group">
                <button className="flex items-center text-white hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                  <span className="font-semibold">Archives</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <a
                href="#"
                className="text-white hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                Data
              </a>

              <a
                href="#"
                className="text-white hover:text-gray-900 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>

          {/* Desktop Research Portal Button */}
          <div className="hidden lg:block">
            <button className="text-primary px-4 py-2 font-normal hover:text-white hover:bg-primary transition-colors duration-200 flex items-center border gap-2 border-[#0909091A]">
              <div className="bg-primary text-white px-4 py-2">
                <ArrowRight className="h-4 w-4" />
              </div>
              RESEARCH PORTAL
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 p-2 transition-colors duration-200">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-28 left-0 right-0 bg-white border-y border-gray-800 shadow-lg z-50">
            <div className="px-4 py-6 divide-y divide-gray-200">
              <div className="border-b border-gray-100 pb-4">
                <button className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 px-3 py-4 text-base font-medium transition-colors duration-200">
                  Archives
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 px-3 py-4 text-base font-medium transition-colors duration-200">
                Data
              </a>

              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 px-3 py-4 text-base font-medium transition-colors duration-200">
                Contact Us
              </a>

              <div className="pt-4 border-t border-gray-100">
                <button className="w-full bg-primary text-green-900 px-4 py-3 text-base font-semibold hover:bg-green-800 transition-colors duration-200 flex items-center justify-center">
                  <div className="bg-inherit text-green-900 px-4 py-2">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  RESEARCH PORTAL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
