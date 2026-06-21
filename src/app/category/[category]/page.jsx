import { notFound } from "next/navigation"
import { getPostsByCategory } from "@/lib/posts"
import { siteConfig } from "@/lib/site.config"
import { ArchiveHero } from "@/components/blog/ArchiveHero"
import { PostGrid } from "@/components/blog/PostGrid"

export function generateStaticParams() {
  return siteConfig.categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const category = siteConfig.categories.find((c) => c.slug === slug)
  if (!category) return {}

  return {
    title: `${category.title} Recipes`,
    description: `All ${category.title.toLowerCase()} recipes and guides from ${siteConfig.name}.`,
    alternates: { canonical: `/category/${category.slug}` },
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params
  const category = siteConfig.categories.find((c) => c.slug === slug)
  if (!category) notFound()

  const posts = getPostsByCategory(slug)

  return (
    <>
      <ArchiveHero
        eyebrow={`${posts.length} recipe${posts.length === 1 ? "" : "s"}`}
        title={category.emoji ? `${category.emoji} ${category.title}` : category.title}
        highlight="Recipes"
        description={`Everything ${category.title.toLowerCase()} — tested ratios and step-by-step guides.`}
      />
      <section className="container py-12 md:py-14">
        <PostGrid posts={posts} emptyMessage="No recipes here yet — check back soon." />
      </section>
    </>
  )
}