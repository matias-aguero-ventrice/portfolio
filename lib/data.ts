/* ===================================================
   Datos centralizados del portfolio.

   OJO: el contenido de cara al usuario (headline, about, proyectos,
   experiencia, educación, testimonios) vive en `lib/i18n.tsx`, no acá —
   es la única fuente que los componentes de sections/ realmente leen
   (soporta ES/EN). Este archivo solo trae lo que SÍ se importa directo
   desde componentes: datos personales/contacto (Hero, Footer, Navbar,
   Contact, VCardButton, CommandPalette, GitHubStats), el stack técnico
   (Stack.tsx) y los links de navegación (Navbar.tsx).
   =================================================== */

/* --- Datos personales --- */
export const personalInfo = {
  fullName: "Matías Valentín Agüero Ventrice",
  displayName: "Matías Valentín Agüero Ventrice",
  shortName: "Maty Agüero",
  initials: "MA",
  location: "San Juan, Argentina",
  email: "valentinmaty6@gmail.com",
  whatsapp: "+54 9 264 499 6528",
  whatsappLink: "https://wa.me/5492644996528",
  linkedin: "linkedin.com/in/matias-valentín-aguero-ventrice",
  linkedinUrl: "https://linkedin.com/in/matias-valent%C3%ADn-aguero-ventrice",
  github: "github.com/matias-aguero-ventrice",
  githubUrl: "https://github.com/matias-aguero-ventrice",
  age: 25,
  languages: ["Español (nativo)", "Inglés B1"],
} as const;

/* --- Stack técnico --- */
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

/* --- Links de navegación --- */
export const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
] as const;
