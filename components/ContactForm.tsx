"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

/* Formulario que envía mensajes reales a tu email via Web3Forms.
   Registrate gratis en web3forms.com y reemplazá el access_key. */
const WEB3FORMS_KEY = "20ea88a1-e6a2-4778-ac53-a5f98de85e30";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4 text-left"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            {t.contact.form.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
            placeholder={t.contact.form.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
            {t.contact.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
          {t.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-lg border bg-transparent px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
          style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          placeholder={t.contact.form.messagePlaceholder}
        />
      </div>

      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-50"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {status === "sending" ? (
          t.contact.form.sending
        ) : status === "success" ? (
          <>
            <CheckCircle className="h-4 w-4" />
            {t.contact.form.sent}
          </>
        ) : status === "error" ? (
          <>
            <AlertCircle className="h-4 w-4" />
            {t.contact.form.error}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {t.contact.form.send}
          </>
        )}
      </button>
    </motion.form>
  );
}
