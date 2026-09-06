import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "The Monkeys | Sistemas de gestão sob medida para PMEs",
  description: siteConfig.description,
  generator: "v0.app",
  keywords: ["The Monkeys", "sistema de gestão sob medida", "SaaS para PME", "automação de processos", "software sob medida"],
  openGraph: {
    title: "The Monkeys | Sua empresa cresceu. Sua planilha não acompanhou.",
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
