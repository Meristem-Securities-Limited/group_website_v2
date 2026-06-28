import { Mubo, Sulaiman } from "@/app/assets";
import ProfilePage from "@/components/ProfilePage";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const financeBoardMembers = [
  {
    slug: "chief-michael-ade-ojo",
    image: "https://placehold.co/600x400",
    name: "BAYO OLUGBEMI",
    role: "Chairman",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "a.s.kele",
    image: "https://placehold.co/600x400",
    name: "ABDULRASHID AMAO",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "s.i.okoli",
    image: Mubo,
    name: "MUBO OLASOKO",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "olusegun-olusanya",
    image: "https://placehold.co/600x400",
    name: "OSADEBE OSAKWE",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "sulaiman-adedokun",
    image: "https://placehold.co/600x400",
    name: "SULAIMON ADEDOKUN, CFA",
    role: "Board Member",
    description: `<p class="text-gray-700 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit ut blandit nunc finibus malesuada mollis leo nisi inceptos. Condimentum sapien urna urna ultricies nullam vulputate phasellus.</p>
<p class="text-gray-700 py-3">Interdum sem per laoreet vehicula himenaeos morbi vitae. Varius netus dapibus nisl nulla class et. Eu ultrices metus class curae sem inceptos.</p>
<p class="text-gray-700 py-3">Cursus mauris ac fusce egestas quis litora condimentum nec urna aliquet nisl urna amet curae. Pretium litora cursus nisi mattis nisl ligula pharetra. Nibh hendrerit orci felis fusce aenean accumsan lectus cursus himenaeos feugiat curabitur. Class lorem mauris condimentum aptent at sociosqu massa.</p>
<p class="text-gray-700 py-3">Primis sodales mauris nec adipiscing nam ultricies mauris. Cursus tortor posuere scelerisque eu litora sed porttitor tempor tellus sollicitudin mi porttitor. Ultricies netus morbi justo netus enim a leo ullamcorper blandit. Facilisis elit suscipit ad varius nulla arcu lectus dolor gravida maecenas ornare. Id lobortis placerat fermentum orci aliquam pharetra magna mollis lacinia vehicula ultrices est aliquam in.</p>`,
  },
  {
    slug: "sulaiman-adedokun",
    image: Sulaiman,
    name: "TUNDE BAJELA",
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
  const executive = financeBoardMembers.find((exec) => exec.slug === slug);

  if (!executive) {
    return notFound();
  }

  return <ProfilePage executive={executive} />;
}
