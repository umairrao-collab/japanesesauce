import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site.config"

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function categoryLabel(slug) {
  const c = (siteConfig.categories || []).find((x) => x.slug === slug)
  if (c) return c.title
  return (slug || "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export function PostCard({ post }) {
  const { slug, frontmatter, readingTime } = post
  const cover = frontmatter.coverImage

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col m-4 overflow-hidden rounded-2xl border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      {/* Image frame — gradient acts as fallback if the photo is missing */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary/30 via-accent to-card">
        {cover && (
          <Image
            src={cover}
            alt={frontmatter.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Premium gradient overlay for depth + badge legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category badge — pinned inside the image, never overlaps the title */}
        {frontmatter.category && (
          <span className="absolute left-4 top-4 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm backdrop-blur-sm">
            {categoryLabel(frontmatter.category)}
          </span>
        )}
      </div>

      {/* Content — proper padding */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          {readingTime && (
            <>
              <span className="opacity-40">•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {readingTime}
              </span>
            </>
          )}
        </div>

        <h3 className="mt-3 line-clamp-2 font-serif text-xl font-bold leading-snug transition-colors group-hover:text-primary">
          {frontmatter.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {frontmatter.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Read recipe
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}