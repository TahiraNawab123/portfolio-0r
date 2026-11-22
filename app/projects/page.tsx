"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ProjectModal from "@/components/project-modal"
import ProjectActions from "@/components/project-actions"
import MatrixRain from "@/components/matrix-rain"

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
      live: "https://v0-double-shot.vercel.app",
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
    links: {
      github: "https://github.com/TahiraNawab123/chess-game",
    },
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
    links: {
      github: "https://github.com/TahiraNawab123/pairly",
    },
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
    links: {
      github: "https://github.com/TahiraNawab123/sudoku",
    },
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
    links: {
      github: "https://github.com/TahiraNawab123/quietspotmap",
    },
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
      live: "https://smart-invoice-payroll-platform.vercel.app",
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

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }

  return (
    <main className="projects-page relative min-h-screen overflow-hidden bg-background text-foreground">
      <MatrixRain />
      <div className="projects-shell relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="projects-page-header"
        >
          <Link href="/#projects" className="projects-back-link">
            <span aria-hidden="true">←</span>
            Back to portfolio
          </Link>
          <p className="projects-eyebrow">TAHIRA NAWAB <span>/</span> SELECTED WORK</p>
          <h1>Projects</h1>
          <p className="projects-page-intro">
            A selection of products, experiments, and systems built to solve practical problems.
          </p>
          <p className="projects-count">{String(projectsData.length).padStart(2, "0")} PROJECTS</p>
        </motion.header>

        <div className="projects-page-grid">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(idx * 0.035, 0.28) }}
              onClick={() => setSelectedProject(project)}
              className="projects-page-card group"
            >
              <div className="projects-card-frame">
                <div className="projects-card-image">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw"
                      className={`object-cover transition-opacity duration-300 ${
                        loadedImages.has(project.id)
                          ? "opacity-75 group-hover:opacity-100"
                          : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(project.id)}
                      loading={idx < 2 ? "eager" : "lazy"}
                      quality={75}
                    />
                  )}
                  {!loadedImages.has(project.id) && <div className="projects-image-loading" />}
                  <div className="projects-image-shade" />
                  <span className="projects-card-index">{String(idx + 1).padStart(2, "0")}</span>
                </div>

                <div className="projects-card-content">
                  <div className="projects-card-title-row">
                    <div>
                      <h2>{project.title}</h2>
                      <p>{project.shortDesc}</p>
                    </div>
                    {project.status && <span className="projects-status">{project.status}</span>}
                  </div>
                  <p className="projects-card-description">{project.description}</p>
                  <div className="projects-card-tech" aria-label="Technologies">
                    {project.techStack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>

                <div className="projects-card-actions" onClick={(event) => event.stopPropagation()}>
                  <ProjectActions
                    github={project.links?.github}
                    live={project.links?.live}
                    status={project.status}
                    compact
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  )
}
