import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Trustee Limited - Meristem Securities Limited",
    template: "%s | Trustee Limited - Meristem Securities",
  },
  description: "Grow your Wealth for generations to come with Meristem Trustee Limited",
  keywords: [
    "Meristem Securities Limited",
    "Trustee Limited",
    "financial services Nigeria",
    "investment company",
    "Trustee",
    "financial advisory",
    "Savings and Investment",
    "Treasury Bill and Bond Trading",
    "Asset & Trustee Service",
    "Asset & Wealth",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com/wealth-management-limited",
    title: "Trustee Limited - Meristem Securities Limited",
    description: "Grow your Wealth for generations to come with Meristem Trustee Limited",
    siteName: "Meristem Securities Limited",
    images: [
      {
        url: "/images/meristem-about-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meristem Securities Limited - Trustee Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trustee Limited - Meristem Securities Limited",
    description: "Grow your Wealth for generations to come with Meristem Trustee Limited",
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
