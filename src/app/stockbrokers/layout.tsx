import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Stockbrokers Management Limited - Meristem Securities Limited",
    template: "%s | Stockbroker - Meristem Securities",
  },
  description: "Access the best of stock market",
  keywords: [
    "Meristem Securities Limited",
    "Stockbroker",
    "financial services Nigeria",
    "investment company",
    "stock and shares management",
    "financial advisory",
    "Margin Lending",
    "stock trading",
    "Meritrade",
    "stock market",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com/wealth-management-limited",
    title: "Stockbroker - Meristem Securities Limited",
    description: " Access the best of stock market",
    siteName: "Meristem Securities Limited",
    images: [
      {
        url: "/images/meristem-about-us-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meristem Securities Limited - Stockbroker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stockbrokers Management Limited - Meristem Securities Limited",
    description: " Access the best of stock market",
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
