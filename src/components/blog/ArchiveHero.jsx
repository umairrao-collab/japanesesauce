import { Sparkles } from "lucide-react"

export function ArchiveHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background" />
      <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />

      <div className="container py-12 text-center md:py-16">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur sm:text-sm">
            <Sparkles className="h-4 w-4" />
            {eyebrow}
          </span>
        )}

        <h1 className="mt-5 font-serif text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            </>
          )}
        </h1>

        {description && (
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}