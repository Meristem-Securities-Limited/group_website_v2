"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { WhiteLogo } from "../assets";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Facebook, Instagram } from "iconsax-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#154D34] text-white bg-[url(/bg-banner.png)] bg-no-repeat bg-top bg-gradient-to-br from-emerald-800 via-[#154D34] to-emerald-900 relative overflow-hidden">
      <div className="container px-4 w-full mx-auto pt-25">
        <div className="lg:pt-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-x-8 lg:gap-x-10 gap-y-10">
          <div className="w-full">
            <div className="w-50 h-20 -mt-10 mb-4 relative">
              <Link
                href="/"
                aria-label="Go to Home Page"
                className="lg:w-94 lg:h-90 w-40 h-60 cursor-pointer relative bg-red-500">
                <Image
                  src={WhiteLogo}
                  alt="Meristem Logo"
                  className="w-full h-full object-contain"
                  priority
                />
              </Link>
            </div>
            {/* <div className="space-y-7 mt-5"> */}
            {/* <div className="space-y-4">
                <p className="text-sm font-medium text-gray-200 pb-3">
                  For complaints and enquiries, contact us at
                </p>
              </div> */}
            {/* </div> */}
          </div>
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
                { title: "Our Subsidiaries", url: "#" },
                { title: "About Us", url: "#" },
                { title: "Our Products", url: "#products" },
                { title: "Career", url: "#" },
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="space-y-6">
              <h5 className="text-white font-bold uppercase">{section.title}</h5>
              <div>
                <ul className="space-y-5">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        aria-label={item?.title}
                        href={item.url}>
                        <span className="font-medium text-sm cursor-pointer text-gray-200">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="items-center space-y-9">
            <div className="space-y-2">
              <h4 className="font-bold text-white">CONTACT</h4>
              <p className="text-gray-200 text-sm font-medium">+23408179441026</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase">Email Address</h4>
              <p className="text-gray-200 text-sm font-medium">meritrade@meristemng.com</p>
            </div>
          </div>
          <div className="items-center space-y-9">
            <div className="space-y-2">
              <h4 className="font-bold text-white uppercase">Head Office Address</h4>
              <p className="text-gray-200 text-sm font-medium">
                20A Gerrard Road, Ikoyi 106104, Lagos, Nigeria.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase">Port Harcourt Branch</h4>
              <p className="text-gray-200 text-sm font-medium">
                1 Opobo Crescent, Opposite Aladumo Schools, GRA Junction, Port Harcourt, Rivers
                State, Nigeria. (09031864718)
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-white uppercase">Abuja Branch</h4>
              <p className="text-gray-200 text-sm font-medium">
                4th Floor, Elizade Towers, Plot 596 Cadastral Zone A.O, Independent Avenue, FCT,
                Abuja, Nigeria. (09090755550)
              </p>
            </div>
            <div className="items-center">
              <h6 className="font-bold pb-4 uppercase">Socials</h6>
              <div className="flex flex-wrap gap-y-4 lg:space-x-9 md:space-x-4 space-x-6 text-gray-200 items-center">
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
        <div className="flex lg:flex-row gap-9 flex-col justify-center items-center py-19 mt-4">
          <p className="text-sm lg:text-base font-medium text-center">
            &copy; {new Date().getFullYear()} Meristem Securities Limited. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
