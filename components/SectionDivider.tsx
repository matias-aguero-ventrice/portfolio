"use client";

/* Separador sutil con gradiente entre secciones */
export function SectionDivider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border) 20%, var(--accent) 50%, var(--border) 80%, transparent)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
