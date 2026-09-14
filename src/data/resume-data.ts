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
        "Recharts",
      ],
    },
    {
      category: "Backend & data",
      description: "Services, APIs and persistence",
      skills: [
        "Node.js",
        "NestJS",
        "Scala",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "GraphQL",
        "REST APIs",
        "gRPC",
      ],
    },
    {
      category: "Quality & delivery",
      description: "Testing and development workflow",
      skills: [
        "Git",
        "GitHub Actions",
        "Docker",
        "Jest",
        "Vitest",
        "React Testing Library",
      ],
    },
    {
      category: "Applied AI",
      description: "Tool-enabled product features",
      skills: ["Google Gen AI SDK", "Gemini function calling"],
    },
  ],
  languages: [
    "Italian · Native",
    "English · B2",
    "German · B2",
    "Spanish · B1",
  ],
  certifications: [
    {
      name: "Web 2.0",
      issuer: "Business Trend Academy Berlin",
    },
    {
      name: "Online Marketing Manager",
      issuer: "Business Trend Academy Berlin",
    },
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

export type ResumeData = typeof resumeData;

export const resumeDataDe = {
  ...resumeData,
  role: "Produktorientierte Full-Stack-Entwicklerin",
  location: "Berlin, Deutschland",
  availability: "Offen für produktorientierte Full-Stack-Positionen",
  summary:
    "Produktorientierte Full-Stack-Entwicklerin mit mehr als vier Jahren Erfahrung und Frontend-Schwerpunkt in React und TypeScript. Entwickelte sich von der begleiteten Umsetzung zur primären Implementierungsverantwortung für sechs Webanwendungen und zwei React-Native-Apps in einem zweiköpfigen Entwicklungsteam. Verbindet einen Marketing-Hintergrund mit der praktischen Umsetzung von Benutzeroberflächen, Backend-Services, Datenprozessen und plattformübergreifenden Integrationen.",
  experience: [
    {
      period: "07.2022 – 06.2026",
      company: "The Key Technology GmbH · Berlin",
      role: "Full Stack Developer",
      details: [
        "Übernahm in den letzten zwei Jahren die primäre Implementierungsverantwortung für sechs Webanwendungen und zwei React-Native-Apps in einem zweiköpfigen Entwicklungsteam; Salesforce-Integrationen waren ausgenommen.",
        "Verhinderte doppelte Kurskennungen in zwei an Salesforce angebundenen Lernplattformen, indem sie einen nur auf eine Datenbank begrenzten Validierungsentwurf hinterfragte und eine plattformübergreifende Eindeutigkeitsprüfung mit gRPC implementierte.",
        "Analysierte wiederkehrende Zertifikatsfehler in der ärztlichen Fortbildung anhand historischer Kurs- und Einreichungsdaten. Entwickelte MongoDB-Datenkonverter und generierte Zertifikate für Vorfälle mit üblicherweise etwa 2 bis 50 betroffenen Nutzenden, teilweise mehr, neu.",
        "Entwickelte Berechtigungs-, Fortschritts- und Zertifizierungsabläufe für eine Lernplattform mit mehr als 50.000 registrierten Nutzenden und 40 aktiven Kursen, einschließlich Zugangsregeln, Kurssperren und Ansichten für auslaufende Zertifikate.",
        "Ersetzte Eingriffe durch Entwickler mit einer Admin-Selbstbedienungsfunktion, die den Kursstatus anzeigte und den Fortschritt von Nutzenden zurücksetzte, die nach drei Fehlversuchen gesperrt waren.",
        "Erstellte Auswertungen für randomisierte Fragensätze und ordnete gespeicherte MongoDB-Antworten den Kursdefinitionen zu, um Anzeigehäufigkeit, korrekte Antworten und die am häufigsten gewählte falsche Antwort zu berechnen.",
        "Überarbeitete das Frontend einer separaten Anwendung mit rund 500 Kursen und entwickelte einen Backend-Service zum Abfragen und Sortieren der von Nutzenden begonnenen Kurse.",
        "Implementierte den Frontend-Ablauf für die Zwei-Faktor-Authentifizierung von Admins, einschließlich QR-Code-Einrichtung, sechsstelliger Authenticator-Codes, Wiederherstellungscodes und Fehlerzuständen.",
        "Reduzierte nach einer gemeinsamen Überarbeitung der Navigation mit dem Kunden den Weg vom Kurs-Dashboard zu den Prüfungsfragen von etwa vier auf zwei Klicks.",
        "Implementierte Backend-Unit-Tests und pflegte GitHub-Actions-Workflows für Build-, Release- und Deployment-Prozesse.",
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
        "Implementierte Anwendungsoberflächen mit Vue.js und Tailwind CSS in Zusammenarbeit mit Design- und Backend-Kollegen.",
      ],
      highlights: ["Vue.js", "Tailwind CSS", "Agile Zusammenarbeit"],
    },
  ],
  previousExperience: [
    {
      period: "09.2020 – 02.2021",
      company: "Conjuro Digital Marketing Agency · Berlin",
      role: "Freiberufliche Webdesignerin",
      details: ["Erstellte und pflegte Unternehmenswebsites mit WordPress und CSS."],
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
      company: "Weinwirtschaft in der Akademie der Künste · Berlin",
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
      ...resumeData.skillGroups[0],
      description: "Web- und Mobile-Oberflächen",
    },
    {
      ...resumeData.skillGroups[1],
      category: "Backend & Daten",
      description: "Services, APIs und Datenhaltung",
    },
    {
      ...resumeData.skillGroups[2],
      category: "Qualität & Delivery",
      description: "Tests und Entwicklungsworkflows",
    },
    {
      ...resumeData.skillGroups[3],
      category: "Angewandte KI",
      description: "Toolgestützte Produktfunktionen",
    },
  ],
  languages: [
    "Italienisch · Muttersprache",
    "Englisch · B2",
    "Deutsch · B2",
    "Spanisch · B1",
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
