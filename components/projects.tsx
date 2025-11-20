"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import ProjectModal from "@/components/project-modal"

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
}

const projectsData: Project[] = [
  {
    id: "lexora",
    title: "Lexora",
    shortDesc: "Legal-Tech Platform",
    description:
      "A justice-focused platform designed to simplify legal awareness and streamline interaction between victims and lawyers. features structured flows, cleaner user journeys, and an aim to make legal navigation more accessible.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Firebase"],
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
    techStack: ["React", "Tailwind CSS", "Next.js", "REST API"],
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
    techStack: ["Python", "FastAPI", "React", "NLP Libraries"],
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
    techStack: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
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
    techStack: ["C++", "OOP", "File I/O", "Data Structures"],
    image: "/command-line-interface-system.jpg",
    links: {
      github: "https://github.com/TahiraNawab123/Military-Management-System",
    },
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
          {projectsData.map((project, idx) => (
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
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
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

                <div className="px-6 pb-4 border-t border-border/20">
                  <button className="w-full py-2 text-sm font-mono text-primary hover:text-foreground transition-colors">
                    view details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
