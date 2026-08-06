import type { ReactNode } from "react";

type ActivityCardProps = {
  /** Shown in the red pill at the top of the card. */
  title: string;
  children: ReactNode;
};

/** Light panel describing one thing the club does, headed by a red pill. */
const ActivityCard = ({ title, children }: ActivityCardProps) => (
  <div className="w-full max-w-[500px] rounded-lg bg-[#E1DAD3] p-4 flex flex-col items-center gap-4">
    {/* Padding, not a fixed width, so the pill always fits its title. */}
    <p className="border-2 border-black bg-[#FF0000]/50 px-3 py-1 text-center text-black">
      {title}
    </p>
    <p className="text-black leading-relaxed">{children}</p>
  </div>
);

export default ActivityCard;
