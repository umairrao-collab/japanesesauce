import { ExternalLink } from "lucide-react"

export function AffiliateBox({ title, description, href, cta = "Check price" }) {
  return (
    <div className="not-prose my-8 flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h4 className="font-serif text-lg font-bold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:opacity-90"
      >
        {cta} <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  )
}