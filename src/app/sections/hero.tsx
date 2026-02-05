"use client";

import Image from "next/image";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "../components/ScrollReveal";

const metrics = ["No credit card required."];

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content">
        <StaggerContainer className="hero__stagger-wrapper" staggerDelay={0.1}>
          <StaggerItem>
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
          </StaggerItem>
          <StaggerItem>
            <div className="hero__logo" aria-hidden="true" />
          </StaggerItem>
          <StaggerItem>
            <h1>We help AI use the web.</h1>
          </StaggerItem>
          <StaggerItem>
            <p>
              Autonomously read, write, and perform tasks on the web with a
              serverless browser.
            </p>
          </StaggerItem>
          <StaggerItem>
            <div className="hero__cta">
              <a className="hero__primary" href="/sign-up">
                Try for free
              </a>
              <a className="hero__secondary" href="/contact">
                Get a demo
              </a>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="hero__metrics">
              {metrics.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
