import Image from "next/image";
import { images, img } from "@/lib/images";
import { Reveal } from "./reveal";

export function Intro() {
  return (
    <section
      id="about"
      className="section-pad relative border-t border-ink-3/60 py-24 md:py-36"
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-5">
          <Reveal>
            <span className="eyebrow">The Idea</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-display-lg font-light text-bone">
              Tokyo&apos;s <span className="italic text-neon">precision</span>.
              Madeira&apos;s table.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-bone-dim">
              An all-you-can-eat experience built around hand-crafted sushi,
              sashimi cut to order, and the warmth of traditional Chinese
              cooking. No buffet tray has ever touched this food — everything
              arrives from the pass.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-ink-3/60 pt-8 max-w-md">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-bone-dim">
                  Opens
                </dt>
                <dd className="mt-2 font-display text-2xl text-bone">12:00</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-bone-dim">
                  Closes
                </dt>
                <dd className="mt-2 font-display text-2xl text-bone">23:00</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-bone-dim">
                  Days
                </dt>
                <dd className="mt-2 font-display text-2xl text-bone">Seven</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.28em] text-bone-dim">
                  Concept
                </dt>
                <dd className="mt-2 font-display text-2xl text-bone">AYCE</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.2} y={24}>
            <figure className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <Image
                // TODO: replace with real Sushi Empire interior photography
                src={img(images.interior.id, 1600, 78)}
                alt={images.interior.alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-bone">
                <span className="font-jp text-sm text-neon">店内 · The Room</span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-bone-dim">
                  Green booths · Mirrored glass · Low light
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
