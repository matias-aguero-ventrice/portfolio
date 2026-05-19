"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

/* Navbar sticky que aparece con fondo al scrollear */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="w-full border-b transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--background) 85%, transparent)"
            : "transparent",
          borderColor: scrolled ? "var(--border)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo / nombre */}
          <a
            href="#"
            className="text-sm font-bold tracking-tight transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="sm:hidden">{personalInfo.initials}</span>
            <span className="hidden sm:inline">{personalInfo.shortName}</span>
          </a>

          {/* Links de navegacion - solo desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-[var(--surface)] hover:text-[var(--accent)]"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
