import { useEffect, type CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";
import OutlinedCard from "../components/OutlinedCard";
import groupPhoto from "../assets/fa-25-teamphoto.webp";

/** Red banner used for the page title and the join call to action. */
const banner = "w-full max-w-2xl bg-accent rounded-xl px-10 py-12";

/** Team cards that can be deep-linked, e.g. `#/about#vulnerability-research`. */
const LINKABLE_TEAM_SECTIONS: readonly string[] = [
  "security-development",
  "vulnerability-research",
];

/** Small `#` affordance that makes a card's URL copyable. */
const anchorLink = (id: string, label: string) => (
  <Link
    to={`/about#${id}`}
    aria-label={`Link directly to the ${label} section`}
    title="Link to this team"
    className="absolute right-4 top-4 text-sm text-muted transition-colors hover:text-accent-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
  >
    #
  </Link>
);

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    if (!LINKABLE_TEAM_SECTIONS.includes(id)) return;
    // requestAnimationFrame so this runs after the app-wide ScrollToTop
    // effect when navigating in from another page.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      target.classList.add("team-card-flash");
      window.setTimeout(
        () => target.classList.remove("team-card-flash"),
        1800,
      );
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);
  return (
    // One gap here sets the rhythm between every section, so no section
    // carries its own margins.
    <div className="w-full min-h-screen text-cream flex flex-col items-center gap-12 px-4 pt-20 pb-16 overflow-x-hidden">
      <section className={banner}>
        <h2 className="text-4xl text-ink font-['Roboto_Mono'] flex items-center gap-0.5">
          what is Cyber@Cornell?
          <span className="cursor-blink" aria-hidden="true">_</span>
        </h2>
      </section>

      <div className="w-full max-w-[1050px] flex flex-col md:flex-row gap-6 justify-center items-center">
        <OutlinedCard label="About Us" className="w-full max-w-[700px]">
          We are Cornell University's only student organization for
          cybersecurity, offering an exhaustive cybersecurity curriculum for
          both beginners and experienced individuals. Topics range from binary
          exploitation to cryptography, reverse engineering, and more.
        </OutlinedCard>
        <img
          src={groupPhoto}
          alt="Cyber@Cornell members, Fall 2025"
          className="w-[300px] h-[200px] object-cover rounded-lg"
        />
      </div>

      <section className="w-full flex flex-col items-center gap-6">
        <h2 className="text-3xl tracking-wide text-white md:text-4xl">
          what we do
        </h2>
        <ActivityCard title="Education">
          We host weekly technical workshops for our members to learn new skills
          and put their knowledge to the test.
        </ActivityCard>

        <ActivityCard title="Competition">
          CTF competitions both give members practice in exploiting systems and
          are fun exercises. Our club regularly participates in competitions
          throughout the year.
        </ActivityCard>

        <ActivityCard title="What is a CTF?">
          A Capture the Flag (CTF) competition is a security contest where
          teams race to solve challenges — exploiting websites, cracking
          cryptography, reversing binaries — to capture hidden flags. It is
          the sport behind everything we do.
        </ActivityCard>
      </section>

      <section className="w-full max-w-[1200px]" aria-labelledby="teams-heading">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-bright">
            Build // defend // break
          </p>
          <h2 id="teams-heading" className="text-3xl tracking-wide text-white md:text-4xl">
            our two teams
          </h2>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          <article
            id="security-development"
            className="overflow-hidden rounded-lg border-2 border-team-blue bg-black/85"
            style={{ "--flash-color": "var(--color-team-blue)" } as CSSProperties}
          >
            <header className="relative border-b border-team-blue/50 bg-team-blue/10 px-6 py-6">
              {anchorLink("security-development", "Security Development")}
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-team-blue-bright">
                Blue team // build + defend
              </p>
              <h3 className="text-2xl font-bold text-team-blue-bright md:text-3xl">
                Security Development
              </h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-cream">
                SecDev + CCDC
              </p>
            </header>

            <div className="space-y-8 p-6 leading-relaxed">
              <section aria-labelledby="secdev-heading">
                <h4 id="secdev-heading" className="mb-3 text-xl font-bold text-team-blue-bright">
                  Security Development
                </h4>
                <p>
                  The Security Development subteam builds a security program for
                  hardening and administering Linux servers. The tooling we develop
                  is used in competitions like CCDC, where teams defend live
                  infrastructure against active attackers.
                </p>
                <p className="mt-4">
                  Each year, the team develops a new component for the program.
                  Members write code together and gain hands-on experience with
                  servers and security tooling. Prior programming experience is
                  required, but no cybersecurity background is necessary.
                </p>
              </section>

              <section className="border-t border-team-blue/35 pt-7" aria-labelledby="ccdc-heading">
                <h4 id="ccdc-heading" className="mb-3 text-xl font-bold text-team-blue-bright">
                  CCDC Competition Team
                </h4>
                <p>
                  CCDC is a subset of the Security Development team. Members work
                  on the SecDev project and compete in red-vs-blue competitions,
                  defending a simulated corporate network from live attacks.
                </p>
                <p className="mt-4">Members specialize in one of three operating-system subteams:</p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3" aria-label="CCDC subteams">
                  {[
                    "Linux",
                    "Windows",
                    "Networking",
                  ].map((subteam) => (
                    <li
                      key={subteam}
                      className="rounded-lg border border-team-blue/60 bg-team-blue/10 px-3 py-2 text-center font-bold text-team-blue-bright"
                    >
                      {subteam}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Prior security experience is not required, but applicants should
                  have experience with the operating system of the subteam they
                  choose. Setting up a pfSense router or a small homelab are good
                  examples of the experience we look for.
                </p>
                <p className="mt-4">
                  CCDC members should expect a larger workload than members working
                  only on SecDev, along with substantially more hands-on experience.
                </p>
              </section>
            </div>
          </article>

          <article
            id="vulnerability-research"
            className="overflow-hidden rounded-lg border-2 border-accent bg-black/85"
            style={{ "--flash-color": "var(--color-accent)" } as CSSProperties}
          >
            <header className="relative border-b border-accent/50 bg-accent/10 px-6 py-6">
              {anchorLink("vulnerability-research", "Vulnerability Research")}
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-bright">
                Red team // find + exploit
              </p>
              <h3 className="text-2xl font-bold text-accent-bright md:text-3xl">
                Vulnerability Research
              </h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-cream">
                VR + Capture The Flag
              </p>
            </header>

            <div className="space-y-8 p-6 leading-relaxed">
              <section aria-labelledby="vr-heading">
                <h4 id="vr-heading" className="mb-3 text-xl font-bold text-accent-bright">
                  Vulnerability Research
                </h4>
                <p>
                  We are Cornell&apos;s first and only student-led vulnerability research group.
                  We break software through reverse engineering, binary
                  exploitation, and fuzzing—and teach beginners from the ground up.
                  No prior research experience is necessary.
                </p>
              </section>

              <section className="border-t border-accent/35 pt-7" aria-labelledby="ctf-heading">
                <h4 id="ctf-heading" className="mb-3 text-xl font-bold text-accent-bright">
                  Capture The Flag
                </h4>
                <p>
                  We also play lots of Capture The Flag competitions: 24–48 hour
                  events where teams solve security challenges to recover flags.
                  The main categories include:
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2" aria-label="CTF categories">
                  {[
                    "Website Exploitation / Web",
                    "Reverse Engineering / Rev",
                    "Cryptography / Crypto",
                    "Binary Exploitation / Pwn",
                  ].map((category) => (
                    <li
                      key={category}
                      className="rounded-lg border border-accent/60 bg-accent/10 px-3 py-2 text-center font-bold text-accent-bright"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  These competitions are a standard proving ground in security:
                  fast feedback, real tooling, and problems built from techniques
                  used in actual vulnerability research. Prior CTF experience or
                  familiarity with its challenge style is recommended, but not
                  required.
                </p>
                <p className="mt-4">
                  Want to get started? Try beginner challenges at{" "}
                  <a
                    href="https://www.cylabacademy.org/learners.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-accent-bright underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    CyLab Security Academy
                  </a>{" "}
                  or find an upcoming competition on{" "}
                  <a
                    href="https://ctftime.org/event/list/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-accent-bright underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    CTFtime
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        </div>
      </section>

      {/* --- JOIN SECTION --- */}
      <section className={`${banner} text-center`}>
        <h2 className="text-3xl text-ink tracking-wide mb-6">
          ready to join?
        </h2>
        <Link
          to="/join"
          className="inline-block rounded-full bg-ink px-6 py-3 font-bold text-white transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          Join Us
        </Link>
      </section>
    </div>
  );
};

export default About;
