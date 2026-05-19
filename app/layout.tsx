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
  title: "Matias Aguero Ventrice -- Junior Full-Stack Developer",
  description:
    "Developer junior basado en San Juan, Argentina. Construyo productos digitales con Next.js, React, TypeScript y Supabase, apalancado en herramientas de IA. Coordinador Ejecutivo en TuMatch Inmobiliario.",
  keywords: [
    "developer",
    "full-stack",
    "next.js",
    "react",
    "typescript",
    "san juan",
    "argentina",
    "junior developer",
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
    title: "Matias Aguero Ventrice -- Junior Full-Stack Developer",
    description:
      "Developer junior basado en San Juan, Argentina. Construyo productos digitales con Next.js, React, TypeScript y Supabase.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matias Aguero Ventrice -- Junior Full-Stack Developer",
    description:
      "Developer junior basado en San Juan, Argentina. Construyo productos digitales con Next.js, React, TypeScript y Supabase.",
    images: ["/opengraph-image"],
  },
};

/* JSON-LD schema Person */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matias Valentin Aguero Ventrice",
  jobTitle: "Junior Full-Stack Developer",
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
