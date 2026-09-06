"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Instagram, Menu, MessageCircle, X } from "lucide-react"
import { instagramHref, navLinks, whatsappHref } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-[9999] border-b border-border bg-background/85 text-foreground backdrop-blur-xl transition-all duration-300",
        scrolled && "shadow-sm",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-12" : "h-16",
          )}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={cn(
                "font-sans font-bold text-foreground transition-all duration-300",
                scrolled ? "text-base" : "text-xl",
              )}
            >
              The<span className="text-primary">Monkeys</span>
            </Link>
          </div>

          {/* Nav links — desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Actions — desktop */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button
              asChild
              size={scrolled ? "sm" : "default"}
              className="rounded-full bg-primary font-sans font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Fale com a The Monkeys no WhatsApp">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size={scrolled ? "sm" : "default"}
              variant="outline"
              className="rounded-full border-border font-sans font-bold text-foreground transition-all duration-300"
            >
              <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="Seguir a The Monkeys no Instagram">
                <Instagram className="size-4" />
                Instagram
              </a>
            </Button>
          </div>

          {/* Hamburguer — mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground transition-colors duration-200 hover:text-primary"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-border bg-background px-2 pb-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 font-sans text-muted-foreground transition-colors duration-200 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-3 py-2">
                <ThemeToggle />
                <Button
                  asChild
                  className="flex-1 rounded-full bg-primary font-sans font-bold text-primary-foreground hover:bg-primary/90"
                >
                  <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
                    <MessageCircle className="size-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 rounded-full border-border font-sans font-bold text-foreground"
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
