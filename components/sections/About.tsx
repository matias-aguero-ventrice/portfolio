"use client";

import { motion } from "framer-motion";
import { aboutParagraphs } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function About() {
  return (
    <section id="sobre-mi" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          {/* Heading con barra naranja vertical */}
          <h2
            className="mb-10 border-l-[3px] pl-4 text-3xl font-bold tracking-tight"
            style={{
              borderColor: "var(--accent)",
              color: "var(--text-primary)",
            }}
          >
            Sobre mi
          </h2>
        </motion.div>

        <div className="space-y-6">
          {aboutParagraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: i * 0.1 },
                },
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
