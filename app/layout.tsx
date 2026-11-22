import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tahira Nawab — Software Engineer & Full-Stack Developer",
  description:
    "Tahira Nawab is a software engineer and full-stack developer, building thoughtful web products, practical systems, and accessible digital experiences.",
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

export const viewport: Viewport = {
  themeColor: "#0c0c0d",
  colorScheme: "dark",
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
