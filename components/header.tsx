"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Menu, X } from "lucide-react"
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
    { href: "/bespoke-gallery", label: "Gallery" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full text-primary-foreground transition-all duration-300 ${scrolled ? "shadow-[0_8px_24px_rgba(26,35,31,0.2)]" : ""
        }`}
    >
      <div className="border-b border-white/14 bg-primary backdrop-blur-md">
        {/* Top row: centered brand */}
        <div className="px-4 pb-3 pt-2.5 md:px-8 md:pb-4 md:pt-3.5 transition-all duration-300">
          <div className="relative mx-auto flex max-w-[88rem] items-center justify-center">
            <button
              className="absolute left-0 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Link href="/" aria-label="Moo's Flowers home">
              <Image
                src="/website-header.png"
                alt="Moo's Flowers"
                width={400}
                height={80}
                className="h-14 w-auto md:h-[4.5rem] lg:h-[5.1rem]"
                style={{ filter: "brightness(0) invert(1) sepia(15%) saturate(250%) hue-rotate(340deg) brightness(92%) contrast(90%)" }}
                priority
              />
            </Link>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

        {/* Bottom row: left social, center nav, right CTA */}
        <div className="hidden px-4 py-3 md:block md:px-8 md:py-3.5">
          <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center lg:grid-cols-[1fr_auto_1fr]">
            <div className="hidden items-center justify-start gap-2.5 lg:flex">
              <Link
                href="https://www.instagram.com/moosflowers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground/62 transition-all duration-300 hover:bg-white/10 hover:text-primary-foreground"
              >
                <Instagram className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://www.facebook.com/moosflowers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground/62 transition-all duration-300 hover:bg-white/10 hover:text-primary-foreground"
              >
                <Facebook className="h-3.5 w-3.5" />
              </Link>
              <a
                href="mailto:hello@moosflowers.com"
                aria-label="Email hello@moosflowers.com"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground/62 transition-all duration-300 hover:bg-white/10 hover:text-primary-foreground"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>

            <nav aria-label="Main navigation" className="justify-self-center">
              <ul className="flex items-center justify-center gap-6 lg:gap-10 text-[0.78rem] lg:text-[0.84rem] tracking-[0.1em] lg:tracking-[0.12em] whitespace-nowrap">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href

                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`group relative inline-flex py-1.5 transition-all duration-300 ${isActive ? "opacity-100" : "opacity-82 hover:opacity-100"
                          }`}
                      >
                        {label}
                        <span
                          className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-primary-foreground/90 transition-all duration-300 ${isActive ? "w-[68%]" : "w-0 group-hover:w-[68%]"
                            }`}
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="hidden justify-end lg:flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-5 py-2 text-[0.77rem] font-medium tracking-[0.08em] text-primary transition-all duration-300 hover:bg-white/90"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/8" />
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-primary/97 px-4 py-6 text-primary-foreground backdrop-blur-sm">
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
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="https://www.instagram.com/moosflowers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.facebook.com/moosflowers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <a
              href="mailto:hello@moosflowers.com"
              aria-label="Email hello@moosflowers.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary-foreground px-6 py-2.5 text-sm tracking-[0.08em] text-primary"
            >
              Enquire
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
