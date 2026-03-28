import Image from "next/image"

export function StudioSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 xl:px-10 overflow-hidden">
      <Image
        src="/sunflowersbanner.jpg"
        alt="The studio"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0" />

      <div className="relative max-w-2xl mx-auto">
        <div className="bg-primary/88 text-primary-foreground p-8 md:p-12 xl:p-14 text-center">
          <h3 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">The Studio</h3>
          <div className="space-y-2 text-base mb-6">
            <p>123 Bloom Street</p>
            <p>London, SW1A 1AA</p>
          </div>
          <div className="space-y-1 text-base mb-6">
            <p>Monday - Friday: 9AM - 6PM</p>
            <p>Saturday: 10AM - 5PM</p>
            <p>Sunday: Closed</p>
          </div>
          <p className="text-xs tracking-wide">Visits by appointment only</p>
        </div>
      </div>
    </section>
  )
}
