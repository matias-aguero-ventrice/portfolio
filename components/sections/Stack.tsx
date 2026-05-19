"use client";

import { motion } from "framer-motion";
import { stackCategories } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import { SimpleIcon } from "@/components/SimpleIcon";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function Stack() {
  return (
    <section id="stack" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-10 border-l-[3px] pl-4 text-3xl font-bold tracking-tight"
          style={{
            borderColor: "var(--accent)",
            color: "var(--text-primary)",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Stack tecnico
        </motion.h2>

        <div className="space-y-8">
          {stackCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, delay: catIndex * 0.08 },
                },
              }}
            >
              {/* Titulo de categoria */}
              <h3
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-secondary)" }}
              >
                {category.title}
              </h3>

              {/* Grid de pills */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const icon = item.iconSlug
                    ? iconMap[item.iconSlug]
                    : undefined;

                  return (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {icon && (
                        <SimpleIcon
                          path={icon.path}
                          hex={icon.hex}
                          title={icon.title}
                          className="h-4 w-4"
                        />
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
