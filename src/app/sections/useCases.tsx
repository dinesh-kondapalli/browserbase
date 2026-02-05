"use client";

import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const useCases = [
  {
    id: "ai-agent",
    title: "Browser tool for agents",
    video: "/ai_agent.mp4",
    items: [
      {
        text: "Meet Stagehand",
        link: "https://www.stagehand.dev",
        description:
          " our open-source framework for building robust web agents.",
      },
      {
        text: "Real-time human-in-the-loop controls using our Live View feature for enhanced oversight and flexibility.",
      },
      {
        text: "Integrations with all major AI SDKs that work right out of the box.",
      },
    ],
    blogLinks: [
      {
        title:
          "The breakthrough that allowed Coframe to revolutionize website optimization",
        href: "https://www.browserbase.com/blog/case-study-coframe",
      },
      {
        title:
          "How Aomni built an AI-powered sales intelligence platform using Browserbase",
        href: "https://www.browserbase.com/blog/case-study-aomni",
      },
    ],
  },
  {
    id: "workflow",
    title: "Workflow automation",
    video: "/workflow_automation.mp4",
    items: [
      {
        text: "Automate repetitive browser tasks with reliable, headless browsers.",
      },
      {
        text: "Integrate with your existing CI/CD pipeline for seamless deployment.",
      },
      {
        text: "Scale from one to thousands of automated workflows instantly.",
      },
    ],
    blogLinks: [
      {
        title:
          "How companies automate data extraction at scale with Browserbase",
        href: "#",
      },
      {
        title:
          "Building reliable automation workflows with Playwright and Browserbase",
        href: "#",
      },
    ],
  },
  {
    id: "scraping",
    title: "Web scraping",
    video: "/web_scraping.mp4",
    items: [
      {
        text: "Extract data from any website with stealth browsers that bypass bot detection.",
      },
      {
        text: "Handle JavaScript-heavy sites with full browser automation capabilities.",
      },
      {
        text: "Built-in proxy rotation and captcha solving for uninterrupted scraping.",
      },
    ],
    blogLinks: [
      {
        title: "Best practices for web scraping at scale with Browserbase",
        href: "#",
      },
      {
        title: "How to build a data pipeline with Browserbase and Python",
        href: "#",
      },
    ],
  },
];

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCase = useCases[activeTab];

  return (
    <section className="use-cases" id="use-cases">
      <div className="use-cases__grid" aria-hidden="true" />
      <ScrollReveal>
        <h2 className="use-cases__title">
          Anything you do with a web browser, you can do with Browserbase
        </h2>
      </ScrollReveal>
      <div className="use-cases__wrapper">
        <div className="use-cases__container">
          <ScrollReveal delay={0.1}>
            <ul className="use-cases__tabs">
              {useCases.map((useCase, index) => (
                <li key={useCase.id} className="use-cases__tab">
                  <button type="button" onClick={() => setActiveTab(index)}>
                    <span
                      className={index === activeTab ? "is-current" : ""}
                      style={
                        index === activeTab
                          ? { backgroundImage: "url(/Shadow.e25b56e4.png)" }
                          : undefined
                      }
                    >
                      {useCase.title}
                    </span>
                    {index === activeTab ? (
                      <img
                        src="/Triangle.d0ca3127.png"
                        alt=""
                        width={71}
                        height={70}
                      />
                    ) : (
                      <svg
                        width="70"
                        height="70"
                        fill="none"
                        viewBox="0 0 70 70"
                        aria-hidden="true"
                      >
                        <path
                          fill="#CAC8C7"
                          stroke="#100D0D"
                          d="M.5.5h.968l67.345 69H.5z"
                        />
                      </svg>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <article className="use-cases__content">
              <video
                className="use-cases__video"
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                key={activeCase.video}
              >
                <source src={activeCase.video} type="video/mp4" />
              </video>
              <div className="use-cases__content-column">
                <ul className="use-cases__items">
                  {activeCase.items.map((item) => (
                    <li key={item.text} className="use-cases__item">
                      {item.link ? (
                        <>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.text}
                          </a>
                          {item.description}
                        </>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
                <ul className="use-cases__blog-links">
                  {activeCase.blogLinks.map((link) => (
                    <li key={link.title} className="use-cases__link">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>
                          <span>{link.title}</span>
                          <svg
                            width="10"
                            height="9"
                            viewBox="0 0 10 9"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3.5 0.969346H1V8.5H8.5L8.46667 5.83333M9 3.16667V0.5M9 0.5H6.33333M9 0.5L5.26667 4.23333"
                              stroke="#100D0D"
                              strokeLinecap="square"
                            />
                          </svg>
                        </div>
                        <img
                          src="/Shadow.e25b56e4.png"
                          alt=""
                          width={261}
                          height={126}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
