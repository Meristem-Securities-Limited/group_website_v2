import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "About Us - Meristem Securities Limited",
    template: "%s | About Us - Meristem Securities",
  },
  description:
    "Learn about Meristem Securities Limited, Nigeria's leading investment and financial services firm. Discover our board members, executive leadership, values, and commitment to innovation.",
  keywords: [
    "Meristem Securities Limited",
    "About Us",
    "financial services Nigeria",
    "investment company",
    "executive leadership",
    "board of directors",
    "wealth management",
    "financial advisory",
    "securities trading",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com/about-us",
    title: "About Us - Meristem Securities Limited",
    description:
      "Discover Meristem Securities Limited's leadership, mission, and values. Learn about our executive team and board of directors driving innovation in Nigeria's financial industry.",
    siteName: "Meristem Securities Limited",
    images: [
      {
        url: "/images/meristem-about-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meristem Securities Limited - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Meristem Securities Limited",
    description:
      "Discover Meristem Securities Limited's leadership, mission, and values. Meet our executives and board of directors driving innovation in Nigeria's financial services industry.",
    images: ["/images/meristem-about-us-og.jpg"],
  },
  alternates: {
    canonical: "https://www.meristemng.com/about-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
