import { PostCard } from "@/components/ui/PostCard"

export function PostGrid({ posts = [], emptyMessage = "No recipes here yet." }) {
  if (!posts.length) {
    return <p className="py-16 text-center text-muted-foreground">{emptyMessage}</p>
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}