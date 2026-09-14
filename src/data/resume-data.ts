import { FaGithub, FaLinkedin } from "react-icons/fa";

export const resumeData = {
  name: "Laura Tronchin",
  initials: "LT",
  role: "Product-Oriented Full-Stack Engineer",
  location: "Berlin, Germany",
  availability: "Open to product-oriented full-stack opportunities",
  email: "tronchinlaura@gmail.com",
  phone: "015238568354",
  summary:
    "Product-oriented full-stack engineer with 4+ years of experience and frontend depth in React and TypeScript. Progressed from mentored delivery to primary implementation responsibility across six web applications and two React Native apps in a two-developer team. Combines a marketing background with hands-on delivery of user interfaces, backend services, data workflows and cross-platform integrations.",
  social: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/laura-tronchin",
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/lauratro",
      icon: FaGithub,
    },
  ],
  experience: [
    {
      period: "07/2022 — 06/2026",
      company: "The Key Technology GmbH · Berlin",
      role: "Full Stack Developer",
      details: [
        "Progressed to primary implementation responsibility during the final two years for a suite of six web applications and two React Native apps, excluding Salesforce integrations, in a two-developer team.",
        "Prevented duplicate course identifiers across two Salesforce-connected learning platforms by challenging a database-local validation design and implementing a cross-platform gRPC uniqueness check.",
        "Diagnosed recurring certificate failures in regulated medical education, tracing incorrect course identifiers and dates through historical course and submission data. Built MongoDB data converters and regenerated certificates for incidents typically involving about 2–50 users, sometimes more.",
        "Built course permissions, progression and certification workflows for a learning platform with more than 50,000 registered users and 40 live courses, including eligibility rules, blocked-course states and expiring-certificate views.",
        "Replaced developer intervention with an administrator self-service workflow that displayed course status and reset progress for users blocked after three failed attempts.",
        "Created assessment reporting for randomized question sets, mapping stored MongoDB answers back to course definitions to calculate answer exposure, correct responses and the most frequently selected wrong answers.",
        "Rebuilt the frontend of a separate application containing approximately 500 courses and created a backend service to query and sort each user's started courses.",
        "Implemented the frontend flow for administrator two-factor authentication, including QR-code enrolment, six-digit authenticator verification, recovery codes and error states.",
        "Reduced the path from the course dashboard to assessment questions from approximately four clicks to two after reviewing the navigation flow with the client.",
        "Implemented backend unit tests and maintained GitHub Actions workflows supporting build, release and deployment processes.",
      ],
      highlights: [
        "React / React Native",
        "Scala / MongoDB",
        "GraphQL / REST APIs / gRPC",
        "GitHub Actions",
      ],
    },
    {
      period: "12/2021 — 05/2022",
      company: "Kooku Recruiting Partners · Berlin",
      role: "Frontend Web Developer Intern",
      details: [
        "Implemented application interfaces with Vue.js and Tailwind CSS in collaboration with design and backend colleagues.",
      ],
      highlights: ["Vue.js", "Tailwind CSS", "Agile collaboration"],
    },
  ],
  previousExperience: [
    {
      period: "09/2020 — 02/2021",
      company: "Conjuro Digital Marketing Agency · Berlin",
      role: "Freelance Web Designer",
      details: [
        "Built and maintained company websites with WordPress and CSS.",
      ],
      highlights: ["WordPress", "CSS", "Web design"],
    },
    {
      period: "02/2019 — 01/2020",
      company: "Plus Hostel and Hotel · Berlin",
      role: "Reservation Manager",
      details: [
        "Managed the booking software and supported community management.",
      ],
      highlights: ["Booking software", "Community management"],
    },
    {
      period: "03/2015 — 01/2019",
      company: "Weinwirtschaft at Akademie der Künste · Berlin",
      role: "Restaurant Supervisor & Service Staff",
      details: [
        "Provided customer service, handled cash transactions, and supported event coordination.",
      ],
      highlights: ["Customer service", "Event coordination"],
    },
  ],
  education: [
    {
      period: "03/2021 — 07/2021",
      school: "Code Academy Berlin",
      degree:
        "Full Stack Web Development · React, Gatsby, GraphQL, Netlify CMS",
    },
    {
      period: "02/2020 — 06/2020",
      school: "Business Trend Academy · Berlin",
      degree: "Online Marketing Manager · SEO, SEA, SMO, HTML, CSS",
    },
    {
      period: "09/2010 — 02/2013",
      school: "Ca’ Foscari University of Venice, Italy",
      degree: "Master’s Degree in Marketing and Communication",
    },
  ],
  skills: [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Vue.js",
    "Tailwind CSS",
    "PrimeReact",
    "Mantine UI",
    "Recharts",
    "HTML",
    "CSS",
    "Scala",
    "Node.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "GraphQL",
    "REST APIs",
    "gRPC",
    "Git",
    "GitHub Actions",
    "Docker",
    "Jest",
    "Vitest",
    "React Testing Library",
    "Google Gen AI SDK",
    "Gemini function calling",
  ],
  languages: [
    "Italian · Native",
    "English · B2",
    "German · B2",
    "Spanish · B1",
  ],
  certifications: [
    "Web 2.0 · Business Trend Academy Berlin",
    "Online Marketing Manager · Business Trend Academy Berlin",
  ],
  projects: [
    {
      name: "Personal Finance Tracker",
      description:
        "An authenticated React and NestJS application for tracking net worth and investments through yearly charts and a configurable dashboard whose widget layout persists for each user. Includes two predefined, user-scoped Gemini tools for financial analysis, frontend and backend tests, Docker Compose, and separate GitHub Actions CI workflows.",
      tags: ["React", "NestJS", "PostgreSQL", "Prisma", "Gemini"],
      href: "https://github.com/lauratro/personal-finance-tracker",
    },
  ],
} as const;
