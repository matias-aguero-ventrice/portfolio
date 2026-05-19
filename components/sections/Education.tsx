"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/lib/data";

const iconComponents = {
  graduation: GraduationCap,
  book: BookOpen,
} as const;

const badgeColors = {
  green: "bg-green-500/10 text-green-600 dark:text-green-400",
  yellow: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
} as const;

export function Education() {
  return (
    <section id="educacion" className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-10 border-l-[3px] pl-4 text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ borderColor: "var(--accent)", color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Formaci&oacute;n acad&eacute;mica
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => {
            const Icon = iconComponents[edu.icon];
            return (
              <motion.article
                key={edu.institution}
                className="border-glow-hover rounded-xl border p-5 sm:p-6"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg p-2.5" style={{ backgroundColor: "var(--background)" }}>
                    <Icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold sm:text-lg" style={{ color: "var(--text-primary)" }}>
                        {edu.title}
                      </h3>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeColors[edu.badge.color]}`}>
                        {edu.badge.text}
                      </span>
                    </div>

                    <p className="mt-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                      {edu.institution}
                    </p>

                    <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                      {edu.period}
                    </p>

                    {edu.detail && (
                      <p className="mt-3 rounded-md p-2.5 text-sm italic" style={{ backgroundColor: "var(--background)", color: "var(--text-secondary)" }}>
                        {edu.detail}
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
