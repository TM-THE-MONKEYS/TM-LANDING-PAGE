import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${GeistSans.variable} scroll-smooth antialiased dark`}
    >
      <body className={GeistSans.className}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
