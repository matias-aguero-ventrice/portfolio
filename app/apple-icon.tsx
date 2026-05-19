import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/* Apple touch icon con iniciales MA */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          borderRadius: 40,
          fontSize: 88,
          fontWeight: 700,
          color: "#ea580c",
          letterSpacing: "-0.02em",
        }}
      >
        MA
      </div>
    ),
    { ...size }
  );
}
