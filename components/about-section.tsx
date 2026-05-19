import { BrainCircuit, Handshake, Moon, Rocket, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

type AboutCard = {
  title: string
  text: string
  icon: LucideIcon
}

const aboutCards: AboutCard[] = [
  { icon: BrainCircuit, title: "IA acessível", text: "Automações e agentes inteligentes sem complexidade." },
  { icon: Rocket, title: "Velocidade", text: "Projetos modernos com foco em execução e resultado." },
  { icon: Handshake, title: "Proximidade", text: "Atendimento claro, humano e direto com o cliente." },
  { icon: Moon, title: "24 horas", text: "Soluções trabalhando enquanto você dorme." },
]

export function AboutSection() {
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_90%_45%,rgba(34,211,238,0.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="slide-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">Quem somos</p>
            <h2 className="font-orbitron text-3xl font-bold sm:text-5xl">Quem é a The Monkeys?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A The Monkeys nasceu para tornar a tecnologia moderna acessível para todos. Enquanto muitas empresas
              cobram valores absurdos por soluções digitais, nós acreditamos que qualquer negócio pode ter acesso a
              sites modernos, automações inteligentes e agentes de IA poderosos.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((item, index) => {
              const AboutIcon = item.icon

              return (
                <Card
                  key={item.title}
                  className="border-white/10 bg-white/[0.04] text-white shadow-none backdrop-blur slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <AboutIcon className="mb-5 size-8 text-cyan-300" />
                    <h3 className="font-orbitron text-lg font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden border-cyan-300/20 bg-cyan-300/[0.06] text-white shadow-none backdrop-blur slide-up">
            <CardContent className="p-8 sm:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Nossa missão</p>
              <h2 className="font-orbitron text-2xl font-bold sm:text-3xl">Levar tecnologia de verdade.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Levar tecnologia de verdade para empresas e pessoas que querem crescer, automatizar processos e vender
                mais usando IA e soluções digitais modernas.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-emerald-300/20 bg-emerald-300/[0.06] text-white shadow-none backdrop-blur slide-up [animation-delay:120ms]">
            <CardContent className="p-8 sm:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
                Por que fazemos isso?
              </p>
              <h2 className="font-orbitron text-2xl font-bold sm:text-3xl">Tecnologia deve trabalhar pelas pessoas.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Acreditamos que a tecnologia deve trabalhar pelas pessoas e não ser um luxo inacessível. Criamos
                soluções que continuam funcionando enquanto você dorme.
              </p>
              <div className="mt-6 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-5 font-orbitron text-xl font-bold text-emerald-200">
                Seu negócio funcionando 24 horas por dia com IA.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
