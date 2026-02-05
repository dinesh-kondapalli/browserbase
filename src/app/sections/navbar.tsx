"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Resources", href: "/#resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "https://docs.browserbase.com" },
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
            <a key={link.label} className="navbar__link" href={link.href}>
              {link.label}
            </a>
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
