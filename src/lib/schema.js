import { siteConfig } from "@/lib/site.config"

function abs(path) {
  return `${siteConfig.url}${path || ""}`
}

export function recipeSchema(post) {
  const r = post.frontmatter.recipe
  if (!r) return null
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: post.frontmatter.title,
    image: post.frontmatter.coverImage ? [abs(post.frontmatter.coverImage)] : [],
    author: { "@type": "Person", name: post.frontmatter.author },
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updated || post.frontmatter.date,
    description: post.frontmatter.description,
    prepTime: r.prepTime,
    cookTime: r.cookTime,
    totalTime: r.totalTime,
    recipeYield: r.yield,
    recipeIngredient: r.ingredients || [],
    recipeInstructions: (r.instructions || []).map((step) => ({
      "@type": "HowToStep",
      text: step,
    })),
    nutrition: r.calories
      ? { "@type": "NutritionInformation", calories: `${r.calories} calories` }
      : undefined,
  }
}

export function articleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: post.frontmatter.coverImage ? [abs(post.frontmatter.coverImage)] : [],
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updated || post.frontmatter.date,
    author: { "@type": "Person", name: post.frontmatter.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: abs("/og/logo.png") },
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.href),
    })),
  }
}