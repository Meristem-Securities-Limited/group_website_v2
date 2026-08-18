import React from "react";
import Link from "next/link";
import LegalSection from "@/components/legal/LegalSection";
import LegalTableOfContents from "@/components/legal/LegalTableOfContents";

const tocItems = [
  { id: "the-platform-and-services", number: "1", title: "The Platform and Services" },
  { id: "eligibility-and-registration", number: "2", title: "Eligibility and Registration" },
  { id: "use-of-the-mobile-app", number: "3", title: "Use of the Mobile App" },
  { id: "website-features", number: "4", title: "Website Features" },
  { id: "user-obligations-and-conduct", number: "5", title: "User Obligations and Conduct" },
  { id: "general-risk-disclosure", number: "6", title: "General Risk Disclosure" },
  { id: "instructions-and-authorizations", number: "7", title: "Instructions and Authorizations" },
  { id: "use-of-third-parties-and-market-infrastructure", number: "8", title: "Use of Third Parties and Market Infrastructure" },
  { id: "fees", number: "9", title: "Fees" },
  { id: "data-protection-and-privacy", number: "10", title: "Data Protection and Privacy" },
  { id: "cybersecurity-and-electronic-communications", number: "11", title: "Cybersecurity and Electronic Communications" },
  { id: "intellectual-property-rights", number: "12", title: "Intellectual Property Rights" },
  { id: "limitation-of-liability-and-indemnification", number: "13", title: "Limitation of Liability and Indemnification" },
  { id: "suspension-and-termination", number: "14", title: "Suspension and Termination" },
  { id: "amendment", number: "15", title: "Amendment" },
  { id: "governing-law-and-dispute-resolution", number: "16", title: "Governing Law and Dispute Resolution" },
];

