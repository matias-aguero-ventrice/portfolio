"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Eye, ExternalLink } from "lucide-react";

/* Modal para previsualizar el CV */
export function CVModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border-glow-hover inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
        style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
      >
        <Eye className="h-4 w-4" />
        Ver CV
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[80]"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-4 z-[90] flex flex-col overflow-hidden rounded-xl border sm:inset-8 md:inset-16"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between border-b px-4 py-3"
                style={{ borderColor: "var(--border)" }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  CV - Mat&iacute;as Ag&uuml;ero Ventrice
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Abrir en nueva pesta&ntilde;a
                  </a>
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Download className="h-3.5 w-3.5" />
                    Descargar
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md p-1.5 transition-colors hover:bg-[var(--background)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* PDF embed con fallback */}
              <div className="flex-1 overflow-hidden bg-zinc-800">
                <object
                  data="/cv.pdf"
                  type="application/pdf"
                  className="h-full w-full"
                >
                  {/* Fallback si el browser no soporta PDF inline */}
                  <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      Tu navegador no puede mostrar el PDF directamente.
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white"
                        style={{ backgroundColor: "var(--accent)" }}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Abrir PDF
                      </a>
                      <a
                        href="/cv.pdf"
                        download
                        className="border-glow-hover inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium"
                        style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                      >
                        <Download className="h-4 w-4" />
                        Descargar
                      </a>
                    </div>
                  </div>
                </object>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
