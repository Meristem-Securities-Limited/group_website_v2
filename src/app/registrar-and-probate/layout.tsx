import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Registrar and Probate Services Limited - Meristem Securities Limited",
    template: "%s | Registrar and Probate Services Limited - Meristem Securities",
  },
  description:
    "Grow your Wealth for generations to come with Meristem Registrar and Probate Services Limited",
  keywords: [
    "Meristem Securities Limited",
    "Registrar and Probate Services Limited",
    "financial services Nigeria",
    "investment company",
    "Registrar and Probate Services",
    "financial advisory",
    "Savings and Investment",
    "Treasury Bill and Bond Trading",
    "Asset & Registrar and Probate Services Service",
    "Asset & Wealth",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com/wealth-management-limited",
    title: "Registrar and Probate Services Limited - Meristem Securities Limited",
    description:
      "Grow your Wealth for generations to come with Meristem Registrar and Probate Services Limited",
    siteName: "Meristem Securities Limited",
    images: [
      {
        url: "/images/meristem-about-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meristem Securities Limited - Registrar and Probate Services Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Registrar and Probate Services Limited - Meristem Securities Limited",
    description:
      "Grow your Wealth for generations to come with Meristem Registrar and Probate Services Limited",
    images: ["/images/meristem-about-us-og.jpg"],
  },
  alternates: {
    canonical: "https://www.meristemng.com/wealth-management-limited",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
