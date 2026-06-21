import Link from "next/link"
import { Clock, ChevronRight } from "lucide-react"
import { formatDate } from "@/lib/format"

export function ArticleHeader({ frontmatter, readingTime }) {
  return (
    <header className="relative border-b">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/50 to-background" />
      <div className="container max-w-3xl py-10">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="transition hover:text-foreground">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/blog" className="transition hover:text-foreground">Recipes</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="line-clamp-1 text-foreground">{frontmatter.title}</span>
        </nav>

        <h1 className="mt-5 font-serif text-3xl font-extrabold leading-tight md:text-5xl">
          {frontmatter.title}
        </h1>

        {frontmatter.description && (
          <p className="mt-4 text-lg text-muted-foreground">{frontmatter.description}</p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          {frontmatter.category && (
            <Link
              href={`/category/${frontmatter.category}`}
              className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary transition hover:bg-primary/20"
            >
              {frontmatter.category}
            </Link>
          )}
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          {readingTime && (
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {readingTime}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}