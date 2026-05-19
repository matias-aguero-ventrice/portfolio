"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "Qu\u00e9 tecnolog\u00edas maneja?",
  "Cu\u00e1nto tiempo lleva el CRM en producci\u00f3n?",
  "Est\u00e1 disponible para trabajar?",
  "Qu\u00e9 estudi\u00f3?",
];

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hola! Soy el asistente del portfolio de Mat\u00edas. Preguntame lo que quieras sobre su experiencia, proyectos o habilidades.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() }),
      });

      const data = await res.json();
      const reply = data.reply || data.error || "No pude responder.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error de conexi\u00f3n. Intent\u00e1 de nuevo." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Boton flotante */}
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full border px-4 py-3 shadow-lg transition-colors hover:border-[var(--accent)]"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Abrir chat"
          >
            <MessageCircle className="h-5 w-5" style={{ color: "var(--accent)" }} />
            <span className="hidden text-sm font-medium sm:inline" style={{ color: "var(--text-primary)" }}>
              Preguntale a mi portfolio
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ventana de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-5 left-5 z-50 flex w-[340px] flex-col overflow-hidden rounded-xl border shadow-2xl sm:w-[380px]"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", height: 480 }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between border-b px-4 py-3"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4" style={{ color: "var(--accent)" }} />
                <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                  Chat del portfolio
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1 transition-colors hover:bg-[var(--background)]"
                style={{ color: "var(--text-secondary)" }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-3" style={{ backgroundColor: "var(--background)" }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: msg.role === "assistant" ? "var(--accent)" : "var(--border)",
                    }}
                  >
                    {msg.role === "assistant" ? (
                      <Bot className="h-3.5 w-3.5 text-white" />
                    ) : (
                      <User className="h-3.5 w-3.5" style={{ color: "var(--text-secondary)" }} />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      msg.role === "user" ? "rounded-tr-none" : "rounded-tl-none"
                    }`}
                    style={{
                      backgroundColor: msg.role === "user" ? "var(--accent)" : "var(--surface)",
                      color: msg.role === "user" ? "#fff" : "var(--text-primary)",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="mb-3 flex items-start gap-2">
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <Bot className="h-3.5 w-3.5 text-white" />
                  </div>
                  <div className="rounded-lg rounded-tl-none px-3 py-2" style={{ backgroundColor: "var(--surface)" }}>
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full" style={{ backgroundColor: "var(--text-secondary)", animationDelay: "0ms" }} />
                      <span className="h-2 w-2 animate-bounce rounded-full" style={{ backgroundColor: "var(--text-secondary)", animationDelay: "150ms" }} />
                      <span className="h-2 w-2 animate-bounce rounded-full" style={{ backgroundColor: "var(--text-secondary)", animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Sugerencias si solo hay el mensaje inicial */}
              {messages.length === 1 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="rounded-md border px-2.5 py-1 text-xs transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t px-3 py-2.5"
              style={{ borderColor: "var(--border)" }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Preguntame algo..."
                maxLength={500}
                className="flex-1 bg-transparent text-base sm:text-sm outline-none"
                style={{ color: "var(--text-primary)" }}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="rounded-md p-1.5 transition-colors hover:bg-[var(--background)] disabled:opacity-30"
                style={{ color: "var(--accent)" }}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
