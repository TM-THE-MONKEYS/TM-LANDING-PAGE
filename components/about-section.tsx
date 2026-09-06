import Image from "next/image"
import { BarChart3, Handshake, Layers3, Rocket, type LucideIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

type AboutCard = {
  title: string
  text: string
  icon: LucideIcon
}

const aboutCards: AboutCard[] = [
  {
    icon: Layers3,
    title: "Sob medida",
    text: "Cada sistema é construído em torno do processo real da sua empresa, não de um pacote genérico.",
  },
  {
    icon: Rocket,
    title: "Execução rápida",
    text: "Da conversa inicial ao sistema no ar, sem meses de projeto parado.",
  },
  {
    icon: Handshake,
    title: "Acompanhamento",
    text: "Suporte direto com quem construiu o sistema, sem central de atendimento.",
  },
  {
    icon: BarChart3,
    title: "Foco em operação",
    text: "O objetivo não é 'ter tecnologia', é tirar tempo perdido da sua rotina.",
  },
]

export function AboutSection() {
  return (
    <section id="quem-somos" className="relative overflow-hidden bg-background px-6 py-24 text-foreground">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Bloco principal: foto + texto */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Foto */}
          <div className="relative h-[420px] overflow-hidden rounded-2xl lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Equipe The Monkeys trabalhando"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* badge de missão sobreposto */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-border bg-card/90 px-5 py-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-primary">Nossa missão</p>
              <p className="mt-1 font-sans text-base font-bold text-foreground leading-snug">
                Tirar empresas do controle manual.
              </p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Quem somos</p>
            <h2 className="font-sans text-3xl font-bold sm:text-5xl">Quem é a The Monkeys?</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A The Monkeys nasceu construindo tecnologia pra quem vive a operação de perto. Em vez de vender pacote
              pronto, entendemos o processo real da sua empresa — fretes, financeiro, atendimento, controle de equipe —
              e construímos o sistema que faz esse processo parar de depender de planilha solta e retrabalho manual.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutCards.map((item) => {
                const AboutIcon = item.icon
                return (
                  <Card key={item.title} className="border-border bg-card text-card-foreground shadow-none">
                    <CardContent className="p-5">
                      <AboutIcon className="mb-4 size-7 text-primary" />
                      <h3 className="font-sans text-base font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bloco missão/por que */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden border-border bg-card text-card-foreground shadow-none">
            <CardContent className="p-8 sm:p-10">
              <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Por que fazemos isso?</p>
              <h2 className="font-sans text-2xl font-bold sm:text-3xl">Sistema bom é o que some no dia a dia.</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Acreditamos que tecnologia boa não aparece — ela só resolve. Construímos sistemas para que sua equipe
                pare de perder tempo com controle manual e comece a confiar nos números que o sistema mostra.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-primary/10 p-5 font-sans text-xl font-bold text-foreground">
                Menos planilha, mais controle real da operação.
              </div>
            </CardContent>
          </Card>

          {/* Foto secundária */}
          <div className="relative hidden h-full min-h-[280px] overflow-hidden rounded-2xl lg:block">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
              alt="Dashboard de gestão operacional"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/30 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  )
}
