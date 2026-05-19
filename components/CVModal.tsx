"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, Eye } from "lucide-react";

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
              className="fixed inset-3 z-[90] flex flex-col overflow-hidden rounded-xl border sm:inset-6 md:inset-12"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-4 py-2.5" style={{ borderColor: "var(--border)" }}>
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>CV</span>
                <div className="flex items-center gap-1">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Download className="h-3.5 w-3.5" />
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

              {/* PDF iframe */}
              <iframe
                src="/cv.pdf"
                className="flex-1 w-full"
                title="CV"
                style={{ border: "none" }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
