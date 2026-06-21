import Image from "next/image"

export function ArticleCover({ frontmatter }) {
  if (!frontmatter.coverImage) return null

  return (
    <div className="container max-w-4xl pt-8">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border shadow-soft">
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          quality={90}
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}