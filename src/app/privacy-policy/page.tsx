import React from "react";
import LegalPageHero from "@/components/legal/LegalPageHero";
import PrivacyPolicyContent from "@/components/privacy-policy/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <LegalPageHero
        effectiveDate="18 August, 2026"
        title="Privacy Policy"
        intro="How Meristem Securities Limited and its licensed subsidiaries collect, use, protect, and share your personal data."
      />
      <PrivacyPolicyContent />
    </div>
  );
}
