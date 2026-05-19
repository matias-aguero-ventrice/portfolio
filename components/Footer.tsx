import { Github } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer
      className="border-t px-6 py-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          &copy; 2026 {personalInfo.displayName}. Hecho con Next.js, Tailwind
          y mucho mate desde San Juan.
        </p>

        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-[var(--accent)]"
          style={{ color: "var(--text-secondary)" }}
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
