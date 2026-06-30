"use client";

import { useEffect, useRef, useState } from "react";

/* ============================================================================
   PageLoader — Intro de marca (✱ + MA + nombre)
   ----------------------------------------------------------------------------
   Port fiel del preview "Intro Animacion.dc.html". El panel es SIEMPRE oscuro
   (#0a0a0a) como el GIF original, sin importar el tema del sitio, para que el
   glow naranja se vea. Al terminar, se funde ("Fundido") revelando el sitio
   real que vive debajo.

   - Mismos valores/curvas/glows/colores que el HTML original.
   - SSR-safe: no usa Math.random ni media queries durante el primer render.
   - El final lo dispara el reloj rAF (no un timer), así la animación se ve
     completa aunque el hilo principal esté ocupado hidratando la página.
   ============================================================================ */

const NAME = "MATÍAS AGÜERO VENTRICE";
const ROLE = "COORDINADOR & DESARROLLADOR WEB";
const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
const MONO = "var(--font-geist-mono), ui-monospace, monospace";
const SANS = "var(--font-inter), Inter, system-ui, sans-serif";

/* Paleta fija de la intro (idéntica al preview, fondo oscuro siempre) */
const C_BG = "#0a0a0a";
const C_TEXT = "#fafafa";
const C_MUTED = "#a1a1aa";
const C_BORDER = "#27272a";
const C_ACC = "#ea580c";
const C_ACC2 = "#f97316";

/* Velocidad de reproducción y fin del reloj (igual que el preview) */
const SPEED = 1.1;
const CLOCK_END = 3.7; // s
/* Vueltas que da la chispa ✱ durante toda la intro (giro lento y continuo) */
const SPARK_TURNS = 1.5;
/* Fallback de seguridad por si rAF nunca completa */
const SAFETY_MS = 9000;

/* ---- helpers de easing / interpolación (idénticos al HTML) ---- */
const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
const seg = (t: number, a: number, b: number) => clamp((t - a) / (b - a), 0, 1);
const eo = (p: number) => 1 - Math.pow(1 - p, 3);
const eio = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const lerp = (a: number, b: number, p: number) => a + (b - a) * p;
const hump = (p: number) => Math.sin(clamp(p, 0, 1) * Math.PI);

function scramble(target: string, p: number) {
  const resolved = Math.floor(p * target.length);
  let out = "";
  for (let i = 0; i < target.length; i++) {
    const ch = target[i];
    if (ch === " ") out += " ";
    else out += i < resolved ? ch : SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0];
  }
  return out;
}

/* Reloj por rAF: tiempo en segundos escalado por SPEED. Llama onEnd al terminar. */
function useClock(end: number, run: boolean, onEnd: () => void) {
  const [t, setT] = useState(0);
  const ended = useRef(false);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const t0 = performance.now();
    const loop = (now: number) => {
      const tt = ((now - t0) / 1000) * SPEED;
      if (tt >= end) {
        setT(end);
        if (!ended.current) {
          ended.current = true;
          onEnd();
        }
        return;
      }
      setT(tt);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [end, run, onEnd]);
  return t;
}

const gradText = {
  backgroundImage: `linear-gradient(150deg,${C_ACC},${C_ACC2})`,
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
};

/* `mounted` evita el mismatch de hidratación: en el primer render t=0 y el
   nombre va vacío; el scramble random recién corre después de montar. */
