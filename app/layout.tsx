import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tahira Nawab (tom) | Fullstack Developer",
  description:
    "Fullstack developer crafting solutions with intention — from web apps to AI tools, automation utilities, and complex system designs. Driven by clarity, logic, and purpose.",
  keywords: ["fullstack developer", "web development", "react", "typescript", "next.js", "portfolio"],
  authors: [{ name: "Tahira Nawab" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tahira-portfolio.vercel.app",
    title: "Tahira Nawab (tom) | Fullstack Developer",
    description: "Fullstack developer crafting solutions with intention",
    siteName: "Tahira's Portfolio",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} antialiased dark bg-background text-foreground`}>{children}</body>
    </html>
  )
}
