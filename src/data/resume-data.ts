import { FaGithub, FaLinkedin } from "react-icons/fa";

export const resumeData = {
  name: "Laura Tronchin",
  initials: "LT",
  role: "Product-Oriented Full-Stack Engineer",
  location: "Berlin, Germany",
  availability: "Open to product-oriented full-stack opportunities",
  email: "tronchinlaura@gmail.com",
  website: "https://cv.lauratronchin.com/",
  summary:
    "Product-oriented full-stack engineer with frontend depth in React and TypeScript and a background in marketing. Progressed to primary implementation responsibility across six web applications and two React Native apps, delivering user-facing features, backend services and data workflows for learning platforms serving more than 50,000 registered users.",
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
        "Owned features end-to-end as primary developer for six web applications and two React Native apps in a two-developer team, from clarifying requirements with the client through implementation, testing and release.",
        "Built bidirectional Salesforce synchronization for users, modules and learning results across gRPC-connected Scala backend services, covering create, update and delete flows, including a cross-platform uniqueness check that prevented duplicate module identifiers.",
        "Developed integration tests across numerous Scala/Play backend services using ScalaTest, Guice and MongoDB, covering CRUD operations, business logic and error handling.",
        "Investigated and resolved certificate errors in regulated medical education, tracing root causes through historical course and submission data, correcting affected records and regenerating certificates.",
        "Built permissions, progression and certification workflows for a learning platform with 50,000+ users and ~500 courses, including eligibility rules, blocked-course states and expiring-certificate views.",
        "Implemented Figma designs for a separate platform with ~500 courses, including a rebuilt production dashboard; reduced its load time from ~7 s to 2 s by optimizing MongoDB indexes and adding progressive skeleton states.",
        "Created assessment reporting for randomized question sets, calculating answer exposure, correct responses and the most frequently selected wrong answers from stored MongoDB data.",
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
        "Built the chart views for an internal recruiting analytics application, visualizing recruiter contact volumes, candidates reaching final interview rounds and candidate drop-off by hiring stage.",
        "Translated designer-provided page designs into Vue.js and Tailwind CSS interfaces, including a client-filtering landing page with selectors and dropdowns; the delivered workflow and reporting views were used by the recruiting team.",
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
      company: "Weinwirtschaft (Akademie der Künste) · Berlin",
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
  skillGroups: [
    {
      category: "Frontend",
      description: "Web and mobile interfaces",
      skills: [
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Vue.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "PrimeReact",
        "Mantine UI",
      ],
    },
    {
      category: "Backend & data",
      description: "Services, APIs and persistence",
      skills: [
        "Scala",
        "Play Framework",
        "Node.js",
        "NestJS",
        "REST APIs",
        "GraphQL",
        "gRPC",
      ],
    },
    {
      category: "Databases & ORM",
      description: "Data storage and object-relational mapping",
      skills: ["MongoDB", "PostgreSQL", "Prisma"],
    },
    {
      category: "Testing",
      description: "Automated and integration testing",
      skills: [
        "ScalaTest",
        "Integration Testing",
        "Jest",
        "Vitest",
        "React Testing Library",
      ],
    },
    {
      category: "Architecture & Design",
      description: "Application structure and design patterns",
      skills: [
        "Dependency Injection (Guice)",
        "Plugin-based Architecture",
        "Service Layer",
        "Typed Domain Models",
      ],
    },
    {
      category: "Development & CI/CD",
      description: "Version control, automation and containers",
      skills: [
        "Git",
        "GitHub Actions",
        "Docker",
      ],
    },
    {
      category: "AI Integration",
      description: "AI-powered product features",
      skills: ["Google Gen AI SDK", "Gemini Function Calling"],
    },
  ],
  languages: [
    "Italian (native)",
    "English (B2)",
    "German (B2)",
    "Spanish (B1)",
  ],
  certifications: [] as readonly { name: string; issuer: string }[],
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

export type ResumeData = typeof resumeData;

export const resumeDataDe = {
  ...resumeData,
  role: "Produktorientierte Full-Stack-Entwicklerin",
  location: "Berlin, Deutschland",
  availability: "Offen für produktorientierte Full-Stack-Positionen",
  summary:
    "Produktorientierte Full-Stack-Entwicklerin mit Frontend-Schwerpunkt in React und TypeScript sowie einem Hintergrund im Marketing. Übernahm die primäre Implementierungsverantwortung für sechs Webanwendungen und zwei React-Native-Apps und entwickelte Benutzerfunktionen, Backend-Services und Datenprozesse für Lernplattformen mit mehr als 50.000 registrierten Nutzenden.",
  experience: [
    {
      period: "07.2022 – 06.2026",
      company: "The Key Technology GmbH · Berlin",
      role: "Full Stack Developer",
      details: [
        "Verantwortete Funktionen durchgängig als Hauptentwicklerin für sechs Webanwendungen und zwei React-Native-Apps in einem zweiköpfigen Team – von der Klärung der Anforderungen mit dem Kunden über Implementierung und Tests bis zum Release.",
        "Entwickelte eine bidirektionale Salesforce-Synchronisation für Nutzende, Module und Lernergebnisse über gRPC-verbundene Scala-Backend-Services, einschließlich Erstellungs-, Aktualisierungs- und Löschprozessen sowie einer plattformübergreifenden Eindeutigkeitsprüfung gegen doppelte Modulkennungen.",
        "Entwickelte Integrationstests für zahlreiche Scala/Play-Backend-Services mit ScalaTest, Guice und MongoDB zur Prüfung von CRUD-Operationen, Geschäftslogik und Fehlerbehandlung.",
        "Analysierte und behob Zertifikatsfehler in der regulierten medizinischen Fortbildung, ermittelte die Ursachen anhand historischer Kurs- und Einreichungsdaten, korrigierte die betroffenen Datensätze und generierte die Zertifikate neu.",
        "Entwickelte Workflows für Zugangsberechtigungen, Lernfortschritt und Zertifizierung für eine Lernplattform mit über 50.000 Nutzenden und rund 500 Kursen, einschließlich Zugangsregeln, Kurssperren und Ansichten für auslaufende Zertifikate.",
        "Setzte Figma-Entwürfe für eine separate Plattform mit rund 500 Kursen um, einschließlich eines neu aufgebauten produktiven Dashboards; reduzierte dessen Ladezeit durch optimierte MongoDB-Indizes und schrittweise Skeleton-Zustände von rund 7 auf 2 Sekunden.",
        "Erstellte Auswertungen für randomisierte Fragensätze und berechnete aus gespeicherten MongoDB-Daten Anzeigehäufigkeit, korrekte Antworten und die am häufigsten gewählten falschen Antworten.",
      ],
      highlights: [
        "React / React Native",
        "Scala / MongoDB",
        "GraphQL / REST APIs / gRPC",
        "GitHub Actions",
      ],
    },
    {
      period: "12.2021 – 05.2022",
      company: "Kooku Recruiting Partners · Berlin",
      role: "Praktikantin Frontend-Webentwicklung",
      details: [
        "Entwickelte die Diagrammansichten für eine interne Recruiting-Analyseanwendung, die Kontaktzahlen der Recruiter, Kandidaten in finalen Interviewrunden und Ausstiege nach Auswahlphase visualisierte.",
        "Setzte die vom Designer bereitgestellten Seitenentwürfe als Oberflächen mit Vue.js und Tailwind CSS um, darunter eine Startseite zur Kundenfilterung mit Auswahlfeldern und Dropdown-Menüs; der Filter-Workflow und die Auswertungsansichten wurden vom Recruiting-Team genutzt.",
      ],
      highlights: ["Vue.js", "Tailwind CSS", "Agile Zusammenarbeit"],
    },
  ],
  previousExperience: [
    {
      period: "09.2020 – 02.2021",
      company: "Conjuro Digital Marketing Agency · Berlin",
      role: "Freiberufliche Webdesignerin",
      details: [
        "Erstellte und pflegte Unternehmenswebsites mit WordPress und CSS.",
      ],
      highlights: ["WordPress", "CSS", "Webdesign"],
    },
    {
      period: "02.2019 – 01.2020",
      company: "Plus Hostel and Hotel · Berlin",
      role: "Reservierungsmanagerin",
      details: [
        "Verwaltete die Buchungssoftware und unterstützte das Community-Management.",
      ],
      highlights: ["Buchungssoftware", "Community-Management"],
    },
    {
      period: "03.2015 – 01.2019",
      company: "Weinwirtschaft (Akademie der Künste) · Berlin",
      role: "Restaurant-Supervisorin und Servicekraft",
      details: [
        "Betreute Gäste, wickelte Kassenvorgänge ab und unterstützte die Veranstaltungskoordination.",
      ],
      highlights: ["Kundenservice", "Veranstaltungskoordination"],
    },
  ],
  education: [
    {
      period: "03.2021 – 07.2021",
      school: "Code Academy Berlin",
      degree:
        "Full Stack Web Development · React, Gatsby, GraphQL, Netlify CMS",
    },
    {
      period: "02.2020 – 06.2020",
      school: "Business Trend Academy · Berlin",
      degree: "Online Marketing Manager · SEO, SEA, SMO, HTML, CSS",
    },
    {
      period: "09.2010 – 02.2013",
      school: "Universität Ca’ Foscari Venedig, Italien",
      degree: "Masterabschluss in Marketing und Kommunikation",
    },
  ],
  skillGroups: [
    {
      category: "Frontend",
      description: "Web- und Mobile-Oberflächen",
      skills: resumeData.skillGroups[0].skills,
    },
    {
      category: "Backend",
      description: "Services und APIs",
      skills: resumeData.skillGroups[1].skills,
    },
    {
      category: "Datenbanken & ORM",
      description: "Datenspeicherung und objektrelationales Mapping",
      skills: resumeData.skillGroups[2].skills,
    },
    {
      category: "Testing",
      description: "Automatisierte Tests und Integrationstests",
      skills: resumeData.skillGroups[3].skills,
    },
    {
      category: "Architektur & Design",
      description: "Anwendungsstruktur und Entwurfsmuster",
      skills: resumeData.skillGroups[4].skills,
    },
    {
      category: "Entwicklung & CI/CD",
      description: "Versionsverwaltung, Automatisierung und Container",
      skills: resumeData.skillGroups[5].skills,
    },
    {
      category: "KI-Integration",
      description: "KI-gestützte Produktfunktionen",
      skills: resumeData.skillGroups[6].skills,
    },
  ],
  languages: [
    "Italienisch (Muttersprache)",
    "Englisch (B2)",
    "Deutsch (B2)",
    "Spanisch (B1)",
  ],
  projects: [
    {
      ...resumeData.projects[0],
      description:
        "Authentifizierte React- und NestJS-Anwendung zur Erfassung von Nettovermögen und Investitionen mit Jahresdiagrammen und einem konfigurierbaren Dashboard, dessen Widget-Anordnung pro Nutzer gespeichert wird. Enthält zwei vordefinierte, nutzerbezogene Gemini-Tools für Finanzanalysen, Frontend- und Backend-Tests, Docker Compose sowie separate GitHub-Actions-CI-Workflows.",
    },
  ],
} as const;

export const resumeLabels = {
  en: {
    htmlLang: "en",
    rail: "Curriculum vitae / 2026",
    navigation: "Resume navigation",
    about: "About",
    experience: "Experience",
    previousExperience: "Previous experience",
    previousExperienceIntro:
      "Earlier customer-facing and digital roles that shaped my product perspective and communication skills.",
    education: "Education",
    skills: "Skills",
    certifications: "Certifications",
    projects: "Projects",
  },
  de: {
    htmlLang: "de",
    rail: "Lebenslauf / 2026",
    navigation: "Lebenslauf-Navigation",
    about: "Profil",
    experience: "Berufserfahrung",
    previousExperience: "Frühere Berufserfahrung",
    previousExperienceIntro:
      "Frühere kundennahe und digitale Tätigkeiten, die meine Produktperspektive und Kommunikationsfähigkeit geprägt haben.",
    education: "Ausbildung",
    skills: "Kenntnisse",
    certifications: "Zertifikate",
    projects: "Projekte",
  },
} as const;

export type ResumeLocale = keyof typeof resumeLabels;
