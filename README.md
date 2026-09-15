# Portfolio - Matias Aguero Ventrice

Sitio web personal / portfolio profesional. Landing page de una sola pagina con scroll vertical, mobile-first, en espanol.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript estricto
- **Estilos:** Tailwind CSS v4
- **Componentes:** shadcn/ui
- **Iconos:** Lucide React + Simple Icons
- **Animaciones:** Framer Motion
- **Tema:** next-themes (dark/light, default dark)
- **Deploy:** Vercel

## Correr localmente

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Subi el repo a GitHub.
2. Anda a [vercel.com/new](https://vercel.com/new).
3. Importa el repositorio.
4. Vercel detecta Next.js automaticamente. Click en **Deploy**.
5. Listo.

### Dominio custom (matiasaguero.dev)

1. En el dashboard del proyecto en Vercel, anda a **Settings > Domains**.
2. Agrega `matiasaguero.dev`.
3. Configura los DNS en tu registrador:
   - Tipo `A`: `76.76.21.21`
   - Tipo `CNAME` para `www`: `cname.vercel-dns.com`
4. Actualiza la variable `siteUrl` en `app/layout.tsx` con tu dominio real.

## Assets necesarios

Antes de deployar, coloca estos archivos en `/public`:

| Archivo | Descripcion |
|---------|-------------|
| `profile.jpg` | Foto circular, minimo 600x600px |
| `cv.pdf` | CV actualizado en formato ATS-friendly |
| `projects/madein3d.jpg` | Foto representativa del emprendimiento |
| `favicon.ico` | Favicon del sitio |
| `apple-touch-icon.png` | Icono para dispositivos Apple (180x180) |

## Cambiar color de acento

Edita las variables en `app/globals.css`:

```css
@theme {
  --color-accent: #ea580c;       /* naranja principal */
  --color-accent-hover: #f97316; /* hover en dark mode */
  --color-accent-dark-hover: #c2410c; /* hover en light mode */
}
```

Tambien actualiza los valores de `--accent` y `--accent-hover` en los bloques `:root` y `.light`.

## Agregar un nuevo proyecto

El contenido de cara al usuario (headline, about, proyectos, experiencia, educación,
testimonios) vive en `lib/i18n.tsx` (bloques `es`/`en`), no en `lib/data.ts` — es la
única fuente que los componentes de `sections/` leen de verdad, porque soporta ES/EN.

1. Agrega las claves `subtitle`/`description` del proyecto en `lib/i18n.tsx`, dentro de
   `projects` (en ambos bloques `es` y `en`).
2. Agrega la card en el array `projects` de `components/sections/Projects.tsx`
   (título, referencia a las claves de `t.projects.*`, badge, tags y, opcional,
   `metrics`/`link`/`footer`).

```typescript
// lib/i18n.tsx (dentro de projects, en es y en)
miProyecto: {
  subtitle: "Una linea descriptiva",
  description: "Descripcion de 2-3 lineas.",
},

// components/sections/Projects.tsx
{
  title: "Nombre del proyecto",
  subtitle: t.projects.miProyecto.subtitle,
  description: t.projects.miProyecto.description,
  badge: { text: t.projects.badges.production, color: "green" }, // green | orange | zinc
  tags: ["Tech1", "Tech2"],
  // Opcionales:
  metrics: [{ label: "metrica", value: "+100" }],
  link: { text: t.projects.viewCode, url: "https://..." },
  footer: t.projects.confidential,
}
```

`lib/data.ts` solo trae lo que los componentes importan directo: datos
personales/contacto (Hero, Footer, Navbar, Contact, VCardButton, CommandPalette,
GitHubStats), el stack técnico (`Stack.tsx`) y los links de navegación (`Navbar.tsx`).

## Estructura

```
app/
  layout.tsx          - Metadata, fuentes, ThemeProvider, JSON-LD
  page.tsx            - Landing principal
  globals.css         - Tailwind v4 + variables CSS
  opengraph-image.tsx - OG image dinamico
  sitemap.ts          - Sitemap automatico
  robots.ts           - robots.txt
components/
  sections/           - Hero, About, Projects, Stack, Experience, Education, Contact
  Navbar.tsx          - Header sticky con backdrop-blur
  Footer.tsx          - Footer con copyright
  ThemeToggle.tsx     - Dark/light toggle
  ThemeProvider.tsx   - Wrapper de next-themes
  SimpleIcon.tsx      - Renderizador de Simple Icons
lib/
  i18n.tsx            - Contenido de cara al usuario (ES/EN) - fuente de verdad
  data.ts             - Datos personales/contacto, stack técnico y nav links
  icons.ts            - Mapa de Simple Icons
  utils.ts            - cn() helper
```
