import type { ResumeLocale } from "@/data/resume-data";
import { resumeData, resumeDataDe, resumeLabels } from "@/data/resume-data";
import { Award } from "lucide-react";
import Image from "next/image";
import { Aside } from "./aside/aside";
import { BackToTop } from "./back-to-top/back-to-top";
import { LanguageSwitcher } from "./language-switcher/language-switcher";
import { NameRoleSection } from "./name-role/name-role-section";
import { PdfVersions } from "./pdf-versions/pdf-versions";
import { SocialMedia } from "./social-media/social-media";

type LocalizedResumeData = typeof resumeData | typeof resumeDataDe;

export function ResumeView({
  data,
  locale,
}: {
  data: LocalizedResumeData;
  locale: ResumeLocale;
}) {
  const labels = resumeLabels[locale];

  return (
    <main className="site-shell" lang={locale}>
      <Aside
        initials={data.initials}
        label={labels.rail}
        navigationLabel={labels.navigation}
      />
      <div className="resume-page pt-8 w-full">
        <header className="profile-header">
          <div className="profile-copy">
            <NameRoleSection name={data.name} role={data.role} />
            <div className="profile-actions">
              <SocialMedia />
              <PdfVersions />
            </div>
          </div>
          <div className="profile-utilities">
            <LanguageSwitcher locale={locale} />
            <Image
              className="profile-picture"
              src="/profile-pic-small.png"
              alt="Laura Tronchin"
              width={170}
              height={170}
              priority
            />
          </div>
        </header>
        <div className="language-container">
          <div>
            {data.languages.map((language) => (
              <span className="mr-4" key={language}>
                {language}
              </span>
            ))}
          </div>
        </div>
        <div className="content-grid">
          <section id="about" className="content-section reveal">
            <div>
              <h2>{labels.about}</h2>
              <p>{data.summary}</p>
              <div className="contact-row">
                <a href={`mailto:${data.email}`}>{data.email}</a>
                <span>{data.location}</span>
              </div>
            </div>
          </section>
          <section id="experience" className="content-section reveal">
            <div className="section-body">
              <h2>{labels.experience}</h2>
              <div className="timeline-list">
                {data.experience.map((item) => (
                  <article className="timeline-item" key={`${item.company}-${item.period}`}>
                    <p className="period">{item.period}</p>
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <ul className="experience-details">
                        {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                      <ul className="tag-list">
                        {item.highlights.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section id="previous-experience" className="content-section previous-experience-section reveal">
            <div className="section-body">
              <h2>{labels.previousExperience}</h2>
              <p className="previous-experience-intro">{labels.previousExperienceIntro}</p>
              <div className="timeline-list">
                {data.previousExperience.map((item) => (
                  <article className="timeline-item previous-experience-item" key={`${item.company}-${item.period}`}>
                    <p className="period">{item.period}</p>
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <p className="previous-experience-description">{item.details[0]}</p>
                      <ul className="tag-list">
                        {item.highlights.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="content-section details-section reveal">
            <div className="section-body">
              <h2>{labels.education}</h2>
              <div className="education-list">
                {data.education.map((item) => (
                  <div key={item.school}>
                    <p className="period">{item.period}</p>
                    <p><strong>{item.school}</strong><br />{item.degree}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="content-section details-section reveal">
            <div className="section-body">
              <h2>{labels.skills}</h2>
              <div className="skill-groups">
                {data.skillGroups.map((group) => (
                  <article className="skill-group" key={group.category}>
                    <div className="skill-group-heading">
                      <div><h3>{group.category}</h3><p>{group.description}</p></div>
                      <span aria-hidden="true">{group.skills.length}</span>
                    </div>
                    <ul className="skill-cloud">
                      {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="content-section details-section reveal">
            <div className="section-body">
              <h2>{labels.certifications}</h2>
              <div className="certification-grid">
                {data.certifications.map((certification) => (
                  <article className="certification-card" key={certification.name}>
                    <span className="certification-icon" aria-hidden="true"><Award size={20} strokeWidth={1.7} /></span>
                    <div><h3>{certification.name}</h3><p>{certification.issuer}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section id="projects" className="content-section projects-section reveal">
            <div className="section-body">
              <h2>{labels.projects}</h2>
              <div className="project-grid">
                {data.projects.map((project) => (
                  <a className="project-card" href={project.href} key={project.name}>
                    <h3>{project.name} <span aria-hidden="true">↗</span></h3>
                    <p>{project.description}</p>
                    <ul className="tag-list">
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
        <footer className="site-footer">
          <div className="footer-meta">
            <a className="print-link" href={`mailto:${data.email}`}>{data.email}</a>
            {data.social.map((item) => <a className="print-link" href={item.href} key={item.label}>{item.label}</a>)}
          </div>
          <BackToTop />
        </footer>
      </div>
    </main>
  );
}
