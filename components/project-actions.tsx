import { ExternalLink, Github } from "lucide-react"

interface ProjectActionsProps {
  github?: string
  live?: string
  status?: string
  onAction?: (event: React.MouseEvent) => void
  compact?: boolean
}

export default function ProjectActions({
  github,
  live,
  status,
  onAction,
  compact = false,
}: ProjectActionsProps) {
  const handleAction = (event: React.MouseEvent) => {
    event.stopPropagation()
    onAction?.(event)
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${compact ? "" : "pt-4 border-t border-border/30"}`}>
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAction}
          aria-label={`Open live demo${status ? ` for ${status}` : ""}`}
          className="inline-flex items-center gap-1.5 rounded border border-primary bg-primary px-3 py-1.5 text-xs font-mono text-primary-foreground transition-colors hover:bg-primary/80"
        >
          <ExternalLink className="size-3.5" aria-hidden="true" />
          Live Demo
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAction}
          aria-label="Open GitHub repository"
          className="inline-flex items-center gap-1.5 rounded border border-secondary/70 px-3 py-1.5 text-xs font-mono text-secondary transition-colors hover:bg-secondary/10"
        >
          <Github className="size-3.5" aria-hidden="true" />
          GitHub
        </a>
      )}
      {!live && !github && status && (
        <span className="inline-flex items-center rounded border border-muted-foreground/40 px-3 py-1.5 text-xs font-mono text-muted-foreground">
          {status}
        </span>
      )}
    </div>
  )
}
