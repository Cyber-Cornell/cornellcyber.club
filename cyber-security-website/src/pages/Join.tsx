import "./Join.css";
import cybear from "../assets/cybear.jpeg";
import { APPLICATION_URL, RECRUITMENT_EVENTS } from "../data/recruitment";

const Join = () => {
  return (
    <div className="join-page">
      <header className="join-hero">
        <div className="join-hero-copy">
          <p className="join-status">
            <span className="join-status-dot" aria-hidden="true" />
            Applications are open
          </p>
          <h1>
            become a <span>cybear.</span>
            <span className="join-heading-cursor cursor-blink" aria-hidden="true">_</span>
          </h1>
          <p className="join-intro">
            Learn, build, and break things with Cornell&apos;s cybersecurity community.
            Applications are open now through September 16.
          </p>
          <a
            className="join-apply-button"
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start your application <span aria-hidden="true">↗</span>
          </a>
          <p className="join-deadline">Deadline // September 16</p>
        </div>

        <div className="join-hero-art" aria-hidden="true">
          <img src={cybear} alt="" />
        </div>
      </header>

      <section className="major-events" aria-labelledby="major-events-heading">
        <div className="major-events-heading">
          <div>
            <p className="section-kicker">Fall recruitment // timeline</p>
            <h2 id="major-events-heading">major events</h2>
          </div>
          <p>Everything you need to know, in order.</p>
        </div>

        <ol className="recruitment-timeline">
          {RECRUITMENT_EVENTS.map((event, index) => (
            <li className={`recruitment-event ${event.active ? "is-active" : ""}`} key={event.title}>
              <div className="event-marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <article className="event-card">
                <div className="event-card-heading">
                  <div>
                    {event.active && <p className="event-live-label">Live now</p>}
                    <h3>{event.title}</h3>
                  </div>
                  <p className="event-date">{event.date}</p>
                </div>
                {(event.time || event.location) && (
                  <p className="event-details">
                    {[event.time, event.location].filter(Boolean).join(" // ")}
                  </p>
                )}
                <p className="event-description">{event.description}</p>
                {event.active && (
                  <a href={APPLICATION_URL} target="_blank" rel="noopener noreferrer">
                    Open application <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Join;
