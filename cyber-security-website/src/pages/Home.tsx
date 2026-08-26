import TextType from "../components/TextType";
import LearnMoreButton from "../components/LearnMoreButton";
import EventCard, { type ClubEvent } from "../components/EventCard";
import { APPLICATION_URL, RECRUITMENT_EVENTS } from "../data/recruitment";

const title = "Cyber@Cornell";
const titleTypingSpeed = 97;

// Recruitment dates share their source with the Join page so status, times,
// and locations cannot drift between the two pages.
const plannedEvents: ClubEvent[] = RECRUITMENT_EVENTS.map((event) => ({
  name: event.title,
  date: [event.date, event.time, event.location].filter(Boolean).join(" // "),
  description: event.description,
  featured: event.active,
  href: event.active ? APPLICATION_URL : undefined,
  linkLabel: event.active ? "Apply now" : undefined,
}));
const Home = () => {
  // Hold the button back until the title has finished typing itself out.
  const buttonDelay = title.length * titleTypingSpeed + 80;

  return (
    <div className="w-full">
      {/* Hero — sized to the viewport rather than a magic pixel offset, so the
          events below start just past the fold on any screen. */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
        <div className="mb-8 w-full max-w-2xl rounded-xl border-2 border-accent bg-black/85 p-5 md:flex md:items-center md:justify-between md:gap-6 md:p-6">
          <div className="mb-4 text-left md:mb-0">
            <p className="mb-1 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-accent-bright">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
              Applications are open
            </p>
            <p className="text-sm text-cream md:text-base">
              Join Cyber@Cornell. Applications close September 16.
            </p>
          </div>
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-6 py-3 font-bold text-ink transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Apply now <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
        <TextType
          text={[title]}
          typingSpeed={titleTypingSpeed}
          pauseDuration={0}
          loop={false}
          showCursor={true}
          cursorCharacter="_"
          className="hero-title text-white mb-2"
        />
        <LearnMoreButton delay={buttonDelay} />
      </section>

      <section className="px-6 pb-12 max-w-6xl mx-auto text-white">
        <h2 className="text-3xl mb-8 text-center">planned events</h2>

        {plannedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {plannedEvents.map((event) => (
              <EventCard key={event.name} {...event} />
            ))}
          </div>
        ) : (
          <div className="border border-muted rounded-xl p-6 mb-20 text-center">
            <p className="text-muted">no upcoming events — check back soon!</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
