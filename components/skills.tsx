"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    label: "Languages & UI",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Vite", "Figma"],
  },
  {
    label: "Backend & data",
    skills: ["Node.js", "MongoDB", "PostgreSQL", "Firebase", "Databases", "WebSockets"],
  },
  {
    label: "Tools & platforms",
    skills: ["Docker", "Kubernetes", "Linux", "Vercel", "Git", "GitHub", "Postman"],
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
          <h2>Tools I work with</h2>
        </div>
        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.label}>
              <h3>{group.label}</h3>
              <ul aria-label={group.label}>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
