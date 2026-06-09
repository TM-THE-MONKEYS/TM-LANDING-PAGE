import { Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { instagramHref, whatsappHref } from "@/lib/site"

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L.07 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.45-8.43ZM12.08 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.83 9.83 0 0 1-1.5-5.27c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c-.01 5.45-4.45 9.9-9.9 9.9Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

export function CTASection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.16),transparent_34%),linear-gradient(135deg,rgba(34,211,238,0.12),rgba(168,85,247,0.1))]" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_30px_100px_rgba(34,211,238,0.12)] backdrop-blur sm:p-12 slide-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Comece agora</p>
          <h2 className="font-orbitron text-3xl font-bold text-balance sm:text-5xl">
            Pronto para colocar a tecnologia para trabalhar por você?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Fale com a The Monkeys e descubra como automatizar seu negócio com IA.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-16 rounded-full bg-emerald-400 px-8 text-base font-bold text-slate-950 shadow-[0_0_45px_rgba(52,211,153,0.4)] hover:bg-emerald-300 hover:shadow-[0_0_60px_rgba(52,211,153,0.55)] sm:text-lg"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chamar a The Monkeys no WhatsApp">
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-16 rounded-full border-pink-400/40 bg-pink-500/10 px-8 text-base font-bold text-pink-200 hover:bg-pink-500/20 hover:text-pink-100 sm:text-lg"
            >
              <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="Seguir a The Monkeys no Instagram">
                <Instagram className="size-5" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
