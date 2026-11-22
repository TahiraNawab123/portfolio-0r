"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

const contactLinks = [
  { label: "Email", value: "tahira.nawab.dev@gmail.com", href: "mailto:tahira.nawab.dev@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/tahira-nawab", href: "https://www.linkedin.com/in/tahira-nawab", icon: Linkedin },
  { label: "GitHub", value: "github.com/TahiraNawab123", href: "https://github.com/TahiraNawab123", icon: Github },
  { label: "Twitter", value: "@TahiraDev", href: "https://x.com/TahiraDev", icon: ArrowUpRight },
]

export default function Contact() {
  return (
    <section id="contact" className="portfolio-section">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="section-heading">
          <p className="section-kicker">05 / Contact</p>
          <h2>Let&apos;s build something useful.</h2>
        </div>
        <div className="contact-intro">
          <div>
            <p className="contact-status">Open to collaborations</p>
            <p>I&apos;m available for fullstack products, AI tools, and automation systems where clear thinking turns into useful software.</p>
          </div>
          <a href="https://www.linkedin.com/in/tahira-nawab" target="_blank" rel="noopener noreferrer" className="contact-cta">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <ul className="contact-links">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"}>
                <span className="contact-link-label"><Icon aria-hidden="true" />{label}</span>
                <span>{value}<ArrowUpRight aria-hidden="true" className="contact-link-arrow" /></span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
