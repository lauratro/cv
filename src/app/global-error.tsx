"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
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
      </body>
    </html>
  );
}
