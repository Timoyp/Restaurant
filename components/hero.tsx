"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { restaurant } from "@/lib/restaurant";
import { images, img } from "@/lib/images";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden hero-vignette"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          // TODO: replace with real Sushi Empire hero photography
          src={img(images.hero.id, 2400, 75)}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
      </div>

      {/* Enormous kanji watermark — tension, not decoration */}
      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="pointer-events-none absolute -right-8 top-[14%] select-none font-jp text-[22vw] leading-none text-neon md:-right-12 md:top-[10%]"
      >
        {restaurant.kanji}
      </motion.span>

      <div className="section-pad relative z-10 pb-20 pt-40 md:pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="eyebrow">Funchal · Madeira · Since 2019</span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-6 max-w-[16ch] font-display text-display-xl font-light text-bone"
        >
          Sushi<br />
          <span className="italic text-neon">Empire.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="mt-8 max-w-xl text-[15px] leading-relaxed text-bone-dim md:text-base"
        >
          {restaurant.tagline} Hand-crafted sushi and traditional Chinese warmth,
          served all-you-can-eat in Funchal&apos;s most cinematic dining room.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a href="#visit" className="btn-neon">
            Reserve a Table
          </a>
          <a href="#menu" className="btn-ghost">
            View Menu
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-20 hidden items-end justify-between border-t border-ink-3/60 pt-6 md:flex"
        >
          <Stat label="Rating" value={`${restaurant.rating.score} ★`} sub={`${restaurant.rating.count} Google reviews`} />
          <Stat label="Concept" value="All-you-can-eat" sub={restaurant.priceRange} />
          <Stat label="Cuisine" value="日本 + 中華" sub="Japanese · Chinese fusion" />
          <Stat label="Address" value="Estrada Monumental" sub="340H · São Martinho" alignRight />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-bone-dim"
      >
        <span className="block">Scroll</span>
        <span
          aria-hidden
          className="mx-auto mt-2 block h-8 w-px bg-gradient-to-b from-neon to-transparent animate-scroll-hint"
        />
      </a>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
  alignRight,
}: {
  label: string;
  value: string;
  sub: string;
  alignRight?: boolean;
}) {
  return (
    <div className={alignRight ? "text-right" : ""}>
      <div className="text-[10px] uppercase tracking-[0.28em] text-bone-dim">
        {label}
      </div>
      <div className="mt-2 font-display text-2xl text-bone">{value}</div>
      <div className="mt-1 text-[12px] text-bone-dim">{sub}</div>
    </div>
  );
}
