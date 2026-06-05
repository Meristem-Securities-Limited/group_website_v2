import type { Metadata } from "next";
import { stockbrokersBoardMembers } from "./page";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const executive = stockbrokersBoardMembers.find((exec) => exec.slug === slug);

  if (!executive) {
    return {
      title: "Director Not Found | Meristem Stockbroker Limited",
      description: "The requested director profile could not be found.",
    };
  }

  return {
    title: `${executive.name} - ${executive.role} | Meristem Stockbroker Limited`,
    description: `${executive.name}, serving as ${executive.role} at Meristem Stockbroker Limited. Learn more about their leadership, expertise, and contribution to the growth of Nigeria’s leading investment and financial services firm.`,
    keywords: [
      executive.name,
      executive.role,
      "Meristem Stockbroker Limited",
      "board members",
      "board of directors",
      "financial services leadership",
      "investment company Nigeria",
    ],
    openGraph: {
      type: "profile",
      url: `https://www.meristemng.com/stockbroker/board-members/${slug}`,
      title: `${executive.name} - ${executive.role} | Meristem Stockbroker Limited`,
      description: `${executive.name} is part of the leadership team at Meristem Stockbroker Limited, driving innovation in wealth management, securities trading, and financial advisory services.`,
      siteName: "Meristem Stockbroker Limited",
      images: [
        {
          url: typeof executive.image === "string" ? executive.image : executive.image,
          width: 800,
          height: 800,
          alt: `${executive.name} - ${executive.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${executive.name} - ${executive.role} | Meristem Stockbroker Limited`,
      description: `${executive.name}, ${executive.role} at Meristem Stockbroker Limited. Discover their expertise and leadership role in Nigeria’s financial industry.`,
      images: [typeof executive.image === "string" ? executive.image : executive.image],
    },
    alternates: {
      canonical: `https://www.meristemng.com/stockbroker/board-members/${slug}`,
    },
  };
}

export default function ExecutiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
