import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Bespoke Gallery | Moo's Flowers",
  description: "Browse our bespoke floral arrangements and custom bouquets.",
}

export default function BespokeGalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide text-center mb-4">Bespoke Gallery</h1>
          <p className="text-center text-muted-foreground text-sm tracking-wide mb-12 max-w-xl mx-auto">
            Every arrangement is crafted with care and intention. Explore our portfolio of bespoke florals created for weddings, events, and special occasions.
          </p>

          {/* Gallery grid placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground tracking-wide">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
