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

export const RECRUITMENT_EVENTS: RecruitmentEvent[] = [];
