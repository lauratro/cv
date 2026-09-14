import { resumeDataDe } from "@/data/resume-data";
import { ResumeView } from "../resume-view";

export default function GermanHome() {
  return <ResumeView data={resumeDataDe} locale="de" />;
}
