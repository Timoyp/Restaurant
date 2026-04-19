"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { restaurant } from "@/lib/restaurant";

const links = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-ink-3/70 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="section-pad flex items-center justify-between py-5 md:py-6"
      >
        <a
          href="#home"
          className="group flex items-baseline gap-3 focus:outline-none"
          aria-label={`${restaurant.name} — home`}
        >
          <span className="font-display text-[22px] leading-none tracking-tighter text-bone">
            Sushi{" "}
            <span className="italic text-neon">Empire</span>
          </span>
          <span
            aria-hidden
            className="font-jp text-[13px] text-bone-dim transition-colors group-hover:text-neon"
          >
            {restaurant.kanji}
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-[13px] uppercase tracking-[0.22em] text-bone-dim transition-colors hover:text-bone"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#visit"
            className="hidden btn-neon md:inline-flex"
          >
            Find Us
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="relative grid h-11 w-11 place-items-center border border-ink-3 text-bone transition-colors hover:border-neon hover:text-neon md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="absolute left-1/2 top-[18px] h-px w-5 -translate-x-1/2 bg-current" />
            <span className="absolute left-1/2 top-[26px] h-px w-5 -translate-x-1/2 bg-current" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="section-pad flex items-center justify-between py-5">
              <span className="font-display text-[22px] text-bone">
                Sushi <span className="italic text-neon">Empire</span>
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center border border-ink-3 text-bone transition-colors hover:border-neon hover:text-neon"
              >
                <span className="sr-only">Close</span>
                <span className="relative block h-px w-5 bg-current before:absolute before:inset-0 before:rotate-90 before:bg-current" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
              className="section-pad mt-10 flex flex-col gap-1"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="border-b border-ink-3"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-6 font-display text-4xl text-bone transition-colors hover:text-neon"
                  >
                    {l.label}
                    <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-bone-dim">
                      0{links.indexOf(l) + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="section-pad mt-10">
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="btn-neon w-full"
              >
                Find Us
              </a>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                className="mt-4 block text-center font-display text-xl italic text-bone-dim hover:text-neon"
              >
                {restaurant.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
