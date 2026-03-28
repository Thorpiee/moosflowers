import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card px-4 py-12 sm:py-14 md:px-8 md:py-16 xl:px-10 xl:py-18">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-10 grid grid-cols-1 gap-9 sm:grid-cols-2 md:mb-12 md:gap-10 lg:grid-cols-3 lg:gap-14">
          {/* Pages */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-foreground">Pages</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/bespoke-gallery" className="hover:text-foreground transition-colors">Bespoke Gallery</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Me</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-foreground">Social</h4>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/moosflowers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/moosflowers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wide text-foreground">Get In Touch</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="mailto:hello@moosflowers.com" className="hover:text-foreground transition-colors">hello@moosflowers.com</a></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/80 pt-7 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2026 Moos Flowers</p>
        </div>
      </div>
    </footer>
  )
}
