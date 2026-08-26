export type ClubEvent = {
  name: string;
  /** Displayed as written, e.g. "September 8 // 5:30 PM // Location TBA". */
  date: string;
  description: string;
  featured?: boolean;
  href?: string;
  linkLabel?: string;
};

const EventCard = ({
  name,
  date,
  description,
  featured,
  href,
  linkLabel,
}: ClubEvent) => {
  return (
    <article
      className={`rounded-lg border-2 p-6 ${
        featured
          ? "border-accent bg-accent/10"
          : "border-muted/70 bg-black/85"
      }`}
    >
      {featured && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-accent-bright">
          Live now
        </p>
      )}
      <h3 className="text-accent-bright text-lg font-bold">{name}</h3>
      <p className="text-sm text-muted mb-4">{date}</p>
      <p className="text-cream">{description}</p>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center rounded-full bg-accent px-5 py-2.5 font-bold text-ink transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {linkLabel ?? "Learn more"} <span className="ml-2" aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
};

export default EventCard;
