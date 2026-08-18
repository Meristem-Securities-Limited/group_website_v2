import React from "react";

export default function LegalTableOfContents({
  items,
}: {
  items: { id: string; number?: string; title: string }[];
}) {
  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block sticky top-28 self-start w-64 shrink-0 pr-6 border-r border-gray-100">
      <p className="text-xs font-semibold text-emerald-900 uppercase tracking-wide mb-4">
        On this page
      </p>
      <ul className="space-y-2.5 max-h-[70vh] overflow-y-auto scrollbar-hide">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-gray-500 hover:text-emerald-900 transition-colors duration-200 leading-snug block">
              {item.number ? `${item.number}. ` : ""}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
