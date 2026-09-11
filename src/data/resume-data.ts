export const resumeData = {
  name: "Laura Tronchin",
  initials: "LT",
  role: "Full Stack Developer",
  location: "Berlin, Germany",
  availability: "Open to Full Stack opportunities",
  email: "tronchinlaura@gmail.com",
  phone: "015238568354",
  summary:
    "Full Stack Developer with 4+ years of experience building production web and mobile applications in complex product environments. Strong experience with React, TypeScript, scalable frontend architectures, API design, and backend integrations.",
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/laura-tronchin" },
    { label: "GitHub", href: "https://github.com/lauratro" },
  ],
  experience: [
    {
      period: "07/2022 — 06/2026",
      company: "The Key Technology GmbH · Berlin",
      role: "Full Stack Developer",
      description:
        "Developed and maintained scalable product features across 6 web applications and 2 mobile apps within a complex, interconnected software ecosystem.",
      highlights: [
        "React / React Native",
        "Scala / MongoDB",
        "GraphQL / REST APIs",
        "CI/CD",
      ],
    },
    {
      period: "12/2021 — 05/2022",
      company: "Kooku Recruiting Partners · Berlin",
      role: "Frontend Web Developer Intern",
      description:
        "Implemented the frontend interface of the company application using Vue.js and Tailwind CSS, collaborating with design and backend teams in an agile environment.",
      highlights: ["Vue.js", "Tailwind CSS", "Agile collaboration"],
    },
    {
      period: "09/2020 — 02/2021",
      company: "Conjuro Digital Marketing Agency · Berlin",
      role: "Freelance Web Designer",
      description:
        "Developed and maintained company websites using WordPress and CSS.",
      highlights: ["WordPress", "CSS", "Web design"],
    },
    {
      period: "02/2019 — 01/2020",
      company: "Plus Hostel and Hotel · Berlin",
      role: "Reservation Manager",
      description:
        "Managed the booking software and supported community management.",
      highlights: ["Booking software", "Community management"],
    },
    {
      period: "03/2015 — 01/2019",
      company: "Weinwirtschaft at Akademie der Künste · Berlin",
      role: "Restaurant Supervisor & Service Staff",
      description:
        "Provided customer service, handled cash transactions, and supported event coordination.",
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
    "Vue.js",
    "TypeScript",
    "Tailwind",
    "PrimeReact",
    "HTML",
    "CSS",
    "Scala",
    "Node.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST APIs",
    "Git",
    "GitHub Actions",
    "Docker",
  ],
  languages: [
    "Italian · Native",
    "English · Fluent",
    "German · Professional working proficiency (B2)",
    "Spanish · Intermediate",
  ],
  certifications: [
    "React · Codecademy",
    "JavaScript ES6–ES9 · Udemy",
    "JavaScript · Codecademy",
    "Web 2.0 · Business Trend Academy Berlin",
  ],
  projects: [
    {
      name: "Portfolio website",
      description:
        "A personal portfolio built with React, Gatsby, GraphQL and Netlify CMS.",
      tags: ["React", "Gatsby", "GraphQL"],
      href: "#",
    },
    {
      name: "FindMyPet App",
      description:
        "A MERN stack application using Cloudinary and the Google Maps API.",
      tags: ["MERN", "Cloudinary", "Google Maps API"],
      href: "#",
    },
  ],
} as const;