export default function TermsAndConditionsContent() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="flex gap-12 lg:max-w-6xl mx-auto">
        <LegalTableOfContents items={tocItems} />

        <div className="min-w-0 flex-1 lg:max-w-3xl">
          <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-12">
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) apply to Meristem Securities
              Limited and its licensed subsidiaries (together,{" "}
              <strong className="text-emerald-900 font-semibold">&ldquo;the Meristem Group&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;</strong>
              ) and govern your access to and use of our Website and Mobile Application (together,
              &ldquo;Platforms&rdquo;). By accessing or using our Platforms, you agree to be bound
              by these Terms. If you do not agree, please do not use the Platforms. The current
              version of these conditions will govern our respective rights and obligations each
              time you access our Platform.
            </p>
          </div>

          <LegalSection
            id="the-platform-and-services"
            number="1"
            title="The Platform and Services">
            <p>
              We operate an integrated digital financial services platform that consolidates
              access to a broad suite of financial products and services offered by its licensed
              subsidiaries and affiliates. The Platform is designed to provide Users with
              seamless, secure, and efficient access to financial services from a single point of
              entry.
            </p>
            <p>
              While our subsidiaries provide regulated services including stockbroking, wealth
              management, registrars and probate services, investment banking and capital markets
              advisory, finance and lending, trusteeship, and family office services, our Platform
              currently provides access to the following categories of Services:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Stockbroking services</li>
              <li>Wealth management services</li>
              <li>Trustee and fiduciary services</li>
              <li>Finance services</li>
              <li>Registrar and share administration services.</li>
            </ul>
            <p>
              The Meristem Group and each of its subsidiaries operate under the appropriate
              licenses and registrations issued by the relevant regulatory authorities. We are
              committed to conducting our business in full compliance with applicable laws and
              regulatory standards. For your transparency and peace of mind, details of the
              specific licenses held by each subsidiary are available on our Website. We encourage
              you to review this information so you can make informed decisions before engaging
              any of our services.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              No Personalized Advise Disclaimer
            </h3>
            <p>
              The information, content, and materials available on our Platform are provided to
              support your understanding of our products and services. Unless we have entered
              into a separate written advisory agreement with you, such information is for
              general informational purposes only and should not be relied upon as financial,
              investment, legal, or tax advice. Because every client&apos;s circumstances are
              unique, the content on the Platform may not take into account your specific
              financial situation, objectives, or risk profile. We encourage you to seek
              personalized advice from our qualified professionals, or your independent advisers,
              before making financial decisions.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Platform Availability</h3>
            <p>
              We strive to ensure that our Platform is available whenever you need it and use
              commercially reasonable efforts to maintain reliable and secure access. However, we
              cannot guarantee that access will always be uninterrupted or error-free. From time
              to time, we may suspend, restrict, or withdraw access to the Platform to carry out
              maintenance, implement upgrades, comply with regulatory requirements, enhance
              security, or address other operational needs. Where circumstances require urgent
              action, this may occur without prior notice.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              Service Specific Agreements
            </h3>
            <p>
              Access to certain Services through the Platform may require you to complete
              additional documentation, such as account opening forms, mandates, or
              service-specific agreements. These documents help ensure that the Service is
              properly structured for your needs and complies with applicable regulatory
              requirements. If there is any inconsistency between these general Terms and a
              service-specific agreement you have entered into with us, the service-specific
              agreement will take precedence to the extent of the inconsistency.
            </p>
          </LegalSection>

          <LegalSection
            id="eligibility-and-registration"
            number="2"
            title="Eligibility and Registration">
            <h3 className="text-lg font-semibold text-emerald-900 pt-2">Eligibility Criteria</h3>
            <p>
              To protect you and maintain compliance with applicable laws and regulatory
              standards, access to our Platform and Services is available to users who meet the
              following criteria:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>You are at least eighteen (18) years old.</li>
              <li>
                If registering on behalf of a corporate entity, the entity is duly incorporated,
                validly existing, and in good standing under applicable laws.
              </li>
              <li>
                You are not subject to any legal restriction or disability that would prevent you
                from entering into binding legal obligations.
              </li>
              <li>
                You are not subject to financial sanctions, regulatory restrictions, or
                enforcement actions imposed by Nigerian or applicable international authorities.
              </li>
              <li>
                You have the legal capacity under Nigerian law to enter into contracts and to own
                and hold financial assets.
              </li>
              <li>
                Where relevant, you meet any additional eligibility requirements specific to a
                particular Service, as we may communicate to you.
              </li>
            </ul>
            <p>
              We may request documentation or verification to confirm eligibility as part of our
              regulatory and compliance obligations.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Account registration</h3>
            <p>
              To access certain Services on the Platform, you will need to create an Account. When
              you register, you confirm and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>The information you provide is true, accurate, current, and complete at the time of submission.</li>
              <li>
                You will promptly update your details whenever there are changes, so your
                information remains accurate and complete.
              </li>
              <li>You are registering in your legal name and are not impersonating any individual or entity.</li>
              <li>You have not previously been suspended or restricted from using the Platform; and</li>
              <li>
                If you are registering on behalf of a company or other entity, you are duly
                authorized to bind that entity to these Terms.
              </li>
            </ul>
            <p>
              We may verify the information provided as part of our regulatory and compliance
              obligations and reserve the right to suspend or decline registration where
              information is incomplete, inaccurate, or cannot be verified.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              Know-Your-Customer (KYC) and Identity Verification
            </h3>
            <p>
              To protect you, comply with regulatory obligations, and safeguard the integrity of
              our services, we are required to verify the identity of all Users before activating
              accounts or providing certain Services. This verification is conducted in accordance
              with applicable laws and regulatory requirements, including anti-money laundering
              and financial sector regulations.
            </p>
            <p>As part of this process, you will be asked to provide the following:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                A valid government-issued photo identification (such as a National Identity Card,
                International Passport, or Driver&apos;s Licence).
              </li>
              <li>Your Bank Verification Number (BVN) or National Identification Number (NIN).</li>
              <li>
                Proof of residential address (for example, a utility bill or bank statement dated
                within the last three months).
              </li>
              <li>
                For corporate entities: incorporation documents, constitutional documents, board
                resolutions, and identification for directors, beneficial owners, and authorised
                signatories.
              </li>
              <li>A Tax Identification Number (TIN) issued by the Nigeria Revenue Service (NRS); and</li>
              <li>Any additional documentation required by applicable regulatory authorities or our internal compliance policies.</li>
            </ul>
            <p>
              We may delay activation, restrict access, or decline to provide Services where
              required documentation is not provided or cannot be satisfactorily verified. All
              information collected for verification purposes is handled in accordance with our{" "}
              <Link
                href="/privacy-policy"
                className="text-emerald-900 font-medium underline underline-offset-2 hover:text-emerald-700">
                Privacy Policy
              </Link>{" "}
              and applicable data protection laws.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Account Security</h3>
            <p>
              You are responsible for keeping your Account secure, including your login
              credentials, passwords, PINs, tokens, and any other security information. To protect
              your Account, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Notify us immediately if you suspect or discover any unauthorized access or use of your Account</li>
              <li>Keep your login credentials private and not share them with anyone</li>
              <li>Use strong, unique passwords and update them regularly; and</li>
              <li>Log out after each session, especially when using shared or public devices.</li>
            </ul>
            <p>
              We are not responsible for any loss, damage, or liability resulting from your
              failure to follow these security responsibilities, or from unauthorized use of your
              Account caused by negligence or deliberate misconduct.
            </p>
          </LegalSection>

          <LegalSection
            id="use-of-the-mobile-app"
            number="3"
            title="Use of the Mobile App">
            <p>To use our Mobile App effectively and securely, you agree to the following:</p>
            <p>
              <strong>Device Compatibility:</strong> You are responsible for ensuring that your
              device meets the technical requirements necessary to access and use the App.
              Certain features may not function properly on unsupported or outdated devices.
            </p>
            <p>
              <strong>App Permissions:</strong> The App may request access to specific device
              features, such as your camera, storage, notifications, or location. These
              permissions enable key App functions, including document uploads, push
              notifications, and fraud prevention. Disabling certain permissions may limit or
              prevent the use of some features.
            </p>
            <p>
              <strong>Security of Your Device:</strong> You are responsible for maintaining the
              security of your device. This includes using passcodes, biometric protection, or
              other security measures, and safeguarding your login credentials. We are not liable
              for losses resulting from unauthorized access due to insufficient device security.
            </p>
            <p>
              <strong>App Updates:</strong> You may be required to install updates to continue
              using the App. Updates may include important security enhancements, bug fixes, or
              new features. Regularly updating the App ensures optimal functionality and
              protection of your information.
            </p>
            <p>
              By using the App, you acknowledge and accept these responsibilities, which help us
              provide a secure, reliable, and user-friendly experience.
            </p>
          </LegalSection>

          <LegalSection
            id="website-features"
            number="4"
            title="Website Features">
            <h3 className="text-lg font-semibold text-emerald-900 pt-2">
              Cookies and Tracking Technologies
            </h3>
            <p>
              Our Website uses cookies and similar technologies to provide a smooth, secure, and
              personalized browsing experience. These technologies help manage login sessions,
              remember your preferences, analyse usage patterns, and support security and
              marketing functions. For more details on how we use cookies and your options,
              please refer to our{" "}
              <Link
                href="/cookie-policy"
                className="text-emerald-900 font-medium underline underline-offset-2 hover:text-emerald-700">
                Cookies Policy
              </Link>
              .
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Third-Party Links</h3>
            <p>
              The Website may include links to third-party websites or services for your
              convenience. These links do not constitute an endorsement, and we are not
              responsible for the content, accuracy, security, or privacy practices of any
              third-party site. You should review the terms and privacy policies of any external
              site you visit. By using our Website, you acknowledge and accept the use of cookies
              as described and that third-party websites are outside our control.
            </p>
          </LegalSection>

          <LegalSection
            id="user-obligations-and-conduct"
            number="5"
            title="User Obligations and Conduct">
            <h3 className="text-lg font-semibold text-emerald-900 pt-2">General obligations</h3>
            <p>
              By using the Platform, you agree to use it responsibly and in compliance with
              applicable laws and regulations. Specifically, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Use the Platform only for lawful purposes and in line with these Terms</li>
              <li>Comply with all applicable Nigerian laws, regulations, and directives from Regulatory Authorities</li>
              <li>Provide accurate, complete, and up-to-date information at all times</li>
              <li>Avoid any activity that could compromise the security, integrity, or availability of the Platform</li>
              <li>Not use the Platform to carry out, facilitate, or promote fraudulent, illegal, or unethical activities</li>
              <li>
                Refrain from bypassing, disabling, or interfering with any security or
                authentication features of the Platform; and
              </li>
              <li>Cooperate fully with any investigations, audits, or inquiries conducted by us or applicable regulatory authorities.</li>
            </ul>
            <p>These commitments help us maintain a safe, reliable, and compliant service for all users.</p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Prohibited Activities</h3>
            <p>
              In addition to the general obligations above, you must not engage in the following
              activities while using the Platform:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Using the Platform to launder money, finance terrorism, or carry out any activity prohibited under anti-money laundering or counter-terrorism financing laws</li>
              <li>Introducing malware, viruses, ransomware, Trojans, worms, or any other malicious code into the Platform</li>
              <li>Attempting to gain unauthorized access to the Platform, its systems, servers, or databases</li>
              <li>Scraping, harvesting, or extracting data from the Platform without our permission</li>
              <li>Reverse engineering, decompiling, or disassembling any software associated with the Platform</li>
              <li>Using automated tools, bots, or scripts to access or use the Platform in an unauthorized manner</li>
              <li>Misrepresenting your identity, affiliation, or authority when using the Platform</li>
              <li>Engaging in market manipulation, insider trading, front-running, or any form of market abuse; and</li>
              <li>Posting or transmitting content that is defamatory, obscene, unlawful, or infringes the rights of any third party.</li>
              <li>Use the Platforms in a way that could damage our reputation or operations or inconsistent with applicable law.</li>
            </ul>
            <p>
              These rules are in place to protect the security, integrity, and lawful use of the
              Platform for all users. We reserve the right to suspend or terminate access where
              misuse is detected.
            </p>
          </LegalSection>

          <LegalSection
            id="general-risk-disclosure"
            number="6"
            title="General Risk Disclosure">
            <p>
              Investing and transacting in financial instruments and products carries significant
              risk, including the potential loss of your entire invested principal. The value of
              investments may rise or fall, and returns are not guaranteed. Foreign currency
              investments are subject to exchange rate fluctuations.
            </p>
            <p>Past performance should not be relied upon as an indicator of future results.</p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">No Guarantee of Outcome</h3>
            <p>
              We do not guarantee the performance, success, or profitability of any Service,
              financial product, transaction, investment, or arrangement offered through the
              Platform. Any projections, forecasts, or illustrations of potential returns are
              hypothetical, based on assumptions that may not occur, and are provided for
              informational purposes only. We are not responsible for any loss resulting from
              reliance on such projections.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">User&apos;s Own Assessment</h3>
            <p>
              Before using any Service, you confirm that you have independently assessed the
              nature of the Service, the associated risks, applicable fees and costs, and whether
              the Service is suitable for your individual circumstances. You acknowledge that you
              are not relying on any information or communication from us as investment, legal,
              tax, or other professional advice, unless expressly provided under a written
              advisory agreement you have signed with us.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Suitability and Risk Assessment</h3>
            <p>
              You are responsible for ensuring that any transaction, investment, or financial
              service you initiate is suitable for your financial circumstances, investment
              objectives, and risk tolerance. Where applicable, we may require you to complete
              suitability assessments or risk profiling questionnaires to help determine the
              appropriateness of specific Services.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Independent Advice</h3>
            <p>
              If you are unsure about the risks involved or whether a Service is suitable for you,
              we strongly recommend seeking independent professional advice before proceeding.
            </p>
            <p>By using the Platform, you acknowledge and accept these risks and your responsibility to make informed decisions.</p>
          </LegalSection>

          <LegalSection
            id="instructions-and-authorizations"
            number="7"
            title="Instructions and Authorizations">
            <p>
              We are entitled to act on any instruction, notice, or communication received from
              you, or from someone we reasonably believe is your authorised representative,
              through the Platform or any other method permitted under the relevant Service
              Agreement. Such instructions will only be acted upon once they have been
              authenticated according to the security and verification procedures established for
              the Service.
            </p>
            <p>
              We are not required to verify the accuracy, completeness, or commercial wisdom of
              any instruction. We will not be liable for acting in good faith on an instruction
              that later turns out to be erroneous, unauthorised, or the result of fraud or
              misrepresentation by a third party, provided that the instruction was properly
              authenticated. You must notify us immediately if you discover any error or
              unauthorised instruction related to your Account.
            </p>
            <p>
              Once an instruction has been executed, it cannot be unilaterally revoked or reversed
              by you without our consent. We may impose conditions on any reversal or amendment.
              We also reserve the right to decline, suspend, or reverse any instruction that we
              reasonably believe is erroneous, unauthorised, unlawful, or in breach of these Terms
              or a Service Agreement. Any action we take will be intended to protect your
              interests, the interests of third parties, and the integrity of the relevant market.
            </p>
          </LegalSection>

          <LegalSection
            id="use-of-third-parties-and-market-infrastructure"
            number="8"
            title="Use of Third Parties and Market Infrastructure">
            <p>
              In delivering our Services, we may engage or rely on trusted third-party service
              providers, including exchanges, clearing houses, settlement systems, custodians,
              depositories, credit bureaus, payment processors, technology vendors, and
              professional advisers. We exercise reasonable care in selecting and overseeing these
              partners to ensure they meet our standards. However, we cannot be held responsible
              for acts, omissions, insolvency, or failures of third parties that are beyond our
              reasonable control, except where liability cannot lawfully be excluded. Where
              required by law or your Service Agreement, we will inform you of key third-party
              providers involved in delivering your Service. You acknowledge that the proper
              functioning of certain Services may depend on third-party systems and market
              infrastructure, and you accept the risks associated with any delays, disruptions, or
              malfunctions in those systems.
            </p>
          </LegalSection>

          <LegalSection
            id="fees"
            number="9"
            title="Fees">
            <p>
              Use of certain Services on the Platform may be subject to fees, charges, or
              commissions. Applicable fees will be disclosed to you in the Service Agreement, on
              the Platform, or at the point of transaction. You agree to pay all applicable fees
              when due. We may update our fees and charges from time to time to reflect changes in
              market conditions, regulatory requirements, or operational costs. Where changes are
              material, we will notify you through the Platform, email, or other appropriate means
              before the updated fees take effect. Fees may be deducted directly from your
              Account, charged to your selected payment method, or invoiced as specified in your
              Service Agreement. You are responsible for ensuring that sufficient funds are
              available to cover fees when due. You are responsible for any applicable taxes,
              levies, or duties arising from your use of the Services, unless explicitly stated
              otherwise. Failure to pay any applicable fees may result in suspension, restriction,
              or termination of your access to the relevant Services, without prejudice to our
              other rights or remedies.
            </p>
          </LegalSection>

          <LegalSection
            id="data-protection-and-privacy"
            number="10"
            title="Data Protection and Privacy">
            <p>
              We are committed to protecting the privacy, confidentiality, and security of your
              Personal Data. We process Personal Data in compliance with the Nigeria Data
              Protection Act 2023 (NDPA), the General Application and Implementation Directive
              (GAID) 2025, and all applicable guidelines, directives, and frameworks issued by the
              Nigeria Data Protection Commission (NDPC), as may be amended, replaced, or updated
              from time to time.
            </p>
            <p>
              In the course of providing our Services, we may collect, use, store, transfer, or
              otherwise process your Personal Data for purposes including account administration,
              service delivery, regulatory compliance, fraud prevention, risk management, security
              monitoring, and other legitimate business purposes. Such processing will be carried
              out in accordance with applicable legal bases under Nigerian data protection law.
            </p>
            <p>
              We implement appropriate technical, organisational, and administrative safeguards to
              protect your Personal Data against unauthorised access, disclosure, alteration,
              loss, or misuse. Access to your data is restricted to authorised personnel and
              service providers who require it for legitimate business or regulatory purposes and
              who are bound by confidentiality obligations.
            </p>
            <p>
              Your rights in relation to your Personal Data, including your rights of access,
              correction, erasure, restriction, objection, and data portability where applicable,
              are set out in our{" "}
              <Link
                href="/privacy-policy"
                className="text-emerald-900 font-medium underline underline-offset-2 hover:text-emerald-700">
                Privacy Policy
              </Link>
              . By using the Platform, you acknowledge that your Personal Data will be processed
              in accordance with our Privacy Policy and applicable data protection laws.
            </p>
            <p>
              If you have any concerns regarding how your Personal Data is handled, you may
              contact us using the details provided in our{" "}
              <Link
                href="/privacy-policy"
                className="text-emerald-900 font-medium underline underline-offset-2 hover:text-emerald-700">
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection
            id="cybersecurity-and-electronic-communications"
            number="11"
            title="Cybersecurity and Electronic Communications">
            <p>
              <strong>Cybersecurity Measures:</strong> We implement appropriate technical,
              organisational, and administrative safeguards designed to protect the Platform, your
              Account, and electronic communications from unauthorized access, misuse, alteration,
              or disruption. These measures include security monitoring, encryption protocols
              where appropriate, authentication controls, and fraud detection systems.
            </p>
            <p>
              While we take reasonable steps to protect our systems, no internet-based service or
              electronic transmission is completely secure. By using the Platform, you acknowledge
              the inherent risks associated with online communications and electronic
              transactions.
            </p>
            <p>
              You are responsible for maintaining the security of your devices, networks, and
              login credentials used to access the Platform. You must:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Keep their devices updated with current operating system and security patches</li>
              <li>Use reputable, current antivirus and anti-malware software</li>
              <li>Avoid accessing the Platform over unsecured or public Wi-Fi networks</li>
              <li>Report any suspected phishing, social engineering, or cyber-attacks targeting their Accounts immediately; and</li>
              <li>Not click on suspicious links or download unverified attachments purporting to be from the Company.</li>
            </ul>

            <div className="rounded-lg border border-gray-100 bg-gray-50/60 p-5">
              <p className="mb-0">
                <strong>PLEASE NOTE:</strong> We will NEVER request your password, full card
                details, or one-time passwords (OTP) via email, SMS, or phone calls. If you
                receive any such request, treat it as fraudulent and report it immediately to{" "}
                <span className="text-gray-400">[insert mail]</span>
              </p>
            </div>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Platform Disclaimer</h3>
            <p>
              While we implement reasonable and appropriate cybersecurity safeguards, the Platform
              is provided on an &ldquo;as available&rdquo; and &ldquo;as is&rdquo; basis to the
              extent permitted by applicable law.
            </p>
            <p>
              We do not warrant that the Platform will be uninterrupted, timely, secure, or
              error-free at all times, defects will be corrected immediately, the Platform will be
              free from viruses or other harmful components, or information transmitted through
              the internet will be completely secure from interception.
            </p>
            <p>
              You acknowledge that the use of the internet and electronic communications involves
              inherent risks beyond our reasonable control. We shall not be liable for losses
              arising from events outside our reasonable control, including cyber-attacks, network
              failures, internet service disruptions, or other technological failures, provided
              that we have implemented reasonable security measures consistent with applicable
              law.
            </p>
            <p>Nothing in this section limits any liability that cannot lawfully be excluded under applicable law.</p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Electronic Communications</h3>
            <p>
              By registering for and using the Platform, you consent to receiving communications
              from us electronically. This includes account notifications, transaction
              confirmations, statements, disclosures, service updates, security alerts, regulatory
              notices, and other information relevant to your use of the Platform. Electronic
              communications may be delivered through the Platform (including secure in-app
              messaging), Email, SMS or other messaging services, push notifications, or any other
              electronic means permitted under applicable law.
            </p>
            <p>You agree that electronic communications satisfy any legal requirement that such communications be in writing.</p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">
              Communication Security and User Responsibility
            </h3>
            <p>
              You are responsible for ensuring that your contact details are accurate and up to
              date, and for maintaining the security of your email accounts, devices, and
              communication channels. We are not liable for losses arising from your failure to
              secure your communication channels or update your contact information.
            </p>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Monitoring and Record Keeping</h3>
            <p>
              To protect you and comply with regulatory obligations, we may monitor, record, and
              retain electronic communications and transactions conducted through the Platform in
              accordance with applicable law and our internal policies.
            </p>
          </LegalSection>

          <LegalSection
            id="intellectual-property-rights"
            number="12"
            title="Intellectual Property Rights">
            <p>
              All content, materials, software, design elements, text, graphics, logos,
              trademarks, service marks, and other intellectual property displayed on or made
              available through the Platform are owned by or licensed to us and are protected by
              applicable intellectual property laws. Your use of the Platform does not grant you
              any ownership rights in any intellectual property. You are granted a limited,
              non-exclusive, non-transferable, and revocable right to access and use the Platform
              solely for lawful, personal, or internal business purposes in accordance with these
              Terms. You must not copy, reproduce, distribute, modify, reverse engineer, create
              derivative works from, publicly display, commercially exploit, or otherwise use any
              content from the Platform without our prior written consent. All rights not
              expressly granted in these Terms are reserved by us.
            </p>
          </LegalSection>

          <LegalSection
            id="limitation-of-liability-and-indemnification"
            number="13"
            title="Limitation of Liability and Indemnification">
            <h3 className="text-lg font-semibold text-emerald-900 pt-2">Limitation of Liability</h3>
            <p>
              We are committed to providing secure and reliable Services. However, to the fullest
              extent permitted by applicable law, neither we nor our subsidiaries, affiliates,
              directors, officers, employees, agents, licensors, or service providers will be
              liable for:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Any indirect, incidental, special, consequential, or punitive losses, including
                loss of profits, data, goodwill, or business opportunities,
              </li>
              <li>Any loss arising from your reliance on information or content available on the Platform</li>
              <li>Any interruption, delay, suspension, or termination of the Platform or any Service</li>
              <li>
                Any unauthorized access to or alteration of your Account or data resulting from
                circumstances beyond our reasonable control
              </li>
              <li>
                The actions, omissions, or insolvency of third-party service providers, exchanges,
                custodians, or other external partners; or
              </li>
              <li>
                Events beyond our reasonable control, including force majeure events such as
                natural disasters, regulatory actions, strikes, civil unrest, system-wide
                telecommunications failures, or cyber incidents affecting external infrastructure.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-emerald-900 pt-4">Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold us, our subsidiaries, affiliates,
              directors, officers, employees, and agents harmless from and against any claims,
              losses, liabilities, damages, costs, or expenses (including reasonable legal fees)
              arising out of or in connection with:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Your breach of these Terms or any applicable Service Agreement</li>
              <li>Your misuse of the Platform or any Service</li>
              <li>Your violation of any applicable law or regulation; or</li>
              <li>Your infringement of the rights of any third party.</li>
            </ul>
          </LegalSection>

          <LegalSection
            id="suspension-and-termination"
            number="14"
            title="Suspension and Termination">
            <p>
              We may suspend, restrict, or terminate your access to the Platform or any Service,
              with or without notice, where we reasonably believe that:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>You have breached these Terms or any applicable Service Agreement</li>
              <li>Your Account is being used in an unauthorized, fraudulent, or unlawful manner</li>
              <li>Suspension is required to comply with applicable law or regulatory directives; or</li>
              <li>It is necessary to protect you, other users, or the integrity and security of the Platform.</li>
              <li>You may discontinue use of the Platform at any time.</li>
            </ul>
            <p>
              Suspension or termination does not affect any rights, obligations, or liabilities
              accrued prior to the effective date of termination.
            </p>
          </LegalSection>

          <LegalSection
            id="amendment"
            number="15"
            title="Amendment">
            <p>
              We may amend or update these Terms from time to time to reflect changes in our
              Services, regulatory requirements, operational practices, or applicable law. Where
              changes are material, we will provide notice through the Platform, by email, or by
              other appropriate electronic means. The updated Terms will take effect on the date
              specified in the notice.
            </p>
            <p>
              Your continued access to or use of the Platform after the effective date of any
              amendment constitutes your acknowledgment of the revised Terms and your agreement to
              be bound by them. If you do not agree to the updated Terms, you should discontinue
              use of the Platform and any affected Services.
            </p>
          </LegalSection>

          <LegalSection
            id="governing-law-and-dispute-resolution"
            number="16"
            title="Governing Law and Dispute Resolution">
            <p>
              These Terms and all matters arising from or in connection with them, including
              non-contractual disputes or claims, shall be governed by and construed in accordance
              with the laws of the Federal Republic of Nigeria.
            </p>
            <p>
              If you have any concern or dispute arising from your use of the Platform or any
              Service, you agree to first notify us and allow us a reasonable opportunity to
              resolve the matter amicably and in good faith.
            </p>
            <p>
              Where a dispute cannot be resolved through mutual discussions, it shall be referred
              to Arbitration in accordance with applicable Nigerian law, unless otherwise required
              by a specific Service Agreement. Nothing in this clause prevents either party from
              seeking interim or injunctive relief from a court of competent jurisdiction where
              necessary.
            </p>
          </LegalSection>
        </div>
      </div>
    </div>
  );
}
