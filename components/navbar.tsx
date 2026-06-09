"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Menu, MessageCircle, X } from "lucide-react"
import { instagramHref, navLinks, whatsappHref } from "@/lib/site"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-[9999] border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-orbitron text-xl font-bold text-white">
              The<span className="text-cyan-300">Monkeys</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-slate-200 transition-colors duration-200 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              className="rounded-full bg-emerald-400 font-sans font-bold text-slate-950 hover:bg-emerald-300"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Fale com a The Monkeys no WhatsApp">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-pink-400/40 bg-pink-500/10 font-sans font-bold text-pink-200 hover:bg-pink-500/20 hover:text-pink-100"
            >
              <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="Seguir a The Monkeys no Instagram">
                <Instagram className="size-4" />
                Instagram
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-colors duration-200 hover:text-cyan-300"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-white/10 bg-black/95 px-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 font-sans text-white transition-colors duration-200 hover:text-cyan-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 px-3 py-2">
                <Button
                  asChild
                  className="flex-1 rounded-full bg-emerald-400 font-sans font-bold text-slate-950 hover:bg-emerald-300"
                >
                  <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                    <MessageCircle className="size-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 rounded-full border-pink-400/40 bg-pink-500/10 font-sans font-bold text-pink-200 hover:bg-pink-500/20 hover:text-pink-100"
                >
                  <a href={instagramHref} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                    <Instagram className="size-4" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
