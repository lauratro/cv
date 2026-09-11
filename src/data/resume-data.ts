export const resumeData = {
  name: "Laura T.",
  initials: "LT",
  role: "Product designer & frontend developer",
  location: "Milan, Italy",
  availability: "Available for selected projects",
  email: "hello@laurat.dev",
  phone: "+39 333 000 0000",
  summary:
    "I turn complex ideas into clear digital experiences. My work sits between product strategy, visual systems and thoughtful frontend implementation.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
  ],
  experience: [
    {
      period: "2023 — now",
      company: "Northstar Studio",
      role: "Product designer & frontend developer",
      description:
        "Partnering with early-stage teams to shape products from the first sketch to a polished, shipped experience.",
      highlights: ["Design systems", "React / TypeScript", "Product direction"],
    },
    {
      period: "2020 — 2023",
      company: "Atelier Digital",
      role: "Senior UX designer",
      description:
        "Led the design practice across a portfolio of editorial, culture and commerce projects with distributed teams.",
      highlights: ["Research", "Prototyping", "Team mentorship"],
    },
    {
      period: "2017 — 2020",
      company: "Independent",
      role: "Designer / developer",
      description:
        "Built flexible identities and lightweight websites for people doing ambitious, useful work.",
      highlights: ["Brand systems", "Web direction", "Creative coding"],
    },
  ],
  education: [
    {
      period: "2014 — 2017",
      school: "Politecnico di Milano",
      degree: "Communication design",
    },
    {
      period: "2016",
      school: "Aalto University",
      degree: "Exchange, digital media",
    },
  ],
  skills: [
    "Figma",
    "TypeScript",
    "React",
    "Next.js",
    "Design systems",
    "Prototyping",
    "Accessibility",
    "Storytelling",
  ],
  projects: [
    {
      number: "01",
      name: "Marea",
      description:
        "A calm, collaborative space for planning slow travel and shared time.",
      tags: ["Product", "UX / UI"],
      href: "#",
    },
    {
      number: "02",
      name: "Common Ground",
      description:
        "A visual identity and digital home for a community of independent makers.",
      tags: ["Identity", "Web"],
      href: "#",
    },
    {
      number: "03",
      name: "Field Notes",
      description:
        "An open archive of observations, references and small experiments.",
      tags: ["Editorial", "Open source"],
      href: "#",
    },
  ],
} as const;
