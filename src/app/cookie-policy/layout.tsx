import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Cookies Policy - Meristem Securities Limited",
    template: "%s | Meristem Securities Limited",
  },
  description:
    "Read Meristem Securities Limited's Cookies Policy to learn how we use cookies and similar tracking technologies on our website and digital platforms, and how to manage your preferences.",
  keywords: [
    "Meristem Securities Limited",
    "Cookies Policy",
    "cookie consent",
    "tracking technologies",
    "data protection Nigeria",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com/cookie-policy",
    title: "Cookies Policy - Meristem Securities Limited",
    description:
      "Learn how Meristem Securities Limited uses cookies and similar tracking technologies, and how to manage your cookie preferences.",
    siteName: "Meristem Securities Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy - Meristem Securities Limited",
    description:
      "Learn how Meristem Securities Limited uses cookies and similar tracking technologies, and how to manage your cookie preferences.",
  },
  alternates: {
    canonical: "https://www.meristemng.com/cookie-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
