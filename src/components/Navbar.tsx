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
      name: "Meristem Stockbrokers Limited",
      description: "Equities trading and brokerage services with a difference",
      link: "https://stockbroking.meristemng.com",
    },
    {
      number: "02",
      name: "Meristem Registrars and Probate Services Limited",
      description: "Redefining Shareholder Management and Probate Services",
      link: "https://registrars.meristemng.com",
    },
    {
      number: "03",
      name: "Meristem Wealth Management Limited",
      description: "Tailored strategies for wealth creation and preservation",
      link: "https://meristemwealth.com/",
    },
    {
      number: "04",
      name: "Meristem Family Office Limited",
      description: "Preserve the legacy. Protect the future.",
      link: "https://familyoffice.meristemng.com",
    },
    {
      number: "05",
      name: "Meristem Capital Limited",
      description: "Raising capital. Realising potential. Reshaping businesses.",
      link: "https://capital.meristemng.com",
    },
    {
      number: "06",
      name: "Meristem Finance Limited",
      description: "Financing solutions tailored to you.",
      link: "https://finance.meristemng.com",
    },
    {
      number: "07",
      name: "Meristem Trustees Limited",
      description: "Leave the things you love for those you love.",
      link: "https://trustees.meristemng.com",
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
    { title: "Executive Management", link: "/about-us#executive-management" },
  ];

  const ourProductsItems = [
    {
      title: "Stockbroking",
      sectionId: "who-we-are",
      children: [
        {
          title: "Meristem Business Associate",
          link: "https://stockbroking.meristemng.com/meristem-stockbrokers-limited/services/business-associate",
        },
        {
          title: "Share/Dividend Tracking & Recovery",
          link: "https://stockbroking.meristemng.com/meristem-stockbrokers-limited/services/dividend-tracking",
        },
        { title: "Stock Trading", link: "https://app.meritrade.com/auth/register" },
      ],
    },
    {
      title: "Wealth Management",
      sectionId: "our-history",
      children: [
        {
          title: "Asset/Portfolio Management",
          link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/portfolio-management",
        },
        {
          title: "Bond Investments",
          link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/fixed-income-dealing",
        },
        { title: "Fixed Term Investment", link: "https://wealthbuddy.ng/fixed-deposits" },
        { title: "Meri-Dollar Investment", link: "https://wealthbuddy.ng/fixed-deposits" },
        { title: "Mutual Funds", link: "https://wealthbuddy.ng/mutual-funds" },
        { title: "Nigerian Treasury Bills", link: "https://wealthbuddy.ng/discounted-instruments" },
        {
          title: "Real Estate",
          link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/real-estate",
        },
        {
          title: "Retirement Planning",
          link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/retirement-planning",
        },
        {
          title: "Succession Planning",
          link: "https://wealth.meristemng.com/meristem-wealth-management-limited/services/succession-planning",
        },
      ],
    },
    {
      title: "Trusteeship",
      sectionId: "core-values",
      children: [
        {
          title: "Corporate Trust",
          link: "https://trustees.meristemng.com/meristem-trustees-limited/services/corporate-trust",
        },
        {
          title: "Private Trust",
          link: "https://trustees.meristemng.com/meristem-trustees-limited/services/private-trust",
        },
        {
          title: "Public Trust",
          link: "https://trustees.meristemng.com/meristem-trustees-limited/services/public-trust",
        },
      ],
    },
    {
      title: "Finance",
      sectionId: "culture",
      children: [
        {
          title: "Bridge Financing",
          link: "https://finance.meristemng.com/meristem-finance-limited/services/bridge-financing",
        },
        {
          title: "Cash Backed Facility",
          link: "https://finance.meristemng.com/meristem-finance-limited/services/consumer-loan/cash-backed-facility",
        },
        {
          title: "Equity Backed Facility",
          link: "https://finance.meristemng.com/meristem-finance-limited/services/consumer-loan/equity-backed-facility",
        },
        {
          title: "Invoice Discounting",
          link: "https://finance.meristemng.com/meristem-finance-limited/services/business-loan/invoice-discounting",
        },
        {
          title: "Local Purchase Order (LPO) Financing",
          link: "https://finance.meristemng.com/meristem-finance-limited/services/business-loan/local-purchase-order",
        },
        {
          title: "Meristem Finance Lease",
          link: "https://finance.meristemng.com/meristem-finance-limited/services/meristem-finance-lease",
        },
        {
          title: "Working Capital Loan",
          link: "https://finance.meristemng.com/meristem-finance-limited/services/business-loan/working-capital-loan",
        },
      ],
    },
    {
      title: "Registrar and Probate",
      sectionId: "vision",
      children: [
        {
          title: "AGM/EGM Administration",
          link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited/services/agm-egm-administration",
        },
        {
          title: "Bond Register Administration",
          link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited#products-and-services",
        },
        {
          title: "Probate Services",
          link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited/services/probate-services",
        },
        {
          title: "Public Offer Services",
          link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited#products-and-services",
        },
        {
          title: "Right Issue Services",
          link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited/services/rights-issue",
        },
        {
          title: "Share Registration Services",
          link: "https://registrars.meristemng.com/meristem-registrars-and-probate-limited/services/share-registration",
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
    {
      title: "Investment Advisory",
      sectionId: "philosophy",
      children: [
        {
          title: "Business Advisory",
          link: "https://capital.meristemng.com/meristem-capital-limited/business-advisory",
        },
        {
          title: "Debt Capital Market Services",
          link: "https://capital.meristemng.com/meristem-capital-limited/debt-capital-market",
        },
        {
          title: "Equity Capital Market Services",
          link: "https://capital.meristemng.com/meristem-capital-limited/equity-capital-market",
        },
        {
          title: "Financial Advisory",
          link: "https://capital.meristemng.com/meristem-capital-limited/financial-advisory",
        },
      ],
    },
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
              className="object-contain w-auto h-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 ${
                isScrolled
                  ? "text-green-900 hover:text-emerald-700"
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
              isScrolled ? "text-green-900 hover:bg-emerald-50" : "text-green-900 hover:bg-white/20"
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
                      <a
                        key={i}
                        href={item.link}
                        className="cursor-pointer group">
                        <h4 className="text-gray-900 font-semibold group-hover:text-green-800 transition-colors duration-200">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                      </a>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10">
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
                            {/* <Link
                              href={child.link} */}
                            {/* className="block text-gray-700 hover:text-blue-800 text-sm transition-colors duration-200"> */}
                            {child.title}
                            {/* </Link> */}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          className={`lg:hidden bg-white backdrop-blur-md rounded-xl border mt-4 border-emerald-1000`}
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
                className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 text-green-800 hover:bg-emerald-50`}
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
                    <a
                      href={item.link}
                      key={index}
                      className="cursor-pointer">
                      <h4 className="text-gray-900 font-semibold text-sm">{item.name}</h4>
                      <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div>
              <motion.button
                onClick={() => handleDropdownToggle("about")}
                className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "text-green-800 hover:bg-emerald-50"
                    : "text-green-800 hover:bg-white/20"
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
              <motion.button
                onClick={() => handleDropdownToggle("products")}
                className={`flex items-center justify-between w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "text-green-800 hover:bg-emerald-50"
                    : "text-green-900 hover:bg-white/20"
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
                <div className="overflow-y-auto max-h-[60vh] mt-3 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {ourProductsItems.map((item, i) => (
                    <div
                      key={i}
                      className="space-y-2">
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
              className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? "text-green-800 hover:bg-emerald-50"
                  : "text-green-900 hover:bg-white/20"
              }`}>
              CAREERS
            </Link>
            <Link
              href="https://blog.meristemng.com"
              className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? "text-green-800 hover:bg-emerald-50"
                  : "text-green-900 hover:bg-white/20"
              }`}>
              BLOG
            </Link>
            {/* <Link
              href="#"
              className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
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
