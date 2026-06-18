export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  gradient: string;
  bio: string;
  socials: { linkedin?: string; twitter?: string };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    initials: "AH",
    gradient: "from-indigo-500 to-purple-500",
    bio: "Visionary leader with 10+ years in digital strategy, driving VELIQ's mission to empower businesses through technology.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Nour El-Din",
    role: "CTO",
    initials: "NE",
    gradient: "from-purple-500 to-pink-500",
    bio: "Architect of scalable systems and emerging tech enthusiast, turning complex challenges into elegant solutions.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sara Mahmoud",
    role: "Lead Designer",
    initials: "SM",
    gradient: "from-cyan-500 to-blue-500",
    bio: "Crafting pixel-perfect interfaces that balance beauty with usability, obsessed with every detail of the user experience.",
    socials: { linkedin: "#" },
  },
  {
    name: "Omar Khalil",
    role: "Head of Marketing",
    initials: "OK",
    gradient: "from-emerald-500 to-teal-500",
    bio: "Data-driven marketer who transforms insights into high-impact campaigns that deliver measurable growth.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Yasmine Ali",
    role: "Full-Stack Developer",
    initials: "YA",
    gradient: "from-orange-500 to-amber-500",
    bio: "End-to-end builder who brings ideas to life across the entire stack, from databases to dynamic frontends.",
    socials: { linkedin: "#" },
  },
];
