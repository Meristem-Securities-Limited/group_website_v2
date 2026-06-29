import { useState, useEffect } from "react";

const corporateTrust = [
  {
    id: "debenture",
    label: "Debenture/Loan Syndication",
    body: "As a result of increased demand for commercial financing for diverse projects as well as the regulatory constraints inherent (single obligor limit), it has become common to find borrowers securing credit facilities through two or more financial institutions/investors. When this occurs, it becomes necessary that a neutral and independent party (the Trustee) be appointed to hold the asset/security backing the loan to ensure that the interests of both the Borrower and Lender is adequately protected. At Meristem Trustees, we provide bespoke services such that the interest of the lender and borrower are protected while ensuring that the terms and obligations of the security transaction documents are adhered to.",
    cta: "Get Started",
    image: null,
  },
  {
    id: "corporate",
    label: "Corporate Bond",
    body: `A bond is a debt security, in which the authorized issuer owes the bond holders a debt and, depending on the terms of the bond, is obliged to pay interest (the coupon) and/or to repay the principal periodically or at a later date, termed maturity. Essentially, a bond is a formal contract to repay borrowed money with interest at fixed intervals. A company needs funds to expand into new markets, however, a recurrent problem often faced by large organisations is that they typically need far more money than the average banks can provide. The solution is to raise money by issuing bonds (or other debt instruments) to the capital markets. Our specific roles in a corporate bond issue will be to: Ensure that necessary regulatory approval is obtained. Ascertain existence of sound financial reporting and management by the Issuer. Monitor the creation of a Sinking Fund Account, which must be met whether profit is made or not. Evaluate the viability of the project to be financed to payback the invested fund to the Investors (the Bondholders). Monitoring compliance with the Bond covenants. Convening meetings, whenever the need arises. Safeguard and assure the integrity of the security by holding and managing the charged security assets.`,
    cta: "Get Started",
    image: null,
  },
  {
    id: "escrow",
    label: "Escrow/Custodial Service",
    body: `Meristem Trustees Limited can be appointed to act as an Escrow Trustee or Escrow/Agent for its custodial service. In this instance, the Trustee is appointed by the appointor(s) for the purpose of safeguarding conflicting, competing or varied interests in an asset(s). The Assets may range from Title documents for Real Estate Properties, Funds, personal valuable items, Wills etc. The perpetual existence of a corporate institution as Escrow agent or Escrow Trustee duly registered by the Securities and Exchange Commission is an added measure of security for the assets held under custody.`,
    cta: "Get Started",
    image: null,
  },
  {
    id: "charitable",
    label: "Charitable Trust",
    body: `Many individuals and institutions are desirous of giving back to the society in which they operate. Such persons or entities' desires may be undertaken through the establishment of Foundations or not-for-profit organizations with the main objective of benefitting a defined class/category of people in a variety of ways which may include provision of scholarships for different categories of individuals in the society, provision of basic amenities and infrastructural development in rural communities. We partner with potential clients to set up charitable Trusts, ranging from structuring scholarship schemes to setting up and administration of Foundation. Our services span from the gestation period of selecting the structure of the foundation or scholarship initiative, setting the terms of reference for its governance organs, drafting and preparation of relevant documentations, incorporation of the Foundation as well as instituting the Foundation's governance code and best practices (where required). As Trustees, we ensure that dedicated funds are properly managed and invested in safe, secure and reliable instruments to ensure continuous funding of the charitable deeds whilst building a lasting legacy for the founder(s).`,
    cta: "Get Started",
    image: null,
  },
];

