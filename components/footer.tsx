import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { navLinks, siteConfig, whatsappHref } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              The<span className="text-cyan-300">Monkeys</span>
            </h2>
            <p className="mb-3 max-w-md text-lg font-semibold text-cyan-100">{siteConfig.slogan}</p>
            <p className="mb-6 max-w-md font-sans text-gray-300">{siteConfig.description}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Instagram da The Monkeys"
                className="text-gray-400 transition-colors duration-200 hover:text-cyan-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn da The Monkeys"
                className="text-gray-400 transition-colors duration-200 hover:text-cyan-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contato@themonkeys.com.br"
                aria-label="Enviar e-mail para The Monkeys"
                className="text-gray-400 transition-colors duration-200 hover:text-cyan-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Links rápidos</h3>
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
            <h3 className="font-orbitron text-white font-semibold mb-4">Contato</h3>
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

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-sans text-sm text-gray-400">© 2026 The Monkeys. Todos os direitos reservados.</p>
            <p className="mt-4 font-sans text-sm text-gray-500 md:mt-0">{siteConfig.slogan}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
