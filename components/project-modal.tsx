"use client"

import { motion, AnimatePresence } from "framer-motion"

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

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-card border-2 border-primary/30 rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
                <p className="text-muted-foreground">{project.shortDesc}</p>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors text-2xl"
              >
                ✕
              </button>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-sm font-mono text-primary mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-border/30">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 bg-primary text-primary-foreground rounded hover:bg-primary/80 transition-colors text-center text-sm font-mono"
                >
                  Live Demo
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors text-center text-sm font-mono"
                >
                  GitHub
                </a>
              )}
              {!project.links?.live && !project.links?.github && (
                <button className="flex-1 py-2 px-4 bg-primary/20 text-primary rounded cursor-default text-sm font-mono">
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
