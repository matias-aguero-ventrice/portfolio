import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: personalInfo.githubUrl, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedinUrl, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="w-full border-t px-4 py-8 sm:px-6 lg:px-8" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-center text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
          &copy; {new Date().getFullYear()} {personalInfo.displayName}. Hecho con Next.js,
          Tailwind y mucho mate desde San Juan.
        </p>

        <div className="flex items-center gap-1">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="rounded-md p-2 transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
