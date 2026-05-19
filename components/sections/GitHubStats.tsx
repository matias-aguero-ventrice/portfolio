"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Code } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { AnimatedCounter } from "@/components/AnimatedCounter";

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

type GitHubData = {
  publicRepos: number;
  repos: Repo[];
  languages: Record<string, number>;
};

const GITHUB_USER = "matias-aguero-ventrice";

/* Colores de lenguajes de GitHub */
const langColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Shell: "#89E051",
};

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30`);
        if (!res.ok) throw new Error("API error");
        const repos: Repo[] = await res.json();

        /* Contar lenguajes */
        const languages: Record<string, number> = {};
        repos.forEach((repo) => {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        });

        /* Repos con más estrellas primero, top 4 */
        const sorted = [...repos]
          .filter((r) => !r.name.startsWith("."))
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        setData({ publicRepos: repos.length, repos: sorted, languages });
      } catch {
        /* Silenciar error - la sección simplemente no se muestra */
      } finally {
        setLoading(false);
      }
    }
    fetchGitHub();
  }, []);

  if (loading || !data) return null;

  const topLangs = Object.entries(data.languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const totalLangs = topLangs.reduce((sum, [, count]) => sum + count, 0);

  return (
    <section className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-10 border-l-[3px] pl-4 text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ borderColor: "var(--accent)", color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Actividad en GitHub
        </motion.h2>

        {/* Stats overview */}
        <motion.div
          className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="rounded-xl border p-4 text-center"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            <AnimatedCounter
              value={String(data.publicRepos)}
              className="block font-mono text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            />
            <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>
              Repos p&uacute;blicos
            </p>
          </div>
          <div
            className="rounded-xl border p-4 text-center"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            <AnimatedCounter
              value={String(Object.keys(data.languages).length)}
              className="block font-mono text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            />
            <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>
              Lenguajes
            </p>
          </div>
          <div
            className="col-span-2 rounded-xl border p-4 text-center sm:col-span-1"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          >
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-primary)" }}
            >
              <Github className="h-4 w-4" />
              Ver perfil completo
            </a>
          </div>
        </motion.div>

        {/* Barra de lenguajes */}
        {topLangs.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex h-2 w-full overflow-hidden rounded-full">
              {topLangs.map(([lang, count]) => (
                <div
                  key={lang}
                  style={{
                    width: `${(count / totalLangs) * 100}%`,
                    backgroundColor: langColors[lang] || "var(--text-secondary)",
                  }}
                />
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {topLangs.map(([lang, count]) => (
                <span key={lang} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: langColors[lang] || "var(--text-secondary)" }}
                  />
                  {lang} ({Math.round((count / totalLangs) * 100)}%)
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Repos recientes */}
        <div className="grid gap-4 sm:grid-cols-2">
          {data.repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-glow-hover rounded-xl border p-4 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
                <span className="truncate text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {repo.name}
                </span>
              </div>
              {repo.description && (
                <p className="mt-1.5 line-clamp-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                  {repo.description}
                </p>
              )}
              <div className="mt-3 flex items-center gap-3 text-xs" style={{ color: "var(--text-secondary)" }}>
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: langColors[repo.language] || "var(--text-secondary)" }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {repo.forks_count}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
