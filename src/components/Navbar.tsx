"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Logo, WhiteLogo } from "../app/assets";

const Navbar = () => {
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navbarRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const productPlatforms = [
    {
      name: "Wealthbuddy",
      link: "#wealthbuddy-login",
      subText:
        "Invest easily in Mutual Funds, Treasury Bills, Commercial Papers, Bonds and more—tailored to grow your money",
    },
    {
      name: "MeriTrade",
      link: "#meritrade-login",
      subText:
        "Buy and sell Nigerian stocks seamlessly, giving you full control of your investments.",
    },
    {
      name: "MORE",
      link: "#more-login",
      subText:
        "Learn directly from industry experts and gain practical knowledge to grow as an entrepreneur and investor.",
    },
    {
      name: "Attend",
      link: "#attend-login",
      subText: "Join AGMs stress-free—register, mark attendance, and vote all in one app.",
    },
    // {
    //   name: "MAPP",
    //   link: "#",
    //   subText:
    //     "Invest easily in Mutual Funds, Treasury Bills, Commercial Papers, Bonds and more—tailored to grow your money",
    // },
  ];

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);

  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
  //       setActiveDropdown(null); // close dropdowns
  //     }

  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
  //       const targetElement = event.target as HTMLElement;
  //       console.log(dropdownRef.current);
  //       console.log(targetElement);
  //       // setLoginDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      // Handle navbar dropdowns
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }

      // Handle login dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        const target = event.target as HTMLElement;

        if (target.id === "client-login-btn") {
          setLoginDropdownOpen((prev) => !prev);
        } else {
          setLoginDropdownOpen(false); // close normally
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleDropdownToggle = (dropdown: string) =>
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

  const subsidiaries = [
    {
      number: "01",
      title: "Meristem Stockbrokers Limited",
      subTitle: "Equities trading and Brokerage services with a difference",
    },
    {
      number: "02",
      title: "Meristem Registrars and Probate Services Limited",
      subTitle: "Redefining Shareholder Management and Probate Services",
    },
    {
      number: "03",
      title: "Meristem Wealth Management Limited",
      subTitle: "Tailored strategies for wealth creation and preservation",
    },
    {
      number: "04",
      title: "Meristem Family Office Limited",
      subTitle: "Preserve the legacy. Protect the future.",
    },
    {
      number: "05",
      title: "Meristem Capital Limited",
      subTitle: "Raising capital. Realising potential. Reshaping businesses.",
    },
    {
      number: "06",
      title: "Meristem Finance Limited",
      subTitle: "Financing solutions tailored to you",
    },
    {
      number: "07",
      title: "Meristem Trustees Limited",
      subTitle: "Leave the things you love for those you love",
    },
  ];

  const aboutUsItems = [
    { title: "Who we are", sectionId: "who-we-are" },
    { title: "Our History", sectionId: "our-history" },
    { title: "Our Core Values", sectionId: "core-values" },
    { title: "Our Culture", sectionId: "culture" },
    { title: "Our Vision", sectionId: "vision" },
    { title: "Our Mission", sectionId: "mission" },
    { title: "Our Philosophy", sectionId: "philosophy" },
    { title: "Our Promise", sectionId: "promise" },
    { title: "Board of Directors", sectionId: "borad-of-directors" },
    { title: "Executive Management", sectionId: "executive-management" },
  ];

  const ourProductsItems = [
    { title: "Stockbroking", sectionId: "who-we-are", children: ["example", "exmple"] },
    { title: "WealthManagement", sectionId: "our-history", children: ["example", "exmple"] },
    { title: "Trusteeship", sectionId: "core-values", children: ["example", "exmple"] },
    { title: "Finance", sectionId: "culture", children: ["example", "exmple"] },
    { title: "Registrar and Probate", sectionId: "vision", children: ["example", "exmple"] },
    { title: "Family Office", sectionId: "mission", children: ["example", "exmple"] },
    { title: "Investment Advisory", sectionId: "philosophy", children: ["example", "exmple"] },
  ];

  const isScrolled = scrollY >= 20;
  const navbarBg = isScrolled
    ? "bg-white backdrop-blur-md shadow-lg border-b border-emerald-100"
    : "bg-transparent";

  return (
    <motion.nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${navbarBg}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}>
      <div className="container mx-auto py-7 px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex-shrink-0">
            <Image
              src={isScrolled ? Logo : WhiteLogo}
              alt="Meristem Logo"
              width={160}
              height={50}
              priority
              className="object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {["subsidiaries", "about", "products"].map((menu) => (
              <div
                key={menu}
                className="relative">
                <button
                  onClick={() => handleDropdownToggle(menu)}
                  className={`flex items-center px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isScrolled
                      ? "text-green-900 hover:text-emerald-700"
                      : "text-white hover:text-green-200"
                  }`}>
                  {menu.toUpperCase()}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === menu ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ))}

            <Link
              href="https://careers.meristemng.com"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isScrolled
                  ? "text-green-900 hover:text-emerald-700"
                  : "text-white hover:text-green-200"
              }`}>
              CAREERS
            </Link>
            <Link
              href="https://blog.meristemng.com"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isScrolled
                  ? "text-green-900 hover:text-emerald-700"
                  : "text-white hover:text-green-200"
              }`}>
              BLOG
            </Link>
          </div>

          <div
            ref={dropdownRef}
            className="hidden lg:flex items-center space-x-4">
            {/* <button
              className={`flex items-center px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isScrolled
                  ? "text-green-900 hover:text-emerald-700"
                  : "text-white hover:text-green-200"
              }`}>
              <Search className="h-4 w-4 mr-1" />
              SEARCH
            </button> */}

            <button
              id="client-login-btn"
              onClick={(e) => {
                e.stopPropagation();
                setLoginDropdownOpen(!loginDropdownOpen);
              }}
              className="flex items-center text-green-900 bg-white px-4 py-2 text-sm font-semibold  transition-colors duration-200">
              CLIENT LOGIN
              <ChevronDown
                className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                  loginDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {loginDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute right-40 top-20 max-w-88 bg-white shadow-lg rounded-xl border border-gray-200 z-50">
                <div className="py-2 divide-y divide-gray-500">
                  {productPlatforms.map((platform, index) => (
                    <Link
                      key={index}
                      href={platform.link}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-800 hover:text-white transition-colors duration-200">
                      <span className="block font-bold text-base">{platform.name}</span>
                      <span>{platform.subText}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <motion.button
            onClick={toggleMobileMenu}
            className={`lg:hidden flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? "text-green-900 hover:bg-emerald-50" : "text-white hover:bg-white/20"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            {isMobileMenuOpen ? (
              <X
                size={23}
                color="currentColor"
              />
            ) : (
              <Menu
                size={23}
                color="currentColor"
              />
            )}
          </motion.button>
        </div>

        {activeDropdown && (
          <motion.div
            className="hidden lg:block absolute w-full top-full left-0 right-0 bg-white shadow-lg z-50 border-t"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            {activeDropdown === "subsidiaries" && (
              <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold mb-6 tracking-wide">
                    SUBSIDIARIES
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {subsidiaries.map((item, i) => (
                      <div
                        key={i}
                        className="cursor-pointer group">
                        <h4 className="text-gray-900 font-semibold group-hover:text-green-800 transition-colors duration-200">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">{item.subTitle}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center justify-center text-gray-600 text-lg font-semibold">
                  PRODUCT ADS
                </div>
              </div>
            )}

            {activeDropdown === "about" && (
              <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold mb-6 tracking-wide">
                    ABOUT US
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {aboutUsItems.map((item, i) => (
                      <Link
                        key={i}
                        href={item.title}
                        className="text-gray-700 hover:text-green-800 py-2 transition-colors duration-200">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 flex items-center justify-center text-gray-600 text-lg font-semibold">
                  PRODUCT ADS
                </div>
              </div>
            )}

            {activeDropdown === "products" && (
              <div className="container mx-auto px-6 py-8 gap-8">
                <div>
                  <h3 className="text-gray-500 text-sm font-semibold mb-6 tracking-wide">
                    OUR PRODUCTS
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 pb-10">
                    {ourProductsItems.map((item, i) => (
                      <div
                        key={i}
                        className="space-y-2">
                        <h3 className="text-lg font-semibold text-emerald-900 hover:text-green-700 transition-colors duration-200">
                          <Link href={`#${item.sectionId}`}>{item.title}</Link>
                        </h3>

                        <ul className="space-y-1 ml-3">
                          {item.children.map((child, j) => (
                            <li key={j}>
                              <Link
                                href={child}
                                className="text-gray-700 hover:text-green-800 text-sm transition-colors duration-200">
                                {child}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div className="bg-gray-100 flex items-center justify-center text-gray-600 text-lg font-semibold">
                  PRODUCT ADS
                </div> */}
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          className={`lg:hidden overflow-hidden ${
            isScrolled ? "bg-white/95" : "bg-black/70"
          } backdrop-blur-md rounded-xl border mt-4 ${
            isScrolled ? "border-emerald-100" : "border-white/20"
          }`}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}>
          <div className="p-4 space-y-3">
            <div>
              <motion.button
                onClick={() => handleDropdownToggle("subsidiaries")}
                className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isScrolled ? "text-green-800 hover:bg-emerald-50" : "text-white hover:bg-white/20"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                whileHover={{ x: 5 }}>
                SUBSIDIARIES
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "subsidiaries" ? "rotate-180" : ""
                  }`}
                />
              </motion.button>
              {activeDropdown === "subsidiaries" && (
                <div className="mt-3 pl-4 space-y-3 border-l-2 border-gray-200">
                  {subsidiaries.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer">
                      <h4 className="text-gray-900 font-semibold text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-1">{item.subTitle}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <motion.button
                onClick={() => handleDropdownToggle("about")}
                className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isScrolled ? "text-green-800 hover:bg-emerald-50" : "text-white hover:bg-white/20"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 5 }}>
                ABOUT US
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                />
              </motion.button>
              {activeDropdown === "about" && (
                <div className="mt-3 pl-4 space-y-2 border-l-2 border-gray-200">
                  {aboutUsItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.sectionId}
                      className="block text-gray-700 hover:text-green-800 py-1 text-sm">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <motion.button
                onClick={() => handleDropdownToggle("products")}
                className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isScrolled ? "text-green-800 hover:bg-emerald-50" : "text-white hover:bg-white/20"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                whileHover={{ x: 5 }}>
                OUR PRODUCTS
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </motion.button>
              {activeDropdown === "products" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {ourProductsItems.map((item, i) => (
                    <div
                      key={i}
                      className="space-y-2">
                      <h3 className="text-lg font-semibold text-emerald-900 hover:text-green-700 transition-colors duration-200">
                        <Link href={`#${item.sectionId}`}>{item.title}</Link>
                      </h3>

                      <ul className="space-y-1 ml-3">
                        {item.children.map((child, j) => (
                          <li key={j}>
                            <Link
                              href="#"
                              className="text-gray-700 hover:text-green-800 text-sm transition-colors duration-200">
                              {child}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#"
              className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isScrolled ? "text-green-800 hover:bg-emerald-50" : "text-white hover:bg-white/20"
              }`}>
              CAREER
            </Link>
            <Link
              href="#"
              className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isScrolled ? "text-green-800 hover:bg-emerald-50" : "text-white hover:bg-white/20"
              }`}>
              LEARN
            </Link>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              {/* <button className="flex items-center w-full text-gray-700 hover:text-green-800 py-2 text-base font-semibold transition-colors duration-200">
                <Search className="h-4 w-4 mr-2" />
                SEARCH
              </button> */}
              <button
                onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                className="w-full bg-green-700 text-white px-4 py-3 text-base font-semibold hover:bg-green-800 transition-colors duration-200 flex items-center justify-center">
                <User className="h-4 w-4 mr-2" />
                CLIENT LOGIN
                <ChevronDown
                  className={`ml-2 h-3 w-3 transition-transform ${
                    loginDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {loginDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="mt-2 pl-6 space-y-2 divide-y divide-gray-300 border-l-2 border-gray-200">
                  {productPlatforms.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      className="block text-gray-700 hover:text-green-800 py-1 text-sm">
                      {platform.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
