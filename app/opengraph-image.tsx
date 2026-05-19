import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Matias Aguero Ventrice - Junior Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Barra decorativa naranja superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            backgroundColor: "#ea580c",
          }}
        />

        {/* Iniciales */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            fontSize: 24,
            fontWeight: 700,
            color: "#ea580c",
            letterSpacing: "-0.02em",
          }}
        >
          MA
        </div>

        {/* Contenido principal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Circulo con iniciales como placeholder (la foto no se puede cargar en edge) */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundColor: "#18181b",
              border: "3px solid #ea580c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: 700,
              color: "#fafafa",
            }}
          >
            MA
          </div>

          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.02em",
            }}
          >
            Matias Aguero Ventrice
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#a1a1aa",
            }}
          >
            Junior Full-Stack Developer & Coordinador Ejecutivo
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#ea580c",
              marginTop: 8,
            }}
          >
            San Juan, Argentina
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
