import Image from "next/image"
import Link from "next/link"

export function BrandStorySection() {
    return (
        <section className="py-24 md:py-32 px-4 md:px-8 xl:px-10 bg-secondary">
            <div className="max-w-[88rem] mx-auto grid md:grid-cols-[0.52fr_0.48fr] gap-12 lg:gap-20 xl:gap-24 items-center">
                {/* Image */}
                <div className="relative aspect-[5/6] md:aspect-[4/5] overflow-hidden">
                    <Image
                        src="/whitebespoke.jpg"
                        alt="Moo's Flowers studio"
                        fill
                        className="object-cover"
                    />
                    {/* Decorative border */}
                    <div className="absolute inset-4 border border-border/80 pointer-events-none" />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center">
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">My Story</p>
                    <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl text-primary leading-tight mb-6">
                        Handcrafted floral designs made with care
                    </h2>
                    <div className="w-10 h-px bg-primary/40 mb-6" />
                    <p className="text-muted-foreground text-base xl:text-lg leading-relaxed mb-4">
                        I’m Jaz, a florist based on the Suffolk–Essex border, originally from the South Devon coast, creating natural, seasonal arrangements. My work celebrates the beauty of everyday moments; from dressing a table for supper to marking special occasions; with flowers that feel relaxed, joyful, and just a little bit wild.
                    </p>
                    <p className="text-muted-foreground text-base xl:text-lg leading-relaxed mb-4">
                        I have a real interest in how flowers are grown, foraged, and cared for through the seasons. This curiosity shapes my approach, encouraging me to work with what’s naturally available and to appreciate the character and uniqueness of each stem.
                    </p>
                    <p className="text-muted-foreground text-base xl:text-lg leading-relaxed mb-4">
                        Each design begins with carefully chosen blooms, often influenced by my surroundings; largely the changing countryside seasons. Everything is thoughtfully arranged using natural materials and an eco-conscious approach wherever possible.
                    </p>
                    <p className="text-muted-foreground text-base xl:text-lg leading-relaxed mb-8">
                        Whether you’re planning an event, celebrating something special, or simply want flowers in your home, my designs bring a soft, seasonal touch to any space.
                    </p>
                    <Link
                        href="/about"
                        className="self-start text-sm tracking-wide text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
                    >
                        Learn More About Me
                    </Link>
                </div>
            </div>
        </section>
    )
}
