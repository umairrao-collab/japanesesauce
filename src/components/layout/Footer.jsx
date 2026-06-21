import Link from "next/link"
import { ChefHat } from "lucide-react"
import { siteConfig } from "@/lib/site.config"

// Brand icons as inline SVG (Lucide removed Instagram/Pinterest)
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function PinterestIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.58 0-2.39-1.72-4.07-4.18-4.07-2.85 0-4.52 2.14-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.32-.25 1-.28 1.14-.04.18-.15.22-.35.13-1.3-.61-2.11-2.5-2.11-4.03 0-3.28 2.38-6.29 6.87-6.29 3.61 0 6.41 2.57 6.41 6.01 0 3.58-2.26 6.47-5.39 6.47-1.05 0-2.04-.55-2.38-1.2l-.65 2.46c-.23.91-.86 2.04-1.29 2.73.97.3 2 .46 3.07.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  const social = siteConfig.social || {}

  return (
    <footer className="mt-20 border-t bg-card">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold">
              <ChefHat className="h-6 w-6 text-primary" />
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {siteConfig.description ||
                "Authentic, tested Japanese sauce and condiment recipes."}
            </p>
            <div className="mt-4 flex gap-3">
              {social.instagram && (
                <a href={social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                  className="rounded-full border p-2 text-muted-foreground hover:border-primary hover:text-primary">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              )}
              {social.pinterest && (
                <a href={social.pinterest} aria-label="Pinterest" target="_blank" rel="noopener noreferrer"
                  className="rounded-full border p-2 text-muted-foreground hover:border-primary hover:text-primary">
                  <PinterestIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(siteConfig.categories || []).map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}`} className="hover:text-primary">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">Site</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary">All Recipes</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}