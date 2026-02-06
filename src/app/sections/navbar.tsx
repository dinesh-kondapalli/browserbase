"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type DropdownItem = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  iconShadow?: string;
  iconTexture?: string;
  iconShadowTexture?: string;
};

type DropdownSection = {
  title: string;
  items: DropdownItem[];
};

type NavLink = {
  label: string;
  href: string;
  icon?: "chevron" | "external";
  dropdown?: {
    sections: DropdownSection[];
    width?: number;
    height?: number;
  };
};

const navLinks: NavLink[] = [
  {
    label: "Products",
    href: "/#products",
    icon: "chevron",
    dropdown: {
      width: 560,
      height: 264,
      sections: [
        {
          title: "Products",
          items: [
            {
              title: "Browserbase",
              description: "Serverless browser infrastructure",
              href: "https://browserbase.com",
              icon: "/red-cube.png",
              iconShadow: "/shadow.svg",
            },
            {
              title: "Stagehand",
              description: "Browser automation SDK",
              href: "https://stagehand.dev",
              icon: "/yellow-cube.png",
              iconShadow: "/shadow.svg",
            },
            {
              title: "Director",
              description: "Browser workflow builder",
              href: "https://director.ai",
              icon: "/blue-cube.png",
              iconShadow: "/shadow.svg",
            },
          ],
        },
        {
          title: "Features",
          items: [
            {
              title: "MCP",
              description: "The browser tool MCP",
              href: "https://www.browserbase.com/mcp",
              icon: "/green-cube.png",
              iconShadow: "/shadow.svg",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Solutions",
    href: "/#solutions",
    icon: "chevron",
    dropdown: {
      width: 840,
      sections: [
        {
          title: "Use Cases",
          items: [
            {
              title: "Workflow automation",
              href: "/use-case/workflow-automation",
              icon: "/browser-tools.svg",
              iconTexture: "/icon-texture-yellow.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
            {
              title: "Browser tool for AI agents",
              href: "/use-case/agents",
              icon: "/browser-tools.svg",
              iconTexture: "/icon-texture-purple.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
            {
              title: "Web scraping",
              href: "/use-case/web-scraping",
              icon: "/browser-tools.svg",
              iconTexture: "/icon-texture-blue.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
          ],
        },
        {
          title: "Industries",
          items: [
            {
              title: "AI",
              href: "/industry/ai",
              icon: "/ai.svg",
              iconTexture: "/icon-texture-green.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
            {
              title: "Healthcare",
              href: "/industry/healthcare",
              icon: "/health-care.svg",
              iconTexture: "/icon-texture-pink.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
            {
              title: "Supply chain",
              href: "/industry/supply-chain",
              icon: "/health-care.svg",
              iconTexture: "/icon-texture-grey.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              title: "GTM",
              href: "/industry/gtm",
              icon: "/gtm.svg",
              iconTexture: "/icon-texture-orange.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
            {
              title: "Tax",
              href: "/industry/tax",
              icon: "/legal.svg",
              iconTexture: "/icon-texture-purple.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
            {
              title: "Legal",
              href: "/industry/legal",
              icon: "/legal.svg",
              iconTexture: "/icon-texture-blue.webp",
              iconShadowTexture: "/icon-shadow-texture.webp",
            },
          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    href: "/#resources",
    icon: "chevron",
    dropdown: {
      sections: [
        {
          title: "Resources",
          items: [
            { title: "Blog", description: "Product updates", href: "/blog" },
            {
              title: "Templates",
              description: "Ready-to-use workflows",
              href: "/templates",
            },
            {
              title: "Customers",
              description: "Stories from teams",
              href: "/blog?tag=Customers&page=1",
            },
            {
              title: "Enterprise",
              description: "Security and compliance",
              href: "/enterprise",
            },
          ],
        },
      ],
    },
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.browserbase.com", icon: "external" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__logo" href="/">
          <Image
            src="/browserbase_logo_text.svg"
            alt="Browserbase"
            width={140}
            height={36}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar__links navbar__links--desktop">
          {navLinks.map((link) => (
            <div key={link.label} className="navbar__link-group">
              <a className="navbar__link" href={link.href}>
                <span className="navbar__link-label">{link.label}</span>
                {link.icon === "chevron" && (
                  <span className="navbar__link-icon navbar__link-icon--chevron">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M10.6799 5.75L7.17993 9.25L3.67993 5.75"
                        stroke="currentColor"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                )}
                {link.icon === "external" && (
                  <span className="navbar__link-icon navbar__link-icon--external">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M10.6688 6.27614L4.93109 12.0139L3.98828 11.0711L9.72601 5.33333H4.66883V4H12.0021V11.3333H10.6688V6.27614Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                )}
              </a>
              {link.dropdown && (
                <div
                  className="navbar__dropdown"
                  style={{
                    width: link.dropdown.width,
                    height: link.dropdown.height,
                  }}
                >
                  <div className="navbar__dropdown-grid">
                    {link.dropdown.sections.map((section) => (
                      <div
                        key={section.title}
                        className="navbar__dropdown-column"
                      >
                        <div className="navbar__dropdown-title">
                          {section.title}
                        </div>
                        <ul className="navbar__dropdown-list">
                          {section.items.map((item) => (
                            <li key={item.title}>
                              <a
                                className="navbar__dropdown-link"
                                href={item.href}
                              >
                                {item.iconTexture &&
                                item.icon &&
                                item.iconShadowTexture ? (
                                  <span className="navbar__dropdown-icon navbar__dropdown-icon--bordered">
                                    <Image
                                      className="navbar__dropdown-icon-shadow-texture"
                                      src={item.iconShadowTexture}
                                      alt=""
                                      width={32}
                                      height={32}
                                    />
                                    <Image
                                      className="navbar__dropdown-icon-texture-bg"
                                      src={item.iconTexture}
                                      alt=""
                                      width={32}
                                      height={32}
                                    />
                                    <span className="navbar__dropdown-icon-inner">
                                      <Image
                                        className="navbar__dropdown-icon-texture"
                                        src={item.iconTexture}
                                        alt=""
                                        width={32}
                                        height={32}
                                      />
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img
                                        className="navbar__dropdown-icon-svg"
                                        src={item.icon}
                                        alt=""
                                        width={20}
                                        height={20}
                                      />
                                    </span>
                                  </span>
                                ) : item.icon ? (
                                  <span className="navbar__dropdown-icon">
                                    <Image
                                      src={item.icon}
                                      alt=""
                                      width={24}
                                      height={28}
                                    />
                                    {item.iconShadow && (
                                      <Image
                                        className="navbar__dropdown-icon-shadow"
                                        src={item.iconShadow}
                                        alt=""
                                        width={26}
                                        height={13}
                                      />
                                    )}
                                  </span>
                                ) : (
                                  <span
                                    className="navbar__dropdown-icon navbar__dropdown-icon--empty"
                                    aria-hidden="true"
                                  />
                                )}
                                <span className="navbar__dropdown-text">
                                  <span className="navbar__dropdown-name">
                                    {item.title}
                                  </span>
                                  {item.description && (
                                    <span className="navbar__dropdown-description">
                                      {item.description}
                                    </span>
                                  )}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions navbar__actions--desktop">
          <a className="navbar__login" href="/sign-in">
            Log in
          </a>
          <button
            className="navbar__button navbar__button--primary"
            type="button"
          >
            Sign Up
          </button>
          <button
            className="navbar__button navbar__button--outline"
            type="button"
          >
            Get a Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar__mobile-toggle"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="navbar__mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="navbar__mobile-link"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="navbar__mobile-actions">
              <a className="navbar__mobile-login" href="/sign-in">
                Log in
              </a>
              <button
                className="navbar__button navbar__button--primary"
                type="button"
              >
                Sign Up
              </button>
              <button
                className="navbar__button navbar__button--outline"
                type="button"
              >
                Get a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
