"use client"

import { motion } from "framer-motion"

const education = [
  {
    school: "Information Technology University",
    degree: "Bachelor's degree in Software Engineering",
    location: "Lahore, Pakistan",
  },
]

export default function Education() {
  return (
    <section id="education" className="portfolio-section">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="section-heading">
          <h2>Education</h2>
        </div>
        <ul className="education-list">
          {education.map((item) => (
            <li className="education-item" key={item.school}>
              <span className="education-mark education-logo-wrap">
                <img
                  className="education-logo"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202026-11-23%2009-17-34-B3AwJ9hdSznDwqI0QeuLTX7OW2lyXC.png"
                  alt="Information Technology University logo"
                />
              </span>
              <div>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span>{item.location}</span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
