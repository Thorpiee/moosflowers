import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Spring Meadow Bouquet",
    price: "£45.00",
    image: "/images/product-1.jpg",
    href: "#"
  },
  {
    name: "Romantic Roses",
    price: "£55.00",
    image: "/images/product-2.jpg",
    href: "#"
  },
  {
    name: "Wildflower Posy",
    price: "£35.00",
    image: "/images/product-3.jpg",
    href: "#"
  },
  {
    name: "Elegant Lilies",
    price: "£50.00",
    image: "/images/product-4.jpg",
    href: "#"
  }
]

export function NewArrivalsSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-12">New In</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="group">
              <div className="relative aspect-square overflow-hidden mb-4 bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xs tracking-wide mb-1 text-center">{product.name}</h4>
              <p className="text-xs text-muted-foreground text-center">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
