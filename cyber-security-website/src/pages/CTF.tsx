import EventCard, { type ClubEvent } from "../components/EventCard";

// Add entries here to list events — each one renders as an <EventCard />, and
// a section only appears once its list is non-empty.
const plannedEvents: ClubEvent[] = [];
const archivedEvents: ClubEvent[] = [];

const CTF = () => {
  return (
    // Full-width page breakout (keeps working even inside a max-w layout)
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen min-h-screen text-white font-['Roboto_Mono']">
      <div className="px-6 py-12 max-w-6xl mx-auto">
        {/* Dare to Hack Section */}
        <div className="bg-[#d64040] rounded-xl py-10 mb-16 mt-16 text-center">
          <h2 className="text-xl mb-4">Dare to Hack?</h2>
          <button
            className="bg-gray-400 text-gray-700 px-6 py-2 rounded-full font-semibold cursor-not-allowed"
            disabled
          >
            CTFs
          </button>
        </div>

        {/* Planned Events */}
        <h2 className="text-3xl mb-8 text-center">Planned Events</h2>

        {plannedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {plannedEvents.map((event) => (
              <EventCard key={event.name} {...event} />
            ))}
          </div>
        ) : (
          <div className="border border-gray-400 rounded-xl p-6 mb-20 text-center">
            <p className="text-gray-400">no upcoming events — check back soon!</p>
          </div>
        )}

        {/* Archived Events */}
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
      </div>
    </div>
  );
};

export default CTF;
