import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SectionHeading({ title, subtitle, viewAllHref, align = "left" }) {
  const centered = align === "center"
  return (
    <div
      className={`mb-10 ${
        centered
          ? "text-center"
          : "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div>
        <h2 className="font-serif text-3xl font-extrabold md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </div>
      {viewAllHref && !centered && (
        <Link
          href={viewAllHref}
          className="hidden items-center gap-1 text-sm font-semibold text-primary hover:gap-2 sm:inline-flex"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}