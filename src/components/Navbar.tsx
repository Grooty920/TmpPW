'use client';

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "??" },
  { href: "/blog", label: "??" },
  { href: "/tools", label: "??" },
  { href: "/about", label: "??" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
      style={{ backgroundColor: scrolled ? "var(--nav-bg)" : "transparent" }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-serif font-bold tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          ? LoveAlwaysHere
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-wide transition-colors duration-300 group"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* ??????? */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ color: "var(--text-primary)" }}
        aria-label="??"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      {open && (
        <div
          className="fixed inset-0 top-16 z-40 flex flex-col items-center gap-6 pt-12 text-lg"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
