"use client";

const metrics = ["No credit card required."];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__stagger-wrapper">
          <div className="hero__announcement">
            <a href="/blog/session-recordings">
              <span className="hero__announcement-icon">B</span>
              <span className="hero__announcement-text">
                Session Replays are now Session Recordings: Pixel perfect
                playbacks of your browser sessions
              </span>
              <span className="hero__announcement-arrow">›</span>
            </a>
          </div>
          <div className="hero__logo" aria-hidden="true" />
          <h1>We help AI use the web.</h1>
          <p>
            Autonomously read, write, and perform tasks on the web with a
            serverless browser.
          </p>
          <div className="hero__cta">
            <a className="hero__primary" href="/sign-up">
              Try for free
            </a>
            <a className="hero__secondary" href="/contact">
              Get a demo
            </a>
          </div>
          <div className="hero__metrics">
            {metrics.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
