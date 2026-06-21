import { getAllPosts } from "@/lib/posts"
import { siteConfig } from "@/lib/site.config"

export default function sitemap() {
  const posts = getAllPosts().map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: p.frontmatter.updated || p.frontmatter.date,
    changeFrequency: "monthly",
    priority: p.frontmatter.featured ? 0.9 : 0.7,
  }))

  const staticRoutes = ["", "/blog", "/about", "/contact", "/privacy-policy", "/terms"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.6,
    })
  )

  return [...staticRoutes, ...posts]
}