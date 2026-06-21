import { PostCard } from "@/components/ui/PostCard"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function FeaturedRecipes({ posts = [] }) {
  if (!posts.length) return null

  return (
    <section className="container py-16">
      <SectionHeading
        title="Featured recipes"
        subtitle="Hand-picked favorites to start with."
        viewAllHref="/blog"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}