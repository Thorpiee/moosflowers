import Link from "next/link"

export function BespokeSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 xl:px-10 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-serif text-4xl md:text-5xl xl:text-6xl tracking-wider mb-8">Bespoke Arrangements</h3>
        <Link
          href="#"
          className="inline-block border border-primary-foreground px-10 py-4 text-sm tracking-wide font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
        >
          View Gallery
        </Link>
      </div>
    </section>
  )
}
