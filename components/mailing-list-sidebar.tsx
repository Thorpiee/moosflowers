"use client"

import React from "react"

import { useState } from "react"
import { X } from "lucide-react"

export function MailingListSidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Mailing list signup:", email)
    setEmail("")
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 z-50 hidden lg:block">
      <div className="bg-primary text-primary-foreground p-6 w-64 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        
        <h4 className="font-serif text-lg tracking-wide mb-2">Join Our Mailing List</h4>
        <p className="text-xs leading-relaxed mb-4 opacity-90">
          Subscribe for exclusive offers, seasonal updates and beautiful floral inspiration.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="w-full px-3 py-2 bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-xs focus:outline-none focus:border-white"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-white text-primary text-xs tracking-wide font-medium hover:bg-white/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
