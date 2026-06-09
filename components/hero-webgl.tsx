import { ArrowRight, Bot, Gauge, Instagram, ShieldCheck, Sparkles, Zap, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { instagramHref, whatsappHref } from "@/lib/site"

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L.07 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.45-8.43ZM12.08 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.83 9.83 0 0 1-1.5-5.27c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c-.01 5.45-4.45 9.9-9.9 9.9Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

const heroStats = [
  { label: "Sites modernos", value: "Alta conversão" },
  { label: "IA aplicada", value: "Automação real" },
  { label: "Atendimento", value: "24/7" },
]

const dashboardItems: Array<{ icon: LucideIcon; label: string; value: string }> = [
  { icon: Zap, label: "Automação ativa", value: "98%" },
  { icon: Gauge, label: "Performance digital", value: "Rápida" },
  { icon: ShieldCheck, label: "Confiança", value: "Premium" },
]

export const Hero3DWebGL = () => {
  return (
    <section className="relative min-h-svh overflow-hidden bg-black px-6 pt-28 text-white sm:pt-32 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.2),transparent_30%),linear-gradient(180deg,#020617_0%,#020617_50%,#000_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="slide-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur">
            <Sparkles className="size-4 text-cyan-300" />
            Tecnologia de verdade a preço acessível.
          </div>

          <h1 className="font-orbitron text-4xl font-black leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Tecnologia que trabalha por você.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            A The Monkeys cria sites modernos, automações com IA e bots inteligentes para transformar negócios sem
            cobrar preços absurdos.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full bg-emerald-400 px-7 text-base font-bold text-slate-950 shadow-[0_0_35px_rgba(52,211,153,0.35)] hover:bg-emerald-300 hover:shadow-[0_0_45px_rgba(52,211,153,0.5)]"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Fale com a The Monkeys no WhatsApp">
                <WhatsAppIcon />
                Fale Conosco no WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-pink-400/40 bg-pink-500/10 px-7 text-base font-bold text-pink-200 hover:bg-pink-500/20 hover:text-pink-100"
            >
              <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="Seguir a The Monkeys no Instagram">
                <Instagram className="size-5" />
                Instagram
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/15 bg-white/5 px-7 text-base text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <a href="#solucoes">
                Conheça Nossas Soluções
                <ArrowRight className="size-5" />
              </a>
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="mt-1 font-orbitron text-sm font-bold text-cyan-200">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px] slide-up [animation-delay:180ms]">
          <div className="absolute inset-8 rounded-full border border-cyan-300/20 bg-cyan-300/5 blur-sm" />
          <div className="absolute inset-0 rounded-full border border-white/10 bg-[conic-gradient(from_180deg,rgba(34,211,238,0.1),rgba(168,85,247,0.28),rgba(52,211,153,0.18),rgba(34,211,238,0.1))] p-px shadow-[0_0_80px_rgba(34,211,238,0.18)]">
            <div className="flex size-full items-center justify-center rounded-full bg-slate-950/90 backdrop-blur">
              <div className="relative size-[72%] rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200">AI Control</p>
                    <p className="mt-2 font-orbitron text-2xl font-bold">The Monkeys</p>
                  </div>
                  <Bot className="size-9 text-emerald-300" />
                </div>

                <div className="space-y-4">
                  {dashboardItems.map((item) => {
                    const DashboardIcon = item.icon

                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="rounded-xl bg-cyan-300/10 p-2 text-cyan-200">
                            <DashboardIcon className="size-5" />
                          </span>
                          <span className="text-sm text-slate-300">{item.label}</span>
                        </div>
                        <span className="font-orbitron text-sm text-emerald-300">{item.value}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3DWebGL
