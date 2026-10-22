"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/TextScramble";
import { useI18n } from "@/lib/i18n";

const pad = (n: number) => String(n + 1).padStart(2, "0");

/* Panel "capas del producto": pila isometrica con pestañas, al estilo de ficha tecnica */
export function ProductLayers() {
  const { t } = useI18n();
  const layers = t.layers.items;
  const [active, setActive] = useState(0);
  const current = layers[active];

  return (
    <section id="capas" className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-3 border-l-[3px] pl-4 text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ borderColor: "var(--accent)", color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <TextScramble text={t.layers.title} />
        </motion.h2>
        <p className="mb-8 max-w-2xl pl-5 text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
          {t.layers.intro}
        </p>

        <motion.div
          className="overflow-hidden rounded-xl border"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="flex items-center justify-between border-b px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] sm:px-5"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            <span>{t.layers.kicker}</span>
            <span style={{ color: "var(--accent)" }}>{t.layers.tag}</span>
          </div>

          <div className="relative">
            {/* Escenario isometrico (decorativo) */}
            <div
              className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/8]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
                backgroundPosition: "-1px -1px",
              }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 30% 50%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 60%)" }}
              />
              <div className="absolute inset-0 grid place-items-center [perspective:1100px]">
                <div
                  className="relative h-[34%] w-[44%] min-w-[170px] [--zs:30px] [transform-style:preserve-3d] sm:h-[34%] sm:w-[34%] sm:-translate-x-[10%] sm:[--zs:46px]"
                  style={{ transform: "rotateX(58deg) rotateZ(-34deg)" }}
                >
                  {layers.map((layer, i) => {
                    const isActive = i === active;
                    const steps = layers.length - 1 - i;
                    return (
                      <div
                        key={layer.name}
                        className="absolute inset-0 rounded-md border transition-all duration-500"
                        style={{
                          transform: `translateZ(calc(var(--zs) * ${steps} + ${isActive ? 12 : 0}px))`,
                          borderColor: isActive ? "var(--accent)" : "var(--border)",
                          backgroundColor: isActive
                            ? "color-mix(in srgb, var(--accent) 16%, var(--surface))"
                            : "color-mix(in srgb, var(--surface) 88%, transparent)",
                          boxShadow: isActive ? "0 0 28px color-mix(in srgb, var(--accent) 35%, transparent)" : "none",
                        }}
                      >
                        <span
                          className="absolute bottom-1.5 left-3 font-mono text-[9px] uppercase tracking-[0.2em] sm:text-[11px]"
                          style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                        >
                          {layer.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Capa activa */}
            <div
              className="border-t p-4 sm:absolute sm:bottom-4 sm:right-4 sm:w-[46%] sm:max-w-sm sm:border sm:backdrop-blur"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "color-mix(in srgb, var(--surface) 92%, transparent)",
              }}
              aria-live="polite"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
                {pad(active)} / {t.layers.active}
              </p>
              <h3 className="mt-1 text-xl font-semibold" style={{ color: "var(--text-primary)" }}>{current.name}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--text-secondary)" }}>{current.detail}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {current.tags.map((tag) => (
                  <span key={tag} className="rounded-md px-2 py-0.5 text-xs" style={{ backgroundColor: "var(--background)", color: "var(--text-secondary)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div role="tablist" aria-label={t.layers.kicker} className="grid grid-cols-2 border-t sm:grid-cols-4" style={{ borderColor: "var(--border)" }}>
            {layers.map((layer, i) => {
              const isActive = i === active;
              return (
                <button
                  key={layer.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="border-r px-4 py-3 text-left transition-colors last:border-r-0 sm:border-b-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: isActive ? "color-mix(in srgb, var(--accent) 8%, transparent)" : "transparent",
                  }}
                >
                  <span className="block font-mono text-[10px] tracking-[0.14em]" style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}>
                    {pad(i)}
                  </span>
                  <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: isActive ? "var(--text-primary)" : "var(--text-secondary)" }}>
                    {layer.name}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
