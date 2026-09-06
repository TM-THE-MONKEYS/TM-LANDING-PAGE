import { Globe, LayoutDashboard, Link2, Workflow, type LucideIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Service = {
  title: string
  description: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: "Sistemas de Gestão (SaaS)",
    description:
      "Sistema sob medida pra controlar fretes, financeiro, equipe, estoque ou qualquer processo que hoje vive em planilha separada — tudo em um só lugar, feito pra sua operação.",
    icon: LayoutDashboard,
  },
  {
    title: "Automação de Processos",
    description:
      "Automatize atendimento, tarefas repetitivas e fluxos internos que hoje consomem tempo manual da sua equipe.",
    icon: Workflow,
  },
  {
    title: "Integrações e Sob Medida",
    description:
      "Conectamos sistemas, planilhas e ferramentas que sua empresa já usa, sem te obrigar a trocar tudo de uma vez.",
    icon: Link2,
  },
  {
    title: "Sites e Presença Digital",
    description: "Site institucional ou página de vendas quando sua empresa também precisa de vitrine online.",
    icon: Globe,
  },
]

export function FeaturesSection() {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-muted/40 px-6 py-24 text-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Soluções</p>
          <h2 className="font-sans text-3xl font-bold sm:text-5xl">O que construímos.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Sistemas e automações pensados pra tirar processos manuais de dentro da operação da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const ServiceIcon = service.icon

            return (
              <Card key={service.title} className="border-border bg-card text-card-foreground shadow-none">
                <CardHeader>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-border bg-primary/10 text-primary">
                    <ServiceIcon className="size-6" />
                  </div>
                  <CardTitle className="font-sans text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7 text-muted-foreground">
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
