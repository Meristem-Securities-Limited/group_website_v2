import { Bashir, Onyema, Sulaiman } from "@/app/assets";
import ProfilePage from "@/components/ProfilePage";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const stockbrokersBoardMembers = [
  {
    slug: "olusegun-olusanya",
    image: "https://placehold.co/600x400",
    name: "OLUSEGUN OLUSANYA",
    role: "chairman",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },

  //   {
  //     slug: "saheed-bashir",
  //     image: "https://placehold.co/600x400",
  //     name: "SAHEED BASHIR",
  //     role: "board",
  //     description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
  // <p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
  // <p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
  // <p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  //   },
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
  {
    slug: "yakubu-abubakar",
    image: "https://placehold.co/600x400",
    name: "YAKUBU ABUBAKAR",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "oscar-onyema",
    image: Onyema,
    name: "Oscar N. Onyema, OON",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Oscar N. Onyema, OON, is one of Africa's foremost architects of modern financial market infrastructure and institutional capital formation. Over a distinguished career spanning nearly three decades, he has led transformational reforms that have strengthened capital markets, enhanced corporate governance, mobilised long-term investment, and advanced sustainable economic development across Africa and beyond.</p>
   <p class="text-gray-700 py-3">As former Group Chief Executive Officer of Nigerian Exchange Group Plc and Chief Executive Officer of The Nigerian Stock Exchange, he led one of Africa's most significant exchange transformations, successfully demutualising the Exchange, modernising market infrastructure, expanding investor access, and positioning Nigeria as a leading destination for capital formation. His leadership has also extended to the World Federation of Exchanges, the African Securities Exchanges Association, the Central Securities Clearing System Plc, the National Pension Commission, and numerous private and public institutions, where he has shaped governance standards, financial market innovation, and regional integration.</p>
   <p class="text-gray-700 py-3">Today, Mr. Onyema chairs and serves on the boards of organisations spanning financial markets, fintech, energy, and sustainable finance, where he continues to advise governments, regulators, development finance institutions, institutional investors, and corporate leaders. Widely respected for his strategic judgement, integrity, and institution-building capabilities, he is recognised for bringing together public and private stakeholders to unlock investment, strengthen governance, and build resilient institutions that create lasting economic value. His career reflects an enduring commitment to inclusive growth, responsible leadership, and the long-term prosperity of Africa.</p>`,
  },
  {
    slug: "saheed-bashir",
    image: Bashir,
    name: "SAHEED BASHIR",
    role: "managing director",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
];

export default function ExecutiveProfile({ params }: Props) {
  const { slug } = React.use(params);
  const executive = stockbrokersBoardMembers.find((exec) => exec.slug === slug);

  if (!executive) {
    return notFound();
  }

  return <ProfilePage executive={executive} />;
}
