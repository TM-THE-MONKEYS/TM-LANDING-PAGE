import { Bot, BrainCircuit, Code2, Layers3, type LucideIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Service = {
  title: string
  description: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: "Sites Modernos",
    description: "Sites profissionais, rápidos, modernos e preparados para converter visitantes em clientes.",
    icon: Code2,
  },
  {
    title: "Automação com IA",
    description: "Automatize atendimentos, processos e tarefas usando inteligência artificial.",
    icon: BrainCircuit,
  },
  {
    title: "Bots Inteligentes",
    description: "Bots interativos para WhatsApp, Instagram e atendimento automático.",
    icon: Bot,
  },
  {
    title: "Tecnologia Sob Medida",
    description: "Soluções personalizadas para empresas que querem escalar usando tecnologia.",
    icon: Layers3,
  },
]

export function FeaturesSection() {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-slate-950 px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(52,211,153,0.1),transparent_30%)]" />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Soluções</p>
          <h2 className="font-orbitron text-3xl font-bold text-white sm:text-5xl">Tecnologia simples de contratar.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Criamos experiências digitais modernas para empresas que querem vender mais, atender melhor e automatizar o
            que consome tempo todos os dias.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const ServiceIcon = service.icon

            return (
              <Card
                key={service.title}
                className="group border-white/10 bg-white/[0.04] text-white shadow-none backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.07] hover:shadow-[0_24px_70px_rgba(34,211,238,0.12)] slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition-colors group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <ServiceIcon className="size-6" />
                  </div>
                  <CardTitle className="font-orbitron text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7 text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
