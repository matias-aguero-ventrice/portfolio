"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  FolderKanban,
  Layers,
  Briefcase,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
  FileDown,
} from "lucide-react";
import { useTheme } from "next-themes";
import { personalInfo } from "@/lib/data";

type CommandItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  keywords: string[];
  group: string;
};

/* Command palette estilo Spotlight / VS Code */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useTheme();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      close();
      if (href.startsWith("#")) {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.open(href, "_blank");
      }
    },
    [close]
  );

  const commands: CommandItem[] = [
    {
      id: "sobre-mi",
      label: "Sobre m\u00ed",
      icon: User,
      action: () => navigate("#sobre-mi"),
      keywords: ["about", "sobre", "bio", "perfil"],
      group: "Navegaci\u00f3n",
    },
    {
      id: "proyectos",
      label: "Proyectos",
      icon: FolderKanban,
      action: () => navigate("#proyectos"),
      keywords: ["projects", "trabajo", "crm", "portfolio"],
      group: "Navegaci\u00f3n",
    },
    {
      id: "stack",
      label: "Stack t\u00e9cnico",
      icon: Layers,
      action: () => navigate("#stack"),
      keywords: ["tech", "tecnologias", "herramientas", "skills"],
      group: "Navegaci\u00f3n",
    },
    {
      id: "experiencia",
      label: "Experiencia",
      icon: Briefcase,
      action: () => navigate("#experiencia"),
      keywords: ["experience", "trabajo", "empleo", "tumatch"],
      group: "Navegaci\u00f3n",
    },
    {
      id: "educacion",
      label: "Formaci\u00f3n acad\u00e9mica",
      icon: GraduationCap,
      action: () => navigate("#educacion"),
      keywords: ["education", "estudios", "universidad", "unsj"],
      group: "Navegaci\u00f3n",
    },
    {
      id: "contacto",
      label: "Contacto",
      icon: Mail,
      action: () => navigate("#contacto"),
      keywords: ["contact", "email", "whatsapp", "mensaje"],
      group: "Navegaci\u00f3n",
    },
    {
      id: "theme",
      label: `Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`,
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        close();
      },
      keywords: ["theme", "tema", "dark", "light", "oscuro", "claro"],
      group: "Acciones",
    },
    {
      id: "cv",
      label: "Descargar CV",
      icon: FileDown,
      action: () => navigate("/cv.pdf"),
      keywords: ["cv", "resume", "curriculum", "descargar"],
      group: "Acciones",
    },
    {
      id: "github",
      label: "Abrir GitHub",
      icon: Github,
      action: () => navigate(personalInfo.githubUrl),
      keywords: ["github", "codigo", "repositorio"],
      group: "Links",
    },
    {
      id: "linkedin",
      label: "Abrir LinkedIn",
      icon: Linkedin,
      action: () => navigate(personalInfo.linkedinUrl),
      keywords: ["linkedin", "perfil", "red"],
      group: "Links",
    },
  ];

  /* Filtrar comandos */
  const filtered = query
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(query.toLowerCase()) ||
          cmd.keywords.some((k) => k.includes(query.toLowerCase()))
      )
    : commands;

  /* Agrupar */
  const groups = filtered.reduce(
    (acc, cmd) => {
      if (!acc[cmd.group]) acc[cmd.group] = [];
      acc[cmd.group].push(cmd);
      return acc;
    },
    {} as Record<string, CommandItem[]>
  );

  /* Keyboard shortcut para abrir */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  /* Focus en el input al abrir */
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  /* Navegacion con flechas */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[selected]) {
      filtered[selected].action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[70]"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          {/* Palette */}
          <motion.div
            className="fixed top-[20%] left-1/2 z-[80] w-[90vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border shadow-2xl"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            {/* Input */}
            <div
              className="flex items-center gap-3 border-b px-4 py-3"
              style={{ borderColor: "var(--border)" }}
            >
              <Search className="h-4 w-4 shrink-0" style={{ color: "var(--text-secondary)" }} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar secciones, acciones, links..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--text-secondary)]"
                style={{ color: "var(--text-primary)" }}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelected(0);
                }}
                onKeyDown={handleKeyDown}
              />
              <kbd
                className="hidden shrink-0 rounded border px-1.5 py-0.5 text-[10px] sm:inline-block"
                style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
              >
                ESC
              </kbd>
            </div>

            {/* Resultados */}
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm" style={{ color: "var(--text-secondary)" }}>
                  Sin resultados
                </p>
              )}

              {Object.entries(groups).map(([group, items]) => {
                return (
                  <div key={group}>
                    <p
                      className="px-3 pt-2 pb-1 text-[10px] font-semibold uppercase tracking-widest"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {group}
                    </p>
                    {items.map((cmd) => {
                      const globalIndex = filtered.indexOf(cmd);
                      const isSelected = globalIndex === selected;
                      return (
                        <button
                          key={cmd.id}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors"
                          style={{
                            backgroundColor: isSelected ? "var(--background)" : "transparent",
                            color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                          }}
                          onClick={cmd.action}
                          onMouseEnter={() => setSelected(globalIndex)}
                        >
                          <cmd.icon className="h-4 w-4 shrink-0" />
                          {cmd.label}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-between border-t px-4 py-2"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-[10px]" style={{ color: "var(--text-secondary)" }}>
                Navegar con flechas
              </span>
              <span className="text-[10px]" style={{ color: "var(--text-secondary)" }}>
                Enter para seleccionar
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
