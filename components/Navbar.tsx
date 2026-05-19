"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";

/* Navbar sticky que aparece al hacer scroll pasado el hero */
export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      /* Aparece despues de scrollear 400px (aprox fin del hero) */
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <nav
        className="border-b backdrop-blur-md"
        style={{
          backgroundColor: "color-mix(in srgb, var(--background) 80%, transparent)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          {/* Iniciales / nombre corto */}
          <a
            href="#"
            className="text-sm font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="md:hidden">{personalInfo.initials}</span>
            <span className="hidden md:inline">{personalInfo.shortName}</span>
          </a>

          {/* Links de navegacion - solo desktop */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-[var(--accent)]"
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
