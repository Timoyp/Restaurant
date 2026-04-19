import { restaurant } from "@/lib/restaurant";
import { Reveal } from "./reveal";

export function Visit() {
  return (
    <section
      id="visit"
      className="section-pad relative border-t border-ink-3/60 py-24 md:py-36"
    >
      <div className="grid gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <span className="eyebrow">Find Us</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-display-lg font-light text-bone">
              Estrada <br />
              <span className="italic text-neon">Monumental</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <address className="mt-10 not-italic text-[15px] leading-relaxed text-bone-dim">
              {restaurant.address.street}
              <br />
              {restaurant.address.area}
              <br />
              {restaurant.address.postal}
              <br />
              {restaurant.address.country}
            </address>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={restaurant.socials.googleMaps}
                target="_blank"
                rel="noreferrer"
                className="btn-neon"
              >
                Get Directions
              </a>
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                className="btn-ghost"
              >
                Call · {restaurant.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <dl className="mt-12 border-t border-ink-3/60">
              {restaurant.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-baseline justify-between border-b border-ink-3/60 py-3"
                >
                  <dt className="text-[13px] uppercase tracking-[0.18em] text-bone-dim">
                    {h.day}
                  </dt>
                  <dd className="font-display text-lg text-bone tabular-nums">
                    {h.open} <span className="text-bone-dim">—</span> {h.close}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[11px] italic text-bone-dim">
              Hours defined in <code className="font-sans">lib/restaurant.ts</code> —
              edit once, updates everywhere.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal delay={0.2} y={20}>
            <div className="relative aspect-[4/5] overflow-hidden border border-ink-3 md:aspect-[5/6]">
              <iframe
                title="Map showing Sushi Empire at Estrada Monumental 340H, Funchal"
                src={restaurant.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale contrast-[1.1] brightness-[0.45] invert-[0.92] hue-rotate-[80deg] saturate-[1.4]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between text-bone">
                <span className="font-jp text-sm text-neon">地図 · Map</span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-bone-dim">
                  32.6416° N · 16.9300° W
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