const privateTrust = [
  {
    id: "estate-planning",
    label: "Estate Planning",
    body: `Our Estate Planning and Private Trust Services cater to clients and potential clients who have accumulated wealth throughout their lives. 
Recognising the desire for comprehensive wealth management and succession planning, we offer solutions covering asset management during one's lifetime and after passing. 
Our role is to streamline the transfer or distribution process, relieving clients of the associated burdens and stress, particularly through trust structures.
    `,
    cta: "Get Started",
    image: null,
  },
  {
    id: "will",
    label: "Will",
    body: `A Will is a written legal document where a person of legal age, known as a testator, outlines how their assets should be distributed after death. We provide Will drafting services to ensure that an individual's wishes regarding asset distribution are accurately and comprehensively documented.
Our Wills administration services include:   

       1. Drafting of the Will

       2. Acting as Executors (specifically, as a corporate entity, eliminating the issues associated with appointing an individual Executor)

       3. Drafting codicils (amendments to a Will for non-substantial changes)

       4. Will lodging

       5. Will custody`,
    cta: "Get Started",
    image: null,
  },
  {
    id: "living-trust",
    label: "Living Trust",
    body: `This serves as a distinct and viable alternative to having a Will. A living trust is a written legal document through which assets are placed in trust during the lifetime of the Settlor (the person who creates the trust) and transferred to chosen beneficiaries upon their demise. 
Unlike a Will, a living trust becomes effective during the Settlor’s lifetime, ensuring that assets within the trust remain inaccessible to claimants, creditors, or other individuals, except those specifically recognized by the Settlor in the trust instrument. 
Moreover, living trusts are among the most flexible estate planning tools, meticulously outlining terms and arrangements for managing the Settlor’s estate both during their life and after their passing, in strict accordance with their expressed wishes.`,
    cta: "Get Started",
    image: null,
  },
  {
    id: "testamentary",
    label: "Testamentary Trust",
    body: `A Testamentary Trust is established through a Settlor's Will. This legal document designates specific assets or the entire estate to be managed by appointed Trustees for the benefit of named beneficiaries. 
The Will outlines the Trust's provisions, including the Trustees' powers and responsibilities, asset distribution, termination conditions, and other stipulations. 
Unlike a Living Trust, which takes effect during the Settlor's lifetime, a Testamentary Trust comes into existence upon the Settlor's death and is subject to the probate process.`,
    cta: "Get Started",
    image: null,
  },
  {
    id: "custodial",
    label: "Custodial Trust",
    body: `A Custodial Trust is a legal arrangement where property is transferred to a Custodian for the benefit of a designated beneficiary. 
The Custodian holds and manages the assets according to specific terms outlined in the trust agreement. This structure offers flexibility in asset management and distribution, providing control over how the beneficiary accesses and utilizes the funds. 
Unlike a Testamentary Trust, which takes effect upon the Settlor's death, a Custodial Trust is established during the Settlor's lifetime and avoids the probate process.`,
    cta: "Get Started",
    image: null,
  },
  {
    id: "nomination",
    label: "Nomination Fund Services",
    body: `Nomination is a directive made by a person (the Nominator) to a Trustee, that upon his death, his funds in the organization should be paid to a particular individual (the Nominee). 
Nomination can only be made with respect to funds of the nominator and not in respect of other properties. Nomination is similar to Wills because it takes effect only upon the death of the nominator and it is revocable in the lifetime of the nominator. 
Nominated fund is not subject to Probate and Estate taxes. The trustee has a responsibility to invest nominated funds in conservative money market instruments in line with Nominators risk appetite. `,
    cta: "Get Started",
    image: null,
  },
  {
    id: "education-trust",
    label: "Meristem Education Trust",
    body: `Meristem Education Trust is a Trust Fund aimed at ensuring that your child's future and education is secured up to the desired degree regardless of any unforeseen event. 
The Meristem Education Trust allows you to set aside either a lump sum or periodic contributions over time to provide for the education or any other future purpose of the named beneficiary.`,
    cta: "Get Started",
    image: null,
  },
  {
    id: "blind-trust",
    label: "Blind Trust",
    body: `A blind trust is an estate planning tool used by Politically Exposed Persons (PEPs) to hold, administer, and manage their private financial assets, investments, and ownership interests, as well as those of their spouse and dependent children, to avoid conflicts of interest.`,
  },
];

