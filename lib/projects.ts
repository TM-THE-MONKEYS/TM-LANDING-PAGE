export type ProjectMedia = {
  webm: string
  mp4: string
  poster: string
  posterAvif?: string
}

export type Project = {
  id: string
  name: string
  description: string
  technologies: string[]
  href: string
  domain: string
  media: ProjectMedia
}

export const projects: Project[] = [
  {
    id: "tm-transportadora",
    name: "TM Transportadora",
    description:
      "SaaS de operação logística: fretes com status e competência, frota, motoristas e financeiro no mesmo painel — sem planilha paralela.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "SWR"],
    href: "https://tm-transportadora.vercel.app",
    domain: "tm-transportadora.vercel.app",
    media: {
      webm: "/projects/tm-transportadora.webm",
      mp4: "/projects/tm-transportadora.mp4",
      poster: "/projects/tm-transportadora.webp",
      posterAvif: "/projects/tm-transportadora.avif",
    },
  },
  {
    id: "majestade",
    name: "Majestade Personalizados",
    description:
      "Vitrine de brindes corporativos com catálogo em foto, identidade da marca e caminho curto até o orçamento.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
    href: "https://majestadepersonalizados.com.br",
    domain: "majestadepersonalizados.com.br",
    media: {
      webm: "/projects/majestade.webm",
      mp4: "/projects/majestade.mp4",
      poster: "/projects/majestade.webp",
      posterAvif: "/projects/majestade.avif",
    },
  },
]
