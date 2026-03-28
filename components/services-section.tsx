import Image from "next/image"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/wedding-1.jpg"
                alt="Wedding floral arrangement"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden mt-8">
              <Image
                src="/images/wedding-2.jpg"
                alt="Bridal bouquet"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:pl-12">
            <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-6">Wedding Flowers</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Let us help make your special day unforgettable with our bespoke wedding floral services.
              From intimate ceremonies to grand celebrations, we create stunning arrangements tailored to your vision.
            </p>
            <Link
              href="#"
              className="inline-block text-xs tracking-wide underline underline-offset-4 hover:text-primary transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
