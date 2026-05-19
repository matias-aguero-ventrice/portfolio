"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experiencia" className="w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-10 border-l-[3px] pl-4 text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ borderColor: "var(--accent)", color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Experiencia profesional
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Linea vertical */}
          <div
            className="absolute top-2 left-3 h-[calc(100%-16px)] w-px"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                {/* Punto */}
                <div
                  className="absolute top-2 left-0 h-[26px] w-[26px] rounded-full border-[3px]"
                  style={{ borderColor: "var(--accent)", backgroundColor: "var(--background)" }}
                />

                {/* Card */}
                <article
                  className="border-glow-hover rounded-xl border p-5 sm:p-6"
                  style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <h3 className="text-base font-semibold sm:text-lg" style={{ color: "var(--text-primary)" }}>
                    {exp.role}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 shrink-0" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 shrink-0" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {exp.modality}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: "var(--accent)" }}
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
