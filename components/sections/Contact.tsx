"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const contactButtons = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: personalInfo.whatsapp,
    href: personalInfo.whatsappLink,
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@matias-aguero-ventrice",
    href: personalInfo.linkedinUrl,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="relative overflow-hidden rounded-2xl border p-6 text-center sm:p-10 md:p-14"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Glow decorativo */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 300,
              height: 300,
              background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
            }}
          />

          <div className="relative">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              Trabajemos juntos
            </h2>

            <p
              className="mx-auto mt-4 max-w-lg text-sm sm:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              Disponible para oportunidades junior/semi-senior en tech,
              modalidad remota o presencial en San Juan. Respondo todos los
              mensajes en menos de 24 horas.
            </p>

            {/* Botones de contacto */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contactButtons.map((btn, i) => (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target={btn.external ? "_blank" : undefined}
                  rel={btn.external ? "noopener noreferrer" : undefined}
                  className="border-glow-hover flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors sm:p-5"
                  style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <btn.icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                  <span className="text-sm font-medium">{btn.label}</span>
                  <span className="text-xs break-all" style={{ color: "var(--text-secondary)" }}>
                    {btn.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
