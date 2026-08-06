import ActivityCard from "../components/ActivityCard";
import OutlinedCard from "../components/OutlinedCard";
import groupPhoto from "../assets/fa-25-teamphoto.webp";

/** Red banner used for the page title and the join call to action. */
const banner = "w-full max-w-2xl bg-[#FA2136] rounded-xl px-10 py-12";

const About = () => {
  return (
    // One gap here sets the rhythm between every section, so no section
    // carries its own margins.
    <div className="w-full min-h-screen text-[#E1DAD3] flex flex-col items-center gap-12 px-4 pt-20 pb-16 overflow-x-hidden">
      <section className={banner}>
        <h2 className="text-4xl text-[#0A0A0A] font-['Roboto_Mono']">
          What is the Cybersecurity Club?
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
        <h2 className="text-3xl tracking-wide font-['Roboto_Mono']">
          What We Do
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
          "In cybersecurity, Capture the Flag (CTF) competitions are exercises in
          which participants, either individually or as part of a team, are
          challenged to find and exploit vulnerabilities in a system to capture a
          'flag' or piece of information" (Filipkowski, 2024, p. 3).
        </ActivityCard>
      </section>

      <div className="w-full max-w-[1050px] flex flex-col md:flex-row gap-6 justify-center items-stretch">
        <OutlinedCard label="VR Team" className="w-full max-w-[500px]">
          The Vulnerability Research (VR) Team is dedicated towards discovering
          exploits and threats to computer infrastructure. The team is currently
          developing a fuzzer to find new vulnerabilities. Members also compete in
          CTFs.
        </OutlinedCard>

        <OutlinedCard label="SecDev Team" className="w-full max-w-[500px]">
          The Security Development (SecDev) Team researches how networks are
          compromised and how to defend them effectively. The team is currently
          developing a security suite to monitor and protect enterprise
          infrastructure. Members may also participate in competitions such as the
          National Collegiate Cyber Defense Competition (NCCDC).
        </OutlinedCard>
      </div>

      {/* --- JOIN SECTION --- */}
      <section className={`${banner} text-center`}>
        <h2 className="text-3xl text-[#0A0A0A] tracking-wide mb-6">
          READY TO JOIN?
        </h2>
        <span
          className="bg-gray-400 text-gray-700 px-6 py-2 rounded-full font-medium cursor-not-allowed inline-block"
          title="applications closed"
        >
          Join Us
        </span>
      </section>

      {/* --- GALLERY PLACEHOLDER SECTION — remove `hidden` when set --- */}
      <section className="w-11/12 md:w-4/5 lg:w-3/5 h-64 bg-[#D9D9D9] text-[#0A0A0A] rounded-md flex items-center justify-center hidden">
        <p className="tracking-wide text-sm">Gallery of pictures??</p>
      </section>

      {/* --- CORE VALUES (Square Bracket Style) — remove `hidden` when set --- */}
      <section className="w-full flex flex-col items-center gap-12 hidden">
        <h2 className="text-3xl tracking-wide font-['Roboto_Mono']">
          Core Values
        </h2>

        <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row items-center justify-between gap-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              {/* Bracket Icon Container */}
              <div className="relative flex items-center justify-center h-24 w-24 text-[#FA2136]">
                {/* left bracket */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-bold select-none">
                  [
                </span>

                {/* right bracket */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl font-bold select-none">
                  ]
                </span>

                {/* Inside text or icon */}
                <span className="text-xs uppercase tracking-widest">Icon</span>
              </div>

              {/* Description label */}
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-center">
                Expand On Value
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
