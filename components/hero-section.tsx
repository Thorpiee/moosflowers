import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"
import { HeroMedia } from "@/components/hero-media"

export function HeroSection() {
  return (
    <section className="relative bg-background px-4 py-12 sm:py-16 md:px-8 lg:py-20 xl:px-10">
      <div className="mx-auto max-w-[88rem]">
        {/* Card with a barely-perceptible inner gradient from white to cream-tinted on the right */}
        <div className="relative overflow-hidden rounded-[1.9rem] border border-border/80 bg-card shadow-[0_12px_28px_rgba(36,52,44,0.12)]">
          {/* Subtle background wash — faint cream bloom bottom-right */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_90%,rgba(234,230,223,0.45),transparent)]" />

          <div className="relative grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_0.95fr] lg:gap-8 xl:gap-10">

            {/* ── Left: content column ── */}
            <div className="relative z-10 flex items-center px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 xl:px-16 xl:py-14">

              {/* Thin vertical rule between columns, desktop only */}
              <div className="absolute right-0 top-[8%] hidden h-[84%] w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

              <div className="w-full max-w-[40rem] lg:max-w-[42rem] lg:pr-8 xl:pr-10">

                {/* Brand label */}
                <div className="mb-5 flex items-center gap-3 animate-fade-in">
                  <span className="text-[0.67rem] tracking-[0.32em] uppercase text-primary/55">
                    Moo's Flowers
                  </span>
                </div>

                <h1 className="mb-5 max-w-[12ch] font-serif text-4xl leading-[0.95] tracking-[0.01em] text-primary sm:text-5xl md:text-6xl lg:text-[4.35rem] xl:text-[5.1rem] animate-fade-in-up">
                  Seasonal Florist
                  <br />
                  in Suffolk & Essex
                </h1>

                <div className="mb-6 h-px w-14 bg-primary/35" />

                {/* Supporting copy */}
                <p className="mb-8 max-w-[44ch] text-[0.98rem] leading-relaxed text-primary/78 sm:text-base md:text-lg xl:text-[1.18rem] animate-fade-in-up animation-delay-100">
                  Moo's Flowers creates natural, countryside-inspired wedding flowers, gifts, and home arrangements across Suffolk, Essex, Ipswich, Colchester, and the surrounding countryside, each one made with a slightly wild, thoughtful hand.
                </p>

                {/* CTA group */}
                <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center animate-fade-in-up animation-delay-200">
                  <Link
                    href="/contact"
                    className="btn-premium btn-shadow-hover w-full rounded-full bg-primary px-8 py-3.5 text-center text-sm tracking-wide text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-10"
                  >
                    Enquire Now
                  </Link>
                  <Link
                    href="/bespoke-gallery"
                    className="btn-premium w-full rounded-full border border-primary/45 px-8 py-3.5 text-center text-sm tracking-wide text-primary hover:bg-primary/8 sm:w-auto sm:px-10"
                  >
                    View Gallery
                  </Link>
                </div>

                {/* Social links — separated visually from CTAs */}
                <div className="mt-7 animate-fade-in-up animation-delay-200">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-[0.62rem] uppercase tracking-[0.28em] text-primary/45">Connect</span>
                    <div className="h-px flex-1 max-w-[3rem] bg-primary/15" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2.5">
                      <Link
                        href="https://www.instagram.com/moosflowers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-primary/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        <Instagram className="h-[0.95rem] w-[0.95rem]" />
                      </Link>
                      <Link
                        href="https://www.facebook.com/moosflowers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-primary/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        <Facebook className="h-[0.95rem] w-[0.95rem]" />
                      </Link>
                      <a
                        href="mailto:hello@moosflowers.com"
                        aria-label="Email hello@moosflowers.com"
                        className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-primary/60 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        <Mail className="h-[0.95rem] w-[0.95rem]" />
                      </a>
                    </div>
                    <a
                      href="mailto:hello@moosflowers.com"
                      className="text-[0.72rem] text-primary/40 tracking-wide hover:text-primary/65 transition-colors duration-200"
                    >
                      hello@moosflowers.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Right: video column ── */}
            <div className="relative flex items-center justify-center px-4 pb-8 pt-0 sm:px-6 sm:pb-10 sm:pt-0 lg:px-8 lg:py-10 xl:px-10 xl:py-12">
              <div
                className="relative w-full max-w-[28rem] aspect-[5/6] overflow-hidden rounded-[1.45rem] border border-border shadow-[0_14px_30px_rgba(28,44,38,0.14)] sm:max-w-[31rem] sm:aspect-[4/5] lg:max-w-[34rem] lg:translate-x-3 xl:max-w-[36rem] animate-fade-in-up"
                style={{ animationDelay: "0.35s", opacity: 0 }}
              >
                <HeroMedia />
              </div>
            </div>

          </div>
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-[1.35rem] border border-border/75 bg-card/70 px-5 py-5 text-center shadow-[0_10px_24px_rgba(36,52,44,0.06)] backdrop-blur-sm sm:px-7 sm:py-6">
          <h2 className="font-serif text-2xl text-primary sm:text-[2rem]">Floristry across Suffolk and Essex</h2>
          <p className="mx-auto mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-primary/72 sm:text-base">
            Based on the Suffolk-Essex border, Moo's Flowers provides bespoke floral arrangements across Ipswich, Colchester, and the surrounding countryside, creating seasonal flowers for weddings, events, thoughtful gifts, and beautiful homes.
          </p>
        </div>
      </div>
    </section>
  )
}
