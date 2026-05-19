"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const iconComponents = {
  graduation: GraduationCap,
  book: BookOpen,
} as const;

const badgeColors = {
  green: "bg-green-600/20 text-green-400",
  yellow: "bg-yellow-600/20 text-yellow-400",
} as const;

export function Education() {
  return (
    <section id="educacion" className="px-6 py-20">
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
          Formacion academica
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => {
            const Icon = iconComponents[edu.icon];
            return (
              <motion.article
                key={edu.institution}
                className="rounded-xl border p-6"
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
                    transition: { duration: 0.4, delay: i * 0.1 },
                  },
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="rounded-lg p-2"
                    style={{ backgroundColor: "var(--background)" }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {edu.title}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeColors[edu.badge.color]}`}
                      >
                        {edu.badge.text}
                      </span>
                    </div>

                    <p
                      className="mt-1 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {edu.institution}
                    </p>

                    <p
                      className="mt-1 text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {edu.period}
                    </p>

                    {edu.detail && (
                      <p
                        className="mt-2 text-sm italic"
                        style={{ color: "var(--text-secondary)" }}
                      >
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
