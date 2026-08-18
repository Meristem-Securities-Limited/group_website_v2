import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Terms and Conditions - Meristem Securities Limited",
    template: "%s | Meristem Securities Limited",
  },
  description:
    "Read the General Terms and Conditions of Use governing your access to and use of Meristem Securities Limited's Website and Mobile Application.",
  keywords: [
    "Meristem Securities Limited",
    "Terms and Conditions",
    "Terms of Use",
    "financial services Nigeria",
    "Platform terms",
  ],
  openGraph: {
    type: "website",
    url: "https://www.meristemng.com/terms-and-conditions",
    title: "Terms and Conditions - Meristem Securities Limited",
    description:
      "Read the General Terms and Conditions of Use governing your access to and use of Meristem Securities Limited's Website and Mobile Application.",
    siteName: "Meristem Securities Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions - Meristem Securities Limited",
    description:
      "Read the General Terms and Conditions of Use governing your access to and use of Meristem Securities Limited's Website and Mobile Application.",
  },
  alternates: {
    canonical: "https://www.meristemng.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
