"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TiltCard } from "@/components/TiltCard";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TextScramble } from "@/components/TextScramble";
import { useI18n } from "@/lib/i18n";

const badgeColors = {
  green: "bg-green-500/10 text-green-500 dark:bg-green-500/15 dark:text-green-400",
  orange: "bg-orange-500/10 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400",
  zinc: "bg-zinc-500/10 text-zinc-600 dark:bg-zinc-500/15 dark:text-zinc-400",
} as const;

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
  badge: { text: string; color: "green" | "orange" | "zinc" };
  metrics?: { label: string; value: string }[];
  tags: string[];
  footer?: string;
  link?: { text: string; url: string };
};

export function Projects() {
  const { t } = useI18n();

  /* Construimos las cards desde las traducciones */
  const projects: ProjectData[] = [
    {
      title: "CRM TuMatch",
      subtitle: t.projects.crm.subtitle,
      description: t.projects.crm.description,
      badge: { text: t.projects.badges.production, color: "green" },
      metrics: [
        { label: t.projects.crm.metrics.leads, value: "+7.600" },
        { label: t.projects.crm.metrics.properties, value: "+3.600" },
        { label: t.projects.crm.metrics.production, value: "+5" },
        { label: t.projects.crm.metrics.apis, value: "6" },
        { label: t.projects.crm.metrics.sales, value: "+40%" },
        { label: t.projects.crm.metrics.record, value: "$6.3M" },
      ],
      tags: ["Next.js", "TypeScript", "Supabase", "Python", "APIs REST"],
      footer: t.projects.confidential,
    },
    {
      title: "Made In 3D",
      subtitle: t.projects.made3d.subtitle,
      description: t.projects.made3d.description,
      badge: { text: t.projects.badges.startup, color: "orange" },
      tags: ["3D Design", "Production", "Marketing"],
    },
    {
      title: "Portfolio",
      subtitle: t.projects.site.subtitle,
      description: t.projects.site.description,
      badge: { text: t.projects.badges.openSource, color: "zinc" },
      tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
      link: { text: t.projects.viewCode, url: "https://github.com/matias-aguero-ventrice/portfolio" },
    },
  ];

  return (
    <section id="proyectos" className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-10 border-l-[3px] pl-4 text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ borderColor: "var(--accent)", color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <TextScramble text={t.projects.title} />
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <TiltCard key={project.title} className="h-full">
            <SpotlightCard className="h-full">
            <motion.article
              className="border-glow-hover group relative flex h-full flex-col overflow-hidden rounded-xl border p-5 sm:p-6"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                  <p className="mt-0.5 text-sm" style={{ color: "var(--text-secondary)" }}>{project.subtitle}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeColors[project.badge.color]}`}>
                  {project.badge.text}
                </span>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{project.description}</p>

              {project.metrics && (
                <div className="mt-5 grid grid-cols-3 gap-3 rounded-lg border p-3" style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}>
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <AnimatedCounter value={metric.value} className="block font-mono text-base font-bold sm:text-lg" style={{ color: "var(--accent)" }} />
                      <p className="text-[11px] leading-tight" style={{ color: "var(--text-secondary)" }}>{metric.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md px-2 py-0.5 text-xs" style={{ backgroundColor: "var(--background)", color: "var(--text-secondary)" }}>{tag}</span>
                ))}
              </div>

              {project.footer && (
                <p className="mt-3 border-t pt-3 text-xs italic" style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>{project.footer}</p>
              )}
              {project.link && (
                <a href={project.link.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 border-t pt-3 text-sm font-medium transition-colors hover:text-[var(--accent)]" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
                  {project.link.text}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.article>
            </SpotlightCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
