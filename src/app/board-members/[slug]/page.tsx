import ProfilePage from "@/components/ProfilePage";
import { notFound } from "next/navigation";
import React from "react";

import {
  Adejumoke,
  Ahmed,
  GMD,
  GroupMeetings,
  Ify,
  Mubo2,
  Ohis,
  Oyebamiji,
  Reginald,
} from "@/app/assets";
interface Props {
  params: Promise<{ slug: string }>;
}

export const executiveMembers = [
  {
    slug: "reginald-stanley",
    image: Reginald,
    name: "Dr. Reginald Chika Stanley",
    role: "Chairman",
    description: `<p>
    Dr. Reginald Chika Stanley is vast in all sectors of the Oil and Gas Industry, with a proven track record in management in Nigeria and abroad. 
    A recipient of many awards for excellence both within and outside Nigeria, he is an exceptional leader and motivator, highly innovative, and has turned around several organizations.
    He is an alumnus of several institutions, including the Oxford College of Petroleum Studies and Harvard Business School (Executive Education).
    Since 2014, Dr. Reginald Stanley has been the Group Managing Director of Petrowest Energy Resources Limited and Petrowest Energy Consult Limited.
    Prior to 2014, he held several top management positions and appointments, including:
  </p><br>
  <ul class="list-disc list-inside">
    <li>Executive Secretary, Petroleum Products Pricing Regulatory Agency (PPPRA), 2011–2014</li>
    <li>Group General Manager, New Business Division, NNPC Corporate Headquarters, 2010–2011</li>
    <li>Managing Director, Pipelines and Products Marketing Company (PPMC) Limited, 2007–2010</li>
    <li>Managing Director, Hyson Limited / President, Calson Bermuda, 2006–2007</li>
    <li>Executive Director (Commercial), Pipelines and Products Marketing Company (PPMC) Limited, 2004–2007</li>
    <li>Executive Director, Duke Oil Services (UK) Limited, London, 1998–1999</li>
    <li>Chief Economist, International Trade Department, NNPC Liaison Office, 1994</li>
    <li>Member, Governing Board of Petroleum Products Pricing Regulatory Agency (PPPRA), 2004–2006 and 2007–2010</li>
    <li>Member, UNCTAD’s Sub-Committee on Trade Coordination between Africa and Latin American Countries, 1990–1991</li>
    <li>Member, Presidential Committee on Petroleum Storage and Sales in the Niger Delta</li>
  </ul><br>
  <p>
    Dr. Reginald Stanley has received numerous awards for excellence, including:
  </p><br>
  <ul class="list-disc list-inside">
    <li>Distinguished Public Servant Award – Nigerian Association for Energy Economics, 2013</li>
    <li>Downstream Energy Person of the Year Award – Oil Trading and Logistics International Conference, 2012</li>
    <li>Best NLNG Manager for Excellence, 2003</li>
    <li>NNPC Group Managing Director’s Award for Excellence (2nd Award), 2002</li>
    <li>Citation for Excellence by the Chairman, Presidential Technical Committee on Privatization and Commercialization (TCPC) Sub-Committee on the Commercialization of NNPC, 1988</li>
  </ul><br>
  <p>
    Over the course of his career, he has attended numerous world-class training programs and seminars, including:
  </p><br>
  <ul class="list-disc list-inside">
    <li>Leading Change and Organizational Renewal – Harvard Business School, Boston, USA (2014)</li>
    <li>Leadership Program – London Management Centre, London, UK (2013)</li>
    <li>Organizational Change and Strategy Formulation – Dubai (2012)</li>
  </ul><br>
  <p>
    He is a Fellow of the Nigerian Institute of Management.
  </p><br>`,
  },
  {
    slug: "ade-ojotaiwo",
    image: GroupMeetings,
    name: "Ade-Ojo Taiwo",
    role: "Vice Chairman",
    description: `<p>
    Since June 2021, Mr. Ade-Ojo has been the Managing Director of Elizade Nigeria Limited, where he develops and executes the organization’s business strategies to attain set goals and objectives while providing strategic advice to the Board of Directors.</p>
    <br>
    <p>He also oversees the organization’s financial performance and investments. A result-oriented team player, committed to excellence, focused goal-getter with vast experience in procurement.</p>
    <br>
    <p>Prior to 2021, he was the Executive Director (Operations) of Elizade from March 2019 – May 2021. As the Executive Director, Operations, he was responsible for business strategy planning and execution and also drove the daily operations of the organization strategically from both operational and financial perspectives.</p>
    <br>
    <p>Between 2007 and 2019, he was Head of Procurement for Elizade Nigeria Limited, during which he managed procurement budgets and market surveys to enable Management make informed decisions.</p>
    <br>
    <p>Prior to joining Elizade in 2007, he worked in the Local Government and Chieftaincy Affairs Office of the Deputy Governor as an Account Officer.</p>
  </p><br>`,
  },

  {
    slug: "sulaimon-adedokun",
    image: GMD,
    name: "Sulaiman Adedokun, CFA",
    role: "Group Managing Director",
    description: `<p>
          Sulaiman Adedokun, CFA, is a highly accomplished financial expert with over 20 years of experience in investment banking, asset management, and capital markets. He is the Group Managing Director (GMD) of Meristem Securities Limited, a leading investment firm in Nigeria, a position he assumed in January 2025. 
          Prior to this, he served as Deputy Group Managing Director for over a decade and has been the Managing Director of Meristem Wealth Management Limited since August 2008.

          <br><br>Sulaiman holds a Bachelor of Science in Banking and Finance from Olabisi Onabanjo University, where he graduated with a Second-Class Upper. His academic foundation in accounting was established at Ondo State Polytechnic, earning a Higher National Diploma (HND) with Distinction.
To enhance his leadership expertise, he completed the General Management Program at Harvard Business School in 2011.

<br><br>As a Chartered Financial Analyst (CFA) since 2013, Sulaiman is recognized for his deep expertise in wealth management, portfolio strategy, and investment strategies. He is also:

          </p><ul class="list-disc list-inside">
            <li>An Associate Chartered Accountant (ACA) since 1998</li>
            <li>A Dealing Clerk on the Nigerian Stock Exchange</li>
            <li>A Fellow of the Chartered Institute of Stockbrokers</li>
            <li>An Associate Member of the Chartered Institute of Taxation</li>
          </ul><p class="mt-9">
          Sulaiman Adedokun plays a pivotal role in corporate governance and financial strategy across various industries. He is the Board Chairman of Trans-Nationwide Express Plc, Leky Mills Limited, and Carnation Registrars Limited (formerly Mainstreet Registrars Limited) and serves as a Director on the Board of AfriGlobal Insurance Brokers, contributing to growth and innovation in Nigeria’s financial and corporate sectors.
With an extensive background in capital markets, financial advisory, and risk management, Sulaiman continues to shape Nigeria’s investment landscape. His leadership at Meristem Securities Limited has been instrumental in driving wealth creation, investment planning, and capital market development.
Outside of his professional endeavours, Sulaiman enjoys golf, reading, and traveling.
          </p>`,
  },
  {
    slug: "mubo-olasoko",
    image: Mubo2,
    name: "Mubo Olasoko",
    role: "Deputy Group Managing Director",
    description: `<div class="executive-info">
          <p class="mb-3">
          Mubo Olasoko is a dynamic leader, culture driver, and financial expert, bringing over 20 years of experience in the financial services industry. As the Managing Director of Meristem Finance Limited, a leading loan and lease subsidiary, and Meristem Registrars and Probate Subsidiary, she has played a pivotal role in business transformation, client-focused innovation, and organizational culture development.
          </p>

          <p class="mb-3">
          Her remarkable achievements include:
          </p><ul class="list-disc list-inside">
            <li>Establishing the Probate Subsidiary to serve an underserved market in Nigeria, ensuring seamless asset transfer and wealth preservation.</li>
            <li>Driving business growth in Meristem Finance, expanding access to strategic loan and lease financing solutions for individuals and businesses.</li>
            <li>Championing a unique organizational culture at Meristem by mentoring and developing culture ambassadors.</li>
            
          </ul>
               <p></p>

               <p class="my-3">
               A graduate of the Arts, Mubo’s leadership blends operational excellence, with creativity, financial acumen, and strategic management to fuel sustainable growth. 
                <br><br>
               Her professional credentials reflect her commitment to excellence:
               </p><ul class="list-disc list-inside">
                <li>Associate Member, Chartered Institute of Stockbrokers (CIS, Nigeria)</li>
                <li>Authorized Dealing Clerk, Nigerian Stock Exchange</li>
                <li>Fellow, Institute of Capital Market Registrars</li>
               </ul>
               <p></p>
               <p class="mt-3">
               She has further enhanced her expertise through Executive Management training at some of the world’s most prestigious institutions, including:
               </p><ul class="list-disc list-inside">
                <li>Harvard Business School</li>
                <li>The Wharton School</li>
                <li>London Business School</li>
                <li>Columbia University</li>
               </ul>
               <p></p>
          <p class="mt-3">
          Beyond her professional achievements, Mubo is a passionate traveller, food enthusiast, and people connector, reflecting her vibrant and inspiring personality. Through her visionary leadership, Meristem Finance Limited continues to redefine financial solutions, empowering clients with innovative loan and lease services tailored for long-term wealth creation.
          </p>

            </div>`,
  },
  // {
  //   slug: "feyi-olusanya",
  //   image: GroupMeetings,
  //   name: "Feyi Olusanya, CFA",
  //   role: "Director",
  //   description: `<div class="executive-info">
  //   <p>
  //     Feyi Olusanya is a well-grounded investment banker with depth in corporate finance, strategy development and execution, organizational change management, and project management, spanning close to two decades.
  //   </p>

  //   <p>
  //     Between 1999 and 2003, Feyi garnered cognate experience at <strong>Accenture (formerly Andersen Consulting)</strong> and at <strong>ARM Investment Managers</strong> as a Financial Analyst (2005–2006).
  //   </p>

  //   <p>
  //     A pioneer banker for <strong>ABSA Group (formerly Barclays Africa Group)</strong> in Nigeria since 2011, he has focused on transaction origination and client relationship management for corporate and investment banking clients.
  //     Feyi was actively involved in defining and executing the Corporate and Investment Banking Strategy for Nigeria.
  //   </p>

  //   <p>
  //     He served as a <strong>Board Member of CFA Society Nigeria (2012–2014)</strong> and as <strong>Chief Representative Officer</strong> of <strong>ABSA Capital Representative Office Nigeria Limited</strong> between July 2011 and December 2016.
  //   </p>

  //   <p>
  //     Feyi assumed the role of <strong>Managing Director, ABSA Capital Markets Nigeria Limited</strong> (formerly Barclays Securities Nigeria Limited, part of Barclays Africa) in 2017.
  //     He was instrumental in developing the strategy that led to the establishment of a local investment banking business in Nigeria and continues to drive growth across domestic and international <strong>DCM, ECM, M&A,</strong> and <strong>Loan Capital Market</strong> transactions.
  //   </p>

  //   <p>
  //     He has served as <strong>Director and Chief Representative Officer</strong> of <strong>ABSA Capital Representative Office Nigeria Limited</strong> and as <strong>Director, ABSA Securities Nigeria Limited</strong> since 2014 and 2017, respectively.
  //   </p>

  //   <p>
  //     Between 2007 and 2009, Feyi was the <strong>Board Chairman of Freedom Funds</strong>, an NGO that provides economic support to the underprivileged.
  //   </p>
  // </div>`,
  // },

  {
    slug: "ify-okol-watson",
    image: Ify,
    name: "Ify Okoli-Watson",
    role: "Director",
    description: `<p>
     Ify Okoli-Watson is an England and Wales-qualified Solicitor (admitted in 1994) who has held commercial roles including Chief of Staff to the CEO of an International Investment Bank. She specializes in Employment Law, Conduct Risk Compliance and Strategy Execution, with a proven track record of managing diverse teams and senior stakeholders across multiple jurisdictions. She also has in-depth experience of the news, media and the financial services industries.</p>
      <br>
      <p>Effective, 2021 to date Ify has been the Associate General Counsel to Facebook, London, UK with the responsibility of providing global employment law counsel and strategic legal advice on international labour and employment legal matters to support the company’s goals.
      </p> <br>
      <p>
      Between 2018-2011, she was the Global Employment Law Counsel for Reuters news and media providing centrally coordinated legal support on a range of matters in over 200 jurisdictions to ensure a consistent, commercial and cost-effective approach that is aligned with local laws and practices.
      </p> <br>
      <p>
      Her career has also seen her emerge as Director, Head: Conduct Risk Compliance EME Barclays Bank Plc (Oct 2016-Nov 2018) London, responsible for managing Conduct Risk and providing strategic direction to the Investment Bank in collaboration with Product Advisory Compliance, Group Compliance and Front Office teams.
      </p> <br>
      <p>
      She was Chief of Staff /Head: Rest of Africa Integration and Enablement Johannesburg, South Africa Barclays Africa (Oct 2014 – Sept 2016), providing support to the Chief Executive Officer, Barclays Africa (Retail & Business Banking) covering operations in 11 countries across Africa with over 8000 employees.
      </p> <br>
      <p>She is International Corporate Co-Chair of the American Bar Association, Labour and Employment Law Committee and Social Media Committee Co-Chair with interest in long distance running – marathons.</p> <br>
      `,
  },
  {
    slug: "emmanuel-oyebanji",
    image: Oyebamiji,
    name: "Emmanuel Adeyeye Oyebanji, SAN, FCIArb",
    role: "Director",
    description: `<div class="executive-info">
    <p>
      Mr. E. A. Oyebanji, SAN, is a dynamic, resourceful, and corporate legal practitioner with over 38 years post-call experience in insolvency practice, asset management, maritime & admiralty law practice/procedure, and oil & gas.
    </p> <br>
    <p>
      He handles contentious and non-contentious legal matters and always adopts business-oriented, fresh, and imaginative but pragmatic approaches to legal issues — based on a foundation of technical excellence in law and a depth of commercial experience.
    </p> <br>
    <p>
      E. A. Oyebanji is an arbitrator par excellence and has been appointed as arbitrator over several arbitration proceedings. He has also consulted for several governmental and non-governmental organizations, such as the Nigerian Communication Commission on fixed wireless telephone projects, and has acted as solicitor in the AOS-ORWELL Merger Agreement — one of the biggest rental service company transactions in Nigeria, valued at over $250 million.
    </p> <br>
    <p>
      He is a registered insolvency practitioner with the Corporate Affairs Commission (CAC) and has acted as Company Secretary to Orwell International Oil and Gas Limited, Private Network Nigeria Limited, and ABM Global Services Limited.
    </p> <br>
    <p>
      He has been appointed at various times as Receiver/Manager by Bank of Industry, First Bank of Nigeria Limited, First City Monument Bank, and Access Bank, among others.
    </p> <br>
    <p>
      Oyebanji was conferred with the rank of <strong>Senior Advocate of Nigeria (SAN)</strong> in 2019 and also became a Fellow of the Institute of Chartered Arbitrators of Nigeria the same year. He is a member of both the Nigerian Bar Association and the Institute of Chartered Arbitrators of Nigeria.
    </p> <br>
    <p>
      He has served as a Member, Board of Trustees of Alethia University, Ago-Iwoye, Ogun State since 2023.
    </p> <br>
  </div>`,
  },
  {
    slug: "amina-maina",
    image: GroupMeetings,
    name: "Amina Maina",
    role: "Director",
    description: `<div class="executive-info">
    <p>
      Amina Maina is a well-established business executive and dependable leader who brings to every board vast knowledge, expertise, and experience.
    </p> <br>

    <p>
      An innovative thinker and problem solver, she consistently applies empathy and emotional intelligence to business analysis, injecting fresh ideas to develop new systems that enhance both current and future organizational positioning.
    </p> <br>

    <p>
      A keenly focused professional, she possesses a unique blend of industry-transferable skills combined with the consistent delivery of global best practices to drive both short- and long-term strategic imperatives.
    </p> <br>

    <p>
      Currently, she serves as the Group Chief Operating Officer of <strong>MRS Holdings Limited</strong>, a position she assumed in 2018. As GCOO, she oversees the efficient and effective operations of the MRS Group.
    </p> <br>

    <p>
      She is also responsible for translating strategy into actionable goals for performance and growth, as well as implementing organization-wide goal setting, performance management, and annual operational planning.
    </p> <br>

    <p>
      Amina was formerly the VP, Business Development at Energy Solutions Integrated Services Limited (2004–2005) and Head of Operations, Nigeria at Aurora Energy Trading Ltd (2001–2003), among others.
    </p> <br>

    <p>
      She currently serves as an Independent Board Member of the Midstream and Downstream Gas Infrastructure Fund (North-East), and sits on the boards of the Nigerian Economic Summit Group and First Mutual Microfinance Bank, Abuja, among others.
    </p> <br>

    <p>
      A Fellow of the Institute of Management Consultants, she is also a Member of the Institute of Directors and the Society of Petroleum Engineers. Additionally, she serves as Vice Chairman of the Depot and Petroleum Products Marketers Association of Nigeria (DAPPMAN) and 3rd Vice Chairman of the Nigerian Economic Summit Group.
    </p> <br>
  </div>`,
  },
  {
    slug: "ohis-ohiwerei",
    image: Ohis,
    name: "Ohis Ohiwerei",
    role: "Director",
    description: `<div class="executive-info">
    <p>
      Mr. Ohis Ohiwerei is an accomplished Financial Services Industry veteran who is currently leading the transformation agenda of <strong>Notore Chemical Industries PLC</strong>.
    </p> <br>

    <p>
      He has attended the Advanced Management Program at <strong>Harvard Business School</strong> and the Advanced Strategic Management Program at the <strong>IMD Business School, Switzerland</strong>.
    </p> <br>

    <p>
      He retired from the banking industry after 24 years of service as an Executive Director at <strong>Guaranty Trust Bank Plc</strong>, where he was responsible for Commercial Banking and the Public Sector in Lagos.
    </p> <br>

    <p>
      Prior to that, he served as Executive Director and Chief Financial Officer of <strong>Diamond Bank Plc</strong>. He began his career at <strong>Guaranty Trust Bank</strong> and later spent two years at <strong>Ecobank Plc</strong> as Country Treasurer for Nigeria.
    </p> <br>

    <p>
      Over the last 16 years, Mr. Ohiwerei has served on the boards of numerous public and private companies.
    </p> <br>

    <p>
      He currently serves on the Board of <strong>Notore Chemical Industries PLC</strong> and as an Independent Director on the boards of <strong>Bastion Health Limited (Chairman)</strong>, <strong>Bloom Bank Sierra Leone</strong>, <strong>Orange One Finance Limited</strong>, and <strong>Griffin Finance Limited</strong>.
      <br>
      He has also served on the boards of <strong>AXA Mansard Nigeria PLC</strong>, <strong>Guaranty Trust Bank PLC</strong>, <strong>Guaranty Trust Bank Sierra Leone</strong>, <strong>Diamond Bank PLC</strong>, and <strong>ADIC Insurance</strong>.
    </p> <br>

    <p>
      His extensive experience in the financial services industry has honed his expertise in strategy formation, regulatory compliance, and good corporate governance.
    </p> <br>

    <p>
      He is also highly skilled in structured financial transactions, treasury management, risk management, and process re-engineering.
    </p> <br>
  </div>`,
  },
  {
    slug: "umar-ahmed",
    image: Ahmed,
    name: "Umar Shuaib Ahmed",
    role: "Director",
    description: `<div class="executive-info">
    <p>
      Umar Shuaib Ahmed is an accomplished banker with over 29 years of cognate experience spanning business development, operations, customer service, and public sector banking.
    </p> <br>

    <p>
      Between 2006 and 2022, he held various senior management positions in <strong>Zenith Bank Plc</strong>, one of Nigeria’s most profitable and largest banks.
    </p> <br>

    <p>
      He served as an Executive Director at Zenith Bank from <strong>October 1st, 2016, to December 31st, 2022</strong>. In this capacity, he was directly responsible for the bank’s business in the Northern region, coordinating and directing market penetration and business development in alignment with Zenith’s corporate objectives.
    </p> <br>

    <p>
      He also provided executive-level support to the Deputy Managing Director for operations in the Southeast region.
    </p> <br>

    <p>
      During his tenure at Zenith Bank, Umar served on several strategic committees of the bank, including the <strong>Board Credit Committee</strong>, <strong>Finance and General-Purpose Committee</strong>, <strong>Risk Management Committee</strong>, and as a <strong>Non-Executive Director (NED)</strong> of Zenith Pensions Custodian.
    </p> <br>

    <p>
      He played active roles in public and private sector banking in Abuja, serving as <strong>General Manager/Zonal Head, Abuja II</strong> between June 1st, 2013, and September 30th, 2016, and later as <strong>Group Head, Abuja Private Sector Businesses</strong>.
    </p> <br>

    <p>
      Prior to joining Zenith Bank, Umar worked with <strong>Broad Bank of Nigeria Limited</strong> as Senior Manager/Assistant General Manager in charge of the Federal Capital Territory (January 2004 – May 2006), and previously held positions in <strong>Liberty Bank Plc</strong> and <strong>Citibank Nigeria</strong>.
    </p> <br>

    <p>
      Umar is a <strong>Fellow of the Nigerian Institute of Management</strong>, an <strong>Honorary Senior Member of the Chartered Institute of Bankers</strong>, a <strong>Fellow of the Chartered Institute of Loan & Risk Management</strong>, a <strong>Member of the Certified National Accountants</strong>, and a <strong>Member of the Institute of Directors</strong>.
    </p> <br>

    <p>
      He is currently self-employed as the <strong>Chairman</strong> of <strong>UMSY Technologies Limited</strong>, <strong>UMSY Foods Ltd</strong>, and <strong>UMSY Agro-Allied Enterprises</strong>.
    </p> <br>
  </div>`,
  },
  {
    slug: "adejumoke-awolumate",
    image: Adejumoke,
    name: "Adejumoke Awolumate",
    role: "Director",
    description: `<div class="executive-info">
    <p>
      Jumoke is a highly motivated and technically competent individual with strong leadership and excellent people skills. 
      She is ambitious, goal-oriented, and visionary.
    </p> <br>

    <p>
      She has over 25 years of cross-functional experience spanning finance, investments, strategy, audit, and administration. 
      She is a <strong>Fellow of the Institute of Chartered Accountants of Nigeria (ICAN)</strong>, an <strong>Associate Stockbroker</strong>, and an <strong>Authorized Dealing Clerk</strong> of the Nigerian Stock Exchange.
    </p> <br>

    <p>
      Jumoke began her professional career in 1995 as an Auditor, and seven years later, she joined <strong>Meristem Securities Group</strong> in January 2007.
    </p> <br>

    <p>
      Over a period of 12 years, she served in various capacities, including <strong>Head, Asset Management</strong> at Meristem Wealth Management Limited and <strong>Head, Group Strategy and Shared Services</strong>. 
      She left Meristem Group in 2018 as the <strong>Managing Director of Meristem Capital Limited</strong>, a wholly owned subsidiary of Meristem Securities Limited.
    </p> <br>

    <p>
      After leaving Meristem, she joined <strong>Integrated Dairies Limited</strong> as the <strong>Chief Operating Officer (COO)</strong>, a role she continues to hold. 
      Her primary mandate includes driving change management, corporate transformation, and institutionalization.
    </p> <br>

    <p>
      Jumoke sits on the boards of several organizations in a non-executive capacity across various industries, including finance, investment, capital markets, and agro-allied businesses.
    </p> <br>

    <p>
      She enjoys travelling, dancing, listening to music, and reading. 
      Jumoke is an ardent team player with a strong sense of collective responsibility.
    </p> <br>
  </div>`,
  },
];

export default function ExecutiveProfile({ params }: Props) {
  const { slug } = React.use(params);
  const executive = executiveMembers.find((exec) => exec.slug === slug);

  if (!executive) {
    return notFound();
  }

  return <ProfilePage executive={executive} />;
}
