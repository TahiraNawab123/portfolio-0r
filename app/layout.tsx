import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tahira Nawab (Tom) — Software Engineer & Developer",
  description:
    "Tahira Nawab (Tom) is a software engineering student at ITU and full-stack developer building clean systems, thoughtful products, and useful digital experiences.",
  themeColor: "#0c0c0d",
  keywords: ["fullstack developer", "web development", "react", "typescript", "next.js", "portfolio"],
  authors: [{ name: "Tahira Nawab" }],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tahira-portfolio.vercel.app",
    title: "Tahira Nawab (tom) | Fullstack Developer",
    description: "Full-stack developer building clean systems and useful digital experiences.",
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
