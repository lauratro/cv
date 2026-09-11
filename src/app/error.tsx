"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="site-shell">
      <div className="resume-page">
        <section className="hero-section">
          <div>
            <p className="eyebrow">Something went wrong</p>
            <h1>Unable to load this page.</h1>
            <button type="button" className="print-link" onClick={reset}>
              Try again
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
