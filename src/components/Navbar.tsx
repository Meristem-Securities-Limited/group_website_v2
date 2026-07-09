"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Logo, WhiteLogo } from "../app/assets";
import HeroCarousel from "./NavbarHeroCarousel";

const productPlatforms = [
  {
    name: "Wealthbuddy",
    link: "https://app.wealthbuddy.ng/login",
    subText:
      "Invest easily in Mutual Funds, Treasury Bills, Commercial Papers, Bonds and more—tailored to grow your money",
  },
  {
    name: "MeriTrade",
    link: "https://app.meritrade.com/",
    subText:
      "Buy and sell Nigerian stocks seamlessly, giving you full control of your investments.",
  },
  {
    name: "MORE",
    link: "https://app.more.meristemng.com/",
    subText:
      "Learn directly from industry experts and gain practical knowledge to grow as an entrepreneur and investor.",
  },
  {
    name: "Attend",
    link: "#",
    subText: "Join AGMs stress-free—register, mark attendance, and vote all in one app.",
  },
];

const subsidiaries = [
  {
    number: "01",
    name: "Stockbrokers",
    description: "Equities trading and brokerage services with a difference",
    link: "/stockbrokers",
  },
  {
    number: "02",
    name: "Registrar and Probate Services",
    description: "Redefining Shareholder Management and Probate Services",
    link: "/registrar-and-probate",
  },
  {
    number: "03",
    name: "Wealth Management",
    description: "Tailored strategies for wealth creation and preservation",
    link: "/wealth-management",
  },
  {
    number: "04",
    name: "Family Office",
    description: "Preserve the legacy. Protect the future.",
    link: "https://familyoffice.meristemng.com",
  },
  {
    number: "05",
    name: "Capital",
    description: "Raising capital. Realising potential. Reshaping businesses.",
    link: "/capital",
  },
  {
    number: "06",
    name: "Finance",
    description: "Financing solutions tailored to you.",
    link: "/finance",
  },
  {
    number: "07",
    name: "Trustees",
    description: "Leave the things you love for those you love.",
    link: "/trustees",
  },
];

const aboutUsItems = [
  { title: "Who we are", link: "/about-us#who-we-are" },
  { title: "Our History", link: "/about-us#our-history" },
  { title: "Our Core Values", link: "/about-us#core-values" },
  { title: "Our Culture", link: "/about-us#culture" },
  { title: "Our Vision", link: "/about-us#vision" },
  { title: "Our Mission", link: "/about-us#mission" },
  { title: "Our Philosophy", link: "/about-us#philosophy" },
  { title: "Our Promise", link: "/about-us#promise" },
  { title: "Board of Directors", link: "/about-us#board-of-directors" },
  { title: "Group Executive Management", link: "/about-us#group-executive-management" },
];

