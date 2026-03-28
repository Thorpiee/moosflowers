import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-background px-4 pb-8 pt-5 md:px-8 md:pb-10 md:pt-8 xl:px-10">
      <div className="mx-auto max-w-[88rem]">
        <div className="relative overflow-hidden rounded-2xl border border-primary/12 bg-secondary/60 shadow-lg">
          <div className="grid min-h-[72vh] grid-cols-1 gap-6 lg:min-h-[76vh] lg:grid-cols-[0.47fr_0.53fr] lg:gap-12 2xl:min-h-[78vh]">
            {/* LEFT: Editorial content panel */}
            <div className="relative flex items-center px-6 py-10 sm:px-10 lg:px-12 xl:px-16">
              <div className="pointer-events-none absolute -left-14 top-10 h-44 w-44 rounded-full bg-primary/8 blur-2xl" />
              <div className="pointer-events-none absolute bottom-10 left-6 h-px w-16 bg-primary/25" />

              <div className="relative z-10 mx-auto w-full max-w-xl">
                <p className="mb-4 text-xs tracking-[0.26em] uppercase text-primary/65 animate-fade-in">
                  London's Boutique Florist
                </p>

                <h1 className="mb-4 max-w-[12ch] font-serif text-4xl leading-[1.04] tracking-wide text-primary md:text-5xl xl:text-[3.75rem] animate-fade-in-up">
                  Bespoke Blooms
                </h1>

                <div className="mb-5 h-px w-20 bg-primary/25" />

                <p className="mb-7 max-w-[38ch] text-base leading-relaxed text-primary/80 md:text-lg xl:text-[1.2rem] animate-fade-in-up animation-delay-100">
                  Luxury floral arrangements tailored for every occasion
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-in-up animation-delay-200">
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary px-9 py-3.5 text-center text-sm tracking-wide text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-md"
                  >
                    Enquire Now
                  </Link>
                  <Link
                    href="/bespoke-gallery"
                    className="rounded-full border border-primary/45 px-9 py-3.5 text-center text-sm tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: Framed video panel */}
            <div className="relative flex items-center justify-center p-3 sm:p-4 lg:p-5 xl:pr-7">
              <div className="relative h-[48vh] w-full max-w-[31rem] overflow-hidden rounded-2xl border border-primary/10 bg-muted shadow-[0_10px_30px_rgba(46,61,53,0.16)] md:h-[530px] lg:h-[560px] xl:max-w-[34rem] 2xl:max-w-[36rem]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover object-[58%_center]"
                >
                  <source src="/flowervideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/10" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]" />
              </div>

              <div className="pointer-events-none absolute bottom-8 left-1/2 hidden h-16 w-px -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 lg:block" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-[55%] hidden w-20 bg-gradient-to-r from-transparent via-background/40 to-transparent lg:block" />
        </div>
      </div>
    </section>
  )
}
