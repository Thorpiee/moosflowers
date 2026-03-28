import Image from "next/image"

export function StudioSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <Image
        src="/sunflowersbanner.jpg"
        alt="The studio"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0" />
      
      <div className="relative max-w-lg mx-auto">
        <div className="bg-primary/90 text-primary-foreground p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-6">The Studio</h3>
          <div className="space-y-2 text-sm mb-6">
            <p>123 Bloom Street</p>
            <p>London, SW1A 1AA</p>
          </div>
          <div className="space-y-1 text-sm mb-6">
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
