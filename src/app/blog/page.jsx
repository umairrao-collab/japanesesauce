import { getAllPosts } from "@/lib/posts"
import { siteConfig } from "@/lib/site.config"
import { PostCard } from "@/components/ui/PostCard"
import { Sparkles } from "lucide-react"

export const metadata = {
  title: "All Recipes",
  description: `Every Japanese sauce and condiment recipe on ${siteConfig.name}.`,
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Premium gradient header band */}
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/60 via-background to-background" />
        <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="container py-16 text-center md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            {posts.length} tested recipe{posts.length === 1 ? "" : "s"}
          </span>
          <h1 className="mt-6 font-serif text-4xl font-extrabold tracking-tight md:text-5xl">
            All{" "}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Recipes
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Every Japanese sauce and condiment guide — from quick weeknight drizzles to restaurant classics.
          </p>
        </div>
      </section>

      {/* Recipe grid */}
      <section className="container py-14">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts yet — add your first <code>.mdx</code> file in <code>src/content/posts</code>.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}