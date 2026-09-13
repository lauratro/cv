import { resumeData } from "@/data/resume-data";

export const Aside = () => {
  return (
    <aside className="side-rail" aria-label="Resume navigation">
      <span className="rail-mark">{resumeData.initials}</span>
      <span className="rail-line" />
      <span className="rail-label">Curriculum vitae / 2026</span>
    </aside>
  );
};
