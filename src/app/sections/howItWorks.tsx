"use client";

import ScrollReveal from "../components/ScrollReveal";

export default function HowItWorksSection() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__grid" aria-hidden="true" />
      <div className="how-it-works__header">
        <ScrollReveal>
          <h2 className="section-title">How it works</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="how-it-works__description">
            Let&apos;s face it, managing infrastructure is the last thing you
            need on your plate. <b>That&apos;s our job.</b> Browserbase offers
            serverless browsers that are reliable, fast, and scalable. We manage
            the infrastructure so you can focus on building.
          </p>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.2}>
        <div className="how-it-works__container">
          <div className="how-it-works__diagram">
            <video
              className="how-it-works__video"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              poster="/howitworks_diagram.svg"
            >
              <source src="/how_it_works.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
