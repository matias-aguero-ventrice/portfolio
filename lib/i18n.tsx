"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "es" | "en";

type Translations = typeof es;

const es = {
  nav: {
    about: "Sobre m\u00ed",
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
    title: "Sobre m\u00ed",
    paragraphs: [
      "Soy un developer junior con un enfoque particular: construyo sistemas reales apalancado en herramientas de IA, mientras yo me ocupo del dise\u00f1o, la integraci\u00f3n entre componentes y las decisiones de arquitectura. Mi formaci\u00f3n de base es T\u00e9cnico Electr\u00f3nico, con estudios parciales en Tecnicatura Universitaria en Programaci\u00f3n en la UNSJ.",
      "Actualmente coordino la operaci\u00f3n administrativa y el desarrollo web interno en TuMatch Inmobiliario (Grupo Propital), una proptech chilena. Dise\u00f1\u00e9 e implement\u00e9 desde cero el CRM que opera la compa\u00f1\u00eda, en producci\u00f3n hace m\u00e1s de cinco meses, gestionando miles de leads, propiedades y corredores activos.",
      "En paralelo dirijo Made In 3D, mi emprendimiento personal de manufactura aditiva, donde combino dise\u00f1o, producci\u00f3n y atenci\u00f3n directa al cliente.",
    ],
    languages: "Idiomas",
    native: "Nativo",
  },
  projects: {
    title: "Proyectos destacados",
    viewCode: "Ver c\u00f3digo",
    confidential: "Screenshots y demo bajo pedido por confidencialidad",
    badges: { production: "En producci\u00f3n", startup: "Emprendimiento", openSource: "Open source" },
    crm: {
      subtitle: "Sistema CRM corporativo para proptech chilena",
      description: "Dise\u00f1\u00e9 e implement\u00e9 desde cero el CRM que opera TuMatch Inmobiliario. Centraliza la operaci\u00f3n comercial de una red de corredores en Chile e integra seis plataformas externas v\u00eda APIs REST.",
      metrics: {
        leads: "leads", properties: "propiedades", production: "en producci\u00f3n",
        apis: "APIs integradas", sales: "ventas membres\u00edas", record: "CLP r\u00e9cord",
      },
    },
    made3d: {
      subtitle: "Manufactura aditiva e impresi\u00f3n 3D",
      description: "Emprendimiento personal desde mayo 2023. Dise\u00f1o, producci\u00f3n, atenci\u00f3n al cliente, marketing y administraci\u00f3n integral. Trabajo con clientes finales y comercios.",
    },
    site: {
      subtitle: "Portfolio profesional",
      description: "Sitio que est\u00e1s viendo. Construido con Next.js 15, TypeScript, Tailwind CSS y shadcn/ui. Pensado mobile-first, con Lighthouse >95 en performance.",
    },
  },
  stack: {
    title: "Stack t\u00e9cnico",
    categories: ["Frontend", "Backend", "Base de datos", "Herramientas", "IA y productividad"],
    items: { advancedExcel: "Excel avanzado" },
  },
  experience: {
    title: "Experiencia profesional",
    present: "Presente",
    remote: "Remoto (Chile, desde Argentina)",
    entries: [
      {
        company: "TuMatch Inmobiliario (Grupo Propital)",
        role: "Coordinador Ejecutivo & Desarrollador Web Interno",
        period: "Julio 2024 \u2014 Presente",
        modality: "Remoto (Chile, desde Argentina)",
        achievements: [
          "Dise\u00f1o e implementaci\u00f3n del CRM interno de la compa\u00f1\u00eda",
          "Coordinaci\u00f3n administrativa, financiera, contable y legal",
          "Gesti\u00f3n de red de +150 corredores activos",
          "R\u00e9cord hist\u00f3rico de recaudaci\u00f3n: $6.3M CLP",
          "+40% en ventas de membres\u00edas",
          "Ahorro operativo > $1.800.000 CLP",
          "Supervisi\u00f3n de alumno en pr\u00e1ctica",
        ],
      },
      {
        company: "Made In 3D",
        role: "Fundador",
        period: "Mayo 2023 \u2014 Presente",
        modality: "San Juan, Argentina",
        achievements: [
          "Dise\u00f1o, producci\u00f3n y postventa",
          "Atenci\u00f3n al cliente directa",
          "Marketing y comunicaci\u00f3n",
          "Administraci\u00f3n integral",
        ],
      },
    ],
  },
  education: {
    title: "Formaci\u00f3n acad\u00e9mica",
    entries: [
      {
        title: "T\u00e9cnico Electr\u00f3nico",
        institution: 'E.P.E.T. N.\u00b0 1 "Ing. Rogelio Boero"',
        period: "2014 \u2014 2019",
        badge: "Egresado",
        badgeColor: "green" as const,
      },
      {
        title: "Tecnicatura Universitaria en Programaci\u00f3n",
        institution: "UNSJ \u2014 Facultad de Ciencias Exactas, F\u00edsicas y Naturales",
        period: "2021 \u2014 2023",
        badge: "Cursada parcial",
        badgeColor: "yellow" as const,
        detail: "11/20 materias aprobadas. Intenci\u00f3n de retomar y completar.",
      },
    ],
  },
  testimonials: {
    title: "Recomendaciones",
    items: [
      {
        quote: "Cuando arranc\u00f3, no ten\u00edamos CRM. En dos meses ten\u00edamos un sistema que centraliz\u00f3 toda la operaci\u00f3n: leads, propiedades, corredores, cobranzas. Hoy no podr\u00edamos operar sin lo que construy\u00f3.",
        author: "Equipo de Direcci\u00f3n",
        role: "TuMatch Inmobiliario \u2014 Grupo Propital, Chile",
      },
      {
        quote: "Le ped\u00ed una pieza 3D custom con medidas espec\u00edficas, me mand\u00f3 un render antes de imprimir para confirmar, y lleg\u00f3 exacta. Adem\u00e1s me sugiri\u00f3 un material mejor para lo que necesitaba. Volv\u00ed a comprarle tres veces.",
        author: "Nicol\u00e1s R.",
        role: "Cliente recurrente \u2014 Made In 3D, San Juan",
      },
    ],
  },
  contact: {
    title: "Trabajemos juntos",
    subtitle: "Disponible para oportunidades junior/semi-senior en tech, modalidad remota o presencial en San Juan. Respondo todos los mensajes en menos de 24 horas.",
    scanQr: "Escane\u00e1 el QR para hablarme por WhatsApp",
    saveContact: "Guardar contacto",
    downloadVcard: "Descargar vCard",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      message: "Mensaje",
      messagePlaceholder: "Contame en qu\u00e9 puedo ayudarte...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      sent: "Enviado",
      error: "Error, intent\u00e1 de nuevo",
    },
    copied: "Email copiado al portapapeles",
  },
  github: {
    title: "Actividad en GitHub",
    publicRepos: "Repos p\u00fablicos",
    languages: "Lenguajes",
    viewProfile: "Ver perfil completo",
    lastUpdated: "\u00dalt. actualizaci\u00f3n",
  },
  cv: {
    title: "CV - Mat\u00edas Ag\u00fcero Ventrice",
    openNewTab: "Abrir en nueva pesta\u00f1a",
    download: "Descargar",
    fallback: "Tu navegador no puede mostrar el PDF directamente.",
    openPdf: "Abrir PDF",
  },
  cmd: {
    search: "Buscar secciones, acciones, links...",
    noResults: "Sin resultados",
    navigation: "Navegaci\u00f3n",
    actions: "Acciones",
    links: "Links",
    switchLight: "Cambiar a modo claro",
    switchDark: "Cambiar a modo oscuro",
    downloadCv: "Descargar CV",
    openGithub: "Abrir GitHub",
    openLinkedin: "Abrir LinkedIn",
    navigateArrows: "Navegar con flechas",
    enterToSelect: "Enter para seleccionar",
    schedule: "Agend\u00e1 una llamada",
  },
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
      metrics: {
        leads: "leads", properties: "properties", production: "in production",
        apis: "APIs integrated", sales: "membership sales", record: "CLP record",
      },
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
  stack: {
    title: "Tech stack",
    categories: ["Frontend", "Backend", "Database", "Tools", "AI & Productivity"],
    items: { advancedExcel: "Advanced Excel" },
  },
  experience: {
    title: "Professional experience",
    present: "Present",
    remote: "Remote (Chile, from Argentina)",
    entries: [
      {
        company: "TuMatch Inmobiliario (Grupo Propital)",
        role: "Executive Coordinator & Internal Web Developer",
        period: "July 2024 \u2014 Present",
        modality: "Remote (Chile, from Argentina)",
        achievements: [
          "Design and implementation of the company's internal CRM",
          "Administrative, financial, accounting, and legal coordination",
          "Management of a network of 150+ active brokers",
          "All-time revenue record: $6.3M CLP",
          "+40% in membership sales",
          "Operational savings > $1,800,000 CLP",
          "Internship student supervision",
        ],
      },
      {
        company: "Made In 3D",
        role: "Founder",
        period: "May 2023 \u2014 Present",
        modality: "San Juan, Argentina",
        achievements: [
          "Design, production, and after-sales",
          "Direct customer service",
          "Marketing and communications",
          "Full administration",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    entries: [
      {
        title: "Electronic Technician",
        institution: 'E.P.E.T. N.\u00b0 1 "Ing. Rogelio Boero"',
        period: "2014 \u2014 2019",
        badge: "Graduated",
        badgeColor: "green" as const,
      },
      {
        title: "University Degree in Programming",
        institution: "UNSJ \u2014 Faculty of Exact, Physical, and Natural Sciences",
        period: "2021 \u2014 2023",
        badge: "Partial completion",
        badgeColor: "yellow" as const,
        detail: "11/20 subjects approved. Planning to resume and complete.",
      },
    ],
  },
  testimonials: {
    title: "Recommendations",
    items: [
      {
        quote: "When he started, we had no CRM. Within two months we had a system that centralized the entire operation: leads, properties, brokers, billing. Today we couldn't operate without what he built.",
        author: "Management Team",
        role: "TuMatch Inmobiliario \u2014 Grupo Propital, Chile",
      },
      {
        quote: "I asked for a custom 3D piece with specific measurements, he sent me a render before printing to confirm, and it arrived exact. He also suggested a better material for my use case. I've bought from him three times since.",
        author: "Nicol\u00e1s R.",
        role: "Returning customer \u2014 Made In 3D, San Juan",
      },
    ],
  },
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
  github: {
    title: "GitHub Activity",
    publicRepos: "Public repos",
    languages: "Languages",
    viewProfile: "View full profile",
    lastUpdated: "Last updated",
  },
  cv: {
    title: "CV - Mat\u00edas Ag\u00fcero Ventrice",
    openNewTab: "Open in new tab",
    download: "Download",
    fallback: "Your browser can't display the PDF directly.",
    openPdf: "Open PDF",
  },
  cmd: {
    search: "Search sections, actions, links...",
    noResults: "No results",
    navigation: "Navigation",
    actions: "Actions",
    links: "Links",
    switchLight: "Switch to light mode",
    switchDark: "Switch to dark mode",
    downloadCv: "Download CV",
    openGithub: "Open GitHub",
    openLinkedin: "Open LinkedIn",
    navigateArrows: "Navigate with arrows",
    enterToSelect: "Enter to select",
    schedule: "Schedule a call",
  },
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
