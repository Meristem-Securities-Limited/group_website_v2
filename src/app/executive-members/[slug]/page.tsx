import ProfilePage from "@/components/ProfilePage";
import { notFound } from "next/navigation";
import React from "react";

import {
  Bashir,
  Damilola,
  Funmilola,
  Ifeoma,
  Mubo,
  Nkechinyelu,
  Ojenike,
  Okiemute,
  Salawu,
  Sulaimon,
  Taiwo,
  Temitope,
} from "@/app/assets";
interface Props {
  params: Promise<{ slug: string }>;
}

export const boardMembers = [
  {
    slug: "sulaimon-adedokun",
    image: Sulaimon,
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
    image: Mubo,
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
  {
    slug: "damilola-hassan",
    image: Damilola,
    name: "Damilola Hassan",
    role: "Managing Director, Meristem Trustees Limited",
    description: `<div class="executive-info">
          <p class="mb-6">
          Damilola Hassan is a seasoned financial planner and wealth management expert with over 18 years of experience in the financial services industry. She has a strong track record in investment advisory, estate planning, and wealth preservation, working closely with individuals, families, and institutions to secure financial legacies across generations.
          <br><br>
          Before transitioning into investment banking, Damilola served as an Executive Secretary at the Manufacturers Association of Nigeria (MAN) for over 3 years, where she gained extensive experience in stakeholder management, policy advocacy, and negotiations within the manufacturing sector.
          </p>
          <p class="my-6">
          Currently, as the Managing Director of Meristem Trustees Limited, Damilola leads the firm in providing strategic estate planning and trust solutions tailored to high-net-worth individuals and businesses. She holds an MBA from Lagos Business School (Pan-Atlantic University) and an MSc from the University of Lagos. She is also a member of the Nigerian Institute of Management (NIM) and has completed executive education programs at The Wharton School of Business, University of Pennsylvania, and the University of Chicago Booth School of Business.
          </p>

          
          <p class="my-6">
          Damilola is a Fellow of the Chartered Institute of Stockbrokers (FCS), an Authorized Dealing Clerk of the Nigerian Exchange (NGX), and currently serves as the President of the Association of Corporate and Individual Investment Advisers (CIIA).</p>
          <p class="my-6">
Beyond finance, she is a certified Family Finance Coach and Counsellor, holding an Associate Practitioner certification in Family Systems Engineering from the Institute of Family Engineering &amp; Development (IFED) West Africa. Her thought leadership in finance and wealth management earned her a feature in the BusinessDay Leading Women Series and recognition as one of Nigeria’s 50 Inspiring Women Leaders in 2022.</p>
<p class="executive-bio">Damilola is a strong advocate for work-life integration and female mentorship, serving as a mentor on the WIMBOARD platform. She enjoys reading, teaching, traveling, and writing fiction.</p>


          <p></p>
        </div>`,
  },
  {
    slug: "bashir-saheed",
    image: Bashir,
    name: "Saheed Bashir",
    role: "Managing Director, Meristem Stockbrokers Limited",
    description: `<div class="executive-info">
          <p class="mb-6">
          With about 2 decades of invaluable experience in the capital markets, Saheed is a highly accomplished professional in the field. He holds a Master of Business Administration (MBA) from Lagos Business School, Pan Atlantic University, a bachelor’s degree in economics from Obafemi Awolowo University, Ile-Ife, Osun State, and a National Diploma in Statistics from The Polytechnic, Ibadan.
          <br><br>Saheed's impressive list of credentials includes being a Fellow Chartered Accountant, a Fellow Chartered Stockbroker, and an Authorized Dealing Clerk (ADC) of The Nigerian Exchange Limited (NGX). Additionally, he holds the status of an associate member of the Chartered Institute for Securities and Investment (CISI) in the United Kingdom.
<br><br>Saheed's journey in the financial world began with MERISTEM SECURITIES LIMITED, a distinguished investment banking conglomerate. Throughout his career, he has accumulated extensive experience in capital markets and management across various domains, including Investment Research, Advisory, Business Development &amp; Sales, Finance and Operations.
          </p>
          
          <p class="my-6">
          In his pursuit of continuous learning and growth, Saheed has participated in executive leadership programs at renowned institutions, including Harvard Business School, United States, the International Institute for Management Development (IMD) in Lausanne, Switzerland, and the Lagos Business School. Also, he completed the prestigious Global Executive Development Program (GEDP) at The Gordon Institute of Business Science (GIBS) Business School in Pretoria, South Africa. He recently completed a program in Data Disruption: Mastering AI &amp; Machine Learning for Finance at MIT SMR.
          <br><br>
          Saheed a council member of the Governing Council of the Chartered Institute of Stockbrokers. He an education enthusiast and has been a director at At-Tanzeel Schools for over a decay, holding finance and investment portfolio, and currently, he is the chairman of the board. He is very passionate STEM education and career growth for the next-gen.  Beyond his professional accomplishments, Saheed is a football enthusiast who supports Chelsea FC and enjoys the game of golf. He is an active member of the Ikoyi Club, 1938. He is happily married, embracing both his personal and professional life with enthusiasm and dedication.
          </p>
        </div>`,
  },
  {
    slug: "taiwo-yusuf",
    image: Taiwo,
    name: "Taiwo Yusuf, CFA",
    role: "Chief Investment Officer, Meristem Securities Limited",
    description: `<div class="executive-info">
          <p class="my-6">
          Taiwo Yusuf is a result-driven investment leader with about 20 years of experience spanning commercial banking, investment banking, and capital markets. As the Chief Investment Officer of Meristem Wealth Management Limited, he plays a pivotal role in shaping multi-asset investment strategies and driving the firm’s  performance across Equities, Commodities, Fixed Income, and Bonds.
          <br><br>
          With over a decade at Meristem Wealth Management, Taiwo has been instrumental in developing innovative investment solutions and delivering exceptional returns for clients. His expertise extends beyond traditional asset classes to include strategic risk management, portfolio optimization, and wealth preservation.
         <br><br> Taiwo also serves as the Administrator of NESI SSL Limited, a Central Bank of Nigeria (CBN)-owned entity dedicated to addressing liquidity challenges in the Nigerian power sector. His strategic oversight in this role reflects his deep understanding of financial structuring and economic sustainability.
          
        <br><br>His educational and professional qualifications include a degree in Economics, an MBA, the CFA Charterholder designation, and Associate Membership with the Chartered Institute of Stockbrokers. He is also an alumnus of Lagos Business School, and has attended various prestigious international executive management programs in Kellogg’s School of Management, IESE amongst others.
Under his leadership, Meristem Wealth Management has earned multiple industry recognitions, including:
</p>
          <ul class="my-6 list-disc list-inside">
            ✅ Best Performing Fund <br>
            ✅ First Global Investment Performance Standard (GIPS) Compliant Firm in Nigeria
          
          </ul>
          <p class="my-6">
          Taiwo’s passion extends beyond investment management he is a dedicated sports enthusiast who enjoys field trips and outdoor adventures, reflecting his dynamic and well-rounded personality. <br><br>

          </p>
        </div>`,
  },
  {
    slug: "rasaki-salawu",
    image: Salawu,
    name: "Rasaki Salawu, CFA",
    role: "Managing Director, Meristem  Capital Limited",
    description: `<div class="executive-info">
          <p class="my-6">
          Rasaki Salawu, CFA, is a seasoned investment banking professional with over a decade of experience in the financial services industry, specializing in financial advisory, capital raising, and corporate finance. As the Head of Investment Banking at Meristem Capital Limited, he plays a key role in structuring and executing high-value transactions across multiple sectors.
<br><br>Rasaki began his career as a Research Analyst at Meristem Securities Limited, where he provided in-depth coverage of the agriculture and mining sectors while contributing to macroeconomic research. In October 2014, he transitioned to Investment Banking, where he has successfully led numerous capital market transactions, including:
          </p>
          <ul class="my-6 list-disc list-inside">
            <li>Debt and equity capital raising,</li>
            <li>Mergers and acquisitions (M&amp;A) advisory,</li>
            <li>Private placements and valuation mandates.</li>
          </ul>
          <p class="my-6">
          A high-achieving scholar, Rasaki graduated with first-class honors in Agricultural Economics, earning both his B.Sc. and M.Sc from the University of Ibadan. He is also a Chartered Financial Analyst (CFA) charterholder, an Associate Member of the Chartered Institute of Stockbrokers (CIS, Nigeria), and an Authorized Dealing Clerk of the Nigerian Exchange (NGX).<br><br>
          With his deep expertise in corporate finance, investment structuring, and strategic advisory, Rasaki continues to drive Meristem Capital’s leadership in investment banking and capital markets.<br><br>
          Outside of work, he enjoys playing chess and swimming as part of his recreational activities.
          </p>
        </div>`,
  },
  {
    slug: "kemi-ojenike",
    image: Ojenike,
    name: "Kemi Ojenike",
    role: "Chief Operating Officer, Meristem  Family Office",
    description: `<div class="executive-info">
          <p class="my-6">
          Kemi Ojenike is a seasoned Lawyer and Family Wealth Advisor committed to helping families preserve and grow multigenerational wealth. 
With a deep understanding of wealth structuring, estate planning, and family governance, she provides strategic guidance to ensure that high-net-worth families secure their legacy for generations to come.

          <br><br>As the Chief Operating Officer of Meristem Family Office, Kemi oversees strategic planning, operational efficiency, and client advisory services. Her expertise lies in wealth preservation, risk management, and legal structuring, ensuring that clients receive tailored solutions to safeguard their most valuable assets.
<br><br>Kemi’s experience in leading the legal and compliance strategy of a top wealth management group has equipped her with a strong grasp of regulatory frameworks, governance structures, and risk mitigation strategies. Her qualifications include:
          </p>
          <ul class="my-6 list-disc list-inside">
            <li>Law Degree (LL.B)</li>
            <li>Chartered Governance Professional, Chartered Governance Institute UK &amp; Ireland</li>
          </ul>
          <p class="my-6">
          Her ability to navigate complex wealth management landscapes makes her an invaluable asset to high-net-worth families seeking bespoke wealth solutions and legacy planning strategies. <br><br>
          Beyond her professional career, Kemi is a dedicated social entrepreneur committed to education and care initiatives for children and young people in vulnerable communities. She co-founded The Destiny Trust, a non-profit organization focused on providing education, shelter, and empowerment programs for underprivileged children.<br><br>
          Through her leadership at Meristem Family Office, Kemi continues to redefine family wealth management in Nigeria, ensuring that clients receive world-class expertise, strategic insights, and personalized solutions for long-term financial success.

          </p>
        </div>`,
  },
 // {
 //   slug: "funmilola-adekola-daramola",
 //   image: Funmilola,
  //  name: "Funmilola Adekola-Daramola",
 //   role: "Head, Wealth Advisory, Meristem Wealth Management Limited",
 //   description: `<div class="executive-info">
 //         <p class="my-6">
 //         Funmilola Adekola Daramola is a seasoned Private Wealth Manager and Investment Advisor with over 17 years of experience across banking, capital markets, and wealth management. She specializes in delivering strategic financial advice and tailored solutions to high-net-worth individuals (HNWIs) and institutions.
         
        
  //      </p>
          
  //        <p class="my-6">
   //       As Head of Wealth Advisory Services at Meristem Wealth Management, Funmilola leads a team of experienced advisors in curating personalized strategies that align with clients’ financial objectives.
//She holds both Bachelor’s and Master’s degrees in Biochemistry from the University of Ibadan, and has bolstered her expertise with certifications including:

//          </p>
//<ul class="my-6 list-disc list-inside">
    //        <li>Member, Chartered Institute of Stockbrokers (CIS, Nigeria)</li>
    //        <li>Affiliate Member, Association of Chartered Certified Accountants (ACCA)</li>
            
   //       </ul>
   //       <p class="my-6">
   //       Funmilola’s strong analytical skills, market insight, and client-centric approach have earned her a reputation as a trusted financial expert dedicated to helping clients grow and preserve wealth.
   //       </p>

    //      <p class="my-6">
   //       Outside of work, she enjoys reading, cooking, and personal development. She is also a Talent Member of Meristem Securities, reflecting her commitment to leadership and mentorship within the organization
  //        </p>
  //      </div>`,
//  },
 // {
 //   slug: "temitope-oludimu",
 //   image: Temitope,
 //   name: "Temitope Oludimu",
//    role: "Chief Operating Officer, Meristem Stockbrokers Limited",
 //   description: `<div class="executive-info">
  //        <p class="my-6">
  //        Temitope Oludimu is a seasoned investment professional with over 14 years of experience in the financial markets. She brings deep expertise in relationship management, business development, investment advisory, and capital markets. As Chief Operating Officer at Meristem Stockbrokers, she drives business growth, enhances client investment strategies, and leads her team to deliver exceptional portfolio management solutions.
   //            </p>
         

    //      <p class="my-6">She holds a B.Sc. in Computer Science from Ladoke Akintola University of Technology, an Executive MBA from Lagos Business School, and has completed The Authentic Leader Development course at Harvard Business School, Boston.</p>
            
          
     //     <p class="my-6">
     //     Temitope is a certified financial expert and holds several industry accreditations:
          
     //   </p>
   //     <ul class="my-6 list-disc list-inside">
    //        <li>Associate Member, Chartered Institute of Stockbrokers (CIS, Nigeria)</li>
  //         <li>Authorized Dealing Clerk, Nigerian Exchange Group (NGX)</li>
    //        <li>Associate Member, Chartered Institute for Securities &amp; Investment (CISI, UK)</li>
    //      </ul>
    //      <p class="my-6">
    //      Known for her strategic mindset and passion for client success, she remains a key force in shaping the future of Meristem Stockbrokers and the broader investment landscape in Nigeria.
         
     //     </p>
     //     <p class="my-6">Outside the office, Temitope is family-oriented and enjoys exploring new destinations around the world.</p>
    //    </div>`,
  //},
  //{
  //  slug: "ifeoma-anyawu",
  //  image: Ifeoma,
  //  name: "Ifeoma Anyanwu",
  //  role: "Head, Group Business Development, Meristem Securities Limited",
  //  description: `<div class="executive-info">
  //       <p class="my-6">Ifeoma Anyanwu is a seasoned business development executive and growth strategist with over a decade of experience in financial services, investment strategy, and client engagement. As Head of Group Business Development at Meristem Securities, she leads initiatives that drive revenue growth, deepen market presence, and deliver innovative wealth solutions for high-net-worth individuals, institutions, and retail investors.</p>
   //      <p class="my-6">Her journey at Meristem from Customer Service Officer to a key leadership role speaks to her deep, cross-functional expertise spanning wealth management, stockbroking, trust services, asset management, and corporate finance. She plays a pivotal role in aligning business objectives across all subsidiaries, including Meristem Wealth, Meristem Trustees, Meristem Registrars, and Meristem Stockbrokers.</p>
   //      <p class="my-6">With a background in Agricultural Economics and a Master’s in Economics, Ifeoma brings a data-driven mindset to investment advisory and strategy development. She is known for translating complex financial concepts into actionable insights, nurturing long-term client relationships, and unlocking high-impact opportunities.</p>
   //      <p class="my-6">Ifeoma is passionate about financial inclusion, investment innovation, and the economic empowerment of women and emerging markets values that continue to shape her leadership at Meristem.</p>
//<p></p>
  //      </div>`,
 // },
 // {
 //   slug: "okiemute-sagua",
 //   image: Okiemute,
  //  name: "Okiemute Sagua",
 //   role: "Treasurer, Meristem Wealth Management Limited",
  //  description: `<div class="executive-info">
  //        <p class="my-6">
  //        Okiemute Kimberly Sagua is the Head of Treasury at Meristem Wealth Management Limited, bringing over 18 years of expertise in the financial services industry. She has a proven track record in Treasury Management, Portfolio Management, Correspondent Banking, Asset and Liability Management (ALM), Internal Control, and Audit.
   //       <br><br>Before joining Meristem Wealth Management Limited in June 2021, she served as a Currencies and Securities Dealer and ALM Manager at Zenith Bank Plc, where she played a key role in optimizing financial operations and risk management strategies.    </p>
         
   //       <p class="my-6">
   //       Okiemute holds a B.Sc. in Accounting from the University of Lagos and is a certified member of both the Association of Chartered Certified Accountants (ACCA) and the Institute of Chartered Accountants of Nigeria (ICAN).
    //      </p>

     //     <p class="my-6">With her deep expertise in treasury operations, financial risk management, and investment strategies, she continues to drive excellence in liquidity management, asset optimization, and wealth preservation at Meristem Wealth Management Limited</p>
         
    //    </div>`,
  //},
  {
    slug: "nkechinyelu-okoye",
    image: Nkechinyelu,
    name: "Nkechinyelu Okoye",
    role: "Chief Operating Officer, Meristem Registrar and Probate Services Limited",
    description: `<div class="executive-info">
          <p class="my-6">
          Nkechinyelu Okoye is the Chief Operating Officer (COO) of Meristem Registrars and Probate Services Limited, bringing over 15 years of expertise in business operations, customer experience management, and strategic leadership. She spearheads operational optimization, service excellence, and customer satisfaction, ensuring seamless alignment between business objectives and efficiency.
               </p>
         
          <p class="my-6">Throughout her career, Nkechi has held key leadership roles, successfully implementing data-driven strategies that have enhanced customer retention, and revenue growth. Her proficiency in managing cross-functional teams, process innovation, and service delivery has been instrumental in Meristem’s continued success.</p>
         
          <p class="my-6">A strong advocate for continuous improvement and operational excellence, Nkechi is passionate about delivering exceptional customer experiences and fostering long-term client relationships.</p>
            
          
          
          <p class="my-6">
          Beyond her professional role, she is an avid reader and a blogger, sharing personal insights and thought leadership on business, life, and customer-centric strategies.
          
        </p>
        
         
        </div>`,
  },
];

export default function ExecutiveProfile({ params }: Props) {
  const { slug } = React.use(params);
  const executive = boardMembers.find((exec) => exec.slug === slug);

  if (!executive) {
    return notFound();
  }

  return <ProfilePage executive={executive} />;
}
