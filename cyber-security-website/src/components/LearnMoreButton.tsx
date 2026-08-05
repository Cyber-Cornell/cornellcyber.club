"use client";
import TextType from "./TextType";

interface LearnMoreButtonProps {
  delay?: number;
}

// Applications are currently closed, so this renders as a greyed-out,
// non-interactive label instead of a link to /join.
const LearnMoreButton = ({ delay = 0 }: LearnMoreButtonProps) => {
  return (
    <TextType
      as="span"
      text={["Join us →"]}
      typingSpeed={90}
      initialDelay={delay}
      pauseDuration={0}
      loop={false}
      showCursor={false}
      className="cta-typed text-[#5c5f6b] underline underline-offset-2 cursor-not-allowed font-['Roboto_Mono']"
      aria-label="Join us (applications closed)"
      title="applications closed"
    />
  );
};

export default LearnMoreButton;
