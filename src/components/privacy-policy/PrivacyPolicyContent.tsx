import React from "react";
import Link from "next/link";
import LegalSection from "@/components/legal/LegalSection";
import LegalTableOfContents from "@/components/legal/LegalTableOfContents";

const tocItems = [
  { id: "scope", number: "1", title: "Scope" },
  {
    id: "data-controller-and-dpo",
    number: "2",
    title: "Data Controller and Data Protection Officer",
  },
  { id: "definitions", number: "3", title: "Definitions" },
  { id: "personal-data-we-collect", number: "4", title: "Personal Data We Collect" },
  {
    id: "how-and-why-we-use-your-personal-data",
    number: "5",
    title: "How and Why We Use Your Personal Data",
  },
  { id: "website-specific-data-practices", number: "6", title: "Website Specific Data Practices" },
  {
    id: "device-permissions-and-app-specific-practices",
    number: "7",
    title: "Device Permissions and App Specific Practices",
  },
  {
    id: "who-we-share-your-personal-data-with",
    number: "8",
    title: "Who We Share Your Personal Data With",
  },
  { id: "international-transfers", number: "9", title: "International Transfers" },
  { id: "how-long-we-retain-your-data", number: "10", title: "How Long We Retain Your Data" },
  {
    id: "how-we-protect-your-personal-data",
    number: "11",
    title: "How We Protect Your Personal Data",
  },
  { id: "your-rights-under-this-policy", number: "12", title: "Your Rights Under This Policy" },
  { id: "childrens-data", number: "13", title: "Children's Data" },
  { id: "remedies", number: "14", title: "Remedies" },
  { id: "updates-to-this-policy", number: "15", title: "Updates to this Policy" },
];

const definitions: { term: string; meaning: string }[] = [
  {
    term: "Consent",
    meaning:
      "means a freely given, specific, informed, and unambiguous indication of your wishes, given by a clear affirmative action, signifying agreement to the processing of Personal Data relating to you.",
  },
  {
    term: "Data Controller",
    meaning:
      "means Meristem Securities Limited and/or the relevant licensed subsidiary that determines the purposes and means of processing your Personal Data.",
  },
  {
    term: "Data Processor",
    meaning:
      "means any person or entity that processes Personal Data on behalf of the Data Controller under a binding data processing agreement.",
  },
  {
    term: "Data Subject",
    meaning: "means the identified or identifiable natural person to whom Personal Data relates.",
  },
  {
    term: "NDPA",
    meaning:
      "means the Nigeria Data Protection Act 2023, as amended or replaced from time to time.",
  },
  {
    term: "NDPC",
    meaning: "means the Nigeria Data Protection Commission established under the NDPA.",
  },
  {
    term: "Personal Data",
    meaning:
      "means any information relating to an identified or identifiable natural person, including name, identification number, location data, online identifier, or factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that person.",
  },
  {
    term: "Processing",
    meaning:
      "means any operation or set of operations performed on Personal Data, whether or not by automated means, including collection, recording, organisation, structuring, storage, adaptation, retrieval, consultation, use, disclosure, dissemination, restriction, erasure, or destruction.",
  },
  {
    term: "Sensitive Personal Data",
    meaning:
      "means Personal Data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, health data, data concerning sex life or sexual orientation, or data relating to criminal convictions and offences.",
  },
  {
    term: "DPO",
    meaning:
      "means the Data Protection Officer appointed by the Group in accordance with the NDPA.",
  },
];