const publicTrust = [
  {
    id: "government-bond",
    label: "Government Bond",
    body: `As bond trustees, we protect the interests of bondholders by ensuring that the terms of the Trust Deed are properly implemented. For government bonds, our duties include holding security and managing the required administrative tasks. As an impartial third party, we are critical in safeguarding bondholders and ensuring the issuer meets all obligations.
The bond issuer or regulator gives a bond trustee fiduciary powers to enforce the terms of the bond agreement, known as the Trust Deed. We oversee bond interest and principal payments and act to protect bondholders' interests in the event of issuer default.
We also act as share trustees, responsible for ensuring the proper management of the SPV or company’s interests. Our involvement, with full fiduciary responsibility for managing the company’s assets, instils confidence in subscribers, bondholders, and other stakeholders. Additionally, we manage related accounts, handle payments, maintain bondholder records, and fulfil any other necessary functions to achieve the objectives of the bond issue.`,
    cta: "Get Started",
    image: null,
  },
  {
    id: "mutual-funds",
    label: "Mutual Funds & Unit Trust Schemes",
    body: `To achieve regulatory compliance and Investors’ protection, we act as Trustees to unit holders in unit trust schemes. Specifically, we monitor the Fund Manager’s activities to ensure compliance with the Trust Deed, Prospectus and relevant regulations. 

Our Role: 

Monitoring the activities of the fund manager and custodian on behalf of and in the interest of unit holders;
Ensuring that the custodian takes into custody all the schemes’ assets and holds it in trust for the investors in accordance with the Trust Deed and Custodial agreement;
Monitoring of the register of unit holders or contributors;
Ascertaining compliance with the provisions of the Trustee Investments Act, the Investment and Securities Act and the Trust Deed by the fund manager;
Ascertaining that monthly and other periodic returns/reports relating to the Scheme or Fund are sent by the fund manager to the Commission;
Taking all steps and executing all documents, which are necessary to secure acquisitions or disposals properly made by the fund manager in accordance with the Trust Deed and Custodial agreement.`,
    cta: "Get Started",
    image: null,
  },
  // {
  //   id: "escrow",
  //   label: "Escrow/Custodial Service",
  //   body: `Meristem Trustees Limited can be appointed to act as an Escrow Trustee or Escrow/Agent for its custodial service. In this instance, the Trustee is appointed by the appointor(s) for the purpose of safeguarding conflicting, competing or varied interests in an asset(s). The Assets may range from Title documents for Real Estate Properties, Funds, personal valuable items, Wills etc. The perpetual existence of a corporate institution as Escrow agent or Escrow Trustee duly registered by the Securities and Exchange Commission is an added measure of security for the assets held under custody.`,
  //   cta: "Get Started",
  //   image: null,
  // },
  // {
  //   id: "charitable",
  //   label: "Charitable Trust",
  //   body: `Many individuals and institutions are desirous of giving back to the society in which they operate. Such persons or entities' desires may be undertaken through the establishment of Foundations or not-for-profit organizations with the main objective of benefitting a defined class/category of people in a variety of ways which may include provision of scholarships for different categories of individuals in the society, provision of basic amenities and infrastructural development in rural communities. We partner with potential clients to set up charitable Trusts, ranging from structuring scholarship schemes to setting up and administration of Foundation. Our services span from the gestation period of selecting the structure of the foundation or scholarship initiative, setting the terms of reference for its governance organs, drafting and preparation of relevant documentations, incorporation of the Foundation as well as instituting the Foundation's governance code and best practices (where required). As Trustees, we ensure that dedicated funds are properly managed and invested in safe, secure and reliable instruments to ensure continuous funding of the charitable deeds whilst building a lasting legacy for the founder(s).`,
  //   cta: "Get Started",
  //   image: null,
  // },
];

const trustDataMap: Record<string, typeof privateTrust> = {
  "private trust": privateTrust,
  "corporate trust": corporateTrust,
  "public trust": publicTrust,
};

type TrustType = "private trust" | "corporate trust" | "public trust";

interface TrustServicesProps {
  type?: TrustType;
  onCtaClick?: (tab: (typeof privateTrust)[0]) => void;
  className?: string;
}

export default function TrustServices({
  type = "private trust",
  onCtaClick,
  className = "",
}: TrustServicesProps) {
  const tabs = trustDataMap[type] ?? privateTrust;

  const [activeId, setActiveId] = useState(tabs[0]?.id);

  useEffect(() => {
    setActiveId(tabs[0]?.id);
  }, [type]);

  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section
      aria-label="Trust services"
      className={`grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-start py-8 ${className}`}>
      <nav
        role="tablist"
        aria-label="Services"
        className="flex flex-col gap-1 bg-gray-50 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={tab.id === activeId}
            onClick={() => setActiveId(tab.id)}
            className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors duration-150 cursor-pointer border-none
              ${
                tab.id === activeId ?
                  "bg-green-100 text-green-800 font-medium"
                : "bg-transparent text-black hover:bg-gray-100 hover:text-gray-800 font-normal"
              }`}>
            {tab.label}
          </button>
        ))}
      </nav>

      <div
        role="tabpanel"
        className="flex flex-col gap-6">
        <p className="text-base leading-8 text-gray-800 m-0 whitespace-pre-line">
          {active.body.trim()}
        </p>
        {/* <div>
          <button
            onClick={() => onCtaClick?.(active)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-base px-7 py-3 rounded-lg transition-colors duration-150 cursor-pointer border-none">
            {active.cta}
          </button>
        </div> */}
      </div>
    </section>
  );
}
