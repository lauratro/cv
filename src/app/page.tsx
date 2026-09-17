import { resumeData } from "./../data/resume-data";
import type { Metadata } from "next";
import { ResumeView } from "./resume-view";

const title = "Laura Tronchin | Product-Oriented Full-Stack Engineer";
const description =
  "Full-stack engineer in Berlin with frontend depth in React and TypeScript, building web and mobile products, backend services, and data workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
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
    url: "/",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    siteName: "Laura Tronchin",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function Home() {
  return <ResumeView data={resumeData} locale="en" />;
}
