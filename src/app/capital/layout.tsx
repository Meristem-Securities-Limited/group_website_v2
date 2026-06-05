import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Wealth Management Limited - Meristem Securities Limited",
    template: "%s | Wealth Management Limited - Meristem Securities",
  },
  description: "Grow your Wealth for generations to come with Meristem Wealth Management Limited",
  keywords: [
    "Meristem Securities Limited",
    "Wealth Management Limited",
    "financial services Nigeria",
    "investment company",
    "wealth management",
    "financial advisory",
    "Savings and Investment",
    "Treasury Bill and Bond Trading",
    "Asset & Wealth Management Service",
    "Asset & Wealth",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com/wealth-management-limited",
    title: "Wealth Management Limited - Meristem Securities Limited",
    description: "Grow your Wealth for generations to come with Meristem Wealth Management Limited",
    siteName: "Meristem Securities Limited",
    images: [
      {
        url: "/images/meristem-about-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meristem Securities Limited - Wealth Management Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Management Limited - Meristem Securities Limited",
    description: "Grow your Wealth for generations to come with Meristem Wealth Management Limited",
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
