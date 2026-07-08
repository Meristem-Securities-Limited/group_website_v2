"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { WhiteLogo } from "../app/assets";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Facebook, Instagram } from "iconsax-react";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://x.com/MeristemNigeria",
      icon: (
        <BsTwitterX
          size={22}
          color="white"
        />
      ),
      title: "X (Formerly Twitter)",
    },
    {
      href: "https://www.instagram.com/Meristemng/",
      icon: (
        <Instagram
          size={26}
          color="white"
        />
      ),
      title: "Instagram",
    },
    {
      href: "https://web.facebook.com/MeristemNigeria/",
      icon: (
        <Facebook
          size={26}
          color="white"
          variant="Bold"
        />
      ),
      title: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/meristem-securities-limited/?originalSubdomain=ngx",
      icon: (
        <BsLinkedin
          size={24}
          color="white"
        />
      ),
      title: "LinkedIn",
    },
  ];

  const footerSections = [
    {
      title: "Meristem Subsidiaries",
      items: [
        { title: "Wealth Management", url: "/wealth-management" },
        { title: "Stockbrokers", url: "/stockbrokers" },
        {
          title: "Registrar & Probate Services",
          url: "registrar-and-probate",
        },
        { title: "Trustees", url: "/trustees" },
        { title: "Family Office", url: "https://familyoffice.meristemng.com" },
        { title: "Finance", url: "/finance" },
        { title: "Capital", url: "/capital" },
      ],
    },
    {
      title: "Our Policies",
      items: [
        {
          title: "Complaint Management Framework",
          url: "https://meristemng.com/documents/complaint-management-framework.pdf",
        },
        { title: "Data Privacy Policy", url: "https://meristemng.com/privacy-policy" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About Us", url: "/about-us" },
        { title: "Our Platforms", url: "/#products" },
        // { title: "Our Capabilities", url: "/#capabilities" },
      ],
    },
    {
      title: "Quick Links",
      items: [
        { title: "Simple Will Form", url: "http://meristemtrustees.com/simple-will/" },
        { title: "Blog", url: "https://blog.meristemng.com" },
        { title: "Careers", url: "https://careers.meristemng.com" },
      ],
    },
  ];

  const branches = [
    {
      title: "Head Office Address",
      address: "20A Gerrard Road, Ikoyi 106104, Lagos, Nigeria.",
    },
    {
      title: "Lagos Branch",
      address: "213 Herbert Macaulay Way, Yaba, Lagos 101245, Lagos.",
    },
    {
      title: "Port Harcourt Branch",
      address:
        "1 Opobo Crescent, Opposite Aladumo Schools, GRA Junction, Port Harcourt, Rivers State, Nigeria. (0700MERISTEM, 070063747836)",
    },
    {
      title: "Abuja Branch",
      address:
        "4th Floor, Elizade Towers, Plot 596 Cadastral Zone A.O, Independent Avenue, FCT, Abuja, Nigeria. (0700MERISTEM, 070063747836)",
    },
  ];

  return (
    <footer className="relative w-full text-white bg-[#154D34] bg-[url(/bg-banner.png)] bg-repeat bg-center lg:bg-no-repeat bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 overflow-hidden">
      <div className="absolute inset-0 bg-emerald-900/60 z-0" />

      <div className="relative z-10 container mx-auto px-5 sm:px-6 pt-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-[32%] space-y-8">
            {/* Logo */}
            <div className="w-40 h-16">
              <Link
                href="/"
                aria-label="Go to Home Page"
                className="block">
                <Image
                  src={WhiteLogo}
                  alt="Meristem Logo"
                  className="w-full h-full object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Complaints */}
            <div className="space-y-2">
              <p className="text-base text-gray-100">For complaints, contact us on</p>
              <div className="space-y-1">
                <p className="font-semibold text-base">WhatsApp: +2348134059788</p>
                <p className="font-semibold text-base">Telephone: 0700MERISTEM, 070063747836</p>
                <p className="font-semibold text-base">Email: contact@meristemng.com</p>
              </div>
            </div>

            {/* Branches */}
            <div className="space-y-6">
              {branches.map((b, idx) => (
                <div
                  key={idx}
                  className="space-y-1">
                  <h4 className="font-bold text-base uppercase">{b.title}</h4>
                  <p className="text-gray-200 text-base leading-relaxed">{b.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {footerSections.map((section, idx) => (
              <div
                key={idx}
                className="space-y-5">
                <h5 className="font-bold text-base uppercase">{section.title}</h5>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        target={item?.url?.includes("http") ? "_blank" : "_self"}
                        href={item.url}
                        aria-label={item.title}>
                        <span className="text-base text-gray-200 hover:text-white transition">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* SOCIALS */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4">
              <h6 className="font-bold uppercase pb-3 text-base">Socials</h6>
              <div className="flex flex-wrap gap-5 items-center">
                {socialLinks.map(({ href, icon, title }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={title}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex justify-center pt-12 pb-14">
          <p className="text-center text-base font-medium text-gray-200">
            <p>Meristem and its subsidiaries are licensed and regulated by the Securities and Exchange Commission (SEC) of Nigeria and the Central Bank of Nigeria (CBN).</p>
            &copy; {new Date().getFullYear()} Meristem Securities Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
