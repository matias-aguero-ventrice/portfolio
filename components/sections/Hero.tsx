"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

/* Animacion base: fade-in + slide-up con spring */
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
    transition: { staggerChildren: 0.1 },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen px-6 pt-20 pb-16 md:pt-28">
      <motion.div
        className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[320px_1fr] md:gap-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Foto de perfil */}
        <motion.div
          className="flex justify-center md:justify-start"
          variants={fadeUp}
        >
          <div
            className="relative h-[200px] w-[200px] overflow-hidden rounded-full md:h-[320px] md:w-[320px]"
            style={{
              border: "4px solid var(--accent)",
              boxShadow: "0 0 40px rgba(234, 88, 12, 0.15)",
            }}
          >
            <Image
              src="/profile.png"
              alt={`Foto de ${personalInfo.displayName}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 200px, 320px"
            />
          </div>
        </motion.div>

        {/* Textos y CTAs */}
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left"
          variants={stagger}
        >
          <motion.h1
            className="text-5xl font-bold tracking-tight md:text-6xl"
            style={{ color: "var(--text-primary)" }}
            variants={fadeUp}
          >
            {personalInfo.displayName}
          </motion.h1>

          <motion.p
            className="mt-4 text-xl"
            style={{ color: "var(--text-secondary)" }}
            variants={fadeUp}
          >
            {personalInfo.headline}
          </motion.p>

          <motion.p
            className="mt-2 text-base"
            style={{ color: "var(--text-secondary)" }}
            variants={fadeUp}
          >
            {personalInfo.subHeadline}
          </motion.p>

          <motion.div
            className="mt-3 flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text-secondary)" }}
            variants={fadeUp}
          >
            <MapPin className="h-4 w-4" />
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            variants={fadeUp}
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--accent)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--accent-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--accent)")
              }
            >
              Contactame
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </motion.div>

          {/* Iconos sociales */}
          <motion.div
            className="mt-6 flex items-center gap-4"
            variants={fadeUp}
          >
            {[
              {
                icon: Github,
                href: personalInfo.githubUrl,
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: personalInfo.linkedinUrl,
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="rounded-full p-2 transition-colors hover:text-[var(--accent)]"
                style={{ color: "var(--text-secondary)" }}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
