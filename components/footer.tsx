import { Mail, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { contactEmail, legalLinks, navLinks, siteConfig, whatsappHref } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h2 className="mb-4 font-orbitron text-2xl font-bold text-white">
              The<span className="text-cyan-300">Monkeys</span>
            </h2>
            <p className="mb-3 max-w-md text-lg font-semibold text-cyan-100">{siteConfig.slogan}</p>
            <p className="mb-6 max-w-md font-sans text-gray-300">{siteConfig.description}</p>
            <a
              href={`mailto:${contactEmail}`}
              aria-label="Enviar e-mail para The Monkeys"
              className="inline-flex items-center gap-2 text-gray-400 transition-colors duration-200 hover:text-cyan-300"
            >
              <Mail size={20} />
              {contactEmail}
            </a>
          </div>

          <div>
            <h3 className="mb-4 font-orbitron font-semibold text-white">Links rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-gray-400 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-orbitron font-semibold text-white">Contato</h3>
            <p className="mb-4 font-sans text-gray-400">
              Converse com a gente e descubra a melhor solução para o seu negócio.
            </p>
            <Button asChild className="rounded-full bg-emerald-400 font-bold text-slate-950 hover:bg-emerald-300">
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp da The Monkeys">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-sans text-sm text-gray-400">© 2026 The Monkeys. Todos os direitos reservados.</p>
            <nav aria-label="Links legais" className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-gray-500 transition-colors duration-200 hover:text-cyan-300"
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
