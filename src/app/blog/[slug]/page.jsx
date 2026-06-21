import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Clock, Calendar } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts"
import { mdxComponents } from "@/components/mdx"
import { JsonLd } from "@/components/seo/JsonLd"
import { recipeSchema, articleSchema, breadcrumbSchema } from "@/lib/schema"
import { PostCard } from "@/components/ui/PostCard"
import { formatDate } from "@/lib/utils"

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getAllPosts().find((p) => p.slug === slug)
  if (!post) return {}

  const { title, description, coverImage } = post.frontmatter
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title, description, images: coverImage ? [coverImage] : [] },
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }
  if (!post) notFound()

  const { frontmatter, content, readingTime } = post
  const related = getRelatedPosts(post, 3)

  return (
    <article className="py-10">
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={recipeSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: frontmatter.title, href: `/blog/${slug}` },
        ])}
      />

      <div className="container max-w-3xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="truncate text-foreground">{frontmatter.title}</span>
        </nav>

        {/* Title */}
        <header className="mt-6">
          {frontmatter.category && (
            <Link
              href={`/category/${frontmatter.category}`}
              className="text-sm font-semibold uppercase tracking-wide text-primary"
            >
              {frontmatter.category.replace("-", " ")}
            </Link>
          )}
          <h1 className="mt-2 font-serif text-3xl font-extrabold leading-tight md:text-4xl">
            {frontmatter.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {formatDate(frontmatter.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {readingTime}
            </span>
            <span>By {frontmatter.author}</span>
          </div>
        </header>

        {/* Cover */}
        {frontmatter.coverImage && (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg shadow-soft">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        {/* Body */}
        <div className="prose prose-lg mt-10 max-w-none dark:prose-invert prose-headings:font-serif prose-a:text-primary">
          <MDXRemote source={content} components={mdxComponents} options={mdxOptions} />
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="container mt-20">
          <h2 className="font-serif text-2xl font-bold">You might also like</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}