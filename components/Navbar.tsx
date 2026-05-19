"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";

/* Navbar con scroll spy - resalta la sección visible */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useI18n();

  /* Labels traducidos para los links */
  const translatedLinks = navLinks.map((link) => {
    const key = link.href.replace("#", "").replace("-", "");
    const labelMap: Record<string, string> = {
      sobremi: t.nav.about,
      proyectos: t.nav.projects,
      stack: t.nav.stack,
      experiencia: t.nav.experience,
      contacto: t.nav.contact,
    };
    return { ...link, label: labelMap[key] || link.label };
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    /* Scroll spy con IntersectionObserver */
    const observers: IntersectionObserver[] = [];
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
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
          <a
            href="#"
            className="text-sm font-bold tracking-tight transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-primary)" }}
          >
            <span className="sm:hidden">{personalInfo.initials}</span>
            <span className="hidden sm:inline">{personalInfo.shortName}</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {translatedLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-md px-3 py-1.5 text-sm transition-colors hover:text-[var(--accent)]"
                  style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
              className="hidden items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs transition-colors hover:border-[var(--accent)] sm:inline-flex"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            >
              <kbd className="font-mono text-[10px]">Ctrl K</kbd>
            </button>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
