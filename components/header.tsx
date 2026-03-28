"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/bespoke-gallery", label: "Bespoke Gallery" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full text-primary-foreground transition-all duration-300 ${scrolled ? "shadow-[0_8px_24px_rgba(26,35,31,0.2)]" : ""
        }`}
    >
      <div className="bg-primary/94 backdrop-blur-md">
        {/* Logo row */}
        <div className="px-4 py-2.5 md:px-8 md:py-3.5 transition-all duration-300">
          <div className="relative mx-auto flex max-w-[88rem] items-center justify-center">
            <button
              className="md:hidden absolute left-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link href="/">
              <Image
                src="/website-header.png"
                alt="Moo's Flowers"
                width={400}
                height={80}
                className="h-11 w-auto md:h-14 lg:h-16"
                style={{ filter: "brightness(0) invert(1) sepia(15%) saturate(250%) hue-rotate(340deg) brightness(92%) contrast(90%)" }}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Soft separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

        {/* Navigation row */}
        <nav className="hidden px-4 py-2.5 md:block md:px-8 md:py-3">
          <ul className="mx-auto flex max-w-[88rem] items-center justify-center gap-12 text-[0.96rem] tracking-[0.08em]">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`group relative inline-flex py-1 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                      }`}
                  >
                    {label}
                    <span
                      className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-primary-foreground/90 transition-all duration-300 ${isActive ? "w-[72%]" : "w-0 group-hover:w-[72%]"
                        }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Subtle bottom line to avoid boxed feel */}
        <div className="h-px bg-white/7" />
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-primary/97 backdrop-blur-sm text-primary-foreground border-t border-white/10 py-6 px-4">
          <ul className="flex flex-col items-center gap-5 text-[1.02rem] tracking-[0.06em]">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={pathname === href ? "underline underline-offset-4" : "transition-opacity hover:opacity-80"}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
