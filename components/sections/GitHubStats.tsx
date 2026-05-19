"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Code, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
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
  topics: string[];
};

type GitHubUser = {
  public_repos: number;
  followers: number;
};

type GitHubData = {
  user: GitHubUser;
  repos: Repo[];
  languages: Record<string, number>;
  totalCommits: number;
};

const GITHUB_USER = "matias-aguero-ventrice";

const langColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Shell: "#89E051",
};

function timeAgo(dateStr: string, locale: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return locale === "es" ? "hoy" : "today";
  if (days === 1) return locale === "es" ? "ayer" : "yesterday";
  if (days < 30) return locale === "es" ? `hace ${days} d\u00edas` : `${days} days ago`;
  const months = Math.floor(days / 30);
  return locale === "es" ? `hace ${months} mes${months > 1 ? "es" : ""}` : `${months} month${months > 1 ? "s" : ""} ago`;
}

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const { t, locale } = useI18n();

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("API error");

        const user: GitHubUser = await userRes.json();
        const repos: Repo[] = await reposRes.json();

        const languages: Record<string, number> = {};
        repos.forEach((repo) => {
          if (repo.language) languages[repo.language] = (languages[repo.language] || 0) + 1;
        });

        /* Contar commits totales del usuario via Search API */
        let totalCommits = 0;
        try {
          const commitsRes = await fetch(`https://api.github.com/search/commits?q=author:${GITHUB_USER}`, {
            headers: { Accept: "application/vnd.github.cloak-preview+json" },
          });
          if (commitsRes.ok) {
            const commitsData = await commitsRes.json();
            totalCommits = commitsData.total_count || 0;
          }
        } catch { /* silenciar */ }

        const sorted = [...repos]
          .filter((r) => !r.name.startsWith(".") && r.description)
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 6);

        setData({ user, repos: sorted, languages, totalCommits });
      } catch {
        /* La sección no se muestra si falla */
      } finally {
        setLoading(false);
      }
    }
    fetchGitHub();
  }, []);

  if (loading || !data) return null;

  const topLangs = Object.entries(data.languages).sort(([, a], [, b]) => b - a).slice(0, 6);
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
          {t.github.title}
        </motion.h2>

        {/* Stats cards */}
        <motion.div
          className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-xl border p-4 text-center" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <AnimatedCounter value={String(data.user.public_repos)} className="block font-mono text-2xl font-bold" style={{ color: "var(--accent)" }} />
            <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>{t.github.publicRepos}</p>
          </div>
          <div className="rounded-xl border p-4 text-center" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <AnimatedCounter value={String(Object.keys(data.languages).length)} className="block font-mono text-2xl font-bold" style={{ color: "var(--accent)" }} />
            <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>{t.github.languages}</p>
          </div>
          <div className="rounded-xl border p-4 text-center" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <AnimatedCounter value={String(data.totalCommits)} className="block font-mono text-2xl font-bold" style={{ color: "var(--accent)" }} />
            <p className="mt-1 text-xs" style={{ color: "var(--text-secondary)" }}>Commits</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border p-4" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-primary)" }}>
              <Github className="h-4 w-4" />
              {t.github.viewProfile}
            </a>
          </div>
        </motion.div>

        {/* Barra de lenguajes */}
        {topLangs.length > 0 && (
          <motion.div className="mb-8" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
            <div className="flex h-2.5 w-full overflow-hidden rounded-full">
              {topLangs.map(([lang, count]) => (
                <div key={lang} style={{ width: `${(count / totalLangs) * 100}%`, backgroundColor: langColors[lang] || "var(--text-secondary)" }} />
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              {topLangs.map(([lang, count]) => (
                <span key={lang} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-secondary)" }}>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: langColors[lang] || "var(--text-secondary)" }} />
                  {lang} ({Math.round((count / totalLangs) * 100)}%)
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Repos */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-glow-hover flex flex-col rounded-xl border p-4 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            >
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 shrink-0" style={{ color: "var(--accent)" }} />
                <span className="truncate text-sm font-medium" style={{ color: "var(--text-primary)" }}>{repo.name}</span>
              </div>
              {repo.description && (
                <p className="mt-1.5 line-clamp-2 flex-1 text-xs" style={{ color: "var(--text-secondary)" }}>{repo.description}</p>
              )}
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs" style={{ color: "var(--text-secondary)" }}>
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: langColors[repo.language] || "var(--text-secondary)" }} />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1"><Star className="h-3 w-3" />{repo.stargazers_count}</span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3" />{repo.forks_count}</span>
                )}
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {timeAgo(repo.updated_at, locale)}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
