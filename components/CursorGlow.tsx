"use client";

import { useEffect, useState } from "react";

/* Halo naranja sutil que sigue el cursor. Solo en desktop. */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* No renderizar en touch devices */
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-40 transition-opacity duration-300"
      style={{
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(234,88,12,0.07) 0%, transparent 70%)",
        transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
        willChange: "transform",
      }}
    />
  );
}
