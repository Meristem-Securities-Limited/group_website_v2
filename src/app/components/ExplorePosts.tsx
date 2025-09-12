"use client";

import React, { useMemo } from "react";
import { ChevronRight, Calendar } from "lucide-react";
import { blogPosts } from "@/components/lib/blogData";
import { useParams } from "next/navigation";
import { BlogCard } from "./ResearchPortal";

const ExploreOtherReports = ({ filterType = "random" }) => {
  const { slug } = useParams<{ slug: string }>();
  const posts = blogPosts;

  const filteredPosts = useMemo(() => {
    const otherPosts = posts.filter((post) => post.slug !== slug);

    switch (filterType) {
      case "category":
        const currentPost = posts.find((post) => post.slug === slug);
        const sameCategory = otherPosts.filter(
          (post) => currentPost && post.category === currentPost.category
        );

        if (sameCategory.length >= 3) {
          return sameCategory.slice(0, 3);
        } else {
          // Fill remaining slots with other posts
          const remaining = otherPosts
            .filter((post) => !sameCategory.includes(post))
            .slice(0, 3 - sameCategory.length);
          return [...sameCategory, ...remaining];
        }

      case "random":
      default:
        const shuffled = [...otherPosts].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 3);
    }
  }, [posts, slug, 3, filterType]);

  return (
    <div className="w-full mx-auto py-12 bg-white">
      <div className="container mx-auto">
        <div className="p-4 mb-8">
          <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-center text-gray-900 py-4">
            Explore other reports
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16 lg:px-0 px-4">
          {filteredPosts.map((post, index) => {
            return (
              <BlogCard
                key={index}
                {...post}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreOtherReports;
