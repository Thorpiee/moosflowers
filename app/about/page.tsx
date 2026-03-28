import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
    title: "About | Moo's Flowers",
    description: "Learn about Moo's Flowers — our story, our passion for floristry, and what makes us unique.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="font-serif text-3xl md:text-5xl tracking-wide mb-6">About Us</h1>
                    <p className="text-muted-foreground text-sm tracking-wide leading-relaxed mb-8">
                        Moo's Flowers was born from a deep love of nature and a passion for creating beauty through blooms. Based in London, we specialise in bespoke floral arrangements for weddings, events, and everyday moments worth celebrating.
                    </p>
                    <p className="text-muted-foreground text-sm tracking-wide leading-relaxed mb-8">
                        Each arrangement is thoughtfully designed using the finest seasonal flowers, sourced sustainably and handled with care from studio to doorstep.
                    </p>
                    <p className="text-muted-foreground text-sm tracking-wide leading-relaxed">
                        We believe flowers have the power to transform a space and lift a spirit. Whether it's an intimate posy or a grand installation, we pour our heart into every stem.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    )
}
