"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";
import { TextScramble } from "@/components/TextScramble";
import { useI18n } from "@/lib/i18n";

function LanguageBars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { t } = useI18n();

  const languages = [
    { name: "Espa\u00f1ol", level: t.about.native, percent: 100 },
    { name: "Ingl\u00e9s", level: "B1", percent: 45 },
  ];

  return (
    <motion.div
      ref={ref}
      className="mt-8 rounded-xl border p-5"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="mb-4 flex items-center gap-2">
        <Globe className="h-4 w-4" style={{ color: "var(--accent)" }} />
        <h3 className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
          {t.about.languages}
        </h3>
      </div>
      <div className="space-y-3">
        {languages.map((lang) => (
          <div key={lang.name}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span style={{ color: "var(--text-primary)" }}>{lang.name}</span>
              <span style={{ color: "var(--text-secondary)" }}>{lang.level}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ backgroundColor: "var(--border)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${lang.percent}%` } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function About() {
  const { t } = useI18n();

  return (
    <section id="sobre-mi" className="section-alt w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="mb-8 border-l-[3px] pl-4 text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ borderColor: "var(--accent)", color: "var(--text-primary)" }}
          >
            <TextScramble text={t.about.title} />
          </h2>
        </motion.div>

        <div className="space-y-4">
          {t.about.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-[15px] leading-relaxed sm:text-base"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <LanguageBars />
      </div>
    </section>
  );
}
