import { resumeData } from "@/data/resume-data";
import HeroGlow from "./hero-glow";
import Image from "next/image";
import { SocialMedia } from "./social-media/social-media";
import { Aside } from "./aside/aside";
import { NameRoleSection } from "./name-role/name-role-section";
import { PdfVersions } from "./pdf-versions/pdf-versions";
import { BackToTop } from "./back-to-top/back-to-top";

export default function Home() {
  return (
    <main className="site-shell">
      <Aside />
      <div className="resume-page pt-8 w-full">
        <div className="mt-10 flex flex-row  justify-between">
          <div className="flex flex-col justify-between">
            <NameRoleSection />
            <div className="flex flex-col md:flex-row items-center">
              <SocialMedia />
              <PdfVersions />
            </div>
          </div>
          <Image
            className="profile-picture"
            src="/profile-pic-small.png"
            alt="Laura Tronchin"
            width={170}
            height={170}
          />
        </div>
        <div className="language-container">
          <div>
            {resumeData.languages.map((language) => (
              <span className="mr-4" key="language">
                {language}
              </span>
            ))}
          </div>
        </div>
        <div className="content-grid">
          <section id="about" className="content-section reveal">
            <div>
              <h2>About</h2>
              <p>{resumeData.summary}</p>
              <div className="contact-row">
                <a href={`mailto:${resumeData.email}`}>{resumeData.email} </a>
                <span>{resumeData.location}</span>
              </div>
            </div>
          </section>
          <section id="experience" className="content-section reveal">
            <div className="section-body">
              <h2>Experience</h2>
              <div className="timeline-list">
                {resumeData.experience.map((item) => (
                  <article
                    className="timeline-item"
                    key={`${item.company}-${item.period}`}
                  >
                    <p className="period">{item.period}</p>
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <ul className="experience-details">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                      <ul className="tag-list">
                        {item.highlights.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section
            id="previous-experience"
            className="content-section previous-experience-section reveal"
          >
            <div className="section-body">
              <h2>Previous experience</h2>
              <p className="previous-experience-intro">
                Earlier customer-facing and digital roles that shaped my product
                perspective and communication skills.
              </p>
              <div className="previous-experience-list">
                {resumeData.previousExperience.map((item) => (
                  <article
                    className="previous-experience-item"
                    key={`${item.company}-${item.period}`}
                  >
                    <p className="period">{item.period}</p>
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <p className="previous-experience-description">
                        {item.details[0]}
                      </p>
                      <ul className="tag-list">
                        {item.highlights.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="content-section details-section reveal">
            <div className="section-body">
              <h2>Education</h2>
              <div className="education-list">
                {resumeData.education.map((item) => (
                  <div key={item.school}>
                    <p className="period">{item.period}</p>
                    <p>
                      <strong>{item.school}</strong>
                      <br />
                      {item.degree}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="content-section details-section reveal">
            <div className="section-body">
              <h2>Tools &amp; skills</h2>
              <ul className="skill-cloud">
                {resumeData.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>
          <section className="content-section details-section reveal">
            <div className="section-body">
              <h2>Certifications</h2>
              <ul className="detail-list">
                {resumeData.certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          </section>
          <section
            id="projects"
            className="content-section projects-section reveal"
          >
            <div className="section-body">
              <h2>Projects</h2>
              <div className="project-grid">
                {resumeData.projects.map((project) => (
                  <a
                    className="project-card"
                    href={project.href}
                    key={project.name}
                  >
                    <h3>
                      {project.name} <span aria-hidden="true"></span>
                    </h3>
                    <p>{project.description}</p>
                    <ul className="tag-list">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
        <footer className="site-footer">
          <div className="footer-meta">
            <a className="print-link" href={`mailto:${resumeData.email}`}>
              {resumeData.email}
            </a>

            {resumeData.social.map((item) => (
              <a className="print-link" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <BackToTop />
        </footer>
      </div>
    </main>
  );
}
