"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { menu } from "@/lib/menu-data";
import { DishCard } from "./dish-card";
import { ChefsSelection } from "./chefs-selection";
import { Reveal } from "../reveal";

export function MenuSection() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const [lang, setLang] = useState<"en" | "pt">("en");
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section
      id="menu"
      className="section-pad relative border-t border-ink-3/60 py-24 md:py-36"
    >
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <Reveal>
            <span className="eyebrow">The Menu</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-display-lg font-light text-bone">
              From the <span className="italic text-neon">ice</span>.<br />
              From the <span className="italic text-neon">wok</span>.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="flex items-center gap-1 border border-ink-3 p-1">
            <LangBtn active={lang === "en"} onClick={() => setLang("en")}>EN</LangBtn>
            <LangBtn active={lang === "pt"} onClick={() => setLang("pt")}>PT</LangBtn>
          </div>
        </Reveal>
      </div>

      {/* Tab switcher */}
      <Reveal delay={0.2}>
        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-ink-3/70 pb-4"
        >
          {menu.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(cat.id)}
                className={clsx(
                  "group relative -mb-[17px] flex items-baseline gap-2 border-b-2 pb-4 text-[13px] uppercase tracking-[0.22em] transition-colors",
                  isActive
                    ? "border-neon text-bone"
                    : "border-transparent text-bone-dim hover:text-bone"
                )}
              >
                <span>{cat.label}</span>
                {cat.labelJp && (
                  <span className="font-jp text-[12px] tracking-normal text-bone-dim group-hover:text-neon">
                    {cat.labelJp}
                  </span>
                )}
                <span className="ml-1 text-[10px] text-bone-dim">
                  {String(cat.dishes.length).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-4 max-w-xl text-[13px] italic text-bone-dim">
        {active.tagline}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {active.dishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} language={lang} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      <ChefsSelection />

      <p className="mt-16 max-w-2xl text-[11px] italic text-bone-dim">
        Menu is illustrative — ask your server for daily availability. Calorie
        estimates are approximate. Allergen information on request.
      </p>
    </section>
  );
}

function LangBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        "px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] transition-colors",
        active ? "bg-neon text-ink" : "text-bone-dim hover:text-bone"
      )}
    >
      {children}
    </button>
  );
}
