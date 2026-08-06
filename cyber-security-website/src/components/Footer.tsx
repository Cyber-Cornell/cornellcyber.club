import { Link } from "react-router-dom";
import bearSticker from "../assets/bear_sticker.webp";
import redDiscordLogo from "../assets/red_discord_logo.webp";
import redGramLogo from "../assets/red_gram_logo.webp";
import linkLogo from "../assets/link_logo.webp";

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
          <p className="text-accent-bright text-lg"> Connect </p>
          <p className="text-white">
            Stay connected with the latest Cyber@Cornell news and
            events
          </p>
          <div className="flex gap-10 mt-4">
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
          </div>
        </div>
        <div className="w-full max-w-[500px] p-[10px] md:ml-10">
          <p className="text-accent-bright text-lg"> Join </p>
          <p
            className="text-muted cursor-not-allowed"
            title="applications closed"
          >
            New member intake (closed)
          </p>
        </div>
        <div className="w-full max-w-[500px] p-[10px]">
          <p className="text-accent-bright text-lg"> Contact </p>
          <Link to="/contact">
            <p className="text-white underline"> Contact Us</p>
          </Link>
          <a href="mailto:cornellcyber@gmail.com">
            <p className="text-white underline"> cornellcyber@gmail.com</p>
          </a>
        </div>
      </div>
      {/* Boilerplate — set smaller than body copy so it reads as a footnote
          rather than a third of the footer. */}
      <div className="text-center text-sm text-cream/70 mt-8 px-4">
        <p>© 2025. All rights reserved.</p>
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
