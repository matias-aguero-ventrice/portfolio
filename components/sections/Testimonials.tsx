"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TextScramble } from "@/components/TextScramble";

/* Editá estos testimonials con recomendaciones reales de gente con la que trabajaste */
const testimonials = [
  {
    quote:
      "Matías demostró una capacidad excepcional para diseñar e implementar soluciones que impactaron directamente en la operación de la empresa.",
    author: "Equipo TuMatch Inmobiliario",
    role: "Proptech - Chile",
  },
  {
    quote:
      "Excelente comunicación, cumple plazos y entiende rápido los requerimientos. Se nota que piensa en el producto, no solo en el código.",
    author: "Cliente Made In 3D",
    role: "San Juan, Argentina",
  },
];

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-10 border-l-[3px] pl-4 text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ borderColor: "var(--accent)", color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <TextScramble text="Recomendaciones" />
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="border-glow-hover rounded-xl border p-6"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Quote className="mb-3 h-5 w-5" style={{ color: "var(--accent)" }} />
              <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {t.author}
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {t.role}
                </p>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
