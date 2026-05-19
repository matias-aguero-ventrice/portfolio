"use client";

import { UserPlus } from "lucide-react";
import { personalInfo } from "@/lib/data";

/* Genera y descarga un archivo .vcf con los datos de contacto */
function generateVCard(): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${personalInfo.fullName}`,
    `N:Agüero Ventrice;Matías Valentín;;;`,
    `EMAIL:${personalInfo.email}`,
    `TEL;TYPE=CELL:${personalInfo.whatsapp}`,
    `URL:https://matiasaguero.dev`,
    `ADR;TYPE=HOME:;;;;;;San Juan;Argentina`,
    `TITLE:Junior Full-Stack Developer`,
    `ORG:TuMatch Inmobiliario`,
    "END:VCARD",
  ].join("\n");
}

export function VCardButton() {
  const handleDownload = () => {
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "matias-aguero-ventrice.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="border-glow-hover flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors sm:p-5"
      style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
    >
      <UserPlus className="h-5 w-5" style={{ color: "var(--accent)" }} />
      <span className="text-sm font-medium">Guardar contacto</span>
      <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
        Descargar vCard
      </span>
    </button>
  );
}
