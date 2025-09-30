import { StaticImageData } from "next/image";
import { GroupMeetings } from "../assets";
import ImageWithFallback from "./ImageWithFallback";

const MemberCard = ({
  member,
}: {
  member: {
    image: string | StaticImageData;
    name: string;
    role: string;
    description?: string;
    slug?: string;
  };
}) => (
  <div className="cursor-pointer group-hover:scale-105 group hover:scale-105 relative transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30">
    <div className="text-center flex flex-col h-full">
      <div className="w-full h-70 max-h-70 min-h-70">
        <ImageWithFallback
          width={200}
          height={200}
          src={member?.image as string}
          fallback={GroupMeetings}
          alt={member?.name || ""}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="text-left h-full p-4">
        <h3 className="text-base font-bold flex-1 text-black uppercase">{member.name}</h3>
        <p className="text-emerald-700 flex-1 font-semibold uppercase text-sm">{member.role}</p>
      </div>
    </div>
  </div>
);

export default MemberCard;
