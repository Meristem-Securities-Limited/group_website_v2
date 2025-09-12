"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { WhiteLogo } from "../assets";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Facebook, Instagram } from "iconsax-react";

export default function Footer() {
  return (
    <footer className="w-full bg-green-900/80 text-white">
      <div className="container px-4 lg:px-0 w-full mx-auto">
        <div className="flex flex-col lg:flex-row item-start gap-20 lg:py-20 pb-20 pt-15">
          <div className="w-full lg:w-1/3">
            <div className="w-54 h-20 -mt-5 mb-4 relative">
              <Link
                href="/"
                aria-label="Go to Home Page"
                className="lg:w-94 lg:h-94 w-40 h-60 cursor-pointer relative bg-red-500">
                <Image
                  src={WhiteLogo}
                  alt="Meristem Logo"
                  className="w-full h-full object-contain"
                  priority
                />
              </Link>
            </div>
            <div className="space-y-7 mt-5">
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-300 pb-3">
                  For complaints and enquiries, contact us at
                </p>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">Phone Number</h4>
                  <p className="text-gray-300 text-sm font-medium">
                    +2348034059788, +23470063747836
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white lg:text-base text-sm">Email</h4>
                  <p className="text-gray-300 text-sm font-medium">meritrade@meristemng.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-white lg:text-base text-sm">Office Address</h4>
                <p className="text-gray-300 text-sm font-medium">
                  20A Gerrard Road, Ikoyi 106104, Lagos, Nigeria.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-white">Port Harcourt Branch</h4>
                <p className="text-gray-300 text-sm font-medium">
                  1 Opobo Crescent, Opposite Aladumo Schools, GRA Junction, Port Harcourt, Rivers
                  State, Nigeria. (09031864718)
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-white">Abuja Branch</h4>
                <p className="text-gray-300 text-sm font-medium">
                  4th Floor, Elizade Towers, Plot 596 Cadastral Zone A.O, Independent Avenue, FCT,
                  Abuja, Nigeria. (09090755550)
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:pt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-10">
              {[
                {
                  title: "Meristem’s Subsidiaries",
                  items: [
                    { title: "Meristem Wealth", url: "https://meristemwealth.com/" },
                    { title: "Meristem Stockbrokers", url: "https://stockbroking.meristemng.com" },
                    { title: "Meristem Registrar", url: "https://registrars.meristemng.com" },
                    { title: "Meristem Trustees", url: "https://trustees.meristemng.com" },
                    { title: "Meristem Family Office", url: "https://familyoffice.meristemng.com" },
                    { title: "Meristem Finance", url: "https://finance.meristemng.com" },
                    { title: "Meristem Capital", url: "https://capital.meristemng.com" },
                  ],
                },
                {
                  title: "Quick Links",
                  items: [
                    { title: "Home", url: "/" },
                    { title: "Margin Trading", url: "/margin-trading" },
                    { title: "Global Search", url: "/global-search" },
                    { title: "Inter member", url: "/inter-member" },
                    { title: "Merigame", url: "/merigame" },
                    { title: "FAQ", url: "/faq" },
                  ],
                },
                // {
                //   title: "Contact",
                //   items: [
                // { title: "+2348034059788", url: "tel:+2348034059788" },
                // { title: "+23470063747836", url: "tel:+23470063747836" },
                // { title: "+234-1-2717350", url: "tel:+234-1-2717350" },
                // { title: "+234-1-2717352", url: "tel:+234-1-2717352" },
                // { title: "0800-MERISTEM(080063747836)", url: "#" },
                // ],
                // },
                // {
                //   title: "Address",
                //   items: [
                //     { title: "20a Gerrard Road, Ikoyi 106104, Lagos", url: "/cookie-policy" },
                //   ],
                // },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="space-y-8">
                  <h5 className="text-sm text-white font-bold">{section.title}</h5>
                  <div>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            aria-label={item?.title}
                            href={item.url}>
                            <span className="font-medium text-sm cursor-pointer text-gray-300">
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="items-center">
                <h6 className="font-bold pb-4">Socials</h6>
                <div className="mt-2 flex flex-wrap gap-y-4 lg:space-x-9 md:space-x-4 space-x-3 text-gray-300 items-center">
                  {[
                    {
                      href: "https://x.com/MeristemNigeria",
                      icon: (
                        <BsTwitterX
                          size={23}
                          color="white"
                        />
                      ),
                      title: "X (Formerly Twitter)",
                    },
                    {
                      href: "https://www.instagram.com/meristemng/",
                      icon: (
                        <Instagram
                          size={30}
                          color="white"
                        />
                      ),
                      title: "Instagram",
                    },
                    {
                      href: "https://web.facebook.com/MeristemNigeria/",
                      icon: (
                        <Facebook
                          size={30}
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
                          size={27}
                          color="white"
                          className="font-bold"
                        />
                      ),
                      title: "LinkedIn",
                    },
                  ].map(({ href, icon, title }, i) => (
                    <a
                      key={i}
                      href={href}
                      aria-label={title}
                      target="_blank"
                      rel="noreferrer"
                      className="flex text-xs lg:text-sm items-center font-medium gap-1">
                      {icon}
                      {/* {title} */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row gap-9 flex-col justify-center items-center py-12">
          <p className="text-xs lg:text-sm font-medium text-center">
            &copy; {new Date().getFullYear()} Meritrade By Meristem. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
