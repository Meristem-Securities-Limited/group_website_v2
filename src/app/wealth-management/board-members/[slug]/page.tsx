import { Sulaiman, Taiwo } from "@/app/assets";
import ProfilePage from "@/components/ProfilePage";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const wealthManagementBoardMembers = [
  {
    slug: "chief-michael-ade-ojo",
    image: "https://placehold.co/600x400",
    name: "CHIEF MICHAEL ADE.OJO, OON",
    role: "Chairman",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "taiwo-yusuf",
    image: Taiwo,
    name: "Taiwo Yusuf, CFA",
    role: "Managing Director",
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
    slug: "a.s.kele",
    image: "https://placehold.co/600x400",
    name: "A.S. KELE",
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
    slug: "olusegun-olusanya",
    image: "https://placehold.co/600x400",
    name: "OLUSEGUN OLUSANYA",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
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

export default function ExecutiveProfile({ params }: Props) {
  const { slug } = React.use(params);
  const executive = wealthManagementBoardMembers.find((exec) => exec.slug === slug);

  if (!executive) {
    return notFound();
  }

  return <ProfilePage executive={executive} />;
}
