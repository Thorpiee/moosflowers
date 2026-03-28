import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
    title: "About Me | Moo's Flowers",
    description: "Learn about Moo's Flowers — my story, my passion for floristry, and what makes us unique.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="px-4 py-16 sm:py-20 md:px-8 md:py-24 xl:px-10">
                <div className="mx-auto grid max-w-[88rem] items-start gap-10 md:grid-cols-[0.55fr_0.45fr] lg:gap-14 xl:gap-16">
                    <div>
                        <h1 className="mb-6 font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-primary">About Me</h1>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            I’m Jaz, a florist based on the Suffolk–Essex border, originally from the South Devon coast, creating natural, seasonal arrangements. My work celebrates the beauty of everyday moments; from dressing a table for supper to marking special occasions; with flowers that feel relaxed, joyful, and just a little bit wild.
                        </p>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            I have a real interest in how flowers are grown, foraged, and cared for through the seasons. This curiosity shapes my approach, encouraging me to work with what’s naturally available and to appreciate the character and uniqueness of each stem.
                        </p>
                        <p className="mb-7 text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base md:mb-8">
                            Each design begins with carefully chosen blooms, often influenced by my surroundings; largely the changing countryside seasons. Everything is thoughtfully arranged using natural materials and an eco-conscious approach wherever possible.
                        </p>
                        <p className="text-[0.98rem] leading-relaxed tracking-wide text-primary/78 sm:text-base">
                            Whether you’re planning an event, celebrating something special, or simply want flowers in your home, my designs bring a soft, seasonal touch to any space.
                        </p>
                    </div>

                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border bg-card md:sticky md:top-28">
                        <Image
                            src="/jaz.jpg"
                            alt="Jaz from Moo's Flowers"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
