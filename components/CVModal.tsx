"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, Eye } from "lucide-react";

/* Modal que se renderiza via portal para evitar problemas con transform parents */
function CVModalPortal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[200]"
            style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-3 z-[210] flex flex-col overflow-hidden rounded-xl border sm:inset-6 md:inset-12"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="flex items-center justify-between border-b px-4 py-2.5" style={{ borderColor: "var(--border)" }}>
              <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>CV</span>
              <div className="flex items-center gap-1">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-1.5 transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="rounded-md p-1.5 transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Download className="h-4 w-4" />
                </a>
                <button
                  onClick={onClose}
                  className="rounded-md p-1.5 transition-colors hover:bg-[var(--background)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <iframe
              src="https://docs.google.com/viewer?url=https://matiasaguero.dev/cv.pdf&embedded=true"
              className="w-full flex-1"
              title="CV"
              style={{ border: "none" }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

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
      <CVModalPortal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
