import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-background flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6 text-balance text-primary">
          Bespoke Blooms
        </h2>
        <p className="text-sm md:text-base tracking-wide mb-8 max-w-md text-primary">
          Get in touch today to bring your floral vision to life
        </p>
        <Link
          href="/contact"
          className="bg-primary text-primary-foreground px-10 py-4 text-xs tracking-wide font-medium hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </Link>
    </section>
  )
}
