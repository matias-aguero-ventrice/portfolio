"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
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
            className="w-full rounded-lg border bg-transparent px-3 py-2.5 text-base outline-none transition-colors focus:border-[var(--accent)] sm:text-sm"
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
            className="w-full rounded-lg border bg-transparent px-3 py-2.5 text-base outline-none transition-colors focus:border-[var(--accent)] sm:text-sm"
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
          maxLength={2000}
          className="w-full resize-none rounded-lg border bg-transparent px-3 py-2.5 text-base outline-none transition-colors focus:border-[var(--accent)] sm:text-sm"
          style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
          placeholder={t.contact.form.messagePlaceholder}
        />
      </div>

      <input type="checkbox" name="botcheck" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-11 items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-50"
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
