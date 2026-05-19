"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { TypingText } from "@/components/TypingText";
import { MagneticButton } from "@/components/MagneticButton";
import { GridBackground } from "@/components/GridBackground";
import { CVModal } from "@/components/CVModal";
import { useI18n } from "@/lib/i18n";
import { personalInfo } from "@/lib/data";

/* Colores de marca para hover de iconos sociales */
const socialBrandColors: Record<string, string> = {
  GitHub: "var(--text-primary)",
  LinkedIn: "#0A66C2",
  Email: "var(--accent)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden px-4 pt-16 pb-12 sm:px-6 lg:px-8">
      {/* Grid interactivo de fondo */}
      <div className="pointer-events-auto absolute inset-0 hidden md:block">
        <GridBackground />
      </div>

      {/* Glow decorativo de fondo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "min(600px, 80vw)",
          height: "min(600px, 80vw)",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[minmax(200px,380px)_1fr] md:gap-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Foto de perfil */}
        <motion.div
          className="flex justify-center"
          variants={fadeUp}
        >
          <div className="accent-glow relative h-[200px] w-[200px] overflow-hidden rounded-full sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px]"
            style={{
              border: "3px solid var(--accent)",
            }}
          >
            <Image
              src="/profile.png"
              alt={`Foto de ${personalInfo.displayName}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 320px"
            />
          </div>
        </motion.div>

        {/* Textos y CTAs */}
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left"
          variants={stagger}
        >
          {/* Badge de disponibilidad */}
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            className="animated-gradient mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            variants={fadeUp}
          >
            {personalInfo.displayName}
          </motion.h1>

          <motion.p
            className="mt-4 text-lg sm:text-xl"
            style={{ color: "var(--text-secondary)" }}
            variants={fadeUp}
          >
            {t.hero.headline}
          </motion.p>

          <motion.div
            className="mt-2 text-base"
            style={{ color: "var(--text-secondary)" }}
            variants={fadeUp}
          >
            <TypingText text={t.hero.subHeadline} delay={800} speed={40} />
          </motion.div>

          <motion.div
            className="mt-3 flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text-secondary)" }}
            variants={fadeUp}
          >
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* CTAs con efecto magnético */}
          <motion.div
            className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
            variants={fadeUp}
          >
            <MagneticButton className="w-full sm:w-auto">
              <a
                href="#contacto"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 sm:w-auto"
                style={{ backgroundColor: "var(--accent)" }}
              >
                {t.hero.cta1}
              </a>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-glow-hover inline-flex w-full items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-colors sm:w-auto"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
              >
                <Download className="h-4 w-4" />
                {t.hero.cta2}
              </a>
            </MagneticButton>
            <MagneticButton className="hidden sm:inline-block">
              <CVModal />
            </MagneticButton>
          </motion.div>

          {/* Iconos sociales con brand colors en hover */}
          <motion.div
            className="mt-6 flex items-center gap-1"
            variants={fadeUp}
          >
            {[
              { icon: Github, href: personalInfo.githubUrl, label: "GitHub", external: true },
              { icon: Linkedin, href: personalInfo.linkedinUrl, label: "LinkedIn", external: true },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", external: false },
            ].map(({ icon: Icon, href, label, external }) => (
              <MagneticButton key={label} strength={0.4}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="group rounded-lg p-2.5 transition-colors hover:bg-[var(--surface)]"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = socialBrandColors[label])}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  <Icon className="h-5 w-5" />
                </a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#sobre-mi" aria-label="Scroll hacia abajo">
          <ChevronDown
            className="h-5 w-5 animate-bounce"
            style={{ color: "var(--text-secondary)" }}
          />
        </a>
      </motion.div>
    </section>
  );
}
