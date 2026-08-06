import TeamMemberCard, { type TeamMember } from "../components/TeamMemberCard";
import PageHeading from "../components/PageHeading";
import ramanHeadshot from "../assets/raman_headshot.webp";
import jakobHeadshot from "../assets/jakob_headshot.webp";
import camHeadshot from "../assets/cam_headshot2.webp";
import parthHeadshot from "../assets/parth_headshot.webp";
import billHeadshot from "../assets/bill_headshot3.webp";
import busterHeadshot from "../assets/buster_headshot.webp";
import jackHeadshot from "../assets/jack_headshot.webp";
import alexHeadshot from "../assets/alex_headshot.webp";
import jayHeadshot from "../assets/jay_headshot.avif";
import noahHeadshot from "../assets/noah_headshot.avif";

const officers: TeamMember[] = [
  {
    name: "Raman Khanal",
    role: "President",
    headshot: ramanHeadshot,
    major: "Computer Science",
    email: "rk677@cornell.edu",
    linkedin: "https://www.linkedin.com/in/ramankhanal/",
  },
  {
    name: "Jakob Nacanaynay",
    role: "Vice President",
    headshot: jakobHeadshot,
    major: "ECE",
    email: "jn567@cornell.edu",
    linkedin: "https://www.linkedin.com/in/jakob-nacanaynay-a93706213",
  },
  {
    name: "Cam Mazzacane",
    role: "Treasurer",
    headshot: camHeadshot,
    major: "CS and Math",
    email: "clm357@cornell.edu",
    linkedin: "https://www.linkedin.com/in/cam-mazzacane",
  },
  {
    name: "Parth Mittal",
    role: "Education Officer",
    headshot: parthHeadshot,
    major: "Computer Science",
    email: "pm653@cornell.edu",
    linkedin: "https://www.linkedin.com/in/parth-mittal-o6/",
  },
  {
    name: "Bill Nguyen",
    role: "VR Director",
    headshot: billHeadshot,
    major: "Chemical Engineering",
    email: "nn347@cornell.edu",
    linkedin: "https://www.linkedin.com/in/bill-nguyen-0b1878333/",
  },
  {
    name: "Buster Coden",
    role: "SecDev Director",
    headshot: busterHeadshot,
    major: "Computer Science",
    email: "bc678@cornell.edu",
    linkedin: "https://www.linkedin.com/in/buster-coden",
  },
  {
    name: "Jack Britton",
    role: "Recruitment Officer",
    headshot: jackHeadshot,
    major: "ILR",
    email: "jxb4@cornell.edu",
    linkedin: "https://www.linkedin.com/in/jack-britton-a93282245",
  },
  {
    name: "Alexander Schneider",
    role: "External Affairs",
    headshot: alexHeadshot,
    major: "Computer Science",
    email: "as4276@cornell.edu",
    linkedin: "https://www.linkedin.com/in/alexander-schneider-95376a2b2/",
  },
];

const advisors: TeamMember[] = [
  {
    name: "James Warne",
    role: "Industry Advisor",
    headshot: jayHeadshot,
    tallPhoto: true,
  },
  {
    name: "Noah Stephens-Davidowitz",
    role: "Faculty Advisor",
    headshot: noahHeadshot,
    tallPhoto: true,
  },
];

/** Caps each row at three cards (3 × 350px card + 2 × 20px gap + padding). */
const cardGrid =
  "flex md:flex-row flex-wrap gap-5 justify-center items-center mt-5 max-w-[1150px] mx-auto px-4";

const Team = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden pb-24">
      <div className="text-center py-10 px-5 max-w-4xl mx-auto">
        <PageHeading>meet our team</PageHeading>
      </div>

      <div className={cardGrid}>
        {officers.map((officer) => (
          <TeamMemberCard key={officer.name} {...officer} />
        ))}
      </div>

      <PageHeading showCursor={false}>meet our advisors</PageHeading>

      <div className={cardGrid}>
        {advisors.map((advisor) => (
          <TeamMemberCard key={advisor.name} {...advisor} />
        ))}
      </div>
    </div>
  );
};

export default Team;
