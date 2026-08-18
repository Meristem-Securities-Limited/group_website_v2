import React from "react";
import LegalPageHero from "@/components/legal/LegalPageHero";
import CookiePolicyContent from "@/components/cookie-policy/CookiePolicyContent";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <LegalPageHero
        effectiveDate="18 August, 2026"
        title="Cookies Policy"
        intro="How we use cookies and similar tracking technologies across our website and digital platforms, and how you can control them."
      />
      <CookiePolicyContent />
    </div>
  );
}
