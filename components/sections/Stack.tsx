"use client";

import { motion } from "framer-motion";
import { stackCategories } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import { SimpleIcon } from "@/components/SimpleIcon";
import { TextScramble } from "@/components/TextScramble";
import { useI18n } from "@/lib/i18n";

export function Stack() {
  const { t } = useI18n();
  return (
    <section id="stack" className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-10 border-l-[3px] pl-4 text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ borderColor: "var(--accent)", color: "var(--text-primary)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <TextScramble text={t.stack.title} />
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="rounded-xl border p-5"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
            >
              <h3
                className="mb-4 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                {t.stack.categories[catIndex] || category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const icon = item.iconSlug ? iconMap[item.iconSlug] : undefined;
                  return (
                    <span
                      key={item.name}
                      className="border-glow-hover inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-sm transition-transform hover:-translate-y-0.5"
                      style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                    >
                      {icon && (
                        <SimpleIcon path={icon.path} hex={icon.hex} title={icon.title} className="h-3.5 w-3.5" />
                      )}
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
