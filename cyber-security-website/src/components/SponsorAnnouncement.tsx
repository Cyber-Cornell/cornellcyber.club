import { Link } from "react-router-dom";
import "./SponsorAnnouncement.css";

const SponsorAnnouncement = () => (
  <div className="sponsor-dropdown">
    <div className="sponsor-dropdown-clip">
      <Link
        to="/sponsors"
        className="sponsor-announcement group relative mt-4 flex w-full items-center gap-4 border-t border-accent/30 px-1 pt-4 pb-1 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent hover:text-white"
      >
        <span aria-hidden="true" className="sponsor-signal h-2 w-2 shrink-0 rounded-full bg-accent" />
        <span className="flex-1">
          <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-cream/70">
            New partnership // Platinum sponsor
          </span>
          <span className="mt-1 block text-sm text-cream sm:text-base">
            Now backed by <strong className="text-white">ICR</strong>
          </span>
        </span>
        <span aria-hidden="true" className="text-accent-bright">↗</span>
        <span aria-hidden="true" className="sponsor-reflection">
          <span className="sponsor-halo" />
          <span className="sponsor-glint" />
        </span>
        <span className="sr-only"> — meet our platinum sponsor</span>
      </Link>
    </div>
  </div>
);

export default SponsorAnnouncement;
