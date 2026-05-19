"use client";

import { QRCodeSVG } from "qrcode.react";

/* QR dinámico para WhatsApp */
export function WhatsAppQR({ url, size = 120 }: { url: string; size?: number }) {
  return (
    <div className="inline-flex rounded-lg border p-2" style={{ borderColor: "var(--border)", backgroundColor: "#ffffff" }}>
      <QRCodeSVG
        value={url}
        size={size}
        level="M"
        fgColor="#18181b"
        bgColor="#ffffff"
      />
    </div>
  );
}
