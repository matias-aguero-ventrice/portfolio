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

Edita el array `projects` en `lib/data.ts`:

```typescript
{
  title: "Nombre del proyecto",
  subtitle: "Una linea descriptiva",
  description: "Descripcion de 2-3 lineas.",
  badge: { text: "Estado", color: "green" }, // green | orange | zinc
  tags: ["Tech1", "Tech2"],
  // Opcionales:
  metrics: [{ label: "metrica", value: "+100" }],
  image: "/projects/imagen.jpg",
  link: { text: "Ver mas", url: "https://..." },
  footer: "Texto al pie de la card",
}
```

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
  data.ts             - Datos del CV centralizados
  icons.ts            - Mapa de Simple Icons
  utils.ts            - cn() helper
```
