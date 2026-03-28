import Image from "next/image"
import Link from "next/link"

export function ShopTheLookSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-12">Shop The Look</h3>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Main image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/shop-look-main.jpg"
              alt="Styled floral arrangement in home setting"
              fill
              className="object-cover"
            />
            {/* Hotspot dots */}
            <button 
              className="absolute top-1/3 left-1/2 w-6 h-6 bg-white rounded-full border-2 border-primary flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="View product"
            >
              <span className="w-2 h-2 bg-primary rounded-full" />
            </button>
            <button 
              className="absolute top-2/3 left-1/3 w-6 h-6 bg-white rounded-full border-2 border-primary flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="View product"
            >
              <span className="w-2 h-2 bg-primary rounded-full" />
            </button>
          </div>

          {/* Side images */}
          <div className="grid grid-cols-2 gap-4">
            <Link href="#" className="group">
              <div className="relative aspect-square overflow-hidden mb-3">
                <Image
                  src="/images/shop-look-1.jpg"
                  alt="Ceramic vase with flowers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <Link href="#" className="group">
              <div className="relative aspect-square overflow-hidden mb-3">
                <Image
                  src="/images/shop-look-2.jpg"
                  alt="Dried flower arrangement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
