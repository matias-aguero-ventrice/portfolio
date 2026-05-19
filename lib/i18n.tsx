"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "es" | "en";

type Translations = typeof es;

const es = {
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    stack: "Stack",
    experience: "Experiencia",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para nuevas oportunidades",
    headline: "Junior Full-Stack Developer & Coordinador Ejecutivo",
    subHeadline: "Construyo productos digitales con un enfoque AI-augmented",
    cta1: "Contactame",
    cta2: "Descargar CV",
    viewCv: "Ver CV",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy un developer junior con un enfoque particular: construyo sistemas reales apalancado en herramientas de IA, mientras yo me ocupo del diseño, la integración entre componentes y las decisiones de arquitectura. Mi formación de base es Técnico Electrónico, con estudios parciales en Tecnicatura Universitaria en Programación en la UNSJ.",
      "Actualmente coordino la operación administrativa y el desarrollo web interno en TuMatch Inmobiliario (Grupo Propital), una proptech chilena. Diseñé e implementé desde cero el CRM que opera la compañía, en producción hace más de cinco meses, gestionando miles de leads, propiedades y corredores activos.",
      "En paralelo dirijo Made In 3D, mi emprendimiento personal de manufactura aditiva, donde combino diseño, producción y atención directa al cliente.",
    ],
    languages: "Idiomas",
    native: "Nativo",
  },
  projects: {
    title: "Proyectos destacados",
    viewCode: "Ver código",
    confidential: "Screenshots y demo bajo pedido por confidencialidad",
    badges: { production: "En producción", startup: "Emprendimiento", openSource: "Open source" },
    crm: {
      subtitle: "Sistema CRM corporativo para proptech chilena",
      description: "Diseñé e implementé desde cero el CRM que opera TuMatch Inmobiliario. Centraliza la operación comercial de una red de corredores en Chile e integra seis plataformas externas vía APIs REST.",
    },
    made3d: {
      subtitle: "Manufactura aditiva e impresión 3D",
      description: "Emprendimiento personal desde mayo 2023. Diseño, producción, atención al cliente, marketing y administración integral. Trabajo con clientes finales y comercios.",
    },
    site: {
      subtitle: "Portfolio profesional",
      description: "Sitio que estás viendo. Construido con Next.js 15, TypeScript, Tailwind CSS y shadcn/ui. Pensado mobile-first, con Lighthouse >95 en performance.",
    },
  },
  stack: { title: "Stack técnico" },
  experience: {
    title: "Experiencia profesional",
    present: "Presente",
  },
  education: {
    title: "Formación académica",
    graduated: "Egresado",
    partial: "Cursada parcial",
    detail: "11/20 materias aprobadas. Intención de retomar y completar.",
  },
  testimonials: { title: "Recomendaciones" },
  contact: {
    title: "Trabajemos juntos",
    subtitle: "Disponible para oportunidades junior/semi-senior en tech, modalidad remota o presencial en San Juan. Respondo todos los mensajes en menos de 24 horas.",
    scanQr: "Escaneá el QR para hablarme por WhatsApp",
    saveContact: "Guardar contacto",
    downloadVcard: "Descargar vCard",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      message: "Mensaje",
      messagePlaceholder: "Contame en qué puedo ayudarte...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      sent: "Enviado",
      error: "Error, intentá de nuevo",
    },
    copied: "Email copiado al portapapeles",
  },
  github: { title: "Actividad en GitHub", publicRepos: "Repos públicos", languages: "Lenguajes", viewProfile: "Ver perfil completo" },
};

const en: Translations = {
  nav: {
    about: "About",
    projects: "Projects",
    stack: "Stack",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    badge: "Open to new opportunities",
    headline: "Junior Full-Stack Developer & Executive Coordinator",
    subHeadline: "I build digital products with an AI-augmented approach",
    cta1: "Contact me",
    cta2: "Download CV",
    viewCv: "View CV",
  },
  about: {
    title: "About me",
    paragraphs: [
      "I'm a junior developer with a particular approach: I build real systems leveraging AI tools, while I handle the design, component integration, and architecture decisions. My background is in Electronic Engineering, with partial studies in a Programming degree at UNSJ.",
      "I currently coordinate the administrative operations and internal web development at TuMatch Inmobiliario (Grupo Propital), a Chilean proptech. I designed and implemented the company's CRM from scratch, in production for over five months, managing thousands of leads, properties, and active brokers.",
      "In parallel, I run Made In 3D, my personal additive manufacturing venture, where I combine design, production, and direct customer service.",
    ],
    languages: "Languages",
    native: "Native",
  },
  projects: {
    title: "Featured projects",
    viewCode: "View code",
    confidential: "Screenshots and demo available upon request due to confidentiality",
    badges: { production: "In production", startup: "Startup", openSource: "Open source" },
    crm: {
      subtitle: "Corporate CRM system for Chilean proptech",
      description: "I designed and built from scratch the CRM that runs TuMatch Inmobiliario. It centralizes the commercial operations of a broker network in Chile and integrates six external platforms via REST APIs.",
    },
    made3d: {
      subtitle: "Additive manufacturing & 3D printing",
      description: "Personal venture since May 2023. Design, production, customer service, marketing, and full administration. Working with end clients and businesses.",
    },
    site: {
      subtitle: "Professional portfolio",
      description: "The site you're viewing. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. Mobile-first, with Lighthouse >95 in performance.",
    },
  },
  stack: { title: "Tech stack" },
  experience: {
    title: "Professional experience",
    present: "Present",
  },
  education: {
    title: "Education",
    graduated: "Graduated",
    partial: "Partial completion",
    detail: "11/20 subjects approved. Planning to resume and complete.",
  },
  testimonials: { title: "Recommendations" },
  contact: {
    title: "Let's work together",
    subtitle: "Available for junior/mid-level tech opportunities, remote or on-site in San Juan. I reply to all messages within 24 hours.",
    scanQr: "Scan the QR to reach me on WhatsApp",
    saveContact: "Save contact",
    downloadVcard: "Download vCard",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell me how I can help...",
      send: "Send message",
      sending: "Sending...",
      sent: "Sent",
      error: "Error, try again",
    },
    copied: "Email copied to clipboard",
  },
  github: { title: "GitHub activity", publicRepos: "Public repos", languages: "Languages", viewProfile: "View full profile" },
};

const translations = { es, en };

type I18nContext = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const I18nCtx = createContext<I18nContext>({
  locale: "es",
  setLocale: () => {},
  t: es,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  return (
    <I18nCtx.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  return useContext(I18nCtx);
}
