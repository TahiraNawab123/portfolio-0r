"use client"

import { useCallback, useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Terminal from "@/components/terminal"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import HireMe from "@/components/hire-me"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import LoadingScreen from "@/components/loading-screen"
import ScrollLogoTransition from "@/components/scroll-logo-transition"

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const handleLoadingComplete = useCallback(() => setIsLoading(false), [])

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
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <MatrixRain />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-background/38" aria-hidden="true" />
      <div className="relative z-10">
        <Navigation />
        <ScrollLogoTransition />
        <Hero onOpenTerminal={() => setShowTerminal(true)} />

        <About />
      <Projects />

      <Experience />
      <HireMe />
      <Contact />
      <Footer />

        {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
      </div>
      </main>
    </>
  )
}
