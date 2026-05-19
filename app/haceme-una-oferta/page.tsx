"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SecretPage() {
  return (
    <main
      className="flex min-h-svh items-center justify-center px-4"
      style={{ backgroundColor: "var(--background)" }}
    >
      <motion.div
        className="max-w-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-6 font-mono text-6xl font-bold" style={{ color: "var(--accent)" }}>
          :)
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--text-primary)" }}>
          Encontraste la p&aacute;gina secreta
        </h1>

        <p className="mt-4 text-base" style={{ color: "var(--text-secondary)" }}>
          Si llegaste hasta ac&aacute;, probablemente est&aacute;s evaluando
          mi perfil con bastante detalle. Eso me gusta.
        </p>

        <div
          className="mt-8 rounded-xl border p-6 text-left"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
        >
          <h2 className="mb-3 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            Lo que no dice el CV:
          </h2>
          <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              Aprendo r&aacute;pido. El CRM de TuMatch lo constru&iacute; en semanas, no meses.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              S&eacute; trabajar con autonom&iacute;a. Coordino una operaci&oacute;n entera desde otro pa&iacute;s.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              No le tengo miedo a nada que no sepa. Lo aprendo, lo implemento, lo pongo en producci&oacute;n.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              Este portfolio lo dise&ntilde;&eacute; y constru&iacute; yo, con asistencia de IA.
              Eso es exactamente c&oacute;mo trabajo.
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:valentinmaty6@gmail.com?subject=Vi tu página secreta"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Escrib&iacute;me
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al portfolio
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
