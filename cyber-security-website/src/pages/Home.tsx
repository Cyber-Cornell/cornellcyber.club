import TextType from "../components/TextType";
import LearnMoreButton from "../components/LearnMoreButton";
import EventCard, { type ClubEvent } from "../components/EventCard";

const title = "Cyber@Cornell";
const titleTypingSpeed = 97;

// Add entries here to list events — each one renders as an <EventCard />, and
// a section only appears once its list is non-empty.
const plannedEvents: ClubEvent[] = [];
const archivedEvents: ClubEvent[] = [];

const Home = () => {
  // Hold the button back until the title has finished typing itself out.
  const buttonDelay = title.length * titleTypingSpeed + 80;

  return (
    <div className="w-full">
      {/* Hero — sized to the viewport rather than a magic pixel offset, so the
          events below start just past the fold on any screen. */}
      <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
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
        <div className="bg-accent rounded-xl py-10 mb-16 text-center">
          <h2 className="text-xl mb-4">Dare to Hack?</h2>
          <button
            className="bg-muted text-ink px-6 py-2 rounded-full font-semibold cursor-not-allowed"
            disabled
          >
            CTFs
          </button>
        </div>

        <h2 className="text-3xl mb-8 text-center">Planned Events</h2>

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

        {archivedEvents.length > 0 && (
          <>
            <h2 className="text-3xl mb-8 text-center">Archived Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {archivedEvents.map((event) => (
                <EventCard key={event.name} {...event} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
