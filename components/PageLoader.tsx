"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Loader de intro: iniciales MA se muestran y desaparecen revelando el sitio */
export function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: "var(--background)" }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          >
            <motion.div className="flex flex-col items-center gap-4">
              {/* Iniciales con line draw effect */}
              <motion.span
                className="text-6xl font-bold tracking-tighter sm:text-7xl"
                style={{ color: "var(--accent)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" as const, stiffness: 120 }}
              >
                MA
              </motion.span>

              {/* Barra de carga */}
              <div className="h-[2px] w-20 overflow-hidden rounded-full" style={{ backgroundColor: "var(--border)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
