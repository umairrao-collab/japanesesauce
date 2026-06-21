"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"

export function SearchDialog({ open, onClose, posts = [] }) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose()
    }
    if (open) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return posts
      .filter((p) => `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(q))
      .slice(0, 8)
  }, [query, posts])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 p-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b px-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recipes..."
            className="w-full bg-transparent py-4 outline-none"
          />
          <button onClick={onClose} aria-label="Close" className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {query && results.length === 0 && (
            <p className="px-4 py-6 text-center text-sm text-muted-foreground">
              No recipes found for “{query}”.
            </p>
          )}
          {results.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              onClick={onClose}
              className="block border-b px-4 py-3 transition last:border-0 hover:bg-muted"
            >
              <p className="font-semibold">{p.title}</p>
              <p className="line-clamp-1 text-sm text-muted-foreground">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}