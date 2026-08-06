import type { ReactNode } from "react";
import NotchedLabel from "./NotchedLabel";

type OutlinedCardProps = {
  /** Sits in a notch on the card's top border. */
  label: string;
  children: ReactNode;
  /** Sizing for the card; the base styles set none. */
  className?: string;
};

/** Outlined panel with its heading notched into the top border. */
const OutlinedCard = ({ label, children, className = "" }: OutlinedCardProps) => (
  <div className={`relative border-2 border-white rounded-lg p-4 ${className}`}>
    <NotchedLabel className="text-[#FF3B3B] text-lg">{label}</NotchedLabel>
    <div className="mt-4 leading-relaxed">{children}</div>
  </div>
);

export default OutlinedCard;
