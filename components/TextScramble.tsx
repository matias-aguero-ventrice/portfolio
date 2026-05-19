"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

/* Texto que se descifra caracter por caracter al entrar en viewport */
export function TextScramble({
  text,
  className = "",
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(text);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let frame = 0;
    const totalFrames = text.length * 3;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const resolved = Math.floor(progress * text.length);

      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < resolved) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(result);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}
