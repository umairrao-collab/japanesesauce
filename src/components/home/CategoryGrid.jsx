import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"

const categoryGradients = [
  "from-orange-400 to-red-500",
  "from-amber-400 to-orange-600",
  "from-rose-400 to-pink-600",
  "from-lime-400 to-emerald-600",
]

export function CategoryGrid({ categories = [] }) {
  if (!categories.length) return null

  return (
    <section className="container py-16">
      <SectionHeading
        title="Explore by sauce"
        subtitle="Find your next favorite by category."
        align="center"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${
              categoryGradients[i % categoryGradients.length]
            } p-6 text-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-xl`}
          >
            <div className="text-4xl">{c.emoji || "🍶"}</div>
            <h3 className="mt-4 font-serif text-xl font-bold">{c.title || c.slug}</h3>
            <p className="mt-1 text-sm text-white/80">
              {c.count} recipe{c.count === 1 ? "" : "s"}
            </p>
            <ArrowRight className="mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          </Link>
        ))}
      </div>
    </section>
  )
}