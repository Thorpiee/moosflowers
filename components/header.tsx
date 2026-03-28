"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Main header - dark green */}
      <div className="bg-primary text-primary-foreground py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center relative">
          {/* Mobile menu button */}
          <button 
            className="md:hidden absolute left-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Center - Logo */}
          <Link href="/">
            <Image
              src="/website-header.png"
              alt="Moo's Flowers"
              width={400}
              height={80}
              className="h-14 md:h-18 lg:h-22 w-auto"
              style={{ filter: 'brightness(0) invert(1) sepia(15%) saturate(250%) hue-rotate(340deg) brightness(92%) contrast(90%)' }}
              priority
            />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground border-t border-white/15 py-3 px-4 hidden md:block">
        <ul className="flex items-center justify-center gap-8 text-sm tracking-wide">
          <li><Link href="/" className="underline underline-offset-4 hover:opacity-80 transition-opacity">Home</Link></li>
          <li><Link href="/bespoke-gallery" className="hover:opacity-80 transition-opacity">Bespoke Gallery</Link></li>
          <li><Link href="/about" className="hover:opacity-80 transition-opacity">About</Link></li>
          <li><Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link></li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-primary text-primary-foreground border-t border-white/15 py-6 px-4">
          <ul className="flex flex-col items-center gap-6 text-sm tracking-wide">
            <li><Link href="/" className="underline underline-offset-4">Home</Link></li>
            <li><Link href="/bespoke-gallery" className="hover:opacity-80 transition-opacity">Bespoke Gallery</Link></li>
            <li><Link href="/about" className="hover:opacity-80 transition-opacity">About</Link></li>
            <li><Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
