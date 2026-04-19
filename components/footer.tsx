import { restaurant } from "@/lib/restaurant";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-pad border-t border-ink-3/60 py-14">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl tracking-tighter text-bone">
              Sushi <span className="italic text-neon">Empire</span>
            </span>
            <span className="font-jp text-sm text-bone-dim">
              {restaurant.kanji}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-bone-dim">
            {restaurant.address.street} · {restaurant.address.postal} ·{" "}
            {restaurant.phoneDisplay}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.22em] text-bone-dim">
          <a href="#menu" className="link-underline hover:text-bone">Menu</a>
          <a href="#reviews" className="link-underline hover:text-bone">Reviews</a>
          <a href="#visit" className="link-underline hover:text-bone">Visit</a>
          <a
            href={restaurant.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-bone"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-3/60 pt-6 text-[11px] uppercase tracking-[0.22em] text-bone-dim md:flex-row md:items-center">
        <span>© {year} Sushi Empire. All rights reserved.</span>
        <span>
          Website by{" "}
          <a
            href="https://elevateai.pt"
            target="_blank"
            rel="noreferrer"
            className="text-bone hover:text-neon"
          >
            ElevateAI
          </a>
        </span>
      </div>
    </footer>
  );
}
