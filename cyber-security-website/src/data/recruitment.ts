export const APPLICATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdEf-TPeizAzarLDvpmxo9VZdWhowzoy6z0txOG4lEKzgC6bg/viewform";

export type RecruitmentEvent = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  active?: boolean;
  current?: boolean;
};

export const RECRUITMENT_EVENTS: RecruitmentEvent[] = [
  {
    title: "Applications are open",
    date: "August 26",
    description: "Applications are live. Tell us what excites you about cybersecurity and what you want to build with us.",
  },
  {
    title: "Info Session #1",
    date: "September 8",
    time: "5:30 PM",
    location: "Hollister 306",
    description: "Meet the team, hear about our projects, and learn what the application process looks like.",
  },
  {
    title: "Info Session #2",
    date: "September 10",
    time: "5:30 PM",
    location: "Hollister 368",
    description: "A second chance to meet the team, explore our work, and ask questions before applying.",
  },
  {
    title: "Rolling interviews",
    date: "September 8–16",
    description: "We interview selected applicants on a rolling basis throughout the window — apply early to hear back sooner.",
  },
  {
    title: "Applications are closed",
    date: "Today",
    description: "Applications have closed. Please email us if you are still interested in joinning",
    current: true,
  },
];
