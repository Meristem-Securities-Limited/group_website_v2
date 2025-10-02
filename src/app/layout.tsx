import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.meristemng.com"),
  title: {
    default: "Meristem Securities Limited",
    template: "%s | Meristem Securities Limited",
  },
  description:
    "Meristem Securities Limited is a leading investment and financial services firm in Nigeria, providing expert wealth management, securities trading, investment advisory, and innovative financial solutions that empower clients to achieve long-term growth and success.",
  keywords: [
    "Meristem Securities Limited",
    "investment",
    "wealth management",
    "financial services",
    "securities trading",
    "investment advisory",
    "Nigeria",
    "stockbroking",
    "asset management",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com",
    title: "Meristem Securities Limited",
    description:
      "Trusted leader in investment and financial services in Nigeria. Explore wealth management, securities trading, and innovative investment solutions with Meristem Securities Limited.",
    siteName: "Meristem Securities Limited",
    images: [
      {
        url: "https://www.meristemng.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meristem Securities Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meristem Securities Limited",
    description:
      "Discover Meristem Securities Limited – Nigeria’s trusted partner for investment, wealth management, securities trading, and financial advisory services.",
    images: ["https://www.meristemng.com/og-image.jpg"], // replace with actual OG image
  },
  alternates: {
    canonical: "https://www.meristemng.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const roobert = localFont({
  src: [
    { path: "./fonts/RoobertTRIAL-Regular-BF67243fd53fdf2.otf", weight: "500" },
    { path: "./fonts/RoobertTRIAL-Medium-BF67243fd53e059.otf", weight: "400" },
    { path: "./fonts/RoobertTRIAL-Bold-BF67243fd540abb.otf", weight: "700" },
    { path: "./fonts/RoobertTRIAL-Light-BF67243fd502239.otf", weight: "300" },
    { path: "./fonts/RoobertTRIAL-SemiBold-BF67243fd54213d.otf", weight: "600" },
    { path: "./fonts/RoobertTRIAL-Heavy-BF67243fd53e164.otf", weight: "800" },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roobert.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
