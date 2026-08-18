import React from "react";
import LegalSection from "@/components/legal/LegalSection";
import LegalTableOfContents from "@/components/legal/LegalTableOfContents";

const tocItems = [
  { id: "what-is-a-cookie", title: "What is a Cookie?" },
  { id: "other-tracking-technologies", title: "Other Tracking Technologies We Use" },
  { id: "why-we-use-cookies", title: "Why We Use Cookies" },
  { id: "categories-of-cookies", title: "Categories of Cookies We Use" },
  { id: "third-party-cookies", title: "Third Party Cookies" },
  { id: "managing-your-cookie-preferences", title: "Managing your Cookie Preferences" },
  { id: "cookie-consent-banner", title: "Cookie Consent Banner" },
  { id: "cookies-and-personal-data", title: "Cookies and Personal Data" },
  { id: "updates", title: "Updates to this Cookies Policy" },
];

const cookieCategories = [
  {
    name: "Strictly Necessary Cookies",
    description:
      "These are essential for the Website to function. They enable secure login sessions, transaction processing, navigation, and core security protections such as fraud and session integrity controls. These cookies are placed automatically and cannot be disabled because the Website would not operate without them. They do not require prior consent.",
  },
  {
    name: "Functional Cookies",
    description:
      "These enhance your experience by remembering choices you actively make, such as language preferences, layout settings, and dismissed notifications. Basic preference-related cookies may not require consent, while enhanced personalisation features may require your approval. These cookies can generally be disabled without affecting core services.",
  },
  {
    name: "Analytics and Performance Cookies",
    description:
      "These help us understand how users interact with the Website by collecting aggregated and anonymised usage data. This information allows us to improve performance, usability, and content. These cookies do not identify you personally and are only activated with your prior consent, which you may withdraw at any time.",
  },
  {
    name: "Security Cookies",
    description:
      "These support fraud prevention, AML/CFT monitoring, and cybersecurity obligations. They help detect suspicious activity, protect transactions, and maintain the integrity of user accounts. These cookies operate automatically during authenticated sessions and cannot be disabled, as they are necessary for regulatory compliance and platform security.",
  },
  {
    name: "Marketing and Advertising Cookies",
    description:
      "These are used to deliver relevant advertising and measure campaign effectiveness, including on third-party platforms. These cookies are never placed without your explicit prior consent. You may withdraw consent at any time, and doing so will not affect your access to core Services.",
  },
];

