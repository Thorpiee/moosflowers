import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Bouquets",
    image: "/images/category-bouquets.jpg",
    href: "#"
  },
  {
    title: "Weddings",
    image: "/images/category-weddings.jpg",
    href: "#"
  },
  {
    title: "Plants",
    image: "/images/category-plants.jpg",
    href: "#"
  }
]

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          {/* Text */}
          <div className="md:w-1/4">
            <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-4">Your Daily Essentials</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Discover my curated collection for your everyday floral needs.
            </p>
            <Link href="#" className="text-xs tracking-wide underline underline-offset-4 hover:text-primary transition-colors">
              Shop All
            </Link>
          </div>

          {/* Categories grid */}
          <div className="md:w-3/4 grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-3">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-xs tracking-wide text-center">{category.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
