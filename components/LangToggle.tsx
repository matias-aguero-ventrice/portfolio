"use client";

import { useI18n } from "@/lib/i18n";

/* Toggle ES/EN compacto */
export function LangToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="rounded-md border px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
      style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
