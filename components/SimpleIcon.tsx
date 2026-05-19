"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/* Calcula luminancia relativa para detectar iconos oscuros */
function isLowContrast(hex: string): boolean {
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  return 0.299 * r + 0.587 * g + 0.114 * b < 0.25;
}

/* Renderiza un icono de Simple Icons como SVG inline.
   Adapta iconos oscuros (Next.js, GitHub, etc.) al tema actual. */
export function SimpleIcon({
  path,
  hex,
  title,
  className = "h-4 w-4",
}: {
  path: string;
  hex: string;
  title: string;
  className?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* Iconos oscuros se invierten a gris claro en dark mode */
  let fillColor = `#${hex}`;
  if (mounted && isLowContrast(hex)) {
    fillColor = resolvedTheme === "dark" ? "#a1a1aa" : "#3f3f46";
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={fillColor}
      aria-label={title}
    >
      <path d={path} />
    </svg>
  );
}
