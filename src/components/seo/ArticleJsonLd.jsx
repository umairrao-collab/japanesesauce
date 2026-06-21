import { siteConfig } from "@/lib/site.config"

export function ArticleJsonLd({ post }) {
  const { frontmatter } = post

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: frontmatter.coverImage ? `${siteConfig.url}${frontmatter.coverImage}` : undefined,
    datePublished: frontmatter.date,
    author: { "@type": "Person", name: siteConfig.author },
  }

  // assign to a variable so we avoid the double-brace JSX
  const jsonLdHtml = { __html: JSON.stringify(data) }

  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml} />
}