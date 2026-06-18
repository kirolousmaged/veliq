export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    initials: "AH",
    bio: "Visionary leader with 10+ years in digital strategy, driving VELIQ's mission to empower businesses through technology.",
  },
  {
    name: "Nour El-Din",
    role: "CTO",
    initials: "NE",
    bio: "Architect of scalable systems and emerging tech enthusiast, turning complex challenges into elegant solutions.",
  },
  {
    name: "Sara Mahmoud",
    role: "Lead Designer",
    initials: "SM",
    bio: "Crafting pixel-perfect interfaces that balance beauty with usability, obsessed with every detail of the user experience.",
  },
  {
    name: "Omar Khalil",
    role: "Head of Marketing",
    initials: "OK",
    bio: "Data-driven marketer who transforms insights into high-impact campaigns that deliver measurable growth.",
  },
  {
    name: "Yasmine Ali",
    role: "Full-Stack Developer",
    initials: "YA",
    bio: "End-to-end builder who brings ideas to life across the entire stack, from databases to dynamic frontends.",
  },
];
