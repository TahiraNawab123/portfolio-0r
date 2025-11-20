"use client"

import { motion } from "framer-motion"

interface LanguageStat {
  name: string
  percentage: number
  color: string
}

const languageStats: LanguageStat[] = [
  { name: "TypeScript", percentage: 35, color: "#3178c6" },
  { name: "Python", percentage: 25, color: "#3776ab" },
  { name: "React", percentage: 20, color: "#61dafb" },
  { name: "C++", percentage: 12, color: "#00599c" },
  { name: "Other", percentage: 8, color: "#666666" },
]

export default function GitHubStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-primary">commit</span>
            <span className="text-muted-foreground"> history</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Commits", value: "200+", icon: "📝" },
            { label: "Contributions", value: "1.2k", icon: "✓" },
            { label: "Active Days", value: "150+", icon: "🔥" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border/30 rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-card border border-border/30 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-foreground">
            <span className="text-secondary">Most Used Languages</span>
          </h3>

          <div className="space-y-4">
            {languageStats.map((lang) => (
              <motion.div key={lang.name} variants={itemVariants} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-muted-foreground">{lang.name}</span>
                  <span className="text-sm font-mono text-foreground">{lang.percentage}%</span>
                </div>
                <div className="h-2 bg-border/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: lang.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
