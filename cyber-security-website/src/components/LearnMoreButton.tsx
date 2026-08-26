import { Link } from "react-router-dom";
import TextType from "./TextType";

interface LearnMoreButtonProps {
  delay?: number;
}

const LearnMoreButton = ({ delay = 0 }: LearnMoreButtonProps) => {
  return (
    <Link
      to="/join"
      className="inline-block rounded-sm text-accent-bright underline decoration-accent underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      aria-label="Join Cyber@Cornell"
    >
      <TextType
        as="span"
        text={["Join us →"]}
        typingSpeed={90}
        initialDelay={delay}
        pauseDuration={0}
        loop={false}
        showCursor={false}
        className="cta-typed font-['Roboto_Mono']"
        aria-hidden="true"
      />
    </Link>
  );
};

export default LearnMoreButton;
