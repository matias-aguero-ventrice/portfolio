"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

/* Colores de badges segun tipo */
const badgeColors = {
  green: "bg-green-600/20 text-green-400",
  orange: "bg-orange-600/20 text-orange-400",
  zinc: "bg-zinc-600/20 text-zinc-400",
} as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-xl border p-6 transition-transform duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: index * 0.1 },
        },
      }}
    >
      {/* Badge top-right */}
      <span
        className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium ${badgeColors[project.badge.color]}`}
      >
        {project.badge.text}
      </span>

      {/* Imagen opcional */}
      {project.image && (
        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}

      {/* Titulo y subtitulo */}
      <h3
        className="mt-2 text-xl font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
        {project.title}
      </h3>
      <p
        className="mt-1 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.subtitle}
      </p>

      {/* Descripcion */}
      <p
        className="mt-3 text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {/* Metricas (solo CRM) */}
      {project.metrics && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p
                className="font-mono text-lg font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {metric.value}
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border px-2 py-1 text-xs"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer o link */}
      {project.footer && (
        <p
          className="mt-4 text-xs italic"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.footer}
        </p>
      )}
      {project.link && (
        <a
          href={project.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[var(--accent)]"
          style={{ color: "var(--text-primary)" }}
        >
          {project.link.text}
          <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-10 border-l-[3px] pl-4 text-3xl font-bold tracking-tight"
          style={{
            borderColor: "var(--accent)",
            color: "var(--text-primary)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Proyectos destacados
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
