"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/* Botón flotante para volver arriba */
export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-5 z-50 rounded-full border p-3 shadow-lg transition-colors hover:border-[var(--accent)]"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -2 }}
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-4 w-4" style={{ color: "var(--accent)" }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
