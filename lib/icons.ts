/* Mapa pre-generado de iconos de Simple Icons.
   Importamos solo los que usamos para no cargar los 3000+.
   Cada entrada tiene: path (SVG), hex (color de marca). */

import {
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siHtml5,
  siCss3,
  siNodedotjs,
  siPython,
  siSupabase,
  siPostgresql,
  siGit,
  siGithub,
  siVercel,
  siMeta,
  siN8n,
  siAnthropic,
  siOpenai,
  siGoogle,
} from "simple-icons";

type IconData = { path: string; hex: string; title: string };

/* Mapa slug -> datos del icono */
export const iconMap: Record<string, IconData> = {
  nextdotjs: siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  html5: siHtml5,
  css3: siCss3,
  nodedotjs: siNodedotjs,
  python: siPython,
  supabase: siSupabase,
  postgresql: siPostgresql,
  git: siGit,
  github: siGithub,
  vercel: siVercel,
  meta: siMeta,
  n8n: siN8n,
  anthropic: siAnthropic,
  openai: siOpenai,
  google: siGoogle,
};
