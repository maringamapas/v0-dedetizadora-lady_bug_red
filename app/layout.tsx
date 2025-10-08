import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Lady Bug Dedetizadora | Controle de Pragas em Maringá",
  description:
    "Pare de depender do Instagram e Facebook. Tenha seu site profissional sem mensalidades e pronto para atrair clientes!",
  generator: "v0.app",
  openGraph: {
    title: "Lady Bug Dedetizadora | Controle de Pragas em Maringá",
    description:
      "Pare de depender do Instagram e Facebook. Tenha seu site profissional sem mensalidades e pronto para atrair clientes!",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/img-08-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Lady Bug Dedetizadora - Controle Profissional de Pragas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lady Bug Dedetizadora | Controle de Pragas em Maringá",
    description: "Dedetização, desratização e controle de pragas em Maringá. Atendimento 24h.",
    images: ["/images/img-08-hero-bg.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
