import { Damilola, Sulaiman } from "@/app/assets";
import ProfilePage from "@/components/ProfilePage";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const trusteeBoardMembers = [
  {
    slug: "chief-michael-ade-ojo",
    image: "https://placehold.co/600x400",
    name: "ADELODUN OLAIYA",
    role: "Chairman",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "chief-michael-ade-ojo",
    image: "https://placehold.co/600x400",
    name: "CHIEF MICHAEL ADE.OJO, OON",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "s.i.okoli",
    image: "https://placehold.co/600x400",
    name: "CHIEF S. I. C. OKOLI",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "christopher-attah",
    image: "https://placehold.co/600x400",
    name: "Christopher Attah",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "damilola-hassan",
    image: Damilola,
    name: "Damilola Hassan",
    role: "Managing Director",
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
    slug: "sulaiman-adedokun",
    image: Sulaiman,
    name: "SULAIMON ADEDOKUN, CFA",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "wole-abegunde",
    image: "https://placehold.co/600x400",
    name: "WOLE ABEGUNDE",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
];

export default async function ExecutiveProfile({ params }: Props) {
  const { slug } = React.use(params);
  const executive = trusteeBoardMembers.find((exec) => exec.slug === slug);

  if (!executive) {
    return notFound();
  }

  return <ProfilePage executive={executive} />;
}
