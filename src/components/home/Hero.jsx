import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles, Star, Leaf } from "lucide-react"

export function Hero({ post }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background" />
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 -z-10 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

      {/* less top margin from header, tighter overall height */}
      <div className="container grid items-center gap-10 pb-12 pt-8 lg:grid-cols-2 lg:pb-16 lg:pt-12">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Authentic Japanese sauces, tested at home
          </span>

          <h1 className="mt-5 font-serif text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Master the art of{" "}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Japanese sauces
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
            From silky eel sauce to glossy teriyaki — foolproof recipes, exact ratios, and the
            little details that make them taste like the restaurant.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore recipes <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/category/eel-sauce"
              className="inline-flex items-center gap-2 rounded-full border bg-card px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Start with eel sauce
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-primary text-primary" /> Kitchen-tested
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Leaf className="h-4 w-4 text-primary" /> Real ingredients
            </span>
          </div>
        </div>

        {post && (
          <Link href={`/blog/${post.slug}`} className="group relative block animate-fade-up">
            {/* shorter, wider frame → less crop, sharper, less scroll */}
            <div className="relative aspect-[4/3] max-h-[420px] w-full overflow-hidden rounded-[1.75rem] border bg-gradient-to-br from-primary/30 via-accent to-card shadow-2xl">
              {post.frontmatter.coverImage && (
                <Image
                  src={post.frontmatter.coverImage}
                  alt={post.frontmatter.title}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Sparkles className="h-3.5 w-3.5" /> Featured
                </span>
                <h2 className="mt-3 font-serif text-xl font-bold text-white md:text-2xl">
                  {post.frontmatter.title}
                </h2>
                <p className="mt-1.5 line-clamp-2 text-sm text-white/80">
                  {post.frontmatter.description}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  )
}