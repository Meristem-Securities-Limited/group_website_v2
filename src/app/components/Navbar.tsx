"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, Search, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WhiteLogo } from "../assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const subsidiaries = [
    {
      title: "Meristem Stockbrokers Limited",
      subtitle: "Buy & Sell Stocks",
    },
    {
      title: "Meristem Registrars and Probate Limited",
      subtitle: "Asset Transfer Redefined",
    },
    {
      title: "Meristem Wealth Limited",
      subtitle: "Grow Wealth By Investing",
    },
    {
      title: "Meristem Family Office Limited",
      subtitle: "Plan Your Legacy",
    },
    {
      title: "Meristem Capital Limited",
      subtitle: "Grow Your Business",
    },
    {
      title: "Meristem Finance Limited",
      subtitle: "Grow Your Business",
    },
    {
      title: "Meristem Trustees Limited",
      subtitle: "Plan Your Legacy",
    },
  ];

  const aboutUsItems = [
    "Our History",
    "Leadership Team",
    "Board of Directors",
    "Corporate Governance",
    "Awards & Recognition",
    "Sustainability",
    "Investor Relations",
  ];

  const ourProductsItems = [
    "Investment Banking",
    "Asset Management",
    "Stockbroking Services",
    "Wealth Management",
    "Trust Services",
    "Registration Services",
    "Corporate Finance",
  ];

  return (
    <nav className="bg-transparent relative ">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
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
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("subsidiaries")}
                  className="flex items-center text-white hover:bg-white hover:text-green-800 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                  SUBSIDIARIES
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "subsidiaries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("about")}
                  className="flex items-center text-white hover:bg-white hover:text-green-800 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                  ABOUT US
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("products")}
                  className="flex items-center text-white hover:bg-white hover:text-green-800 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                  OUR PRODUCTS
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                href="#"
                className="text-white hover:bg-white hover:text-green-800 px-3 py-2 text-sm font-semibold transition-colors duration-200">
                CAREER
              </Link>
            </div>
          </div>

          {/* Desktop Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center text-white hover:bg-white hover:text-green-800 px-3 py-2 text-sm font-semibold transition-colors duration-200">
              <Search className="h-4 w-4 mr-1" />
              SEARCH
            </button>

            <button className="flex items-center text-[#10461E] bg-white px-4 py-2 text-sm font-semibold transition-colors duration-200">
              LOGIN
              <ChevronDown className="ml-1 h-3 w-3" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-900 p-2 transition-colors duration-200">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Menus */}
        {activeDropdown && (
          <div className="hidden lg:block absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t">
            {activeDropdown === "subsidiaries" && (
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-gray-500 text-sm font-semibold mb-6 tracking-wide">
                      SUBSIDIARIES
                    </h3>
                    <div className="grid grid-cols-2 gap-7">
                      {subsidiaries.map((item, index) => (
                        <div
                          key={index}
                          className="group cursor-pointer">
                          <h4 className="text-gray-900 font-semibold group-hover:bg-white hover:text-green-800 transition-colors duration-200">
                            {item.title}
                          </h4>
                          <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-lg font-medium">
                    PRODUCT ADS
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === "about" && (
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-gray-500 text-sm font-semibold mb-6 tracking-wide">
                      ABOUT US
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {aboutUsItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="text-gray-700 hover:bg-white hover:text-green-800 py-2 transition-colors duration-200">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-lg font-medium">
                    PRODUCT ADS
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === "products" && (
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-gray-500 text-sm font-semibold mb-6 tracking-wide">
                      OUR PRODUCTS
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {ourProductsItems.map((item, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="text-gray-700 hover:bg-white hover:text-green-800 py-2 transition-colors duration-200">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 text-lg font-semibold">
                    PRODUCT ADS
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  onClick={() => handleDropdownToggle("subsidiaries")}
                  className="flex items-center justify-between w-full text-gray-700 hover:bg-white hover:text-green-800 py-3 text-base font-semibold transition-colors duration-200">
                  SUBSIDIARIES
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "subsidiaries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "subsidiaries" && (
                  <div className="mt-3 pl-4 space-y-3 border-l-2 border-gray-200">
                    {subsidiaries.map((item, index) => (
                      <div
                        key={index}
                        className="cursor-pointer">
                        <h4 className="text-gray-900 font-semibold text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-xs mt-1">{item.subtitle}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => handleDropdownToggle("about")}
                  className="flex items-center justify-between w-full text-gray-700 hover:bg-white hover:text-green-800 py-3 text-base font-semibold transition-colors duration-200">
                  ABOUT US
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="mt-3 pl-4 space-y-2 border-l-2 border-gray-200">
                    {aboutUsItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block text-gray-700 hover:bg-white hover:text-green-800 py-1 text-sm">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => handleDropdownToggle("products")}
                  className="flex items-center justify-between w-full text-gray-700 hover:bg-white hover:text-green-800 py-3 text-base font-semibold transition-colors duration-200">
                  OUR PRODUCTS
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "products" && (
                  <div className="mt-3 pl-4 space-y-2 border-l-2 border-gray-200">
                    {ourProductsItems.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block text-gray-700 hover:bg-white hover:text-green-800 py-1 text-sm">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#"
                className="block text-gray-700 hover:bg-white hover:text-green-800 py-3 text-base font-semibold transition-colors duration-200">
                CAREER
              </a>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button className="flex items-center w-full text-gray-700 hover:bg-white hover:text-green-800 py-2 text-base font-semibold transition-colors duration-200">
                  <Search className="h-4 w-4 mr-2" />
                  SEARCH
                </button>

                <button className="w-full bg-green-700 text-white px-4 py-3 text-base font-semibold hover:bg-green-800 transition-colors duration-200 flex items-center justify-center">
                  <User className="h-4 w-4 mr-2" />
                  LOGIN
                  <ChevronDown className="ml-2 h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Overlay to close dropdown when clicking outside */}
        {activeDropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
