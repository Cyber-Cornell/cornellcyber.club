import { Link } from "react-router-dom";
import bearSticker from "../assets/bear_sticker.webp";
import redDiscordLogo from "../assets/red_discord_logo.webp";
import redGramLogo from "../assets/red_gram_logo.webp";
import linkLogo from "../assets/link_logo.webp";

/** Opens the club calendar and offers to add it to the visitor's account. */
const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0?cid=Y183ZTVlNjhiODBiNThiZDQwMTA0ZDdhZmYzM2QzYzdkYjQwODg0YzRlNDk5Y2E3MDk4ZTA5YzJhZTUwZmFmMzk1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";

/** Drawn inline so it matches the red of the social logos without shipping a
 * new binary asset. The drawing is scaled to ~75% so its visual weight
 * matches the logos, which carry their own padding inside the 40px box. */
const CalendarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <g transform="translate(3 3) scale(0.75)">
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="var(--color-accent-bright)"
        strokeWidth="2"
      />
      <path d="M3 9.5h18" stroke="var(--color-accent-bright)" strokeWidth="2" />
      <path
        d="M8 3v4M16 3v4"
        stroke="var(--color-accent-bright)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 13h3M13.5 13h3M7.5 17h3M13.5 17h3"
        stroke="var(--color-accent-bright)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

/** The solid background is what keeps the matrix rain from showing through. */
const Footer = () => {
  return (
    <footer className="w-full pb-6 z-1000 bg-black">
      <hr className="border-t border-accent-bright mb-6" />
      {/* items-start keeps the columns at their natural height — they used to
          be pinned to h-[200px], which padded the whole footer with dead
          space on pages that had little content of their own. */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-5 justify-center">
        <img
          src={bearSticker}
          alt="Cyber@Cornell bear mascot"
          className="w-[120px] h-[120px] shrink-0 md:mx-10"
        />
        <div className="w-full max-w-[500px] p-[10px]">
          <p className="text-accent-bright text-lg">Connect</p>
          <p className="text-white">
            Stay connected with the latest Cyber@Cornell news and
            events
          </p>
          <div className="flex flex-wrap gap-6 md:gap-10 mt-4">
            <a
              href="https://discord.gg/5qbMGE97NE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={redDiscordLogo}
                alt="Discord"
                className="w-[40px] h-[40px]"
              />
            </a>
            <a
              href="https://www.instagram.com/cornellcyber/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={redGramLogo}
                alt="Instagram"
                className="w-[40px] h-[40px]"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/cornell-cybersecurity-club"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkLogo}
                alt="LinkedIn"
                className="w-[40px] h-[40px]"
              />
            </a>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cyber@Cornell club calendar"
              title="Club calendar"
            >
              <CalendarIcon />
            </a>
          </div>
        </div>
        <div className="w-full max-w-[500px] p-[10px] md:ml-10">
          <p className="text-accent-bright text-lg">Join</p>
          <Link
            to="/join"
            className="text-white underline underline-offset-2 transition-colors hover:text-accent-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            New member intake (open) →
          </Link>
        </div>
        <div className="w-full max-w-[500px] p-[10px]">
          <p className="text-accent-bright text-lg">Contact</p>
          <Link to="/contact">
            <span className="block text-white underline">Contact Us</span>
          </Link>
          <a href="mailto:cornellcyber@gmail.com">
            <span className="block text-white underline">cornellcyber@gmail.com</span>
          </a>
        </div>
      </div>
      {/* Boilerplate — set smaller than body copy so it reads as a footnote
          rather than a third of the footer. */}
      <div className="text-center text-sm text-cream/70 mt-8 px-4">
        <p>© {new Date().getFullYear()}. All rights reserved.</p>
        <p>
          This organization is a registered student organization of Cornell
          University.
        </p>
        <a
          href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Equal Education and Employment
        </a>
      </div>
    </footer>
  );
};

export default Footer;
