"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Instagram, Layers3 } from "lucide-react"

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
  { label: "Sistema sob medida", value: "Não é pacote pronto" },
  { label: "Implementação", value: "Do processo ao sistema no ar" },
  { label: "Suporte", value: "Acompanhamento contínuo" },
]

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const progress = Math.min(scrollY / 520, 1)
  const scale    = 1 - progress * 0.1   // 1 → 0.90
  const radius   = progress * 28        // 0 → 28px

  return (
    <section className="relative min-h-svh bg-black">

      {/* ── Foto full-bleed com efeito de encolher ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${radius}px`,
          transformOrigin: "top center",
          willChange: "transform",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
          alt="Profissionais trabalhando com sistema de gestão"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/*
          Overlay direcional: lado esquerdo (texto) muito escuro,
          lado direito (foto) quase limpo — foto aparece à direita,
          texto sempre legível à esquerda.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/20" />
        {/* camada extra no topo para o navbar ficar legível */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* ── Conteúdo: grid 2 col — copy esquerda, foto direita ── */}
      <div className="relative z-10 mx-auto grid min-h-svh max-w-7xl grid-cols-1 items-center px-6 pt-20 pb-16 lg:grid-cols-2 lg:px-8">

        {/* Coluna de copy */}
        <div className="py-8">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Layers3 className="size-4 shrink-0 text-white" />
            Sistemas sob medida para quem cansou de planilha.
          </div>

          {/* H1 */}
          <h1 className="font-sans text-4xl font-black leading-tight tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            Sua empresa cresceu.<br className="hidden sm:block" />
            Sua planilha não acompanhou.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
            Construímos sistemas de gestão (SaaS) e automações sob medida para pequenas e
            médias empresas que ainda dependem de controle manual — com acompanhamento
            próximo, do primeiro processo mapeado ao sistema no ar.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-13 rounded-full bg-primary px-7 text-base font-bold text-white hover:bg-primary/90"
            >
              <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp com a The Monkeys">
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-full border-white/30 bg-transparent px-7 text-base font-bold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
            >
              <a href="#solucoes">
                Conheça as soluções
                <ArrowRight className="size-5 text-white" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
              >
                <p className="text-xs font-medium text-white/75">{stat.label}</p>
                <p className="mt-1 text-sm font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Coluna direita — vazia: a foto aparece através do overlay mais leve */}
      </div>

    </section>
  )
}

export default Hero
