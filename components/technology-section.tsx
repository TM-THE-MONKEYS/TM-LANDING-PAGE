import { Clock3, Cpu, Handshake, PanelsTopLeft, Sparkles, WalletCards, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

type Differential = {
  title: string
  icon: LucideIcon
}

const differentials: Differential[] = [
  { title: "Entrega rápida", icon: Clock3 },
  { title: "Preço acessível", icon: WalletCards },
  { title: "Tecnologia moderna", icon: Cpu },
  { title: "Suporte próximo", icon: Handshake },
  { title: "Automação inteligente", icon: Sparkles },
  { title: "Soluções personalizadas", icon: PanelsTopLeft },
]

export function TechnologySection() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),transparent_35%),radial-gradient(circle_at_75%_25%,rgba(168,85,247,0.16),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Diferenciais</p>
          <h2 className="font-orbitron text-3xl font-bold sm:text-5xl">Premium no visual, simples na experiência.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Unimos estética moderna, automação inteligente e acompanhamento próximo para entregar tecnologia que faz
            sentido para a realidade do seu negócio.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((differential, index) => {
            const DifferentialIcon = differential.icon

            return (
              <Card
                key={differential.title}
                className="group border-white/10 bg-white/[0.04] text-white shadow-none backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-200 transition-colors group-hover:bg-emerald-300 group-hover:text-slate-950">
                    <DifferentialIcon className="size-6" />
                  </span>
                  <h3 className="font-orbitron text-lg font-bold">{differential.title}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
