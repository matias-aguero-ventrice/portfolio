"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const contactButtons = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: personalInfo.whatsapp,
    href: personalInfo.whatsappLink,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@matias-aguero-ventrice",
    href: personalInfo.linkedinUrl,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.article
          className="rounded-2xl border p-8 text-center md:p-12"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: "var(--text-primary)" }}
          >
            Trabajemos juntos
          </h2>

          <p
            className="mx-auto mt-4 max-w-lg text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            Disponible para oportunidades junior/semi-senior en tech,
            modalidad remota o presencial en San Juan. Respondo todos los
            mensajes en menos de 24 horas.
          </p>

          {/* Botones de contacto */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {contactButtons.map((btn, i) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.label !== "Email" ? "_blank" : undefined}
                rel={btn.label !== "Email" ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-2 rounded-xl border p-5 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: 0.2 + i * 0.1 },
                  },
                }}
              >
                <btn.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{btn.label}</span>
                <span
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {btn.value}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