function Intro({ mounted, onDone }: { mounted: boolean; onDone: () => void }) {
  const t = useClock(CLOCK_END, mounted, onDone);
  const s = (a: number, b: number) => seg(t, a, b);

  /* chispa ✱ — gira continuo (velocidad angular constante) durante toda la intro */
  const sparkOpacity = eo(s(0.15, 0.5));
  const sparkRot = lerp(-165, -165 + 360 * SPARK_TURNS, clamp(t / CLOCK_END, 0, 1));
  const sparkScale = lerp(0.4, 1, eo(s(0.15, 0.8)));

  /* subrayado persistente */
  const underlineSX = eo(s(0.25, 0.52));

  /* monograma MA — M -> A -> MA con motion-blur */
  const DM = -0.4, DA = 0.4;
  let mX: number, mOp: number, mBlur: number;
  if (t < 0.75) { const p = eo(s(0.5, 0.75)); mOp = p; mX = lerp(-0.18, 0, p); mBlur = hump(s(0.5, 0.75)) * 4; }
  else if (t < 0.92) { mOp = 1; mX = 0; mBlur = 0; }
  else if (t < 1.15) { const p = eio(s(0.92, 1.15)); mOp = 1 - p; mX = lerp(0, -0.24, p); mBlur = hump(s(0.92, 1.15)) * 5; }
  else if (t < 1.5) { mOp = 0; mX = -0.24; mBlur = 0; }
  else { const p = eo(s(1.5, 1.82)); mOp = p; mX = lerp(-0.56, DM, p); mBlur = hump(s(1.5, 1.82)) * 4; }

  let aX: number, aOp: number, aBlur: number;
  if (t < 1.08) { aOp = 0; aX = 0.18; aBlur = 0; }
  else if (t < 1.34) { const p = eo(s(1.08, 1.34)); aOp = p; aX = lerp(0.18, 0, p); aBlur = hump(s(1.08, 1.34)) * 4.5; }
  else if (t < 1.52) { aOp = 1; aX = 0; aBlur = 0; }
  else { const p = eio(s(1.52, 1.84)); aOp = 1; aX = lerp(0, DA, p); aBlur = hump(s(1.52, 1.84)) * 3.5; }

  const glowP = eo(s(0.15, 1.4));
  const glowScale = lerp(0.55, 1, glowP);
  const gridOpacity = eo(s(0.08, 0.65)) * 0.55;
  const progress = Math.round(eio(s(0.45, 2.55)) * 100);
  const name = mounted ? scramble(NAME, s(1.82, 2.58)) : "";
  const nameOpacity = eo(s(1.8, 2.08));
  const roleOpacity = eo(s(2.32, 2.78));
  const roleY = lerp(8, 0, roleOpacity);

  /* salida "Fundido": el panel se funde y escala revelando el sitio debajo */
  const ep = eio(s(2.95, 3.55));
  const panelOpacity = 1 - ep;
  const panelScale = lerp(1, 1.05, ep);
  const lockupOpacity = 1 - eo(s(2.95, 3.3));
  const lockupY = lerp(0, -22, ep);

  const letter = (ch: string, x: number, op: number, blur: number) => (
    <span
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(-50%,-50%) translateX(${x}em)`,
        opacity: op,
        filter: `blur(${blur}px) drop-shadow(0 0 18px rgba(234,88,12,0.3))`,
        willChange: "transform, opacity, filter",
        ...gradText,
      }}
    >
      {ch}
    </span>
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: C_BG,
        color: C_TEXT,
        opacity: panelOpacity,
        transform: `scale(${panelScale})`,
        pointerEvents: ep > 0.001 ? "none" : "auto",
        willChange: "transform, opacity",
      }}
    >
      {/* grilla */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: gridOpacity,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
          WebkitMaskImage: "radial-gradient(circle at 50% 46%,#000 0%,transparent 70%)",
          maskImage: "radial-gradient(circle at 50% 46%,#000 0%,transparent 70%)",
        }}
      />
      {/* glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "46%",
          left: "50%",
          width: "min(740px,92vw)",
          height: "min(740px,92vw)",
          opacity: glowP,
          transform: `translate(-50%,-50%) scale(${glowScale})`,
          background:
            "radial-gradient(circle, rgba(234,88,12,0.22) 0%, rgba(234,88,12,0.08) 32%, transparent 64%)",
        }}
      />

      {/* lockup */}
      <div
        className="relative flex flex-col items-center"
        style={{ gap: 20, opacity: lockupOpacity, transform: `translateY(${lockupY}px)` }}
      >
        <div className="flex flex-col items-center" style={{ gap: 15 }}>
          {/* chispa ✱ */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 120 120"
            style={{
              overflow: "visible",
              opacity: sparkOpacity,
              transform: `rotate(${sparkRot}deg) scale(${sparkScale})`,
              filter: "drop-shadow(0 0 10px rgba(234,88,12,0.55))",
            }}
          >
            <g fill="none" stroke={C_ACC} strokeWidth={9} strokeLinecap="round">
              <path d="M60 15 L60 105" />
              <path d="M21 37.5 L99 82.5" />
              <path d="M99 37.5 L21 82.5" />
            </g>
          </svg>

          {/* monograma */}
          <div
            style={{
              position: "relative",
              width: "1.9em",
              height: "1em",
              fontFamily: SANS,
              fontWeight: 800,
              fontSize: "clamp(58px,13vmin,108px)",
              letterSpacing: "-0.05em",
              lineHeight: 1,
            }}
          >
            {letter("M", mX, mOp, mBlur)}
            {letter("A", aX, aOp, aBlur)}
          </div>

          {/* subrayado */}
          <div
            style={{
              height: 5,
              width: 66,
              borderRadius: 3,
              transformOrigin: "center",
              transform: `scaleX(${underlineSX})`,
              background: `linear-gradient(90deg,${C_ACC},${C_ACC2})`,
              boxShadow: "0 0 12px rgba(234,88,12,0.6)",
            }}
          />
        </div>

        {/* nombre */}
        <div
          style={{
            marginTop: 8,
            opacity: nameOpacity,
            fontFamily: MONO,
            fontWeight: 500,
            fontSize: "clamp(17px,4.1vmin,31px)",
            letterSpacing: "0.27em",
            paddingLeft: "0.27em",
            color: C_TEXT,
            textShadow: "0 0 18px rgba(234,88,12,0.25)",
            whiteSpace: "nowrap",
            minHeight: "1.2em",
          }}
        >
          {name}
        </div>

        {/* rol */}
        <div
          style={{
            opacity: roleOpacity,
            transform: `translateY(${roleY}px)`,
            fontFamily: MONO,
            fontSize: "clamp(9px,1.5vmin,12px)",
            letterSpacing: "0.34em",
            paddingLeft: "0.34em",
            color: C_MUTED,
          }}
        >
          {ROLE}
        </div>

        {/* progreso */}
        <div className="flex flex-col" style={{ gap: 8, marginTop: 8, width: "clamp(190px,30vmin,250px)" }}>
          <div style={{ height: 2, borderRadius: 2, overflow: "hidden", backgroundColor: C_BORDER }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: C_ACC,
                boxShadow: "0 0 10px rgba(234,88,12,0.6)",
              }}
            />
          </div>
          <div
            className="flex justify-between"
            style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.18em", color: C_MUTED }}
          >
            <span>{progress < 100 ? "INICIANDO" : "LISTO"}</span>
            <span style={{ color: C_ACC }}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const safety = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    // Intro de marca: se reproduce siempre (es suave, sin destellos). El final
    // lo dispara el reloj rAF (onDone); este timer es solo un fallback.
    safety.current = setTimeout(() => setLoading(false), SAFETY_MS);
    return () => {
      if (safety.current) clearTimeout(safety.current);
    };
  }, []);

  return (
    <>
      {children}
      {loading && <Intro mounted={mounted} onDone={() => setLoading(false)} />}
    </>
  );
}
