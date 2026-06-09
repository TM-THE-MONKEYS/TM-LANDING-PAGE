import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { lastUpdated } from "@/lib/site"

type LegalPageShellProps = {
  title: string
  children: React.ReactNode
}

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="font-sans text-white hover:bg-cyan-400/10 hover:text-cyan-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a home
            </Button>
          </Link>
        </div>

        <h1 className="mb-8 text-center font-orbitron text-4xl font-bold md:text-5xl">{title}</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <p className="text-lg leading-relaxed text-gray-300">Última atualização: {lastUpdated}</p>
          {children}
        </div>
      </div>
    </main>
  )
}
