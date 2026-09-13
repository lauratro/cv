import { resumeData } from "@/data/resume-data";

export const NameRoleSection = () => {
  return (
    <div>
      <h1>{resumeData.name}</h1>
      <p className="hero-role mt-2">{resumeData.role}</p>{" "}
    </div>
  );
};
