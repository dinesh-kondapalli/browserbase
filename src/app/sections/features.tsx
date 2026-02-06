"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import FeaturesWebgl from "./featuresWebgl";

const featureItems = [
  {
    id: "seamless",
    title: "Seamless integration",
    color: "#ffba00",
    color0: "#fff8e6",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M23.5 11.36h-7v7h7zM9.5 29.5v-11h5v4h11v-4h5v11h-21m17-6h-13v-4h-3v9h19v-9h-3v4"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    description: [
      "Compatible with Playwright, Puppeteer, Selenium, or our own framework, Stagehand.",
      "Integrate without changing any of your existing code, just point it at our browsers.",
      "Connect natively using the Chrome DevTools Protocol.",
    ],
  },
  {
    id: "scalable",
    title: "Scalable",
    color: "#a374fa",
    color0: "#ebe6ff",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M30.5 9.5h-21v21h21zm-14 20h5v-11h-11v5h6zm6 0h7v-19h-19v7h12z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    description: [
      "Spin up 1000s of browsers in milliseconds.",
      "Serverless infrastructure means you don't need to wait.",
      "We'll do the heavy lifting - run your code anywhere.",
    ],
  },
  {
    id: "fast",
    title: "Fast",
    color: "#00aefe",
    color0: "#e6f7ff",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M32.5 7.5h-7v7h7zm-9 9h-7v7h7zm-6 6v-5h5v5zm-3 3h-7v7h7zm-6 6v-5h5v5z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    description: [
      "Globally located browsers to minimize latency between the browser and your users.",
      "4 vCPUs for each browser means pages load lightning fast.",
    ],
  },
  {
    id: "secure",
    title: "Secure",
    color: "#82c92f",
    color0: "#e6ffe8",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.5 10.5a3 3 0 0 0-3 3v2h-5V29h16V15.5h-5v-2a3 3 0 0 0-3-3m-7 6V28h14V16.5z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    description: [
      "Isolated browser instances to ensure data privacy and security.",
      "SOC-2 Type 1 and HIPAA compliant. Self-hosted available for ultimate control.",
      "Configurable logging options for maximum control of sensitive data.",
    ],
  },
  {
    id: "observable",
    title: "Observable",
    color: "#e8679a",
    color0: "#ffe6f3",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.5 9.5h-5v21h5zm1 0h5v21h-5zm1 1v19h3v-19zm5-1h5v21h-5zm1 1v19h3v-19zm10-1h-5v21h5zm-4 20v-19h3v19z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    description: [
      "Use our Live View iFrame to embed what's happening in the browser, and even let your users control the browser directly from your application.",
      "Browser session recording, source code capture, and command logging enables easy debugging of past sessions.",
    ],
  },
  {
    id: "stealth",
    title: "Stealth",
    color: "#eaeaea",
    color0: "#f7f7f7",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.5 29v1.5H11v-1h-.5V29zm0-4v2h1v-2zm0-4v2h1v-2zm0-4v2h1v-2zm0-4v2h1v-2zm0-3.5V11h1v-.5h.5v-1zm5.5 0h-2v1h2zm-2 21h2v-1h-2zm4 0h2v-1h-2zm2-21h-2v1h2zm2 21h2v-1h-2zm2-21h-2v1h2zm2 21h2v-1h-2zm2-21h-2v1h2zm2 20v1h1.5V29h-1v.5zm0-19h.5v.5h1V9.5H29zM30.5 27v-2h-1v2zm0-4v-2h-1v2zm0-4v-2h-1v2zm0-4v-2h-1v2zm-7 1.5h-7v7h7z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    description: [
      "Managed captcha solving, residential proxies, and fingerprint generation to keep your automations running smoothly.",
      "Our proxy super network intelligently picks the best proxy for your target.",
      "Configure anything, from browser fingerprint to proxy geolocation.",
    ],
  },
  {
    id: "extensible",
    title: "Extensible",
    color: "#fab700",
    color0: "#fff8e6",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M30.5 9.5h-21v21h21zm-20 20v-19h19v19zm13-13h-7v7h7z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    description: [
      "API support for File Uploads, Downloads, or Custom Browser Extensions.",
      "Use the Contexts API to persist cookies or other browser state across multiple sessions.",
      "First class SDKs available for Node.js and Python.",
    ],
  },
  {
    id: "developer",
    title: "Developer First",
    color: "#fa9300",
    color0: "#fff3e6",
    icon: (
      <svg
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.5 7.5h-7v7h7zm-6 6v-5h5v5zm24-6h-7v7h7zm-6 6v-5h5v5zm-10-6h7v7h-7zm1 1v5h5v-5zm-10 8h7v7h-7zm7 9h-7v7h7zm-6 6v-5h5v5zm17-15h7v7h-7zm1 1v5h5v-5zm-1 8h7v7h-7zm-9-9h7v7h-7zm7 9h-7v7h7zm-6 6v-5h5v5z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
    description: [
      "Get started in minutes with our Browser Playground and AI Codegen feature to easily generate your first script.",
      "Comprehensive documentation with guides on performance, parallelization and authentication.",
      "Quick start guides in Node.js and Python.",
    ],
  },
];

export default function FeaturesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const activeColor =
    expandedIndex !== null
      ? featureItems[expandedIndex].color
      : featureItems[0].color;

  const toggleFeature = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="features" id="features">
      <div className="features__header">
        <h2>Features</h2>
      </div>
      <div className="features__wrapper">
        <div className="features__webglContainer">
          <div className="features__webgl">
            <FeaturesWebgl activeColor={activeColor} />
          </div>
        </div>
        <div className="features__list">
          {featureItems.map((item, index) => {
            const isExpanded = expandedIndex === index;
            const isActive = isExpanded;

            return (
              <div key={item.id}>
                <button
                  type="button"
                  data-id={item.id}
                  className={`feature-card${isActive ? " is-active" : ""}`}
                  style={
                    {
                      "--color": item.color,
                      "--color0": item.color0,
                    } as CSSProperties
                  }
                  onClick={() => toggleFeature(index)}
                >
                  <div className="feature-card__header">
                    <span className="feature-card__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="feature-card__body">
                    <ul>
                      {item.description.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
