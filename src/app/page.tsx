import { resumeData } from "@/data/resume-data";
import HeroGlow from "./hero-glow";
import Image from "next/image";
export default function Home() {
  return (
    <main className="site-shell">
      <aside className="side-rail" aria-label="Resume navigation">
        <span className="rail-mark">{resumeData.initials}</span>
        <span className="rail-line" />
        <span className="rail-label">Curriculum vitae / 2026</span>
      </aside>
      <div className="resume-page pt-8 w-full">
        <div className="mt-10 flex flex-row  justify-between">
          <div>
            <h1>{resumeData.name}</h1>
            <p className="hero-role">{resumeData.role}</p>
            <div className="social-row">
              {resumeData.social.map((item) => (
                <span className={"mr-4"} key={item.label}>
                  <a href={item.href} key={item.label}>
                    {item.label}
                  </a>
                </span>
              ))}
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
                <a href={`mailto:${resumeData.email}`}>{resumeData.email} ↗</a>
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
              <div className="section-heading">
                <h2>Projects</h2>
              </div>
              <div className="project-grid">
                {resumeData.projects.map((project) => (
                  <a
                    className="project-card"
                    href={project.href}
                    key={project.name}
                  >
                    <h3>
                      {project.name} <span aria-hidden="true">↗</span>
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
          <div>
            <h2>Download CV</h2>
            <a
              href="/Laura-Tronchin-CV-ATS-EN.pdf"
              download="Laura-Tronchin-CV-EN.pdf"
            >
              EN
            </a>{" "}
            <a
              href="/Laura-Tronchin-Lebenslauf-ATS-DE.pdf"
              download="Laura-Tronchin-Lebenslauf-DE.pdf"
            >
              DE
            </a>{" "}
          </div>
          <div className="footer-meta">
            <span>{resumeData.phone}</span>
            {resumeData.social.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
            <a className="back-to-top" href="#top" aria-label="Back to top">
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
