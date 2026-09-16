import { resumeDataDe } from "@/data/resume-data";
import type { Metadata } from "next";
import { ResumeView } from "../resume-view";

const title = "Laura Tronchin | Produktorientierte Full-Stack-Entwicklerin";
const description =
  "Full-Stack-Entwicklerin in Berlin mit Frontend-Schwerpunkt in React und TypeScript sowie Erfahrung mit Web- und Mobile-Produkten, Backend-Services und Datenprozessen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/de",
    languages: {
      en: "/",
      de: "/de",
      "x-default": "/",
    },
  },
  openGraph: {
    title,
    description,
    type: "profile",
    url: "/de",
    locale: "de_DE",
    alternateLocale: ["en_US"],
    siteName: "Laura Tronchin",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function GermanHome() {
  return <ResumeView data={resumeDataDe} locale="de" />;
}
