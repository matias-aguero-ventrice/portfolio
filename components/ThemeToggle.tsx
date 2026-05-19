"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/* Boton para alternar entre dark y light mode */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /* Evita hydration mismatch */
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="rounded-full p-2 transition-colors hover:bg-[var(--surface)]"
        aria-label="Cambiar tema"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 transition-colors hover:bg-[var(--surface)]"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-[var(--text-secondary)]" />
      ) : (
        <Moon className="h-5 w-5 text-[var(--text-secondary)]" />
      )}
    </button>
  );
}
