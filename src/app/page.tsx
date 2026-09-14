import { resumeData } from "@/data/resume-data";
import { ResumeView } from "./resume-view";

export default function Home() {
  return <ResumeView data={resumeData} locale="en" />;
}
