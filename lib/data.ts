/* ===================================================
   Datos centralizados del portfolio.
   Edita aca para actualizar el contenido sin tocar componentes.
   =================================================== */

/* --- Datos personales --- */
export const personalInfo = {
  fullName: "Matias Valentin Aguero Ventrice",
  displayName: "Matias Aguero Ventrice",
  shortName: "Maty Aguero",
  initials: "MA",
  headline: "Junior Full-Stack Developer & Coordinador Ejecutivo",
  subHeadline: "Construyo productos digitales con un enfoque AI-augmented",
  location: "San Juan, Argentina",
  email: "valentinmaty6@gmail.com",
  whatsapp: "+54 9 264 499 6528",
  whatsappLink: "https://wa.me/5492644996528",
  linkedin: "linkedin.com/in/matias-valentín-aguero-ventrice",
  linkedinUrl: "https://linkedin.com/in/matias-valent%C3%ADn-aguero-ventrice",
  github: "github.com/matias-aguero-ventrice",
  githubUrl: "https://github.com/matias-aguero-ventrice",
  age: 25,
  languages: ["Espanol (nativo)", "Ingles B1"],
} as const;

/* --- Sobre mi --- */
export const aboutParagraphs = [
  "Soy un developer junior con un enfoque particular: construyo sistemas reales apalancado en herramientas de IA, mientras yo me ocupo del diseno, la integracion entre componentes y las decisiones de arquitectura. Mi formacion de base es Tecnico Electronico, con estudios parciales en Tecnicatura Universitaria en Programacion en la UNSJ.",
  "Actualmente coordino la operacion administrativa y el desarrollo web interno en TuMatch Inmobiliario (Grupo Propital), una proptech chilena. Disene e implemente desde cero el CRM que opera la compania, en produccion hace mas de cinco meses, gestionando miles de leads, propiedades y corredores activos.",
  "En paralelo dirijo Made In 3D, mi emprendimiento personal de manufactura aditiva, donde combino diseno, produccion y atencion directa al cliente.",
] as const;

/* --- Proyectos --- */
export type Project = {
  title: string;
  subtitle: string;
  description: string;
  badge: { text: string; color: "green" | "orange" | "zinc" };
  metrics?: { label: string; value: string }[];
  tags: string[];
  footer?: string;
  link?: { text: string; url: string };
  image?: string;
};

export const projects: Project[] = [
  {
    title: "CRM TuMatch",
    subtitle: "Sistema CRM corporativo para proptech chilena",
    description:
      "Disene e implemente desde cero el CRM que opera TuMatch Inmobiliario. Centraliza la operacion comercial de una red de corredores en Chile e integra seis plataformas externas via APIs REST.",
    badge: { text: "En produccion", color: "green" },
    metrics: [
      { label: "leads", value: "+7.600" },
      { label: "propiedades", value: "+3.600" },
      { label: "en produccion", value: "+5 meses" },
      { label: "APIs integradas", value: "6" },
      { label: "ventas membresias", value: "+40%" },
      { label: "CLP record", value: "$6.3M" },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Python", "APIs REST"],
    footer: "Screenshots y demo bajo pedido por confidencialidad",
  },
  {
    title: "Made In 3D",
    subtitle: "Manufactura aditiva e impresion 3D",
    description:
      "Emprendimiento personal desde mayo 2023. Diseno, produccion, atencion al cliente, marketing y administracion integral. Trabajo con clientes finales y comercios.",
    badge: { text: "Emprendimiento", color: "orange" },
    tags: ["Diseno 3D", "Produccion", "Atencion al cliente", "Marketing"],
  },
  {
    title: "Sitio personal",
    subtitle: "Portfolio profesional",
    description:
      "Sitio que estas viendo. Construido con Next.js 15, TypeScript, Tailwind CSS y shadcn/ui. Pensado mobile-first, con Lighthouse >95 en performance.",
    badge: { text: "Open source", color: "zinc" },
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    link: {
      text: "Ver codigo",
      url: "https://github.com/matias-aguero-ventrice/portfolio",
    },
  },
];

/* --- Stack tecnico --- */
export type StackCategory = {
  title: string;
  items: { name: string; iconSlug?: string }[];
};

export const stackCategories: StackCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "Next.js", iconSlug: "nextdotjs" },
      { name: "React", iconSlug: "react" },
      { name: "TypeScript", iconSlug: "typescript" },
      { name: "Tailwind CSS", iconSlug: "tailwindcss" },
      { name: "HTML5", iconSlug: "html5" },
      { name: "CSS3", iconSlug: "css3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", iconSlug: "nodedotjs" },
      { name: "Python", iconSlug: "python" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Base de datos",
    items: [
      { name: "Supabase", iconSlug: "supabase" },
      { name: "PostgreSQL", iconSlug: "postgresql" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", iconSlug: "git" },
      { name: "GitHub", iconSlug: "github" },
      { name: "Vercel", iconSlug: "vercel" },
      { name: "Google Apps Script" },
      { name: "Meta Ads", iconSlug: "meta" },
      { name: "n8n", iconSlug: "n8n" },
    ],
  },
  {
    title: "IA y productividad",
    items: [
      { name: "Claude", iconSlug: "anthropic" },
      { name: "ChatGPT", iconSlug: "openai" },
      { name: "Cursor" },
      { name: "Google Workspace", iconSlug: "google" },
      { name: "Excel avanzado" },
    ],
  },
];

/* --- Experiencia --- */
export type Experience = {
  company: string;
  role: string;
  period: string;
  modality: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    company: "TuMatch Inmobiliario (Grupo Propital)",
    role: "Coordinador Ejecutivo & Desarrollador Web Interno",
    period: "Julio 2024 -- Presente",
    modality: "Remoto (Chile, desde Argentina)",
    achievements: [
      "Diseno e implementacion del CRM interno de la compania",
      "Coordinacion administrativa, financiera, contable y legal",
      "Gestion de red de +150 corredores activos",
      "Record historico de recaudacion: $6.3M CLP",
      "+40% en ventas de membresias",
      "Ahorro operativo > $1.800.000 CLP",
      "Supervision de alumno en practica",
    ],
  },
  {
    company: "Made In 3D",
    role: "Fundador",
    period: "Mayo 2023 -- Presente",
    modality: "San Juan, Argentina",
    achievements: [
      "Diseno, produccion y postventa",
      "Atencion al cliente directa",
      "Marketing y comunicacion",
      "Administracion integral",
    ],
  },
];

/* --- Educacion --- */
export type Education = {
  institution: string;
  title: string;
  period: string;
  badge: { text: string; color: "green" | "yellow" };
  detail?: string;
  icon: "graduation" | "book";
};

export const education: Education[] = [
  {
    institution: 'E.P.E.T. N.° 1 "Ing. Rogelio Boero"',
    title: "Tecnico Electronico",
    period: "2014 -- 2019",
    badge: { text: "Egresado", color: "green" },
    icon: "graduation",
  },
  {
    institution:
      "UNSJ -- Facultad de Ciencias Exactas, Fisicas y Naturales",
    title: "Tecnicatura Universitaria en Programacion",
    period: "2021 -- 2023",
    badge: { text: "Cursada parcial", color: "yellow" },
    detail: "11/20 materias aprobadas. Intencion de retomar y completar.",
    icon: "book",
  },
];

/* --- Links de navegacion --- */
export const navLinks = [
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
] as const;
