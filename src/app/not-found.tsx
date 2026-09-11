import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-shell">
      <div className="resume-page">
        <section className="hero-section">
          <div>
            <p className="eyebrow">404 / Page not found</p>
            <h1>This page doesn&apos;t exist.</h1>
            <Link className="print-link" href="/">
              Back to the CV
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
