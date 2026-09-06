"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ProjectModal from "@/components/project-modal"
import ProjectActions from "@/components/project-actions"

interface Project {
  id: string
  title: string
  description: string
  shortDesc: string
  techStack: string[]
  image?: string
  links?: {
    github?: string
    live?: string
  }
  status?: string
}

const projectsData: Project[] = [
  {
    id: "double-shot",
    title: "Double Shot",
    shortDesc: "Coffee Shop Experience",
    description:
      "A thoughtfully designed coffee shop experience focused on warm visuals, clear navigation, and a welcoming digital presence for discovering the menu and story behind Double Shot.",
    techStack: ["React", "JavaScript", "CSS", "Responsive Design"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JFZaiAccbmIlrbaAHU1qWzh21lGWWP.png",
    links: {
      github: "https://github.com/TahiraNawab123/double-shot",
    },
  },
  {
    id: "snake-game",
    title: "Snake Game",
    shortDesc: "Retro Arcade App",
    description:
      "A polished mobile-first take on the classic Snake experience, pairing nostalgic arcade mechanics with a focused interface, responsive controls, and a tactile game-room presentation.",
    techStack: ["JavaScript", "HTML/CSS", "Game Logic", "Responsive Design"],
    image: "/snake-game-project.png",
    links: {
      github: "https://github.com/TahiraNawab123/snake_game",
    },
  },
  {
    id: "chess-game",
    title: "Chess Game",
    shortDesc: "Coming soon",
    status: "Coming Soon",
    description:
      "A thoughtful chess experience in progress, designed around calm gameplay, clear board interactions, and a refined interface for strategic play. Coming soon.",
    techStack: ["JavaScript", "Game Logic", "UI Design"],
    image: "/chess-game-project.png",
  },
  {
    id: "pairly",
    title: "Pairly",
    shortDesc: "Coming soon",
    status: "Coming Soon",
    description:
      "A social connection app concept focused on meaningful matches, approachable interactions, and a clean product experience. Coming soon.",
    techStack: ["React", "JavaScript", "Product Design"],
    image: "/pairly-project.png",
  },
  {
    id: "sudoku",
    title: "Sudoku",
    shortDesc: "Coming soon",
    status: "Coming Soon",
    description:
      "A focused Sudoku experience currently in development, with a clean puzzle interface, adjustable difficulty, and thoughtful tools for solving at your own pace. Coming soon.",
    techStack: ["JavaScript", "Game Logic", "UI Design", "Responsive Design"],
    image: "/sudoku-project.png",
  },
  {
    id: "quietspotmap",
    title: "QuietSpotMap",
    shortDesc: "Coming soon",
    status: "Coming Soon",
    description:
      "A location-focused project for discovering calm, comfortable places to work, study, or take a quiet break. Coming soon.",
    techStack: ["React", "Maps", "JavaScript", "Responsive Design"],
    image: "/analytics-dashboard-marketing.jpg",
  },
  {
    id: "lexora",
    title: "Lexora",
    shortDesc: "Legal-Tech Platform",
    description:
      "A justice-focused platform designed to simplify legal awareness and streamline interaction between victims and lawyers. features structured flows, cleaner user journeys, and an aim to make legal navigation more accessible.",
    techStack: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    image: "/legal-tech-platform-interface.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/Lexora",
    },
  },
  {
    id: "usparity",
    title: "UsParity",
    shortDesc: "Equality & Awareness Platform",
    description:
      "A clean, minimal web platform built for awareness-driven communities. offers structured content, organized UI, and smooth user experience focused on clarity and accessibility.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    image: "/community-platform-dashboard.png",
    links: {
      github: "https://github.com/TahiraNawab123/Usparity",
    },
  },
  {
    id: "blog-summarizer",
    title: "Blog Summarizer",
    shortDesc: "AI/NLP Tool",
    description:
      "A text processing tool that turns long blogs into concise summaries using NLP logic. built for speed, clarity, and readability.",
    techStack: ["Python", "Flask", "React", "NLTK"],
    image: "/content-summarization-tool.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/Blog-Summarizer",
    },
  },
  {
    id: "quote-generator",
    title: "Quote Generator",
    shortDesc: "Creative Utility",
    description:
      "A lightweight app that generates random motivational and aesthetic quotes dynamically. minimal yet visually pleasing.",
    techStack: ["React", "JavaScript", "CSS", "API"],
    image: "/quote-generator-interface.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/quote-generator",
    },
  },
  {
    id: "military-management",
    title: "Military Management System",
    shortDesc: "CLI/OOP Project",
    description:
      "A command-line based management system built using C++ with OOP + file handling. manages personnel, missions, and operational data with structured flows.",
    techStack: ["C++", "OOP", "File Handling", "STL"],
    image: "/command-line-interface-system.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/Military-Management-System",
    },
  },
  {
    id: "myspotify",
    title: "mySpotify",
    shortDesc: "Music Streaming Application",
    description:
      "A Spotify-inspired music streaming application with playlist management, user profiles, and audio playback functionality. built with modern web technologies for seamless music discovery.",
    techStack: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
    image: "/myspotify-music-app.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/mySpotify",
    },
  },
  {
    id: "mini-git",
    title: "mini_git",
    shortDesc: "Version Control System",
    description:
      "A lightweight implementation of Git version control system. demonstrates core Git functionality including commit, branch, merge, and history tracking.",
    techStack: ["Python", "Git Protocol", "SHA-1", "CLI"],
    image: "/mini-git-version-control.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/mini_git",
    },
  },
  {
    id: "omnidex",
    title: "OMNIDEX",
    shortDesc: "Ben10 Game Project",
    description:
      "Ben 10 game project featuring alien transformations and action-packed gameplay. built with immersive mechanics and engaging interface design.",
    techStack: ["Python", "Pygame", "Game Logic", "OOP"],
    image: "/omnidex-ben10-game.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/ben10",
    },
  },
  {
    id: "glsoc",
    title: "GLSOC",
    shortDesc: "Inventory Management System",
    description:
      "An inventory management system designed for efficient product tracking and stock level monitoring. streamlines data organization and provides real-time inventory insights.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/glsoc-inventory-management.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/GLOSC",
    },
  },
  {
    id: "stranger-things",
    title: "Stranger-Things",
    shortDesc: "Interactive Web Experience",
    description:
      "A fun project with Will and Demogorgon features inspired by the Stranger Things universe. features immersive UI, dark atmospheric design, and interactive elements.",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
    image: "/stranger-things-project.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/Stranger-Things",
    },
  },
  {
    id: "free-imran-khan",
    title: "Free_Imran_Khan",
    shortDesc: "Political Awareness Campaign",
    description:
      "A professional political awareness campaign platform designed for maximum engagement and information dissemination. features compelling visuals, structured narratives, and community mobilization tools.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: "/free-imran-khan-campaign.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/Free_Imran_Khan",
    },
  },
  {
    id: "itu-cs-resources",
    title: "ITU-CS-Resources",
    shortDesc: "Educational Resource Hub",
    description:
      "A centralized hub for ITU computer science students to access course materials, study guides, and programming resources. organized and easily navigable.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    image: "/itu-cs-resources-hub.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/ITU-CS-Resources",
    },
  },
  {
    id: "smart-invoice-payroll",
    title: "Smart Invoice & Payroll Platform",
    shortDesc: "Finance Management Platform",
    description:
      "Hackathon MVP for a centralized business finance workspace. Helps SMBs manage branded invoices, clients, services, employees, payroll runs, salary slips, and financial reporting from one Firebase-backed dashboard. Features AI-powered invoice drafts and payroll insights using Groq.",
    techStack: ["React", "Firebase", "TypeScript", "Tailwind CSS", "Express.js", "Groq AI"],
    image: "/smart-invoice-payroll-platform.png",
    links: {
      github: "https://github.com/TahiraNawab123/smart-invoice-payroll-platform",
    },
  },
  {
    id: "multi-threaded-crawler",
    title: "Multi-threaded Web Crawler",
    shortDesc: "Concurrent Text Processing System",
    description:
      "A 4-stage concurrent pipeline in C that downloads Project Gutenberg plaintext books, processes them in parallel using POSIX threads, and computes text statistics including sentence count, palindrome detection, and unique word count with zero busy-waiting.",
    techStack: ["C", "POSIX Threads", "libcurl", "Concurrent Programming"],
    image: "/multi-threaded-web-crawler.png",
    links: {
      github: "https://github.com/TahiraNawab123/Multi-threaded-Web-Crawler-and-Text-Processing-System",
    },
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const visibleProjects = projectsData.slice(0, 6)

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-primary">{"<"}</span>
            <span className="text-foreground"> projects </span>
            <span className="text-primary">{">"}</span>
          </h2>
          <p className="text-muted-foreground">Featured work and technical achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-opacity duration-300 ${
                        loadedImages.has(project.id)
                          ? "opacity-40 group-hover:opacity-60"
                          : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(project.id)}
                      priority={idx < 6}
                      quality={75}
                    />
                  )}
                  {!loadedImages.has(project.id) && (
                    <div className="absolute inset-0 animate-pulse bg-primary/5" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.shortDesc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded bg-secondary/10 text-secondary border border-secondary/30">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t border-border/20 px-4 pb-4 pt-4 sm:px-6 sm:pb-5">
                  <ProjectActions
                    github={project.links?.github}
                    live={project.links?.live}
                    status={project.status}
                    compact
                  />
                  <button
                    type="button"
                    className="mt-3 w-full text-left text-xs font-mono text-primary transition-colors hover:text-foreground"
                    aria-label={`View details for ${project.title}`}
                  >
                    view details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            href="/projects"
            prefetch
            className="px-8 py-3 font-mono text-sm border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 rounded inline-block"
          >
            view all projects →
          </Link>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
