import Link from "next/link"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"

export function BespokeSection() {
  return (
    <section className="section-space bg-primary layout-shell text-primary-foreground">
      <RevealOnScroll className="layout-container text-center">
        <h3 className="mb-7 font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wider">Bespoke Arrangements</h3>
        <Link
          href="/bespoke-gallery"
          className="btn-premium inline-block border border-primary-foreground px-8 py-3.5 text-sm tracking-wide font-medium hover:bg-primary-foreground hover:text-primary sm:px-10 sm:py-4"
        >
          View Gallery
        </Link>
      </RevealOnScroll>
    </section>
  )
}
