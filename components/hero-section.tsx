import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-background px-4 pb-10 pt-6 sm:pb-12 md:px-8 md:pt-8 lg:pb-16 xl:px-10">
      <div className="mx-auto max-w-[88rem]">
        {/* Card with a barely-perceptible inner gradient from white to cream-tinted on the right */}
        <div className="relative overflow-hidden rounded-[1.9rem] border border-border/80 bg-card shadow-[0_12px_28px_rgba(36,52,44,0.12)]">
          {/* Subtle background wash — faint cream bloom bottom-right */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_90%,rgba(234,230,223,0.45),transparent)]" />

          <div className="relative grid grid-cols-1 lg:min-h-[70vh] lg:grid-cols-[1fr_0.95fr] xl:min-h-[74vh]">

            {/* ── Left: content column ── */}
            <div className="relative z-10 flex items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-16">

              {/* Thin vertical rule between columns, desktop only */}
              <div className="absolute right-0 top-[8%] hidden h-[84%] w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

              <div className="w-full max-w-[40rem] lg:max-w-[42rem] lg:pr-8 xl:pr-10">

                {/* Brand label */}
                <div className="mb-5 flex items-center gap-3 animate-fade-in">
                  <span className="text-[0.67rem] tracking-[0.32em] uppercase text-primary/55">
                    Your Local Florist
                  </span>
                </div>

                <h1 className="mb-5 max-w-[11ch] font-serif text-4xl leading-[0.95] tracking-[0.01em] text-primary sm:text-5xl md:text-6xl lg:text-[4.35rem] xl:text-[5.1rem] animate-fade-in-up">
                  Moo's
                  <br />
                  Flowers
                </h1>

                <div className="mb-6 h-px w-14 bg-primary/35" />

                {/* Supporting copy */}
                <p className="mb-8 max-w-[44ch] text-[0.98rem] leading-relaxed text-primary/78 sm:text-base md:text-lg xl:text-[1.18rem] animate-fade-in-up animation-delay-100">
                  Seasonal, countryside-inspired floristry. Wild-gathered arrangements for homes, tables, gatherings, and life's most cherished moments — each one made by hand, with care.
                </p>

                {/* CTA group */}
                <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center animate-fade-in-up animation-delay-200">
                  <Link
                    href="/contact"
                    className="w-full rounded-full bg-primary px-8 py-3.5 text-center text-sm tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_22px_rgba(36,52,44,0.22)] sm:w-auto sm:px-10"
                  >
                    Enquire Now
                  </Link>
                  <Link
                    href="/bespoke-gallery"
                    className="w-full rounded-full border border-primary/45 px-8 py-3.5 text-center text-sm tracking-wide text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/8 sm:w-auto sm:px-10"
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
            <div className="relative flex items-center justify-center px-4 pb-8 pt-2 sm:px-6 sm:pb-10 sm:pt-4 lg:px-8 lg:py-10 xl:px-10">
              <div
                className="relative w-full max-w-[34rem] aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-border shadow-[0_14px_30px_rgba(28,44,38,0.14)] lg:max-w-[36rem] lg:translate-x-4 animate-fade-in-up"
                style={{ animationDelay: "0.35s", opacity: 0 }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover object-[60%_center]"
                >
                  <source src="/flowervideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Subtle inner vignette on video edges */}
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(28,44,38,0.07)]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
