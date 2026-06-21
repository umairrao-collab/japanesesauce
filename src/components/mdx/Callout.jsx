import { Info, Lightbulb, AlertTriangle } from "lucide-react"

const icons = { info: Info, tip: Lightbulb, warning: AlertTriangle }

export function Callout({ type = "info", children }) {
  const Icon = icons[type] || Info
  return (
    <div className="not-prose my-6 flex gap-3 rounded-lg border bg-accent p-4">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}