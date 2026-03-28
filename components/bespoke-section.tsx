import Link from "next/link"

export function BespokeSection() {
  return (
    <section className="bg-primary px-4 py-14 sm:py-16 md:px-8 md:py-20 xl:px-10 xl:py-24 text-primary-foreground">
      <div className="mx-auto max-w-[88rem] text-center">
        <h3 className="mb-7 font-serif text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-wider">Bespoke Arrangements</h3>
        <Link
          href="/bespoke-gallery"
          className="inline-block border border-primary-foreground px-8 py-3.5 text-sm tracking-wide font-medium transition-colors hover:bg-primary-foreground hover:text-primary sm:px-10 sm:py-4"
        >
          View Gallery
        </Link>
      </div>
    </section>
  )
}