// const ourProductsItems = [
//   {
//     title: "Stockbroking",
//     sectionId: "who-we-are",
//     children: [
//       {
//         title: "Meristem Business Associate",
//         link: "https://stockbroking.meristemng.com/meristem-stockbrokers-limited/services/business-associate",
//       },
//       {
//         title: "Share/Dividend Tracking & Recovery",
//         link: "https://stockbroking.meristemng.com/meristem-stockbrokers-limited/services/dividend-tracking",
//       },
//       { title: "Stock Trading", link: "https://app.meritrade.com/auth/register" },
//     ],
//   },
//   {
//     title: "Wealth Management",
//     sectionId: "our-history",
//     children: [
//       {
//         title: "Asset/Portfolio Management",
//         link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/portfolio-management",
//       },
//       {
//         title: "Bond Investments",
//         link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/fixed-income-dealing",
//       },
//       { title: "Fixed Term Investment", link: "https://wealthbuddy.ng/fixed-deposits" },
//       { title: "Meri-Dollar Investment", link: "https://wealthbuddy.ng/fixed-deposits" },
//       { title: "Mutual Funds", link: "https://wealthbuddy.ng/mutual-funds" },
//       { title: "Nigerian Treasury Bills", link: "https://wealthbuddy.ng/discounted-instruments" },
//       {
//         title: "Real Estate",
//         link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/real-estate",
//       },
//       {
//         title: "Retirement Planning",
//         link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/retirement-planning",
//       },
//       {
//         title: "Succession Planning",
//         link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/succession-planning",
//       },
//     ],
//   },
//   {
//     title: "Trusteeship",
//     sectionId: "core-values",
//     children: [
//       {
//         title: "Corporate Trust",
//         link: "https://trustees.meristemng.com/meristem-trustees-limited/services/corporate-trust",
//       },
//       {
//         title: "Private Trust",
//         link: "https://trustees.meristemng.com/meristem-trustees-limited/services/private-trust",
//       },
//       {
//         title: "Public Trust",
//         link: "https://trustees.meristemng.com/meristem-trustees-limited/services/public-trust",
//       },
//     ],
//   },
//   {
//     title: "Finance",
//     sectionId: "culture",
//     children: [
//       {
//         title: "Bridge Financing",
//         link: "https://finance.meristemng.com/meristem-finance-limited/services/bridge-financing",
//       },
//       {
//         title: "Cash Backed Facility",
//         link: "https://finance.meristemng.com/meristem-finance-limited/services/consumer-loan/cash-backed-facility",
//       },
//       {
//         title: "Equity Backed Facility",
//         link: "https://finance.meristemng.com/meristem-finance-limited/services/consumer-loan/equity-backed-facility",
//       },
//       {
//         title: "Invoice Discounting",
//         link: "https://finance.meristemng.com/meristem-finance-limited/services/business-loan/invoice-discounting",
//       },
//       {
//         title: "Local Purchase Order (LPO) Financing",
//         link: "https://finance.meristemng.com/meristem-finance-limited/services/business-loan/local-purchase-order",
//       },
//       {
//         title: "Meristem Finance Lease",
//         link: "https://finance.meristemng.com/meristem-finance-limited/services/meristem-finance-lease",
//       },
//       {
//         title: "Working Capital Loan",
//         link: "https://finance.meristemng.com/meristem-finance-limited/services/business-loan/working-capital-loan",
//       },
//     ],
//   },
//   {
//     title: "Registrar and Probate",
//     sectionId: "vision",
//     children: [
//       {
//         title: "AGM/EGM Administration",
//         link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited/services/agm-egm-administration",
//       },
//       {
//         title: "Bond Register Administration",
//         link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited#products-and-services",
//       },
//       {
//         title: "Probate Services",
//         link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited/services/probate-services",
//       },
//       {
//         title: "Public Offer Services",
//         link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited#products-and-services",
//       },
//       {
//         title: "Right Issue Services",
//         link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited/services/rights-issue",
//       },
//       {
//         title: "Share Registration Services",
//         link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited/services/share-registration",
//       },
//     ],
//   },
//   {
//     title: "Family Office",
//     sectionId: "mission",
//     children: [
//       { title: "Family Governance Advisory", link: "https://familyoffice.meristemng.com" },
//       { title: "Health and Longevity Plan", link: "https://familyoffice.meristemng.com" },
//       { title: "Investment Advisory", link: "https://familyoffice.meristemng.com" },
//       { title: "Legacy Documentation Service", link: "https://familyoffice.meristemng.com" },
//       { title: "Legacy Planning", link: "https://familyoffice.meristemng.com" },
//       { title: "Philanthropy", link: "https://familyoffice.meristemng.com" },
//     ],
//   },
//   {
//     title: "Investment Advisory",
//     sectionId: "philosophy",
//     children: [
//       {
//         title: "Business Advisory",
//         link: "https://capital.meristemng.com/meristem-capital-limited/business-advisory",
//       },
//       {
//         title: "Debt Capital Market Services",
//         link: "https://capital.meristemng.com/meristem-capital-limited/debt-capital-market",
//       },
//       {
//         title: "Equity Capital Market Services",
//         link: "https://capital.meristemng.com/meristem-capital-limited/equity-capital-market",
//       },
//       {
//         title: "Financial Advisory",
//         link: "https://capital.meristemng.com/meristem-capital-limited/financial-advisory",
//       },
//     ],
//   },
// ];

