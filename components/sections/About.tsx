"use client";

import { motion } from "framer-motion";
import { aboutParagraphs } from "@/lib/data";

export function About() {
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
            Sobre m&iacute;
          </h2>
        </motion.div>

        <div className="space-y-4">
          {aboutParagraphs.map((paragraph, i) => (
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
      </div>
    </section>
  );
}
