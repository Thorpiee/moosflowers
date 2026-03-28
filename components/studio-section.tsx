import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"

export function StudioSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 xl:px-10 overflow-hidden">
      <Image
        src="/sunflowersbanner.jpg"
        alt="The studio"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0" />

      <div className="relative max-w-2xl mx-auto">
        <div className="bg-primary/88 text-primary-foreground p-8 md:p-12 xl:p-14 text-center">
          <h3 className="font-serif text-3xl md:text-4xl tracking-wide mb-2">Moo's Flowers</h3>
          <p className="text-primary-foreground/80 text-sm tracking-wide mb-8">Based on the Suffolk–Essex border</p>
          <div className="space-y-3">
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
              className="flex items-center justify-center gap-2 text-base hover:text-primary-foreground/80 transition-colors"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              @moosflowers
            </a>
            <a
              href="https://www.facebook.com/moosflowers/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-base hover:text-primary-foreground/80 transition-colors"
            >
              <Facebook className="w-4 h-4 shrink-0" />
              Moo's Flowers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
