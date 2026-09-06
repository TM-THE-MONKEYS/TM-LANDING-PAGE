// Ativar em app/page.tsx após documentar o case com números reais

export function CaseSection() {
  return (
    <section id="resultado" className="relative overflow-hidden bg-background px-6 py-24 text-foreground">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-wide text-primary">Resultado</p>
        <h2 className="font-sans text-3xl font-bold sm:text-5xl">Uma transportadora que saiu da planilha.</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Uma transportadora de médio porte controlava fretes, ponto de funcionários e abastecimento em planilhas
          separadas. Hoje, tudo está em um sistema só.
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-card px-6 py-5">
          <p className="text-sm font-medium text-muted-foreground">Números reais em breve</p>
        </div>
      </div>
    </section>
  )
}
