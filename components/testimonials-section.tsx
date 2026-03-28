import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    date: "Verified Buyer",
    rating: 5,
    text: "Absolutely stunning bouquet! The flowers were incredibly fresh and the arrangement was even more beautiful than the photos.",
    image: "/images/testimonial-1.jpg"
  },
  {
    name: "Emma Thompson",
    date: "Verified Buyer",
    rating: 5,
    text: "The wedding flowers exceeded all expectations. Moo's team was so professional and creative throughout the entire process.",
    image: "/images/testimonial-2.jpg"
  },
  {
    name: "Lucy Williams",
    date: "Verified Buyer",
    rating: 5,
    text: "Beautiful seasonal arrangement delivered right on time. The recipient was absolutely delighted!",
    image: "/images/testimonial-3.jpg"
  },
  {
    name: "Charlotte Brown",
    date: "Verified Buyer",
    rating: 5,
    text: "We attended the floral workshop and had such a lovely time. Can't wait to book another one!",
    image: "/images/testimonial-4.jpg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-wide text-center mb-2">Testimonials</p>
        <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-2">Our customers love us</h3>
        <p className="text-muted-foreground text-sm text-center mb-12">from 500 reviews</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="text-center">
              <div className="relative aspect-square overflow-hidden mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`Review from ${testimonial.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs leading-relaxed mb-3 line-clamp-3">{testimonial.text}</p>
              <p className="text-xs font-medium">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
