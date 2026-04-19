"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { Dish } from "@/lib/menu-data";
import { images, img } from "@/lib/images";

type Props = {
  dish: Dish;
  language: "en" | "pt";
  index: number;
};

export function DishCard({ dish, language, index }: Props) {
  const image = images.dishes[dish.imageId as keyof typeof images.dishes];
  const name = language === "pt" && dish.namePt ? dish.namePt : dish.name;
  const description =
    language === "pt" && dish.descriptionPt ? dish.descriptionPt : dish.description;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 6) * 0.04 }}
      className="card-dish group flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-ink">
        <Image
          // TODO: replace with real dish photography
          src={img(image.id, 800, 72)}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        {dish.code && (
          <span className="absolute left-3 top-3 border border-neon/60 bg-ink/70 px-2 py-0.5 font-display text-[11px] italic text-neon backdrop-blur-sm">
            {dish.code}
          </span>
        )}
        <span className="absolute right-3 top-3 font-display text-sm italic text-bone/90">
          {dish.calories} kcal
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-5">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-lg leading-tight text-bone">{name}</h3>
            <span className="shrink-0 font-display text-lg text-neon">
              €{dish.price.toFixed(2)}
            </span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-bone-dim">
            {description}
          </p>
        </div>

        <div
          className={clsx(
            "flex items-center justify-between border-t border-ink-3/70 pt-3 text-[10px] uppercase tracking-[0.22em] text-bone-dim",
            "transition-colors group-hover:border-neon/40"
          )}
        >
          <span>
            {language === "pt" && dish.name !== name ? dish.name : dish.namePt ?? "—"}
          </span>
          <span className="font-jp text-[12px] not-italic text-bone-dim group-hover:text-neon">
            おすすめ
          </span>
        </div>
      </div>
    </motion.article>
  );
}