const purposeLegalBasisRows: { purpose: string; basis: string }[] = [
  {
    purpose: "Identity verification, KYC onboarding, and ongoing customer due diligence",
    basis: "Legal obligation",
  },
  { purpose: "Account creation, management, and authentication", basis: "Contract" },
  { purpose: "Delivery of all financial services", basis: "Contract; Legal obligation" },
  { purpose: "Processing and settling financial transactions", basis: "Contract" },
  {
    purpose: "Credit assessment and risk evaluation for lending products",
    basis: "Contract; Legitimate interests",
  },
  {
    purpose: "Fraud prevention, AML/CFT transaction monitoring, and security",
    basis: "Legal obligation; Legitimate interests",
  },
  {
    purpose: "Mandatory regulatory reporting (NFIU, SEC, CBN, FIRS, CAC, others)",
    basis: "Legal obligation",
  },
  {
    purpose: "Sanctions screening, PEP monitoring, and watchlist checks",
    basis: "Legal obligation",
  },
  {
    purpose: "Sharing data with licensed credit bureaus in connection with credit products",
    basis: "Legal obligation (CBN guidelines); Legitimate interests",
  },
  {
    purpose: "Service-related communications, transaction alerts, and account notifications",
    basis: "Contract; Legal obligation",
  },
  { purpose: "Customer support and formal complaint handling", basis: "Contract" },
  { purpose: "Marketing our services to existing clients", basis: "Legitimate interests" },
  { purpose: "Marketing our services to prospective clients", basis: "Consent" },
  {
    purpose: "Product personalisation and suitability profiling for investment services",
    basis: "Contract; Legitimate interests",
  },
  { purpose: "Cookie-based analytics and Website personalisation", basis: "Consent" },
  { purpose: "IP-based approximate location for fraud detection", basis: "Legitimate interests" },
  {
    purpose: "Automated decision-making (credit scoring, fraud detection)",
    basis: "Contract; Legal obligation; Legitimate interests",
  },
  {
    purpose: "Audit, legal proceedings, and regulatory defence",
    basis: "Legal obligation; Legitimate interests",
  },
];

const appPermissions: { name: string; description: string }[] = [
  {
    name: "Camera",
    description:
      "required for document capture (KYC document upload) and QR code scanning. Accessed only when you actively use the relevant feature.",
  },
  {
    name: "Location Services",
    description:
      "optional; used for fraud detection and verification of transaction origin. Precise location collected only during active use unless you grant 'always on' permission.",
  },
  {
    name: "Contacts",
    description:
      "optional; used to suggest transfer beneficiaries from your contact list. Contact data is not stored on our servers without your explicit consent.",
  },
  {
    name: "Device Storage",
    description: "required for saving downloaded statements and transaction confirmations.",
  },
  {
    name: "Notifications",
    description:
      "required to deliver push notifications. Can be revoked at any time through device settings.",
  },
];

const sharedWith: { title: string; description: string }[] = [
  {
    title: "Subsidiaries and Affiliates within the Meristem Group",
    description: "To provide integrated services, manage risk, and meet legal obligations.",
  },
  {
    title: "Regulators and authorities",
    description:
      "When required by law for reporting, supervision, tax compliance, or fraud prevention.",
  },
  {
    title: "Licensed credit reference bureaus",
    description:
      "To support facility applications, assess repayment history, and evaluate creditworthiness.",
  },
  {
    title: "Approved service providers",
    description:
      "Such as cloud providers, payment processors, document management services, cybersecurity and fraud detection vendors, and customer support platforms. These providers process your data securely and only on our instructions.",
  },
  {
    title: "Professional advisers",
    description: "Lawyers, auditors, or consultants who are bound by confidentiality obligations.",
  },
  {
    title: "Courts and law enforcement",
    description: "When required by a court order, subpoena, or lawful directive.",
  },
  {
    title: "Successors",
    description:
      "In case of a merger, acquisition, or asset sale, under strict confidentiality safeguards.",
  },
];

const rights: { title: string; description: string }[] = [
  {
    title: "Access your data",
    description: "Request a copy of the personal data we hold about you.",
  },
  {
    title: "Correct inaccuracies",
    description: "Ask us to update or correct any incorrect or incomplete information.",
  },
  {
    title: "Delete your data",
    description:
      "Request deletion of your personal data, where allowed by law or contractual obligations.",
  },
  {
    title: "Restrict processing",
    description: "Ask us to limit how we use your personal data in certain situations.",
  },
  {
    title: "Object to processing",
    description: "Object to certain types of processing, including marketing communications.",
  },
  {
    title: "Withdraw consent",
    description:
      "Where processing is based on your consent, you can withdraw it at any time provided that withdrawing your consent shall not affect any processing we carried out lawfully before your withdrawal.",
  },
  {
    title: "Data portability",
    description:
      "Request that your personal data be transferred to another service provider, where applicable.",
  },
];

