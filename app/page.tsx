"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Terminal from "@/components/terminal"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
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
    <>
      <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="relative z-10">
        <Navigation />
        <Hero onOpenTerminal={() => setShowTerminal(true)} />

        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      <Footer />

        {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
      </div>
      </main>
    </>
  )
}
