import { notFound } from "next/navigation"
import { getAllTags, getPostsByTag } from "@/lib/posts"
import { siteConfig } from "@/lib/site.config"
import { ArchiveHero } from "@/components/blog/ArchiveHero"
import { PostGrid } from "@/components/blog/PostGrid"

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }))
}

export async function generateMetadata({ params }) {
  const { tag } = await params
  const match = getAllTags().find((t) => t.slug === tag)
  if (!match) return {}

  return {
    title: `${match.tag} recipes & guides`,
    description: `All ${siteConfig.name} posts tagged "${match.tag}".`,
    alternates: { canonical: `/tag/${match.slug}` },
  }
}

export default async function TagPage({ params }) {
  const { tag } = await params
  const match = getAllTags().find((t) => t.slug === tag)
  if (!match) notFound()

  const posts = getPostsByTag(tag)

  return (
    <>
      <ArchiveHero
        eyebrow={`${posts.length} post${posts.length === 1 ? "" : "s"}`}
        title="Tagged"
        highlight={`#${match.tag}`}
        description={`Every ${siteConfig.name} recipe and guide tagged "${match.tag}".`}
      />
      <section className="container py-12 md:py-14">
        <PostGrid posts={posts} emptyMessage="No recipes with this tag yet." />
      </section>
    </>
  )
}