export default function PrivacyPolicyContent() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="flex gap-12 lg:max-w-6xl mx-auto">
        <LegalTableOfContents items={tocItems} />

        <div className="min-w-0 flex-1 lg:max-w-3xl">
          <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-12">
            <p>
              Your privacy matters to us. This Privacy Policy explains how Meristem Securities
              Limited and its licensed subsidiaries (together referred to as{" "}
              <strong className="text-emerald-900 font-semibold">
                &ldquo;the Meristem Group&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;
              </strong>
              ) collect, use, protect, and share your personal data when you use our digital
              platforms (website and mobile app), or any of our products and services. We are
              committed to handling your information responsibly, transparently, and in accordance
              with applicable data protection laws. This means we only collect the information we
              need, use it for clear and lawful purposes, keep it secure, and give you control over
              how it is used.
            </p>
            <p>
              This Policy applies to all personal data processed across our digital platforms and in
              the course of providing our services. We process your personal data in accordance with
              the Nigeria Data Protection Act 2023 (NDPA) and other applicable laws. Please note
              that the NDPA may be amended, updated, or replaced from time to time. We will ensure
              that our privacy practices continue to comply with the current legal requirements.
              This Privacy Policy supplements and should be read alongside our General Terms and
              Conditions of Use.
            </p>
            <p>
              We encourage you to read this Policy carefully, so you understand how your personal
              data is handled and the choices available to you. If you have any questions, our Data
              Protection Officer [insert email] is available to assist you.
            </p>
          </div>

          <LegalSection
            id="scope"
            number="1"
            title="Scope">
            <p>This Policy applies to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                All individuals who access or use the Platform, whether as registered Users or
                visitors.
              </li>
              <li>
                All individuals whose Personal Data is provided to us by corporate clients,
                including directors, officers, beneficial owners, authorised signatories, and
                counterparties.
              </li>
              <li>
                Prospective clients and enquirers who contact us through the Platform or otherwise,
                and
              </li>
              <li>Beneficiaries and estate stakeholders in connection with Trust services.</li>
            </ul>
            <p>
              This Policy does not apply to data processed by third-party websites or applications
              that may be linked to or integrated with the Platform. Please review the privacy
              policies of those third parties separately.
            </p>
            <p>
              Because we operate as a group, your personal data may be shared within the Meristem
              Group where necessary to provide integrated services, manage risk, and meet regulatory
              obligations. Each subsidiary processes personal data in accordance with applicable law
              and this Privacy Policy.
            </p>
          </LegalSection>

          <LegalSection
            id="data-controller-and-dpo"
            number="2"
            title="Data Controller and Data Protection Officer">
            <p>
              <strong>2.1 Data Controller:</strong> The Group and its relevant licensed subsidiaries
              act as Data Controllers in respect of Personal Data collected and processed through
              the Platform. For the avoidance of doubt, the specific Data Controller in respect of
              data processed for a particular Service is the subsidiary licensed to provide that
              Service, and the Group acts as the overarching Data Controller for Platform-level data
              processing activities.
            </p>
            <p>
              <strong>2.2 Data Protection Officer:</strong> In compliance with Article 32 of the
              NDPA, the Group has appointed a Data Protection Officer (DPO) responsible for
              overseeing data protection strategy, ensuring compliance with the NDPA and related
              regulations and guidelines, serving as the primary point of contact with the NDPC, and
              handling Data Subject inquiries and complaints.
            </p>
            {/* <div className="rounded-lg border border-gray-100 bg-gray-50/60 p-5 space-y-1">
              <p>
                <strong>Email:</strong> <span className="text-gray-400">[insert]</span>
              </p>
              <p>
                <strong>Phone:</strong> <span className="text-gray-400">[insert]</span>
              </p>
            </div> */}
          </LegalSection>

          <LegalSection
            id="definitions"
            number="3"
            title="Definitions">
            <p>
              In this Privacy Policy, the following terms shall have the meanings set out below.
              Capitalised terms not defined here bear the meanings given to them in our General
              Terms and Conditions of Use.
            </p>
            <dl className="space-y-4">
              {definitions.map((item) => (
                <div key={item.term}>
                  <dt className="font-semibold text-emerald-900">&ldquo;{item.term}&rdquo;</dt>
                  <dd className="mt-1">{item.meaning}</dd>
                </div>
              ))}
            </dl>
          </LegalSection>

          <LegalSection
            id="personal-data-we-collect"
            number="4"
            title="Personal Data We Collect">
            <h3 className="text-lg font-semibold text-emerald-900 pt-2">
              4.1 Data You Provide Directly
            </h3>
            <p>
              When you register for an account, apply for services, or interact with any of our
              digital platforms, we collect personal data that you provide, including:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Identity and contact data:</strong> full legal name, date of birth, gender,
                nationality, residential address, email address, telephone number(s) and employment
                information.
              </li>
              <li>
                <strong>Identity verification and KYC data:</strong> government-issued
                identification documents (National Identity Card, International Passport,
                Driver&apos;s Licence), Bank Verification Number (BVN), National Identification
                Number (NIN), and Tax Identification Number (TIN)
              </li>
              <li>
                <strong>Financial data:</strong> bank account details, investment holdings, income
                information, source of wealth declarations, Investment preferences and risk profile
                and transaction history.
              </li>
              <li>
                <strong>AML/CFT compliance data:</strong> Politically Exposed Person (PEP) status,
                beneficial ownership information and sanctions screening declarations.
              </li>
              <li>
                <strong>Account and Beneficiary information:</strong> next of kin and beneficiary
                details;
              </li>
              <li>
                <strong>Corporate data (for corporate accounts):</strong> company name, registration
                number, Memorandum and Articles of Association, board resolutions, and
                identification of directors and beneficial owners.
              </li>
              <li>
                <strong>Communications data:</strong> Correspondence and communications between you
                and the Group, whether by email, in-app messaging, telephone, or written
                correspondence, Call recordings (where calls are recorded for quality assurance,
                regulatory compliance, or dispute resolution purposes, with appropriate notice to
                callers), Chat transcripts from the Platform&apos;s support features; and Feedback,
                survey responses, enquiries and complaints submitted to us.
              </li>
              <li>
                <strong>Trust and Estate Data:</strong> For Users engaging Trust Services, we
                additionally collect: Information about beneficiaries, settlors, testators, and
                estate stakeholders, Details of assets, properties, and financial interests forming
                part of a trust or estate, Will documents, trust deeds, letters of administration,
                and court orders, Family relationship information; and Succession and estate
                planning instructions.
              </li>
              <li>
                <strong>Service preferences and account settings:</strong> notification preferences,
                information contained in forms, correspondence and investment mandates, and platform
                configurations.
              </li>
              <li>
                <strong>Sensitive Personal Data:</strong> We may, in limited circumstances, process
                the following categories of Sensitive Personal Data:
                <ol className="list-[lower-roman] pl-6 mt-2 space-y-2">
                  <li>
                    Biometric data (fingerprints or facial recognition data) for identity
                    verification and platform authentication. However, we do not store biometric
                    data.
                  </li>
                  <li>
                    Health data, to the extent voluntarily disclosed in connection with estate
                    planning, will drafting, or related services.
                  </li>
                  <li>
                    Data relating to criminal convictions and offences, in connection with AML/CFT
                    due diligence and sanctions screening; and
                  </li>
                  <li>
                    Politically Exposed Person (PEP) status, which may reveal political opinions or
                    affiliations.
                  </li>
                </ol>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              4.2 Data Collected Automatically
            </h3>
            <p>
              When you use any of our digital platforms, the following technical and usage data is
              collected automatically:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Browser and device data:</strong> IP address, browser type and version,
                operating system, device model and network type
              </li>
              <li>
                <strong>Usage data:</strong> pages accessed, features used, session duration,
                navigation/click patterns, search queries, crash reports and error logs.
              </li>
              <li>
                <strong>Authentication data:</strong> login timestamps, session identifiers, and
                records of failed authentication attempts
              </li>
              <li>
                <strong>Approximate location data:</strong> geographic location at the country or
                city level, derived from your IP address for security and fraud detection purposes
                (no GPS data is collected through the Website)
              </li>
              <li>
                <strong>Cookie and tracking data:</strong> cookie identifiers, session storage data,
                and analytics interaction data as described in our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-emerald-900 font-medium underline underline-offset-2 hover:text-emerald-700">
                  Cookies Policy
                </Link>
                .
              </li>
              <li>
                <strong>Biometric authentication data (for mobile app):</strong> our app receives
                only a pass/fail response from your device&apos;s biometric system. No biometric
                templates, fingerprint images, or facial geometry data are transmitted to or stored
                by us.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              4.3 Data Received from Third Parties
            </h3>
            <p>We may receive personal data about you from the following external sources:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Licensed credit reference bureaus in connection with credit assessments</li>
              <li>Sanctions screening databases and PEP monitoring services</li>
              <li>
                Other licensed financial institutions and financial intermediaries, including fund
                managers, investment houses, finance companies, and other capital market operators,
                in connection with inter-institutional transactions, portfolio transfers, securities
                settlement, co-investment arrangements, or other operational and regulatory
                interfaces between regulated entities.
              </li>
              <li>
                Introducers, brokers, and professional advisers acting on your behalf with your
                authority.
              </li>
              <li>Employers or referees (where required)</li>
              <li>
                Regulators and public registries including the Corporate Affairs Commission (CAC),
                land registries, the Securities and Exchange Commission (SEC) and Central Bank of
                Nigeria (CBN).
              </li>
              <li>Identity verification providers</li>
              <li>Payment processors and settlement systems</li>
            </ul>
            <p>
              We only collect information that is relevant and necessary for the services you
              request.
            </p>
          </LegalSection>

          <LegalSection
            id="how-and-why-we-use-your-personal-data"
            number="5"
            title="How and Why We Use Your Personal Data">
            <h3 className="text-lg font-semibold text-emerald-900 pt-2">
              5.1 Purposes and Legal Basis
            </h3>
            <p>
              We process your personal data strictly for defined, explicit, and legitimate purposes,
              and only where a valid lawful basis exists under the NDPA and other applicable laws.
            </p>
            <p>
              Depending on the nature of our relationship with you and the context of the processing
              activity, our legal bases may include:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Performance of a contract</strong> – where processing is necessary to enter
                into, administer, or perform our contractual obligations to you, or to take steps at
                your request prior to entering into a contract.
              </li>
              <li>
                <strong>Compliance with legal obligations</strong> – where we are required to
                process or disclose personal data to satisfy statutory, regulatory, supervisory, or
                court-mandated requirements.
              </li>
              <li>
                <strong>Legitimate interests</strong> – where processing is necessary for our
                legitimate business interests (or those of a third party), provided such interests
                are not overridden by your fundamental rights and freedoms. This may include risk
                management, fraud prevention, internal administration, security monitoring, and
                service improvement. Where we rely on legitimate interests as our legal basis, we
                have carried out a legitimate interest assessment to ensure our interests do not
                override your rights and freedoms.
              </li>
              <li>
                <strong>Consent</strong> – where required by law or where no other lawful basis
                applies, in which case you retain the right to withdraw your consent at any time,
                subject to legal or contractual limitations.
              </li>
              <li>
                <strong>Vital interests or public interests</strong> – where processing is necessary
                to protect life, ensure public safety, or perform a task carried out in the public
                interest or in the exercise of official authority, as permitted by law.
              </li>
            </ul>
            <p>Our primary processing activities and their legal bases are set out below.</p>

            <div className="overflow-x-auto rounded-lg border border-gray-100 mt-4">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 font-semibold text-emerald-900 border-b border-gray-100">
                      Purpose of Processing
                    </th>
                    <th className="px-4 py-3 font-semibold text-emerald-900 border-b border-gray-100">
                      Legal Basis of Processing
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {purposeLegalBasisRows.map((row, index) => (
                    <tr
                      key={row.purpose}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-4 py-3 align-top border-b border-gray-100 text-gray-700">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-3 align-top border-b border-gray-100 text-gray-700">
                        {row.basis}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="pt-2">
              <strong>5.1.1 Consent Withdrawal:</strong> Where processing is based on your consent,
              you have the right to withdraw that consent at any time by contacting the DPO or
              through the Platform&apos;s privacy settings. Withdrawal of consent will not affect
              the lawfulness of processing carried out before the withdrawal. Please note that
              withdrawal of consent for certain types of processing (e.g., processing necessary for
              regulatory compliance) may affect our ability to provide Services to you.
            </p>
            <p>
              <strong>5.1.2 Sensitive Personal Data:</strong> For sensitive personal data, we only
              process where:
            </p>
            <ol className="list-[lower-alpha] pl-6 space-y-2">
              <li>
                You have given your explicit consent, where required and where such consent is valid
                under the NDPA.
              </li>
              <li>
                Processing is required to comply with a legal obligation to which we are subject.
              </li>
              <li>
                Processing is necessary for the establishment, exercise, or defence of legal claims;
                or
              </li>
              <li>
                Processing is carried out in the course of our legitimate AML/CFT, fraud prevention,
                and regulatory compliance activities as authorised under applicable law.
              </li>
            </ol>
            <p>
              We ensure that each processing activity is assessed against the appropriate lawful
              basis prior to collection or use, and that the chosen basis is documented,
              proportionate, and consistent with the principles of lawfulness, fairness,
              transparency, purpose limitation, data minimization, and accountability under the
              NDPA.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              5.2 Regulatory Reporting Obligations
            </h3>
            <p>
              As a regulated financial services group, we are required by Nigerian law to collect,
              use, retain, and in some cases disclose certain personal data. These obligations are
              part of the legal framework designed to keep the financial system safe, transparent,
              and secure.
            </p>
            <p>
              What this means for you is that we may process information such as your identification
              details, contact information, transaction records, financial information, and
              beneficial ownership details in order to meet regulatory and reporting requirements,
              prevent fraud, money laundering, and other financial crimes, comply with tax and
              corporate governance rules; and support supervisory oversight by relevant authorities.
            </p>
            <p>
              Where the law requires it, we may share relevant information with regulatory,
              supervisory, or law enforcement authorities without seeking your prior consent. We
              only do this when we are legally obligated to.
            </p>
            <p>
              We limit such processing to what is strictly necessary and apply appropriate technical
              and organisational safeguards to protect your data from unauthorised access, misuse,
              or alteration. We also retain your information only for as long as required by
              applicable legal and regulatory record-keeping rules.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              5.3 Credit Bureau Sharing
            </h3>
            <p>
              If you apply for a credit facility or lending product, we are required to share
              certain credit information about you with licensed credit reference bureaus in
              Nigeria, in accordance with regulatory guidelines issued by the Central Bank of
              Nigeria. This may include your identification details, information from your credit
              application, facility terms, outstanding balances, repayment history, and any missed
              or late payments.
            </p>
            <p>
              Credit reference bureaus may make such information available to other authorized
              financial institutions and eligible credit providers for the purpose of assessing your
              creditworthiness, verifying information provided in future applications, preventing
              fraud, and meeting regulatory compliance obligations.
            </p>
            <p>
              We share only information that is necessary, ensure it is accurate and up to date, and
              transmit it securely in line with data protection standards. You have the right to
              request a copy of your credit report directly from the relevant credit bureau and to
              dispute any incorrect information through their established correction process.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              5.4 Marketing Communications
            </h3>
            <p>
              We may process your personal data to provide you with information about our products,
              services, promotions, and events that may be relevant to your interests.
            </p>
            <p>
              If you are already a client, we may contact you about services that are similar or
              related to those you currently use. We do this to keep you informed about updates,
              improvements, or additional offerings that may benefit you.
            </p>
            <p>
              If you are a prospective client, or if we wish to contact you about new types of
              products or through new marketing channels, we will first ask for your consent where
              required by law.
            </p>
            <p>
              You are always in control of your marketing preferences. You can opt out of receiving
              marketing communications at any time by updating your preferences in your account
              settings, clicking the unsubscribe link in any marketing message, or contacting our
              Data Protection Officer.
            </p>
            <p>
              If you choose to opt out of marketing messages, you will still receive important
              service-related communications necessary to manage your account or fulfil our
              contractual obligations to you.
            </p>
          </LegalSection>

          <LegalSection
            id="website-specific-data-practices"
            number="6"
            title="Website Specific Data Practices">
            <h3 className="text-lg font-semibold text-emerald-900 pt-2">
              6.1 Cookies and Tracking Technologies
            </h3>
            <p>
              We use cookies to make your experience on our website smoother and more convenient. If
              you create an account with us, cookies help manage the signup process, keep your
              session active while you&apos;re logged in, and support general account
              administration. This ensures the Website works properly and your interactions are
              seamless. Further details can be found in our{" "}
              <Link
                href="/cookie-policy"
                className="text-emerald-900 font-medium underline underline-offset-2 hover:text-emerald-700">
                Cookies Policy
              </Link>
              .
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              6.2 Approximate Location Data
            </h3>
            <p>
              When you use our website, we automatically detect your approximate location (country
              or city) from your IP address. We do not collect precise GPS data or track your exact
              movements.
            </p>
            <p>
              We use this information only to keep your account and our systems secure, such as
              spotting unusual logins, preventing fraud, and protecting against unauthorized access.
              This helps us maintain a safe and reliable service for you.
            </p>
            <p>
              Your approximate location is not used for advertising, profiling, or detailed
              tracking, and we keep it only as long as needed for security and compliance purposes.
            </p>
          </LegalSection>

          <LegalSection
            id="device-permissions-and-app-specific-practices"
            number="7"
            title="Device Permissions and App Specific Practices">
            <p>
              Our mobile app (App) requests access to certain device features and data to deliver
              its services. The permissions we may request, and the purposes for which they are
              used, are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              {appPermissions.map((permission) => (
                <li key={permission.name}>
                  <strong>{permission.name}:</strong> {permission.description}
                </li>
              ))}
            </ul>
            <p>
              You may manage individual App permissions at any time through your device&apos;s
              settings application. Revoking a required permission may make the corresponding App
              feature unavailable. Our App permissions data practices comply with the data
              minimisation principle under the NDPA.
            </p>
          </LegalSection>

          <LegalSection
            id="who-we-share-your-personal-data-with"
            number="8"
            title="Who We Share Your Personal Data With">
            <p>
              We only share your personal data when it is necessary to provide services, comply with
              the law, or meet legitimate business needs. We never sell, rent, or trade your
              information. We may share your data with:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              {sharedWith.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
            <p>
              In all cases, we limit data sharing to what is necessary and ensure appropriate
              safeguards are in place to protect your information.
            </p>
          </LegalSection>

          <LegalSection
            id="international-transfers"
            number="9"
            title="International Transfers">
            <p>
              We primarily process your personal data in Nigeria. However, certain services,
              including foreign currency investments, international custodial arrangements, cloud
              hosting, or cross-border transactions, may require your data to be transferred outside
              Nigeria.
            </p>
            <p>
              Where this happens, we comply with the NDPA by ensuring appropriate safeguards are in
              place, such as approved contractual protections or transfers to countries recognised
              as providing adequate protection.
            </p>
            <p>
              You may contact our Data Protection Officer for more information about these
              safeguards.
            </p>
          </LegalSection>

          <LegalSection
            id="how-long-we-retain-your-data"
            number="10"
            title="How Long We Retain Your Data">
            <p>
              We keep your personal data only for as long as it is needed to provide our services,
              manage your account, fulfil our legal obligations, resolve disputes, prevent fraud,
              and protect our legitimate business interests.
            </p>
            <p>
              The length of time we retain data depends on the type of information, the services you
              use, and the requirements of law and regulation. For example, some records may be kept
              longer to comply with tax, accounting, anti-money laundering, or audit obligations.
            </p>
            <p>
              When your personal data is no longer needed, we securely delete, anonymise, or archive
              it, and take steps to protect it from unauthorized access or misuse.
            </p>
          </LegalSection>

          <LegalSection
            id="how-we-protect-your-personal-data"
            number="11"
            title="How We Protect Your Personal Data">
            <p>
              We take your privacy and security seriously. We use a range of technical and
              organisational measures to keep your personal data safe, including secure servers,
              encryption, access controls, staff confidentiality obligations and regular system
              monitoring.
            </p>
            <p>
              Only authorised staff and trusted service providers can access your information, and
              they are required to handle it securely and confidentially. For sensitive personal
              data, additional safeguards including strict access controls and enhanced encryption
              are applied.
            </p>
            <p>
              While no system can be completely risk-free, we take every reasonable step to protect
              your personal data from unauthorized access, loss, or misuse, so you can use our
              services with confidence. At the same time, you are responsible for keeping your
              device, the App, and your login credentials secure.
            </p>
          </LegalSection>

          <LegalSection
            id="your-rights-under-this-policy"
            number="12"
            title="Your Rights Under This Policy">
            <p>
              You have control over your personal data and can exercise rights under the NDPA and
              applicable laws. These include the right to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              {rights.map((right) => (
                <li key={right.title}>
                  <strong>{right.title}:</strong> {right.description}
                </li>
              ))}
            </ul>
            <p>
              Except in scenarios where automated decision making is permissible as provided under
              the NDPA, you have the right not to be subject to a decision based solely on automated
              processing, including profiling, which produces legal or similar significant effects
              concerning you. However, where we use automated systems to make decisions or assess
              information about you, such as evaluating credit applications, detecting potential
              fraud, or tailoring services and recommendations based on your usage patterns, or for
              profiling to understand your preferences, improve our services, or manage risk, we do
              not make important decisions about you solely by automated means without human
              oversight, unless required by law.
            </p>
            <p>
              To exercise any of the rights listed here, you can contact our Data Protection Officer
              using the details provided in Section 2.2. We will respond promptly and in line with
              applicable laws.
            </p>
          </LegalSection>

          <LegalSection
            id="childrens-data"
            number="13"
            title="Children's Data">
            <p>
              Our products and services are primarily designed for adults. However, in certain
              circumstances, we may collect and process the Personal Data of minors (individuals
              under the age of 18) where a parent or legal guardian is operating a financial account
              or purchasing a financial product for the benefit of the minor (e.g., a minor&apos;s
              stockbroking account, trust account, fund management account).
            </p>
            <p>In such cases:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                The parent or legal guardian acts as the data controller for the minor&apos;s
                information and provides the necessary consent on behalf of the minor.
              </li>
              <li>
                We will only collect the minor&apos;s information that is strictly necessary to
                establish and maintain the account or product, such as the minor&apos;s name, date
                of birth, and other details required to verify the minor&apos;s identity in
                compliance with Know Your Customer (KYC) regulations.
              </li>
              <li>
                The minor&apos;s data will be used solely for administering the specific account or
                product and for complying with applicable legal and regulatory requirements (e.g.,
                anti-money laundering checks, tax reporting). It will not be used for unrelated
                marketing purposes without separate, explicit consent from the parent or guardian.
              </li>
            </ul>
            <p>
              By providing a minor&apos;s information to us, you confirm that you are the parent or
              legal guardian of that minor and have the legal authority to consent to the collection
              and processing of the minor&apos;s Personal Data for the specified purpose.
            </p>
            <p>
              If you are a parent or guardian and you have questions about how your child&apos;s
              information is being processed, please contact our Data Protection Officer using the
              details in Section 2.2.
            </p>
          </LegalSection>

          <LegalSection
            id="remedies"
            number="14"
            title="Remedies">
            <p>
              Where you have concerns relating to how we process your personal information, or
              require any clarification on this policy, please notify us through our Data Protection
              Officer. We will respond to your concerns within 30 days of receiving your notice.
            </p>
            <p>
              You also have a right to lodge a complaint directly with the supervisory authority,
              Nigeria Data Protection Commission (NDPC) where you suspect any misconduct or
              violations of the rights listed in this policy. Email:{" "}
              <a
                href="mailto:info@ndpc.gov.ng"
                className="text-emerald-900 font-medium underline underline-offset-2 hover:text-emerald-700">
                info@ndpc.gov.ng
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection
            id="updates-to-this-policy"
            number="15"
            title="Updates to this Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              services, technology, or legal obligations. When we make significant changes, we will
              notify you through our digital platforms so you are aware of updates that may affect
              how your personal data is handled. By continuing to use our digital platforms after
              updates are published, you acknowledge that you have read the revised Privacy Policy
              and accept its terms. We encourage you to review this Privacy Policy periodically to
              stay informed about how we protect and use your information.
            </p>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
