import React from "react";

export default function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 mb-12">
      <h2 className="text-xl md:text-2xl font-semibold text-emerald-900 mb-5 flex gap-2">
        {number ?
          <span>{number}.</span>
        : null}
        <span>{title}</span>
      </h2>
      <div className="space-y-4 text-base text-gray-700 leading-relaxed [&_strong]:text-emerald-900 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
