import type { Metadata } from "next";
import { products } from "./page";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const executive = products.find((exec) => exec.slug === slug);

  if (!executive) {
    return {
      title: "Executive Not Found | Meristem Securities Limited",
      description: "The requested executive profile could not be found.",
    };
  }

  return {
    title: `${executive.title} - ${executive.title} | Meristem Securities Limited`,
    description: `${executive.title}, serving as ${executive.title} at Meristem Securities Limited. Learn more about their leadership, expertise, and contribution to the growth of Nigeria’s leading investment and financial services firm.`,
    keywords: [executive.title, executive.title],
    openGraph: {
      type: "profile",
      url: `https://www.meristemng.com/our-products/${slug}`,
      title: `${executive.title} - ${executive.title} | Meristem Securities Limited`,
      description: `${executive.title} is part of the leadership team at Meristem Securities Limited, driving innovation in wealth management, securities trading, and financial advisory services.`,
      siteName: "Meristem Securities Limited",
      images: [
        {
          url: typeof executive.img === "string" ? executive.img : executive.img,
          width: 800,
          height: 800,
          alt: `${executive.title} - ${executive.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${executive.title} - ${executive.title} | Meristem Securities Limited`,
      description: `${executive.title}, ${executive.title} at Meristem Securities Limited. Discover their expertise and leadership title in Nigeria’s financial industry.`,
      images: [typeof executive.img === "string" ? executive.img : executive.img],
    },
    alternates: {
      canonical: `https://www.meristemng.com/our-products/${slug}`,
    },
  };
}

export default function ExecutiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
