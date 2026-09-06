import {
  Clock3,
  Handshake,
  PanelsTopLeft,
  Sparkles,
  Wrench,
  WalletCards,
  type LucideIcon,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

type Differential = {
  title: string
  icon: LucideIcon
}

const differentials: Differential[] = [
  { title: "Sistema sob medida (não pacote fechado)", icon: PanelsTopLeft },
  { title: "Acompanhamento direto com quem constrói", icon: Handshake },
  { title: "Implementação rápida", icon: Clock3 },
  { title: "Suporte contínuo após a entrega", icon: Wrench },
  { title: "Preço justo pra empresa pequena/média", icon: WalletCards },
  { title: "Foco em resolver, não em vender tecnologia", icon: Sparkles },
]

export function TechnologySection() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-background px-6 py-24 text-foreground">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Diferenciais</p>
          <h2 className="font-sans text-3xl font-bold sm:text-5xl">Feito pra sua operação, não pra um catálogo.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A gente entende o processo antes de construir o sistema. Isso muda o resultado.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((differential) => {
            const DifferentialIcon = differential.icon

            return (
              <Card
                key={differential.title}
                className="border-border bg-card text-card-foreground shadow-none"
              >
                <CardContent className="flex items-center gap-4 p-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-primary/10 text-primary">
                    <DifferentialIcon className="size-6" />
                  </span>
                  <h3 className="font-sans text-lg font-bold leading-snug">{differential.title}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
