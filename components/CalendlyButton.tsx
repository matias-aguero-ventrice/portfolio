"use client";

import { Calendar } from "lucide-react";

/* Botón para agendar una llamada.
   Registrate en cal.com (gratis) y reemplazá la URL con tu link. */
const CAL_URL = "https://cal.com/matias-valentin-aguero-ventrice-9qhrev";

export function CalendlyButton() {
  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="border-glow-hover inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
      style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
    >
      <Calendar className="h-4 w-4" style={{ color: "var(--accent)" }} />
      Agend&aacute; una llamada
    </a>
  );
}
