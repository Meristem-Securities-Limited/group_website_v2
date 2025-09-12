"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import { VideoThumbnail } from "../assets";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/components/lib/blogData";

function TagFilter({
  tags,
  activeTags,
  toggleTag,
}: {
  tags: string[];
  activeTags: string[];
  toggleTag: (tag: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-5 my-9">
      {tags.map((tag) => {
        const isActive = activeTags.includes(tag);

        return (
          <div
            key={tag}
            className={`rounded-full flex items-center gap-2 py-2 px-4 cursor-pointer transition-colors ${
              isActive ? "bg-green-800 text-white" : "bg-gray-100 text-gray-800"
            }`}
            onClick={() => !isActive && toggleTag(tag)}>
            <span>{tag}</span>
            {isActive && (
              <button
                className="ml-1 p-1 bg-green-800 rounded-full hover:bg-green-900"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTag(tag);
                }}>
                <X
                  size={12}
                  color="white"
                />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function BlogCard({ category, title, date, slug }: BlogPost) {
  ``;
  return (
    <div className="overflow-hidden bg-[#144D330D] hover:scale-105 transition">
      <div className="w-full flex flex-col">
        <div className="p-5 flex flex-col justify-between h-full">
          <div className="space-y-2 pb-10">
            <p className="text-sm text-gray-500">{category}</p>
            <Link
              href={`/${slug}`}
              className="text-2xl font-semibold hover:text-green-800 transition">
              {title}
            </Link>

            <p className="text-sm text-gray-400">{date}</p>
          </div>

          <div>
            <Link
              href={`/${slug}`}
              className="py-4 flex items-center text-green-900 gap-4 font-semibold uppercase">
              <div className="bg-emerald-900 hover:bg-emerald-800 text-white px-4 py-2 rounded-md transition">
                <ArrowRight size={15} />
              </div>
              Continue Reading
            </Link>
          </div>
        </div>

        {/* Blog Image */}
        <div className="w-full min-h-60 h-60 bg-gray-200 overflow-hidden">
          <Image
            src={VideoThumbnail}
            alt={title}
            className="object-cover inset-0 w-full h-full"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function ResearchPortal() {
  const [activeTags, setActiveTags] = useState([
    "Daily market update",
    "Stock recommendation",
    "Week-in-View",
  ]);

  const toggleTag = (tag: any) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const tags = [
    "Daily market update",
    "Stock recommendation",
    "Week-in-View",
    "Ahead of Inflation",
    "Ahead and Post MPC report",
    "Macros and Market insight",
    "Inflation report",
    "Ahead of T-bills",
    "Ahead of Bonds",
  ];

  return (
    <section className="w-full bg-green-900 py-10">
      <div className="container mx-auto px-6 py-12 bg-white text-green-900">
        <div className="flex lg:flex-row flex-col justify-between mb-9">
          <h1 className="lg:text-5xl text-3xl font-medium mb-6">Research portal</h1>
          <div>
            <input
              type="search"
              placeholder="Search for reports"
              className="w-64 border border-gray-300 rounded-full px-4 py-2"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="all"
          className="mb-6 overflow-x-auto">
          <TabsList className="w-full">
            <TabsTrigger
              value="all"
              className="border border-emerald-900 text-green-900 w-full font-semibold">
              All
            </TabsTrigger>
            <TabsTrigger
              value="equity"
              className="border border-emerald-900 text-green-900 w-full font-semibold">
              Equity research
            </TabsTrigger>
            <TabsTrigger
              value="economic"
              className="border border-emerald-900 text-green-900 w-full font-semibold">
              Economic research
            </TabsTrigger>
            <TabsTrigger
              value="fixed"
              className="border border-emerald-900 text-green-900 w-full font-semibold">
              Fixed income research
            </TabsTrigger>
            <TabsTrigger
              value="outlook"
              className="border border-emerald-900 text-green-900 w-full font-semibold">
              Outlook
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Filters */}
        <TagFilter
          tags={tags}
          activeTags={activeTags}
          toggleTag={toggleTag}
        />

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-7 gap-12 mt-12">
          {blogPosts.map((post, i) => (
            <BlogCard
              key={i}
              {...post}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 rounded-full border bg-green-100">1</span>
          <span className="px-4 py-2 rounded-full border">2</span>
          <span className="px-4 py-2 rounded-full border">3</span>
          <button>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
