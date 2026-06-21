import { PostCard } from "@/components/ui/PostCard"

export function RelatedRecipes({ posts = [] }) {
  if (!posts.length) return null

  return (
    <section className="border-t bg-muted/30">
      <div className="container py-14">
        <h2 className="mb-8 font-serif text-2xl font-extrabold md:text-3xl">Related recipes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  )
}