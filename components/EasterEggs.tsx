"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Secuencia Konami: arriba arriba abajo abajo izq der izq der B A */
const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function EasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showEaster, setShowEaster] = useState(false);

  useEffect(() => {
    /* ASCII art en la consola */
    console.log(
      "%c\n" +
      "  __  __    _   \n" +
      " |  \\/  |  / \\  \n" +
      " | |\\/| | / _ \\ \n" +
      " | |  | |/ ___ \\\n" +
      " |_|  |_/_/   \\_\\\n\n" +
      " Matias Valentin Aguero Ventrice\n" +
      " Junior Full-Stack Developer\n\n" +
      " Si estas leyendo esto, probablemente\n" +
      " te interesa el codigo.\n" +
      " github.com/matias-aguero-ventrice/portfolio\n\n" +
      " PD: Proba el Konami Code ;)\n",
      "color: #ea580c; font-family: monospace; font-size: 12px;"
    );

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1;
        if (next === KONAMI.length) {
          setShowEaster(true);
          setKonamiIndex(0);
          setTimeout(() => setShowEaster(false), 5000);
        } else {
          setKonamiIndex(next);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <AnimatePresence>
      {showEaster && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowEaster(false)}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring" as const, stiffness: 200 }}
          >
            <p className="mb-4 text-6xl">{'</>'}</p>
            <h2 className="text-3xl font-bold" style={{ color: "var(--accent)" }}>
              Konami Code Activado
            </h2>
            <p className="mt-3 text-lg" style={{ color: "var(--text-secondary)" }}>
              Encontraste el easter egg. Sos de los mios.
            </p>
            <p className="mt-6 font-mono text-sm" style={{ color: "var(--text-secondary)" }}>
              Fun fact: este portfolio tiene {">"}20 componentes custom,
              <br />
              animaciones con Framer Motion, command palette,
              <br />
              y fue construido con asistencia de IA.
            </p>
            <p className="mt-4 text-xs" style={{ color: "var(--text-secondary)" }}>
              Click para cerrar
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
