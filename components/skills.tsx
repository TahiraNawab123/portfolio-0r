"use client"

import { motion } from "framer-motion"
import { Database, Radio, type LucideIcon } from "lucide-react"
import {
  siCss,
  siDocker,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siKubernetes,
  siLinux,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
} from "simple-icons"

type BrandIcon = { hex: string; path: string }
type Skill = { name: string; brand?: BrandIcon; icon?: LucideIcon; color?: string }

const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages & UI",
    skills: [
      { name: "JavaScript", brand: siJavascript },
      { name: "TypeScript", brand: siTypescript },
      { name: "HTML", brand: siHtml5 },
      { name: "CSS", brand: siCss },
      { name: "React", brand: siReact },
      { name: "Next.js", brand: siNextdotjs, color: "#f4f4f5" },
      { name: "Tailwind CSS", brand: siTailwindcss },
      { name: "Vite", brand: siVite },
      { name: "Figma", brand: siFigma },
    ],
  },
  {
    label: "Backend & data",
    skills: [
      { name: "Node.js", brand: siNodedotjs },
      { name: "MongoDB", brand: siMongodb },
      { name: "PostgreSQL", brand: siPostgresql },
      { name: "Firebase", brand: siFirebase },
      { name: "Databases", icon: Database, color: "#a1a1aa" },
      { name: "WebSockets", icon: Radio, color: "#a1a1aa" },
    ],
  },
  {
    label: "Tools & platforms",
    skills: [
      { name: "Docker", brand: siDocker },
      { name: "Kubernetes", brand: siKubernetes },
      { name: "Linux", brand: siLinux },
      { name: "Vercel", brand: siVercel, color: "#f4f4f5" },
      { name: "Git", brand: siGit, color: "#f4f4f5" },
      { name: "GitHub", brand: siGithub, color: "#f4f4f5" },
      { name: "Postman", brand: siPostman },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="section-heading">
          <p className="section-kicker">04 / Skills</p>
          <h2>Skills</h2>
        </div>
        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.label}>
              <h3>{group.label}</h3>
              <ul aria-label={group.label}>
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <li key={skill.name}>
                      {skill.brand ? (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          style={{ color: skill.color ?? `#${skill.brand.hex}` }}
                        >
                          <path d={skill.brand.path} />
                        </svg>
                      ) : Icon ? (
                        <Icon aria-hidden="true" style={{ color: skill.color }} />
                      ) : null}
                      <span>{skill.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
