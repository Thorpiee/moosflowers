import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-background px-4 pb-10 pt-6 md:px-8 md:pb-12 md:pt-9 xl:px-10">
      <div className="mx-auto max-w-[90rem]">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-border/80 bg-card shadow-[0_12px_28px_rgba(36,52,44,0.12)]">

          <div className="relative grid min-h-[72vh] grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative z-10 flex items-center px-6 py-12 sm:px-10 lg:px-14 xl:px-16">
              <div className="w-full max-w-[42rem] lg:pr-8 xl:pr-10">
                <p className="mb-4 text-xs tracking-[0.3em] uppercase text-primary/62 animate-fade-in">
                  Your local florist
                </p>

                <h1 className="mb-5 max-w-[11ch] font-serif text-5xl leading-[0.95] tracking-[0.01em] text-primary sm:text-6xl lg:text-[4.7rem] xl:text-[5.35rem] animate-fade-in-up">
                  Moo's
                  <br />
                  Flowers
                </h1>

                <div className="mb-6 h-px w-14 bg-primary/35" />

                <p className="mb-9 max-w-[44ch] text-base leading-relaxed text-primary/82 md:text-lg xl:text-[1.26rem] animate-fade-in-up animation-delay-100">
                  Florist on the Suffolk–Essex border. Seasonal, natural arrangements that feel relaxed, joyful & a little wild. Inspired by the countryside, crafted with care, perfect for homes, tables, and special moments.
                </p>

                <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center animate-fade-in-up animation-delay-200">
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary px-11 py-3.5 text-center text-sm tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_12px_22px_rgba(36,52,44,0.22)]"
                  >
                    Enquire Now
                  </Link>
                  <Link
                    href="/bespoke-gallery"
                    className="rounded-full border border-primary/45 px-11 py-3.5 text-center text-sm tracking-wide text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/8"
                  >
                    View Gallery
                  </Link>
                </div>

                <div className="mt-7 flex items-center gap-4 animate-fade-in-up animation-delay-200">
                  <span className="text-[0.68rem] uppercase tracking-[0.24em] text-primary/55">Connect</span>
                  <Link
                    href="https://www.instagram.com/moosflowers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary/75 transition-colors duration-300 hover:border-primary/35 hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/moosflowers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary/75 transition-colors duration-300 hover:border-primary/35 hover:text-primary"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <a
                    href="mailto:hello@moosflowers.com"
                    aria-label="Email"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary/75 transition-colors duration-300 hover:border-primary/35 hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 xl:px-10">
              <div
                className="relative w-full max-w-[36rem] aspect-[4/5] overflow-hidden rounded-[1.45rem] border border-border shadow-[0_14px_30px_rgba(28,44,38,0.14)] lg:translate-x-4 animate-fade-in-up"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
