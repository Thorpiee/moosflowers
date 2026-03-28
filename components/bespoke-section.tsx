import Link from "next/link"

export function BespokeSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-serif text-3xl md:text-5xl tracking-wider mb-8">Bespoke Arrangements</h3>
        <Link
          href="#"
          className="inline-block border border-primary-foreground px-10 py-4 text-xs tracking-wide font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
        >
          View Gallery
        </Link>
      </div>
    </section>
  )
}