const ourProductsItems = [
  {
    title: "Stockbroking",
    sectionId: "who-we-are",
    children: [
      {
        title: "Meristem Business Associate",
        link: "/our-products/meristem-business-associate",
      },
      {
        title: "Share/Dividend Tracking & Recovery",
        link: "/our-products/share-dividend-tracking-recovery",
      },
      { title: "Stock Trading", link: "/our-products/stock-trading" },
      { title: "Margin Lending", link: "/our-products/margin-lending" },
    ],
  },
  {
    title: "Wealth Management",
    sectionId: "our-history",
    children: [
      {
        title: "Asset/Portfolio Management",
        link: "/our-products/asset-portfolio-management",
      },
      {
        title: "Bond Investments",
        link: "/our-products/bond-investments",
      },
      { title: "Exchange Trade Fund", link: "/our-products/exchange-trade-funds" },
      { title: "Structured Products", link: "/our-products/structured-products" },
      { title: "Mutual Funds", link: "/our-products/mutual-funds" },
      // { title: "Nigerian Treasury Bills", link: "/our-products/nigerian-treasury-bills" },
      {
        title: "Real Estate",
        link: "https://realestate.meristemng.com/",
      },
      {
        title: "Retirement Planning",
        link: "/our-products/retirement-planning",
      },
      {
        title: "Succession Planning",
        link: "/our-products/succession-planning",
      },
      {
        title: "Business Advisory",
        link: "/our-products/business-advisory",
      },
      {
        title: "Debt Capital Market Services",
        link: "/our-products/debt-capital-market-services",
      },
      {
        title: "Equity Capital Market Services",
        link: "/our-products/equity-capital-market-services",
      },
      {
        title: "Financial Advisory",
        link: "/our-products/financial-advisory",
      },
    ],
  },
  {
    title: "Trusteeship",
    sectionId: "core-values",
    children: [
      {
        title: "Corporate Trust",
        link: "/our-products/corporate-trust",
      },
      {
        title: "Private Trust",
        link: "/our-products/private-trust",
      },
      {
        title: "Public Trust",
        link: "/our-products/public-trust",
      },
    ],
  },
  {
    title: "Finance",
    sectionId: "culture",
    children: [
      {
        title: "Bridge Financing",
        link: "/our-products/bridge-financing",
      },
      {
        title: "Cash Backed Facility",
        link: "/our-products/cash-backed-facility",
      },
      {
        title: "Equity Backed Facility",
        link: "/our-products/equity-backed-facility",
      },
      {
        title: "Invoice Discounting",
        link: "/our-products/invoice-discounting",
      },
      {
        title: "Local Purchase Order (LPO) Financing",
        link: "/our-products/local-purchase-order",
      },
      {
        title: "Meristem Finance Lease",
        link: "/our-products/meristem-finance-lease",
      },
      {
        title: "Working Capital Loan",
        link: "/our-products/working-capital-loan",
      },
    ],
  },
  {
    title: "Registrar and Probate",
    sectionId: "vision",
    children: [
      {
        title: "AGM/EGM Administration",
        link: "/our-products/agm-egm-administration",
      },
      {
        title: "Bond Register Administration",
        link: "/our-products/bond-register-administration",
      },
      {
        title: "Probate Services",
        link: "/our-products/probate-services",
      },
      {
        title: "Public Offer Services",
        link: "/our-products/public-offer-services",
      },
      {
        title: "Right Issue Services",
        link: "/our-products/right-issue-services",
      },
      {
        title: "Share Registration Services",
        link: "/our-products/share-registration-services",
      },
    ],
  },
  {
    title: "Family Office",
    sectionId: "mission",
    children: [
      { title: "Family Governance Advisory", link: "https://familyoffice.meristemng.com" },
      { title: "Health and Longevity Plan", link: "https://familyoffice.meristemng.com" },
      { title: "Investment Advisory", link: "https://familyoffice.meristemng.com" },
      { title: "Legacy Documentation Service", link: "https://familyoffice.meristemng.com" },
      { title: "Legacy Planning", link: "https://familyoffice.meristemng.com" },
      { title: "Philanthropy", link: "https://familyoffice.meristemng.com" },
    ],
  },
  // {
  //   title: "Investment Advisory",
  //   sectionId: "philosophy",
  //   children: [
  //     {
  //       title: "Business Advisory",
  //       link: "/our-products/business-advisory",
  //     },
  //     {
  //       title: "Debt Capital Market Services",
  //       link: "/our-products/debt-capital-market-services",
  //     },
  //     {
  //       title: "Equity Capital Market Services",
  //       link: "/our-products/equity-capital-market-services",
  //     },
  //     {
  //       title: "Financial Advisory",
  //       link: "/our-products/financial-advisory",
  //     },
  //   ],
  // },
];