export default function CookiePolicyContent() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="flex gap-12 lg:max-w-7xl mx-auto">
        <LegalTableOfContents items={tocItems} />

        <div className="min-w-0 flex-1 lg:max-w-3xl">
          <p className="text-base text-gray-700 leading-relaxed mb-12">
            This Cookies Policy explains how we use cookies and similar tracking technologies on our
            website and digital platforms. It describes what these technologies are, why we use
            them, and your rights to control their use.
          </p>

          <LegalSection
            id="what-is-a-cookie"
            title="What is a Cookie?">
            <p>
              A cookie is a small text file that a website places on your computer, mobile device,
              or any other internet-enabled device when you visit the site. Cookies are widely used
              to make websites work efficiently, to remember your preferences, to understand how
              visitors use a site, and to deliver content relevant to your interests.
            </p>
            <p>
              Cookies are not programs and cannot carry viruses or malware. They cannot read data
              from other cookies or access other information on your device. The data stored in a
              cookie is sent back to the originating website on each subsequent visit, or to another
              website that recognises that cookie.
            </p>
          </LegalSection>

          <LegalSection
            id="other-tracking-technologies"
            title="Other Tracking Technologies We Use">
            <p>In addition to cookies, the Website uses certain related technologies:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Web beacons</strong> (also called pixel tags or clear GIFs): tiny invisible
                images embedded in web pages or emails that allow us to know whether a page has been
                viewed, or an email has been opened.
              </li>
              <li>
                <strong>Browser local storage:</strong> a mechanism used by the Website to store
                small amounts of data on your browser that persists after the session ends and
                survives browser closure, unless manually cleared.
              </li>
              <li>
                <strong>Session storage:</strong> similar to local storage but data is cleared
                automatically when you close the browser tab; and
              </li>
              <li>
                <strong>Browser fingerprinting:</strong> a technique used for security purposes to
                create a non-unique device profile based on publicly available browser and device
                attributes, used to detect anomalous login attempts and session hijacking.
              </li>
            </ul>
          </LegalSection>

          <LegalSection
            id="why-we-use-cookies"
            title="Why We Use Cookies">
            <p>
              We use cookies and related technologies on the Website for the following broad
              purposes:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                To ensure the Website functions securely and correctly, including maintaining your
                authenticated login session.
              </li>
              <li>
                To remember your preferences and settings so you do not need to re-enter them on
                each visit.
              </li>
              <li>To protect you and us against fraud and other security threats.</li>
              <li>
                To understand how visitors use the Website so we can improve its design,
                performance, and content; and
              </li>
              <li>
                To deliver relevant marketing communications and measure their effectiveness, where
                you have given your consent.
              </li>
            </ul>
          </LegalSection>

          <LegalSection
            id="categories-of-cookies"
            title="Categories of Cookies We Use">
            <p>
              We use five main categories of cookies on the Website, each serving a distinct
              purpose.
            </p>
            <div className="space-y-5 mt-2">
              {cookieCategories.map((category) => (
                <div
                  key={category.name}
                  className="flex gap-3 rounded-lg border border-gray-100 bg-gray-50/60 p-5">
                  <span
                    className="mt-1 shrink-0 text-lg leading-none"
                    style={{ color: "#154D34" }}
                    aria-hidden="true">
                    ❖
                  </span>
                  <p>
                    <strong>{category.name}</strong> {category.description}
                  </p>
                </div>
              ))}
            </div>
          </LegalSection>

          <LegalSection
            id="third-party-cookies"
            title="Third Party Cookies">
            <p>
              Some cookies on the Website are set not by us but by third-party service providers
              whose technology or services we use. We have no direct control over the cookies set by
              these third parties, and they are subject to the respective third party&apos;s own
              privacy and cookies policies. We only enable third-party cookies where you have given
              your consent to the relevant cookie category through the Cookie Consent Banner.
              Third-party marketing cookies are never activated without your explicit consent.
            </p>
          </LegalSection>

          <LegalSection
            id="managing-your-cookie-preferences"
            title="Managing your Cookie Preferences">
            <p>
              You are in control of how cookies are used on our Website. When you first visit, you
              can choose to accept, reject, or customise your cookie preferences through our cookie
              consent banner, except for cookies that are strictly necessary for the Website to
              function.
            </p>
            <p>
              You may review or update your cookie preferences at any time by accessing the
              &ldquo;Cookie Settings&rdquo; or similar link available on our Website. Changes to
              your preferences will apply going forward and will not affect cookies already placed
              before your updated selection, unless you clear them through your browser settings.
            </p>
            <p>
              In addition, most web browsers allow you to manage, block, or delete cookies through
              their settings. Please note that disabling certain cookies may affect the
              functionality, performance, or user experience of the Website.
            </p>
            <p>
              For more information about the types of cookies we use and their purposes, please
              refer to our Cookies Policy.
            </p>
          </LegalSection>

          <LegalSection
            id="cookie-consent-banner"
            title="Cookie Consent Banner">
            <p>
              When you first visit our Website, you will be presented with a cookie consent banner
              that allows you to accept, reject, or manage your cookie preferences, except for
              cookies that are strictly necessary for the operation and security of the Website.
            </p>
            <p>
              Non-essential cookies will only be placed on your device after you have provided your
              consent. You may withdraw or modify your cookie preferences at any time by accessing
              the cookie settings tool available on the Website.
            </p>
            <p>
              By clicking &ldquo;Accept&rdquo; or continuing to use the Website after being
              presented with the banner, you acknowledge that you have been informed about our use
              of cookies and consent to their use in accordance with your selected preferences and
              this Cookies Policy.
            </p>
            <p>
              Your choices will not affect your access to core Website functionality, although
              certain features may not operate optimally if optional cookies are disabled.
            </p>
          </LegalSection>

          <LegalSection
            id="cookies-and-personal-data"
            title="Cookies and Personal Data">
            <p>
              Some cookies we use may collect information that qualifies as Personal Data, such as
              your IP address, device identifiers, browsing behaviour, login details, or
              preferences. Where this occurs, we process such data in accordance with applicable
              data protection laws and our Privacy Policy.
            </p>
            <p>Cookies may be used to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Authenticate users and manage secure sessions.</li>
              <li>Prevent fraud and enhance platform security.</li>
              <li>Analyse website usage and improve performance.</li>
              <li>Remember your preferences and settings; and</li>
              <li>Deliver relevant content, where you have consented.</li>
            </ul>
            <p>
              Where cookies collect Personal Data, we rely on an appropriate legal basis for
              processing, which may include your consent (for non-essential cookies), performance of
              a contract, compliance with legal obligations, or our legitimate interests in
              operating and securing the Platform.
            </p>
            <p>
              Personal Data collected through cookies may be shared with carefully selected
              third-party service providers (such as analytics or technology partners) strictly for
              the purposes described in this Policy and subject to appropriate safeguards.
            </p>
            <p>
              You have rights in relation to your Personal Data, including the right to access,
              correct, restrict, or object to certain processing, and the right to withdraw consent
              where processing is based on consent. For more information on how we handle your
              Personal Data and how to exercise your rights, please refer to our{" "}
              <a
                href="/privacy-policy"
                className="text-emerald-900 font-medium underline underline-offset-2 hover:text-emerald-700">
                Privacy Policy
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection
            id="updates"
            title="Updates to this Cookies Policy">
            <p>
              We may update this Cookies Policy from time to time to reflect changes in applicable
              laws and regulations, guidance from regulatory authorities, technological
              developments, or changes in how we use cookies and similar technologies. Where changes
              are material, we will provide appropriate notice on our Website, through the cookie
              consent banner, or by other suitable electronic means before the changes take effect.
            </p>
            <p>
              The &ldquo;Effective Date&rdquo; at the top of this Policy indicates when it was last
              updated. We encourage you to review this Policy periodically to stay informed about
              how we use cookies. Your continued use of our Website after the effective date of any
              updates signifies your acknowledgment of the revised Cookies Policy and, where
              applicable, your continued consent in accordance with your selected cookie
              preferences.
            </p>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
