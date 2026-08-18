import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Privacy Policy - Meristem Securities Limited",
    template: "%s | Meristem Securities Limited",
  },
  description:
    "Read Meristem Securities Limited's Privacy Policy to learn how the Meristem Group collects, uses, protects, and shares your personal data across our digital platforms and services.",
  keywords: [
    "Meristem Securities Limited",
    "Privacy Policy",
    "data protection Nigeria",
    "NDPA",
    "Nigeria Data Protection Act",
    "personal data",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com/privacy-policy",
    title: "Privacy Policy - Meristem Securities Limited",
    description:
      "Learn how the Meristem Group collects, uses, protects, and shares your personal data across our digital platforms and services, in line with the Nigeria Data Protection Act 2023.",
    siteName: "Meristem Securities Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Meristem Securities Limited",
    description:
      "Learn how the Meristem Group collects, uses, protects, and shares your personal data across our digital platforms and services.",
  },
  alternates: {
    canonical: "https://www.meristemng.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