const Navbar = () => {
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navbarBg =
    isScrolled ?
      "bg-white backdrop-blur-md shadow-lg border-b border-emerald-100"
    : "bg-transparent";

  const toggleMobileMenu = () => {
    if (scrollY < 20 && isMobileMenuOpen && isScrolled) {
      setIsScrolled(false);
    }

    if (scrollY < 20 && !isMobileMenuOpen && !isScrolled) {
      setIsScrolled(true);
    }

    setTimeout(() => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }, 150);
  };

  const handleDropdownToggle = (dropdown: string) =>
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      // Handle navbar dropdowns
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }

      // Handle login dropdown
      // if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      // const target = event.target as HTMLElement;
      // if (target.id === "client-login-btn") {
      //   setLoginDropdownOpen((prev) => !prev);
      // } else {
      //   setLoginDropdownOpen(false); // close normally
      // }
      // }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(() => scrollY >= 20 || activeDropdown !== null);
  }, [scrollY, activeDropdown]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${navbarBg}`}>
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
              className="object-contain w-auto h-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isScrolled ?
                  "text-green-900 hover:text-emerald-700"
                : "text-white hover:text-green-200"
              }`}>
              HOME
            </Link>
            {["subsidiaries", "about", "products"].map((menu) => (
              <div
                key={menu}
                className="relative">
                <button
                  onClick={() => handleDropdownToggle(menu)}
                  className={`flex items-center px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isScrolled ?
                      "text-green-900 hover:text-emerald-700"
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
              target="_blank"
              href="https://careers.meristemng.com"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isScrolled ?
                  "text-green-900 hover:text-emerald-700"
                : "text-white hover:text-green-200"
              }`}>
              CAREERS
            </Link>
            <Link
              target="_blank"
              href="https://blog.meristemng.com"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isScrolled ?
                  "text-green-900 hover:text-emerald-700"
                : "text-white hover:text-green-200"
              }`}>
              BLOG
            </Link>
          </div>

          <div
            ref={dropdownRef}
            className="hidden lg:flex items-center space-x-4">
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
              <div className="absolute right-40 top-20 max-w-88 bg-white shadow-lg border border-gray-200 z-[1000]">
                <div className="py-2 divide-y divide-gray-500">
                  {productPlatforms.map((platform, index) => (
                    <a
                      target="_blank"
                      key={index}
                      href={platform.link}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-800 hover:text-white transition-colors duration-200">
                      <span className="block font-bold text-base">{platform.name}</span>
                      <span className="line-clamp-2">{platform.subText}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? "text-green-900 hover:bg-emerald-50" : "text-green-900 hover:bg-white/20"
            }`}>
            {isMobileMenuOpen ?
              <X
                size={23}
                className={isScrolled ? "text-emerald-900" : "text-white"}
                color="currentColor"
              />
            : <Menu
                size={23}
                className={isScrolled ? "text-emerald-900" : "text-white"}
                color="currentColor"
              />
            }
          </button>
        </div>

        {activeDropdown && (
          <div className="hidden lg:block absolute w-full top-full left-0 right-0 bg-white shadow-lg z-10 border-t">
            {activeDropdown === "subsidiaries" && (
              <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-gray-400 text-sm font-semibold mb-6 tracking-wide">
                    SUBSIDIARIES
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {subsidiaries.map((item, i) => (
                      <a
                        key={i}
                        target={item?.link.startsWith("http") ? "_blank" : "_self"}
                        href={item.link}
                        className="cursor-pointer group">
                        <h4 className="text-gray-900 font-semibold group-hover:text-green-800 transition-colors duration-200">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                          {item.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
                <HeroCarousel />
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
                        onClick={() => {
                          setActiveDropdown(null);
                          setLoginDropdownOpen(false);
                        }}
                        href={item.link}
                        className="text-gray-700 hover:text-green-800 py-2 transition-colors duration-200">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === "products" && (
              <div className="container mx-auto px-6 py-10 overflow-y-scroll">
                <h3 className="text-gray-500 text-sm font-semibold mb-8 tracking-wide uppercase">
                  Our Products
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
                  {ourProductsItems.map((item, i) => (
                    <div
                      key={i}
                      className="space-y-3">
                      <h4 className="text-base font-semibold text-emerald-900 transition-colors duration-200">
                        {item.title}
                      </h4>

                      <ul className="space-y-2 list-inside">
                        {item.children.map((child: any, j) => (
                          <li
                            className="block text-gray-600 text-sm transition-colors duration-200"
                            onClick={() => {
                              setActiveDropdown(null);
                              setLoginDropdownOpen(false);
                            }}
                            key={j}>
                            <Link
                              target={child?.link.includes("https://") ? "_blank" : "_self"}
                              href={child.link}
                              className="block text-gray-700 hover:text-blue-800 text-sm transition-colors duration-200">
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {isMobileMenuOpen && (
          <div className={`lg:hidden mt-8`}>
            <div className="py-4 space-y-3">
              <div>
                <button
                  onClick={() => handleDropdownToggle("subsidiaries")}
                  className={`flex items-center justify-between w-full py-3 text-sm font-semibold transition-all duration-300 text-green-800 hover:bg-emerald-50`}>
                  SUBSIDIARIES
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "subsidiaries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className="relative">
                  {activeDropdown === "subsidiaries" && (
                    <div className="mt-3 pl-4 space-y-3 border-l-2 border-gray-200 overflow-y-auto">
                      {subsidiaries.map((item, index) => (
                        <div
                          key={index}
                          className="cursor-pointer pb-1">
                          {item.link.includes("https://") ?
                            <a
                              rel="no-referrer"
                              href={item.link}
                              target="_blank">
                              <h4 className="text-gray-900 font-semibold text-sm">{item.name}</h4>
                              <p className="text-gray-500 text-xs">{item.description}</p>
                            </a>
                          : <Link href={item.link}>
                              <h4 className="text-gray-900 font-semibold text-sm">{item.name}</h4>
                              <p className="text-gray-500 text-xs">{item.description}</p>
                            </Link>
                          }
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleDropdownToggle("about")}
                  className={`flex items-center justify-between w-full py-3 text-sm font-semibold transition-all duration-300 ${
                    isScrolled ?
                      "text-green-800 hover:bg-emerald-50"
                    : "text-green-800 hover:bg-white/20"
                  }`}>
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
                      <Link
                        onClick={() => {
                          setActiveDropdown(null);
                          setLoginDropdownOpen(false);
                          toggleMobileMenu();
                        }}
                        key={index}
                        href={item.link}
                        className="block text-gray-700 hover:text-green-800 py-1 text-sm">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => handleDropdownToggle("products")}
                  className={`flex items-center justify-between w-full py-3 text-sm font-semibold transition-all duration-300 ${
                    isScrolled ?
                      "text-green-800 hover:bg-emerald-50"
                    : "text-green-900 hover:bg-white/20"
                  }`}>
                  OUR PRODUCTS
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "products" && (
                  <div className="overflow-y-auto max-h-[60vh] mt-3 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {ourProductsItems.map((item, i) => (
                      <div
                        key={i}
                        className="space-y-3">
                        <h3 className="text-sm font-bold text-emerald-900 hover:text-green-700 transition-colors duration-200">
                          {item.title}
                        </h3>

                        <ul className="space-y-1 ml-3">
                          {item.children.map((child, j) => (
                            <li key={j}>
                              <Link
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setLoginDropdownOpen(false);
                                  toggleMobileMenu();
                                }}
                                href={child.link}
                                className="text-gray-700 hover:text-green-800 text-sm transition-colors duration-200">
                                {child.title}
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
                href="https://careers.meristemng.com"
                target="_blank"
                className={`block w-full text-left py-3 text-sm font-semibold transition-all duration-300 ${
                  isScrolled ?
                    "text-green-800 hover:bg-emerald-50"
                  : "text-green-900 hover:bg-white/20"
                }`}>
                CAREERS
              </Link>
              <Link
                href="https://blog.meristemng.com"
                target="_blank"
                className={`block w-full text-left py-3 text-sm font-semibold transition-all duration-300 ${
                  isScrolled ?
                    "text-green-800 hover:bg-emerald-50"
                  : "text-green-900 hover:bg-white/20"
                }`}>
                BLOG
              </Link>
              {/* <Link
              href="#"
              className={`block w-full text-left py-3 px-4 text-sm font-semibold transition-all duration-300 ${
                isScrolled ? "text-green-800 hover:bg-emerald-50" : "text-green-900 hover:bg-white/20"
              }`}>
              LEARN
            </Link> */}

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
                    className="mt-2 pl-6 space-y-2 z-[1000] divide-y divide-gray-300 border-l-2 border-gray-200">
                    {productPlatforms.map((platform, index) => (
                      <a
                        key={index}
                        href={platform.link}
                        target={platform?.link.includes("https://") ? "_blank" : "_self"}
                        // target="_blank"
                        className="block text-gray-700 hover:text-green-800 py-1 text-sm">
                        {platform.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
