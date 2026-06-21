import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { mdxComponents } from "@/components/mdx/MdxComponents"

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
  },
}

export function ArticleBody({ content }) {
  return (
    <div className="container max-w-3xl py-12">
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-a:text-primary prose-img:rounded-xl">
        <MDXRemote source={content} components={mdxComponents} options={mdxOptions} />
      </div>

      <div className="mt-12 border-t pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all recipes
        </Link>
      </div>
    </div>
  )
}