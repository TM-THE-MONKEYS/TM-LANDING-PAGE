import { Instagram, Mail, MessageCircle } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import { contactEmail, instagramHref, legalLinks, navLinks, siteConfig, whatsappHref } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <BrandLogo className="mb-4 text-2xl" />
            <p className="mb-3 max-w-md text-lg font-semibold text-foreground">{siteConfig.slogan}</p>
            <p className="mb-6 max-w-md font-sans text-muted-foreground">{siteConfig.description}</p>
            <a
              href={`mailto:${contactEmail}`}
              aria-label="Enviar e-mail para The Monkeys"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <Mail size={20} />
              {contactEmail}
            </a>
          </div>

          <div>
            <h3 className="mb-4 font-sans font-semibold text-foreground">Links rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans font-semibold text-foreground">Contato</h3>
            <p className="mb-4 font-sans text-muted-foreground">
              Converse com a gente e descubra a melhor solução para o seu negócio.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-primary font-bold text-primary-foreground hover:bg-primary/90"
              >
                <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp da The Monkeys">
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-border font-bold text-foreground"
              >
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Seguir a The Monkeys no Instagram"
                >
                  <Instagram className="size-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-sans text-sm text-muted-foreground">© 2026 The Monkeys. Todos os direitos reservados.</p>
            <nav aria-label="Links legais" className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
