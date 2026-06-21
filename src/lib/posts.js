import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const POSTS_DIR = path.join(process.cwd(), "src/content/posts")

export function getPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"))
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = path.join(POSTS_DIR, `${realSlug}.mdx`)
  const file = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(file)
  return {
    slug: realSlug,
    content,
    readingTime: readingTime(content).text,
    frontmatter: { ...data, slug: realSlug },
  }
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}

export function getFeaturedPosts(limit = 3) {
  const featured = getAllPosts().filter((p) => p.frontmatter.featured)
  return (featured.length ? featured : getAllPosts()).slice(0, limit)
}

export function getPostsByCategory(category) {
  return getAllPosts().filter((p) => p.frontmatter.category === category)
}

// Internal-linking engine: score by shared tags + same category.
export function getRelatedPosts(current, limit = 3) {
  const currentTags = current.frontmatter.tags || []
  return getAllPosts()
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      const sharedTags = (p.frontmatter.tags || []).filter((t) =>
        currentTags.includes(t)
      ).length
      const sameCategory =
        p.frontmatter.category === current.frontmatter.category ? 2 : 0
      return { post: p, score: sharedTags + sameCategory }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post)
}

// ─── Tags ────────────────────────────────────────────────

// Turn a tag like "Eel Sauce" into a URL slug like "eel-sauce"
function slugifyTag(tag) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

// Every unique tag across all posts, with its slug + usage count
export function getAllTags() {
  const map = new Map()
  for (const post of getAllPosts()) {
    for (const tag of post.frontmatter.tags || []) {
      const slug = slugifyTag(tag)
      if (!map.has(slug)) map.set(slug, { tag, slug, count: 0 })
      map.get(slug).count += 1
    }
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count)
}

// All posts carrying a given tag (matched by slug)
export function getPostsByTag(tagSlug) {
  return getAllPosts().filter((post) =>
    (post.frontmatter.tags || []).some((t) => slugifyTag(t) === tagSlug)
  )
}