"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

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
    headline: "Head of Product & Operations",
    subHeadline: "Producto y operaciones, con profundidad t\u00e9cnica \u2014 en Grupo Propital",
    cta1: "Contactame",
    cta2: "Descargar CV",
    viewCv: "Ver CV",
  },
  about: {
    title: "Sobre m\u00ed",
    paragraphs: [
      "Empec\u00e9 como developer construyendo sistemas reales apalancado en herramientas de IA \u2014 hoy lidero producto y operaciones para todo Grupo Propital, combinando estrategia, arquitectura y ejecuci\u00f3n t\u00e9cnica. Mi formaci\u00f3n de base es T\u00e9cnico Electr\u00f3nico, con estudios parciales en Tecnicatura Universitaria en Programaci\u00f3n en la UNSJ.",
      "Como Head of Product & Operations coordino TuMatch/Orkezto (el CRM inmobiliario que dise\u00f1\u00e9 e implement\u00e9 desde cero, hoy en producci\u00f3n hace m\u00e1s de dos a\u00f1os) y Numinap, la app de planificaci\u00f3n patrimonial del grupo. Dise\u00f1\u00e9 e impuls\u00e9 la integraci\u00f3n cross-producto entre ambas plataformas, adem\u00e1s del modelo white-label multi-marca que sostiene TuMatch y Orkezto sobre la misma base de c\u00f3digo.",
      "En Orvyt (plataforma inmobiliaria multi-tenant para Latinoam\u00e9rica) soy el \u00fanico desarrollador full-stack: dise\u00f1\u00e9 la arquitectura completa desde cero (multi-tenant, RLS, autenticaci\u00f3n, pagos con MercadoPago y Stripe, mensajer\u00eda con Twilio y un m\u00f3dulo de postventa) y soy responsable \u00fanico de la seguridad y de las migraciones en producci\u00f3n. Tambi\u00e9n soy contribuidor principal de Propirent (gesti\u00f3n de propiedades para inversionistas inmobiliarios) y dise\u00f1\u00e9 la integraci\u00f3n que lo conecta con Numinap: el flujo de caja de las propiedades administradas se refleja autom\u00e1ticamente en el patrimonio del inversionista.",
      "En paralelo dirijo Made In 3D, mi emprendimiento personal de manufactura aditiva, donde combino dise\u00f1o, producci\u00f3n y atenci\u00f3n directa al cliente.",
    ],
    languages: "Idiomas",
    native: "Nativo",
  },
  projects: {
    roleLabel: "Rol",
    title: "Proyectos destacados",
    viewCode: "Ver c\u00f3digo",
    confidential: "Screenshots y demo bajo pedido por confidencialidad",
    badges: { production: "En producci\u00f3n", startup: "Emprendimiento", openSource: "Open source" },
    crm: {
      role: "Responsable del repositorio \u00b7 m\u00e1s de 400 pull requests",
      subtitle: "Sistema CRM corporativo multi-marca (TuMatch & Orkezto)",
      description: "Dise\u00f1\u00e9 e implement\u00e9 desde cero el CRM que opera TuMatch e impulsa su marca white-label Orkezto. Centraliza la operaci\u00f3n comercial de una red de corredores en Chile e integra seis plataformas externas v\u00eda APIs REST.",
      metrics: {
        leads: "leads", properties: "propiedades", production: "en producci\u00f3n",
        apis: "APIs integradas", sales: "ventas membres\u00edas", record: "CLP r\u00e9cord de recaudaci\u00f3n",
      },
    },
    numinapIntegration: {
      role: "Producto e IA (Numinap) \u00b7 contribuidor principal (Propirent)",
      subtitle: "Integraciones cross-producto entre Numinap, TuMatch/Orkezto y Propirent",
      description: "Dise\u00f1\u00e9 e impuls\u00e9 las integraciones que conectan Numinap (planificaci\u00f3n patrimonial) con el resto del ecosistema: un corredor de TuMatch/Orkezto comparte su link de referido con clientes, y Propirent emite autom\u00e1ticamente el flujo de caja de las propiedades administradas hacia el patrimonio del inversionista en Numinap.",
    },
    orvyt: {
      role: "Desarrollador \u00fanico full-stack \u00b7 arquitectura desde cero",
      subtitle: "Plataforma inmobiliaria multi-tenant para Latinoam\u00e9rica",
      description: "Dise\u00f1\u00e9 la arquitectura completa desde cero: multi-tenant, RLS, autenticaci\u00f3n, integraciones de pago (MercadoPago, Stripe) y mensajer\u00eda (Twilio WhatsApp/SMS). Sum\u00e9 un m\u00f3dulo de postventa (tickets, entregas, garant\u00edas) y dark mode completo para el CRM. Soy responsable \u00fanico de la seguridad y de las migraciones en producci\u00f3n.",
    },
    made3d: {
      role: "Fundador y operador t\u00e9cnico",
      subtitle: "Manufactura aditiva e impresi\u00f3n 3D",
      description: "Emprendimiento personal desde mayo 2023. Dise\u00f1o, producci\u00f3n, atenci\u00f3n al cliente, marketing y administraci\u00f3n integral. Trabajo con clientes finales y comercios.",
    },
    misuper: {
      role: "Dise\u00f1o y desarrollo en solitario",
      subtitle: "Sistema de gesti\u00f3n para comercios de barrio",
      description: "Punto de venta, caja, stock, fiado y facturaci\u00f3n electr\u00f3nica ARCA para kioscos, almacenes y verduler\u00edas, con panel web, app de celular y portal para proveedores. Sigue vendiendo sin internet.",
      viewSite: "Ver sitio",
      featured: "Destacado",
      highlights: [
        "Vende sin internet y no cobra dos veces: cada venta lleva una referencia \u00fanica",
        "Factura en ARCA (ex AFIP) con comprobantes A, B y C, y nota de cr\u00e9dito autom\u00e1tica al anular",
        "91 migraciones y m\u00e1s de 3.700 tests autom\u00e1ticos; datos aislados por negocio y sucursal",
      ],
      slides: [
        "Punto de venta: cobro r\u00e1pido con escaneo y stock a la vista",
        "Caja: turno, gastos y corte en un solo lugar",
        "Inventario: stock, costos y m\u00e1rgenes por producto",
        "Portal del proveedor: pedidos de sus clientes",
        "Pedidos por WhatsApp interpretados autom\u00e1ticamente",
      ],
      prev: "Imagen anterior",
      next: "Imagen siguiente",
    },
    site: {
      role: "Dise\u00f1o y desarrollo",
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
        company: "Grupo Propital",
        role: "Head of Product & Operations",
        period: "Julio 2024 \u2014 Presente",
        modality: "Remoto (Chile, desde Argentina)",
        achievements: [
          "Lidero producto y operaciones para el ecosistema de Grupo Propital: TuMatch/Orkezto (CRM inmobiliario), Numinap (planificaci\u00f3n patrimonial), Propirent (gesti\u00f3n de propiedades) y Orvyt (plataforma inmobiliaria multi-tenant)",
          "Dise\u00f1\u00e9 e implement\u00e9 desde cero el CRM que opera TuMatch/Orkezto, en producci\u00f3n hace m\u00e1s de dos a\u00f1os",
          "Dise\u00f1\u00e9 e impuls\u00e9 las integraciones cross-producto que conectan Numinap con TuMatch/Orkezto y con Propirent, y el modelo white-label multi-marca de TuMatch/Orkezto",
          "Coordinaci\u00f3n administrativa, financiera, contable y legal",
          "Gesti\u00f3n de red de +150 corredores activos",
          "R\u00e9cord hist\u00f3rico de recaudaci\u00f3n: $6.3M CLP \u00b7 +40% en ventas de membres\u00edas \u00b7 ahorro operativo > $1.800.000 CLP",
          "Revisi\u00f3n de arquitectura y seguridad en features cr\u00edticas (firma electr\u00f3nica, RLS multi-tenant)",
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
        author: "Patricio Rojas",
        role: "Gerente \u2014 TuMatch Inmobiliario, Grupo Propital",
      },
      {
        quote: "Le ped\u00ed una pieza 3D custom con medidas espec\u00edficas, me mand\u00f3 un render antes de imprimir para confirmar, y lleg\u00f3 exacta. Adem\u00e1s me sugiri\u00f3 un material mejor para lo que necesitaba. Volv\u00ed a comprarle tres veces.",
        author: "Mat\u00edas de la Rosa",
        role: "Estudiante de Arquitectura \u2014 Made In 3D",
      },
    ],
  },
  contact: {
    title: "Trabajemos juntos",
    subtitle: "Disponible para conversar sobre producto, tecnología y operaciones — remoto o presencial en San Juan. Respondo todos los mensajes en menos de 24 horas.",
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
    headline: "Head of Product & Operations",
    subHeadline: "Product and operations, with technical depth \u2014 at Grupo Propital",
    cta1: "Contact me",
    cta2: "Download CV",
    viewCv: "View CV",
  },
  about: {
    title: "About me",
    paragraphs: [
      "I started out as a developer building real systems leveraging AI tools — today I lead product and operations for all of Grupo Propital, combining strategy, architecture, and hands-on execution. My background is in Electronic Engineering, with partial studies in a Programming degree at UNSJ.",
      "As Head of Product & Operations I coordinate TuMatch/Orkezto (the real-estate CRM I designed and built from scratch, in production for over two years) and Numinap, the group's wealth-planning app. I designed and drove the cross-product integration between both platforms, on top of the multi-brand white-label model that runs TuMatch and Orkezto off the same codebase.",
      "At Orvyt (a multi-tenant real-estate platform for Latin America) I am the sole full-stack developer: I designed the full architecture from scratch (multi-tenant, RLS, authentication, payments with MercadoPago and Stripe, messaging with Twilio and an after-sales module) and I am the sole owner of security and production migrations. I am also the lead contributor on Propirent (property management for real-estate investors) and designed the integration connecting it to Numinap: the cash flow of managed properties automatically reflects in the investor's net worth.",
      "In parallel, I run Made In 3D, my personal additive manufacturing venture, where I combine design, production, and direct customer service.",
    ],
    languages: "Languages",
    native: "Native",
  },
  projects: {
    roleLabel: "Role",
    title: "Featured projects",
    viewCode: "View code",
    confidential: "Screenshots and demo available upon request due to confidentiality",
    badges: { production: "In production", startup: "Startup", openSource: "Open source" },
    crm: {
      role: "Repository owner \u00b7 400+ pull requests",
      subtitle: "Multi-brand corporate CRM system (TuMatch & Orkezto)",
      description: "I designed and built from scratch the CRM that runs TuMatch and powers its white-label brand Orkezto. It centralizes the commercial operations of a broker network in Chile and integrates six external platforms via REST APIs.",
      metrics: {
        leads: "leads", properties: "properties", production: "in production",
        apis: "APIs integrated", sales: "membership sales", record: "CLP revenue record",
      },
    },
    numinapIntegration: {
      role: "Product & AI (Numinap) \u00b7 lead contributor (Propirent)",
      subtitle: "Cross-product integrations between Numinap, TuMatch/Orkezto, and Propirent",
      description: "I designed and drove the integrations connecting Numinap (wealth planning) to the rest of the ecosystem: a TuMatch/Orkezto broker shares their referral link with clients, and Propirent automatically emits the cash flow of managed properties into the investor's net worth in Numinap.",
    },
    orvyt: {
      role: "Sole full-stack developer \u00b7 architecture from scratch",
      subtitle: "Multi-tenant real-estate platform for Latin America",
      description: "I designed the full architecture from scratch: multi-tenant, RLS, authentication, payment integrations (MercadoPago, Stripe) and messaging (Twilio WhatsApp/SMS). I added an after-sales module (tickets, deliveries, warranties) and a full dark mode for the CRM. I am the sole owner of security and production migrations.",
    },
    made3d: {
      role: "Founder and technical operator",
      subtitle: "Additive manufacturing & 3D printing",
      description: "Personal venture since May 2023. Design, production, customer service, marketing, and full administration. Working with end clients and businesses.",
    },
    misuper: {
      role: "Solo design and development",
      subtitle: "Management system for neighborhood shops",
      description: "Point of sale, cash register, stock, store credit and ARCA electronic invoicing for kiosks, grocery stores and greengrocers, with a web dashboard, mobile app and supplier portal. Keeps selling offline.",
      viewSite: "View site",
      featured: "Featured",
      highlights: [
        "Sells offline without charging twice: every sale carries a unique reference",
        "Invoices through ARCA (ex AFIP) with A, B and C receipts, and automatic credit notes on cancellation",
        "91 migrations and 3,700+ automated tests; data isolated per business and branch",
      ],
      slides: [
        "Point of sale: fast checkout with scanning and live stock",
        "Cash register: shift, expenses and closing in one place",
        "Inventory: stock, costs and margins per product",
        "Supplier portal: orders from its customers",
        "WhatsApp orders parsed automatically",
      ],
      prev: "Previous image",
      next: "Next image",
    },
    site: {
      role: "Design and development",
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
        company: "Grupo Propital",
        role: "Head of Product & Operations",
        period: "July 2024 \u2014 Present",
        modality: "Remote (Chile, from Argentina)",
        achievements: [
          "Lead product and operations for Grupo Propital's ecosystem: TuMatch/Orkezto (real-estate CRM), Numinap (wealth planning), Propirent (property management), and Orvyt (multi-tenant real-estate platform)",
          "Designed and built the CRM that runs TuMatch/Orkezto from scratch, in production for over two years",
          "Designed and drove the cross-product integrations connecting Numinap to TuMatch/Orkezto and to Propirent, and TuMatch/Orkezto's multi-brand white-label model",
          "Administrative, financial, accounting, and legal coordination",
          "Management of a network of 150+ active brokers",
          "All-time revenue record: $6.3M CLP \u00b7 +40% in membership sales \u00b7 operational savings > $1,800,000 CLP",
          "Architecture and security review on critical features (e-signature, multi-tenant RLS)",
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
        author: "Patricio Rojas",
        role: "Manager \u2014 TuMatch Inmobiliario, Grupo Propital",
      },
      {
        quote: "I asked for a custom 3D piece with specific measurements, he sent me a render before printing to confirm, and it arrived exact. He also suggested a better material for my use case. I've bought from him three times since.",
        author: "Mat\u00edas de la Rosa",
        role: "Architecture student \u2014 Made In 3D",
      },
    ],
  },
  contact: {
    title: "Let's work together",
    subtitle: "Open to conversations about product, technology, and operations — remote or on-site in San Juan. I reply to all messages within 24 hours.",
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
  const [locale, setLocaleState] = useState<Locale>("es");

  /* Leer idioma guardado en localStorage al montar */
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "es") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  return (
    <I18nCtx.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useI18n() {
  return useContext(I18nCtx);
}
