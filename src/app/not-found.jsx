import Link from "next/link"
import { ChefHat } from "lucide-react"

export const metadata = {
  title: "Page Not Found",
}

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <ChefHat className="h-14 w-14 text-primary" />
      <h1 className="mt-6 font-serif text-5xl font-extrabold">404</h1>
      <h2 className="mt-2 text-xl font-semibold">This recipe wandered off</h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you’re looking for doesn’t exist or may have moved. Let’s get you back to the good stuff.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Back to home
        </Link>
        <Link
          href="/blog"
          className="rounded-lg border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
        >
          Browse all recipes
        </Link>
      </div>
    </div>
  )
}