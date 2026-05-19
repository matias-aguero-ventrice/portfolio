"use client";

import { Eye } from "lucide-react";

/* Botón que abre el CV en nueva pestaña */
export function CVModal() {
  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="border-glow-hover inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
      style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
    >
      <Eye className="h-4 w-4" />
      Ver CV
    </a>
  );
}
