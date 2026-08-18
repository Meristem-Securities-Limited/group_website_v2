import React from "react";
import LegalPageHero from "@/components/legal/LegalPageHero";
import TermsAndConditionsContent from "@/components/terms-and-conditions/TermsAndConditionsContent";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <LegalPageHero
        effectiveDate="18 August, 2026"
        title="General Terms and Conditions of Use"
        intro="The terms that govern your access to and use of Meristem Group's Website and Mobile Application."
      />
      <TermsAndConditionsContent />
    </div>
  );
}
