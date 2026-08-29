import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "EverAfter",
    description:
      "Memory preservation platform allowing users to organize life experiences into meaningful collections with modern responsive UI and TypeScript architecture.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    liveUrl: "https://everafter-ocel.onrender.com",
    githubUrl: "#",
    caseStudyUrl: "/case-study/everafter",
  },
  {
    id: 2,
    title: "Enterprise Auth System",
    description:
      "Production-ready authentication system featuring email verification, password reset, JWT authentication, protected routes, Zustand state management, and secure session persistence.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Mailtrap",
      "Zustand",
    ],
    liveUrl: "https://enterprise-auth-system-3y2i.onrender.com",
    githubUrl: "https://github.com/frankoadeleye/enterprise-auth-system",
    caseStudyUrl:
      "https://github.com/frankoadeleye/enterprise-auth-system#readme",
  },
];
