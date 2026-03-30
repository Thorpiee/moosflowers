import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"

export function StudioSection() {
  return (
    <section className="section-space relative overflow-hidden layout-shell">
      <Image
        src="/sunflowersbanner.jpg"
        alt="The studio"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/18" />

      <RevealOnScroll className="relative mx-auto max-w-3xl">
        <div className="rounded-[1.2rem] border border-white/15 bg-primary/86 p-7 text-center text-primary-foreground backdrop-blur-[1px] sm:p-8 md:p-10 xl:p-12">
          <h3 className="mb-2 font-serif text-3xl tracking-wide md:text-4xl">Moo's Flowers</h3>
          <p className="mb-7 text-sm tracking-wide text-primary-foreground/80 md:mb-8">Based on the Suffolk–Essex border</p>
          <div className="space-y-3.5 text-sm sm:text-base">
            <a
              href="mailto:hello@moosflowers.com"
              className="flex items-center justify-center gap-2 text-base hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              hello@moosflowers.com
            </a>
            <a
              href="https://www.instagram.com/moosflowers/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              @moosflowers
            </a>
            <a
              href="https://www.facebook.com/moosflowers/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Facebook className="w-4 h-4 shrink-0" />
              Moo's Flowers
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
