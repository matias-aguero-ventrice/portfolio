"use client";

import { Calendar } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_USER = "matias-valentin-aguero-ventrice-9qhrev";

export function CalendlyButton() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={CAL_USER}
      data-cal-config='{"layout":"month_view"}'
      className="border-glow-hover inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
      style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
    >
      <Calendar className="h-4 w-4" style={{ color: "var(--accent)" }} />
      Agend&aacute; una llamada
    </button>
  );
}
