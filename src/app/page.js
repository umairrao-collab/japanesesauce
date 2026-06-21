import { getAllPosts, getFeaturedPosts, getPostsByCategory } from "@/lib/posts"
import { siteConfig } from "@/lib/site.config"
import { Hero } from "@/components/home/Hero"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { FeaturedRecipes } from "@/components/home/FeaturedRecipes"
import { ValueProps } from "@/components/home/ValueProps"
import { LatestRecipes } from "@/components/home/LatestRecipes"
import { Newsletter } from "@/components/home/Newsletter"

export default function HomePage() {
  const featured = getFeaturedPosts(5)
  const categories = (siteConfig.categories || []).map((c) => ({
    ...c,
    count: getPostsByCategory(c.slug).length,
  }))

  return (
    <>
      <Hero post={featured[0]} />
      <CategoryGrid categories={categories} />
      <FeaturedRecipes posts={featured.slice(1, 4)} />
      <ValueProps />
      <LatestRecipes posts={getAllPosts().slice(0, 6)} />
      <Newsletter />
    </>
  )
}