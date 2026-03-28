"use client"

import React from "react"

import Image from "next/image"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      <Image
        src="/images/newsletter-bg.jpg"
        alt="Flowers background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h3 className="font-serif text-2xl md:text-4xl tracking-wider mb-4">WIN! FOR YOU AND A FRIEND</h3>
        <p className="text-sm tracking-wide mb-8 max-w-md mx-auto">
          Sign up to our newsletter for a chance to win gorgeous seasonal blooms
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-white"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-foreground text-xs tracking-widest font-medium hover:bg-white/90 transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  )
}
