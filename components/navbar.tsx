"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, MessageCircle, X } from "lucide-react"
import { navLinks, whatsappHref } from "@/lib/site"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-[9999] border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              The<span className="text-cyan-300">Monkeys</span>
            </h1>
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

          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-emerald-400 font-sans font-bold text-slate-950 hover:bg-emerald-300"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Fale com a The Monkeys no WhatsApp">
                <MessageCircle className="size-4" />
                WhatsApp
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
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full rounded-full bg-emerald-400 font-sans font-bold text-slate-950 hover:bg-emerald-300"
                >
                  <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                    <MessageCircle className="size-4" />
                    Fale no WhatsApp
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
