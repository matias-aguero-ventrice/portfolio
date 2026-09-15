import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

/* Fuente principal para textos */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Dominio base - cambiar cuando tengas dominio custom */
const siteUrl = "https://matiasaguero.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mat\u00edas Ag\u00fcero Ventrice \u2014 Head of Product & Operations",
  description:
    "Head of Product & Operations en Grupo Propital, basado en San Juan, Argentina. Lidero producto y operaciones para TuMatch/Orkezto y Numinap, construyendo con Next.js, React, TypeScript y Supabase apalancado en herramientas de IA.",
  keywords: [
    "head of product",
    "product manager",
    "full-stack developer",
    "next.js",
    "react",
    "typescript",
    "san juan",
    "argentina",
    "ai-augmented",
  ],
  authors: [{ name: "Matias Aguero Ventrice" }],
  creator: "Matias Aguero Ventrice",
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Matias Aguero Ventrice",
    title: "Mat\u00edas Ag\u00fcero Ventrice \u2014 Head of Product & Operations",
    description:
      "Head of Product & Operations en Grupo Propital, basado en San Juan, Argentina. Lidero producto y operaciones para TuMatch/Orkezto y Numinap con Next.js, React, TypeScript y Supabase.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mat\u00edas Ag\u00fcero Ventrice \u2014 Head of Product & Operations",
    description:
      "Head of Product & Operations en Grupo Propital, basado en San Juan, Argentina. Lidero producto y operaciones para TuMatch/Orkezto y Numinap con Next.js, React, TypeScript y Supabase.",
    images: ["/opengraph-image"],
  },
};

/* JSON-LD schema Person */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matias Valentin Aguero Ventrice",
  jobTitle: "Head of Product & Operations",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Juan",
    addressCountry: "AR",
  },
  email: "valentinmaty6@gmail.com",
  url: siteUrl,
  sameAs: [
    "https://linkedin.com/in/matias-valent%C3%ADn-aguero-ventrice",
    "https://github.com/matias-aguero-ventrice",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-AR"
      className={`${inter.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider><I18nProvider>{children}</I18nProvider></ThemeProvider>
      </body>
    </html>
  );
}
