import Image from "next/image";
import { images, img } from "@/lib/images";
import { Reveal } from "../reveal";

export function ChefsSelection() {
  return (
    <Reveal y={24}>
      <figure className="relative mt-24 grid overflow-hidden border border-neon/30 bg-ink-2 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
          <Image
            // TODO: replace with a real hero shot of the chef's platter
            src={img(images.chefSelection.id, 1600, 78)}
            alt={images.chefSelection.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
        </div>

        <figcaption className="relative flex flex-col justify-between gap-10 p-8 md:p-14">
          <div>
            <span className="eyebrow">Chef&apos;s Selection</span>
            <h3 className="mt-6 font-display text-display-md font-light text-bone">
              The <span className="italic text-neon">Twenty</span>.
            </h3>
            <p className="mt-2 font-jp text-lg text-bone-dim">料理長の選択</p>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-bone-dim">
              Twenty pieces chosen by the chef each evening — whatever came in
              best on the ice. Nigiri, rolls, sashimi, one surprise. The closest
              thing we have to a tasting menu.
            </p>
          </div>

          <div className="flex items-end justify-between border-t border-ink-3 pt-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-bone-dim">
                Evening price
              </div>
              <div className="mt-2 font-display text-4xl text-bone">€28.00</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.28em] text-bone-dim">
                Serves
              </div>
              <div className="mt-2 font-display text-4xl text-bone">1–2</div>
            </div>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
