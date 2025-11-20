"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Terminal from "@/components/terminal"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault()
        setShowTerminal(!showTerminal)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [showTerminal])

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero onOpenTerminal={() => setShowTerminal(true)} />

      <About />
      <Projects />

      <Experience />
      <Contact />
      <Footer />

      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </main>
  )
}
