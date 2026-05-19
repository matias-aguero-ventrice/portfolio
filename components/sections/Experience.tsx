"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
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
          Experiencia profesional
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Linea vertical naranja */}
          <div
            className="absolute top-0 left-[11px] h-full w-[2px]"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, delay: i * 0.15 },
                  },
                }}
              >
                {/* Punto en la timeline */}
                <div
                  className="absolute top-1.5 left-0 h-6 w-6 rounded-full border-[3px]"
                  style={{
                    borderColor: "var(--accent)",
                    backgroundColor: "var(--background)",
                  }}
                />

                {/* Card */}
                <article
                  className="rounded-xl border p-6"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.role}
                  </h3>

                  <div
                    className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.modality}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full"
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
