"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useI18n, type Locale } from "@/lib/i18n";

/* Parsea strings como "+7.600", "$6.3M", "+40%", "+5 meses", "6".
   Un punto seguido de exactamente 3 digitos es separador de miles ("7.600" = 7600),
   no un decimal: leerlo como decimal mostraba "7,600" (siete coma seis). */
function parseValue(raw: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = raw.match(/^([+$]*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw, decimals: 0 };

  const prefix = match[1];
  const raw_num = match[2];
  const esMiles = /^\d{1,3}(\.\d{3})+$/.test(raw_num);
  const numStr = esMiles ? raw_num.replace(/\./g, "") : raw_num.replace(",", ".");
  const suffix = match[3];
  const number = parseFloat(numStr);
  const decPart = numStr.split(".")[1];
  const decimals = decPart ? decPart.length : 0;

  return { prefix, number, suffix, decimals };
}

/* Formatea segun el idioma: es = 7.600 / 6,3 (estilo argentino); en = 7,600 / 6.3 */
function formatNumber(n: number, decimals: number, locale: Locale): string {
  if (decimals > 0) {
    const fixed = n.toFixed(decimals);
    return locale === "es" ? fixed.replace(".", ",") : fixed;
  }
  return Math.round(n).toLocaleString(locale === "es" ? "es-AR" : "en-US");
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
  const { locale } = useI18n();
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

      setDisplay(prefix + formatNumber(current, decimals, locale) + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, number, prefix, suffix, decimals, locale]);

  return (
    <span ref={ref} className={className} style={style}>
      {isInView ? display : prefix + "0" + suffix}
    </span>
  );
}
