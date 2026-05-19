import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Geist } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "The Monkeys | Tecnologia de verdade a preço acessível",
  description: siteConfig.description,
  generator: "v0.app",
  keywords: ["The Monkeys", "sites modernos", "automação com IA", "bots inteligentes", "tecnologia acessível"],
  openGraph: {
    title: "The Monkeys | Tecnologia que trabalha por você",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
  },
}

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable} ${geist.variable} scroll-smooth antialiased dark`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
