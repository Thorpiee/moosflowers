import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card py-12 md:py-16 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Info */}
          <div>
            <h4 className="text-xs tracking-wide font-medium mb-4">Info</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Gift Vouchers</Link></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h4 className="text-xs tracking-wide font-medium mb-4">Policy</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Delivery Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Returns Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-wide font-medium mb-4">Social</h4>
            <div className="flex gap-4">
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-wide font-medium mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="mailto:hello@moosflowers.com" className="hover:text-foreground transition-colors">hello@moosflowers.com</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Moos Flowers | Powered by Love & Blooms</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">🇬🇧 United Kingdom (GBP £)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
