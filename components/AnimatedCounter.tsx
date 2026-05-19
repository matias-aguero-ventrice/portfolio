"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* Parsea strings como "+7.600", "$6.3M", "+40%", "+5 meses", "6" */
function parseValue(raw: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = raw.match(/^([+$]*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };

  const prefix = match[1];
  const numStr = match[2].replace(",", ".");
  const suffix = match[3];
  const number = parseFloat(numStr);
  const decPart = numStr.split(".")[1];
  const decimals = decPart ? decPart.length : 0;

  return { prefix, number, suffix, decimals };
}

/* Formatea el numero con punto como separador de miles (estilo argentino) */
function formatNumber(n: number, decimals: number): string {
  if (decimals > 0) {
    return n.toFixed(decimals).replace(".", ",");
  }
  /* Separador de miles con punto */
  return Math.round(n).toLocaleString("es-AR");
}

/* Contador que anima de 0 al valor final cuando entra en viewport */
export function AnimatedCounter({
  value,
  className,
  style,
}: {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");
  const { prefix, number, suffix, decimals } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Easing: ease-out cubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number * eased;

      setDisplay(prefix + formatNumber(current, decimals) + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, number, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className} style={style}>
      {isInView ? display : prefix + "0" + suffix}
    </span>
  );
}
