"use client";

import { useEffect, useState } from "react";

/* Efecto de tipeo letra por letra con cursor parpadeante */
export function TypingText({
  text,
  className = "",
  style,
  speed = 50,
  delay = 500,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <span className={className} style={style}>
      {displayed}
      <span
        className={`inline-block w-[2px] align-middle ${done ? "animate-pulse" : ""}`}
        style={{
          height: "1em",
          backgroundColor: "var(--accent)",
          marginLeft: 2,
          opacity: done ? 0 : 1,
        }}
      />
    </span>
  );
}
