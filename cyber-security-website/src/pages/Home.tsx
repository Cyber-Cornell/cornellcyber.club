import TextType from "../components/TextType";
import LearnMoreButton from "../components/LearnMoreButton";
import EventCard, { type ClubEvent } from "../components/EventCard";
import { RECRUITMENT_EVENTS } from "../data/recruitment";
import SponsorAnnouncement from "../components/SponsorAnnouncement";

const title = "Cyber@Cornell";
const titleTypingSpeed = 97;

// Recruitment dates share their source with the Join page so status, times,
// and locations cannot drift between the two pages.
const plannedEvents: ClubEvent[] = [
  {
    name: "The Lifecycle of a Vulnerability",
    date: "October 19 // 6–7 PM // Malott 203",
    description:
      "Join Jay Warne, Co-Founder of RSTCON, and the Cornell Cyber Club for a technical talk following the life of a vulnerability from invention to 0-day, exploit development, and delivery. Learn how systems-level knowledge helps you defend against threats, debug complex software, and build more secure systems.",
  },
  ...RECRUITMENT_EVENTS.map((event) => ({
    name: event.title,
    date: [event.date, event.time, event.location].filter(Boolean).join(" // "),
    description: event.description,
    featured: event.current,
  })),
];
const Home = () => {
  // Hold the button back until the title has finished typing itself out.
  const buttonDelay = title.length * titleTypingSpeed + 80;

  return (
    <div className="w-full">
      {/* Hero — sized to the viewport rather than a magic pixel offset, so the
          events below start just past the fold on any screen. */}
      <section className="flex flex-col items-center justify-start text-center min-h-[80vh] px-4 pt-[8vh] pb-12">
        <div className="mb-8 w-full max-w-2xl rounded-lg border border-accent/70 bg-black/75 px-5 py-4">
          <div className="text-left">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Applications are closed
            </p>
            <p className="text-sm text-cream md:text-base">
              Applications have closed. If you are still interested in joining, please{" "}
              <a
                href="mailto:cornellcyber@gmail.com"
                className="font-medium text-accent-bright underline decoration-dotted underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                reach out to us via email
              </a>
              .
            </p>
          </div>
          <SponsorAnnouncement />
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
          <div className="border border-accent/40 rounded-xl p-6 mb-20 text-center">
            <p className="text-cream">we will host events later in the semester, check back later!</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
