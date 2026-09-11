import { resumeData } from "@/data/resume-data";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Selected work", "projects"],
] as const;

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="side-rail" aria-label="Resume navigation">
        <span className="rail-mark">{resumeData.initials}</span>
        <span className="rail-line" />
        <span className="rail-label">Curriculum vitae / 2026</span>
      </aside>
      <div className="resume-page">
        <nav className="top-nav">
          <a href="#top" className="brand">
            LT / portfolio
          </a>
          <div className="nav-links">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </div>
          <a className="print-link" href={`mailto:${resumeData.email}`}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <section id="top" className="hero-section reveal">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> {resumeData.availability}
            </p>
            <h1>{resumeData.name}</h1>
            <p className="hero-role">{resumeData.role}</p>
          </div>
          <div className="hero-aside">
            <div className="social-col">
              {resumeData.social.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>
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
                      <p className="description">{item.description}</p>
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
              <h2>Languages</h2>
              <ul className="detail-list">
                {resumeData.languages.map((language) => (
                  <li key={language}>{language}</li>
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
                <h2>Selected work</h2>
                <span>Small things, thoughtfully made.</span>
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
            <span className="footer-prompt">Have a good project?</span>
            <a href={`mailto:${resumeData.email}`}>Start a conversation ↗</a>
          </div>
          <div className="footer-meta">
            <span>{resumeData.phone}</span>
            {resumeData.social.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
