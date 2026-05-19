"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Square } from "lucide-react";

const sections = [
  "#sobre-mi",
  "#proyectos",
  "#stack",
  "#experiencia",
  "#educacion",
  "#contacto",
];

/* Modo presentación: auto-scroll suave por las secciones */
export function PresentationMode() {
  const [running, setRunning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const indexRef = useRef(0);

  const scrollToSection = useCallback((index: number) => {
    if (index >= sections.length) {
      setRunning(false);
      indexRef.current = 0;
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(sections[index]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      indexRef.current = index + 1;
      timeoutRef.current = setTimeout(() => scrollToSection(index + 1), 3500);
    }
  }, []);

  const start = () => {
    setRunning(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    timeoutRef.current = setTimeout(() => scrollToSection(0), 1500);
  };

  const stop = () => {
    setRunning(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    indexRef.current = 0;
  };

  return (
    <AnimatePresence>
      <motion.button
        onClick={running ? stop : start}
        className="fixed right-5 bottom-20 z-50 hidden rounded-full border p-3 shadow-lg transition-colors hover:border-[var(--accent)] sm:flex"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        aria-label={running ? "Detener presentación" : "Modo presentación"}
        title={running ? "Detener presentación" : "Modo presentación"}
      >
        {running ? (
          <Square className="h-4 w-4" style={{ color: "var(--accent)" }} />
        ) : (
          <Play className="h-4 w-4" style={{ color: "var(--accent)" }} />
        )}
      </motion.button>
    </AnimatePresence>
  );
}
