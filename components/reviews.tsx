import { reviews } from "@/lib/reviews-data";
import { restaurant } from "@/lib/restaurant";
import { Reveal } from "./reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} out of 5 stars`} className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </span>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className={filled ? "fill-neon" : "fill-ink-3"}
    >
      <path d="M12 2.5l2.945 6.62L22 10.3l-5.25 4.94 1.35 7.26L12 18.9 5.9 22.5l1.35-7.26L2 10.3l7.055-1.18L12 2.5z" />
    </svg>
  );
}

export function Reviews() {
  const { score, count, source } = restaurant.rating;
  return (
    <section
      id="reviews"
      className="section-pad relative border-t border-ink-3/60 py-24 md:py-36"
    >
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <Reveal>
            <span className="eyebrow">The Room Speaks</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl font-display text-display-lg font-light text-bone">
              Said <span className="italic text-neon">plainly</span>,
              by the people who came and stayed.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <a
            href={restaurant.socials.googleReviews}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-5 border border-ink-3 px-6 py-4 transition-colors hover:border-neon"
          >
            <div className="font-display text-5xl text-bone">{score}</div>
            <div>
              <Stars rating={Math.round(score)} />
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-bone-dim">
                {count} reviews · {source}
              </div>
            </div>
          </a>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <li key={r.author} className="h-full">
            <Reveal delay={i * 0.08} y={20} className="flex h-full flex-col justify-between gap-8 border border-ink-3 bg-ink-2 p-8 transition-colors hover:border-neon/40">
              <div>
                <Stars rating={r.rating} />
                <blockquote className="mt-6 font-display text-xl italic leading-relaxed text-bone">
                  <span className="text-neon">&ldquo;</span>
                  {r.quote}
                  <span className="text-neon">&rdquo;</span>
                </blockquote>
              </div>
              <footer className="flex items-center justify-between border-t border-ink-3/60 pt-5 text-[12px]">
                <div>
                  <div className="text-bone">{r.author}</div>
                  <div className="mt-0.5 text-bone-dim">{r.meta}</div>
                </div>
                <div className="text-bone-dim">{r.when}</div>
              </footer>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
