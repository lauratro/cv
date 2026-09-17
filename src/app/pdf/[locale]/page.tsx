import { resumeData, resumeDataDe, resumeLabels } from "@/data/resume-data";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default function PdfResumePage({
  params,
}: {
  params: { locale: string };
}) {
  if (params.locale !== "en" && params.locale !== "de") {
    notFound();
  }

  const locale = params.locale;
  const data = locale === "de" ? resumeDataDe : resumeData;
  const labels = resumeLabels[locale];

  return (
    <main className="cv-document">
      <header className="cv-document-header">
        <div>
          <h1>{data.name}</h1>
          <p className="cv-document-role">{data.role}</p>
          <p className="cv-document-contact">
            {data.location} · {data.email} ·{" "}
            <a href="https://linkedin.com/in/laura-tronchin">
              linkedin.com/in/laura-tronchin
            </a>{" "}
            ·{" "}
            <a href="https://github.com/lauratro">github.com/lauratro</a>
          </p>
          <p className="cv-document-languages">
            {data.languages.map((language, index) => {
              const [name, level] = language.split(" · ");

              return (
                <span key={language}>
                  {index > 0 && " · "}
                  <strong>{name}</strong>
                  {level && ` · ${level}`}
                </span>
              );
            })}
          </p>
        </div>
        <Image
          className="cv-document-photo"
          src="/profile-pic-small.png"
          alt=""
          width={88}
          height={88}
          priority
        />
      </header>

      <section>
        <h2>{labels.about}</h2>
        <p>{data.summary}</p>
      </section>

      <section>
        <h2>{labels.skills}</h2>
        <div className="cv-document-skills">
          {data.skillGroups.map((group) => (
            <p key={group.category}>
              <strong>{group.category}:</strong> {group.skills.join(", ")}
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2>{labels.experience}</h2>
        {data.experience.map((item) => (
          <article className="cv-document-entry" key={`${item.company}-${item.period}`}>
            <div className="cv-document-entry-heading">
              <h3>{item.role} | {item.company}</h3>
              <span>{item.period}</span>
            </div>
            <h4 className="experience-subheading">{labels.resultsImpact}</h4>
            <ul>
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h2>{labels.previousExperience}</h2>
        {data.previousExperience.map((item) => (
          <article className="cv-document-compact-entry" key={`${item.company}-${item.period}`}>
            <div><strong>{item.role} | {item.company}</strong><br />{item.details[0]}</div>
            <span>{item.period}</span>
          </article>
        ))}
      </section>

      <section className="cv-document-projects">
        <h2>{labels.projects}</h2>
        {data.projects.map((project) => (
          <article className="cv-document-entry" key={project.name}>
            <h3>
              {project.name} | <a href={project.href}>{project.href}</a>
            </h3>
            <p>{project.description}</p>
          </article>
        ))}
      </section>

      <section className="cv-document-education">
        <h2>{labels.education}</h2>
        {data.education.map((item) => (
          <article className="cv-document-compact-entry" key={item.school}>
            <div><strong>{item.school}</strong><br />{item.degree}</div>
            <span>{item.period}</span>
          </article>
        ))}
      </section>

      {data.certifications.length > 0 && (
        <section className="cv-document-extras">
          <div>
            <h2>{labels.certifications}</h2>
            {data.certifications.map((item) => (
              <p key={item.name}><strong>{item.name}</strong>, {item.issuer}</p>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
