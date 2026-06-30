import type { Metadata } from "next";
import { wealthManagementBoardMembers } from "./page";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const executive = wealthManagementBoardMembers.find((exec) => exec.slug === slug);

  if (!executive) {
    return {
      title: "Director Not Found | Meristem Wealth Management Limited",
      description: "The requested director profile could not be found.",
    };
  }

  return {
    title: `${executive.name} - ${executive.role} | Meristem Wealth Management Limited`,
    description: `${executive.name}, serving as ${executive.role} at Meristem Wealth Management Limited. Learn more about their leadership, expertise, and contribution to the growth of Nigeria’s leading investment and financial services firm.`,
    keywords: [
      executive.name,
      executive.role,
      "Meristem Wealth Management Limited",
      "board members",
      "board of directors",
      "financial services leadership",
      "investment company Nigeria",
    ],
    openGraph: {
      type: "profile",
      url: `https://www.meristemng.com/wealth-management/board-members/${slug}`,
      title: `${executive.name} - ${executive.role} | Meristem Wealth Management Limited`,
      description: `${executive.name} is part of the leadership team at Meristem Wealth Management Limited, driving innovation in wealth management, securities trading, and financial advisory services.`,
      siteName: "Meristem Wealth Management Limited",
      images: [
        {
          url: typeof executive.image === "string" ? executive.image : executive.image?.src,
          width: 800,
          height: 800,
          alt: `${executive.name} - ${executive.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${executive.name} - ${executive.role} | Meristem Wealth Management Limited`,
      description: `${executive.name}, ${executive.role} at Meristem Wealth Management Limited. Discover their expertise and leadership role in Nigeria’s financial industry.`,
      images: [typeof executive.image === "string" ? executive.image : executive.image?.src],
    },
    alternates: {
      canonical: `https://www.meristemng.com/wealth-management/board-members/${slug}`,
    },
  };
}

export default function ExecutiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
