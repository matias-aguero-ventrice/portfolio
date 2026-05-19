"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Check, Copy } from "lucide-react";
import { WhatsAppQR } from "@/components/QRCode";
import { VCardButton } from "@/components/VCardButton";
import { ContactForm } from "@/components/ContactForm";
import { personalInfo } from "@/lib/data";

const contactButtons = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
    copyable: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: personalInfo.whatsapp,
    href: personalInfo.whatsappLink,
    external: true,
    copyable: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@matias-aguero-ventrice",
    href: personalInfo.linkedinUrl,
    external: true,
    copyable: false,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                  onClick={btn.copyable ? (e) => handleCopy(e, btn.value) : undefined}
                  className="border-glow-hover group relative flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors sm:p-5"
                  style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                >
                  <btn.icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                  <span className="text-sm font-medium">{btn.label}</span>
                  <span className="flex items-center gap-1 text-xs break-all" style={{ color: "var(--text-secondary)" }}>
                    {btn.value}
                    {btn.copyable && (
                      <Copy className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </span>
                </motion.a>
              ))}
            </div>
            {/* Formulario de contacto */}
            <ContactForm />

            {/* Fila extra: QR + vCard */}
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <WhatsAppQR url={personalInfo.whatsappLink} size={100} />
              <div className="text-center sm:text-left">
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Escane&aacute; el QR para hablarme por WhatsApp
                </p>
                <div className="mt-3">
                  <VCardButton />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Toast de copiado */}
        <AnimatePresence>
          {copied && (
            <motion.div
              className="fixed bottom-6 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-lg border px-4 py-2.5 shadow-lg"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--accent)", color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <Check className="h-4 w-4" style={{ color: "var(--accent)" }} />
              <span className="text-sm">Email copiado al portapapeles</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
