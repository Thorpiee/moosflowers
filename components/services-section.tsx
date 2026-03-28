import Link from "next/link"

const services = [
  {
    icon: "💐",
    title: "Weddings",
    description:
      "From bridal bouquets to full venue styling, we create floral experiences that make your wedding day truly unforgettable.",
  },
  {
    icon: "✨",
    title: "Events",
    description:
      "Corporate events, private dinners, celebrations — we design bespoke arrangements that elevate any occasion.",
  },
  {
    icon: "🌹",
    title: "Custom Bouquets",
    description:
      "Hand-tied seasonal bouquets crafted to order. Perfect gifts or a beautiful treat for yourself.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 xl:px-10 bg-background">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-primary mb-4">My Services</h2>
          <div className="w-12 h-px bg-primary/40 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-9">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-secondary p-10 xl:p-12 flex flex-col items-center text-center group hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            >
              <span className="text-4xl mb-6">{service.icon}</span>
              <h3 className="font-serif text-2xl xl:text-[1.95rem] mb-4 text-primary group-hover:text-primary-foreground transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm xl:text-base leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-12 py-4 text-sm tracking-wide rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
