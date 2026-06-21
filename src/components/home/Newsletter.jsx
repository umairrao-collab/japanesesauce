"use client"

import { useState } from "react"
import { Mail, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    // TODO: connect to Mailchimp / ConvertKit / Buttondown API here
    setSubmitted(true)
  }

  return (
    <section className="container pb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-orange-500 to-rose-500 px-6 py-14 text-center text-white shadow-2xl">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />

        <Mail className="mx-auto h-10 w-10" />
        <h2 className="mt-4 font-serif text-3xl font-extrabold md:text-4xl">Never miss a recipe</h2>
        <p className="mx-auto mt-3 max-w-md text-white/90">
          Get new Japanese sauce recipes and cooking tips straight to your inbox.
        </p>

        {submitted ? (
          <p className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-3 font-semibold backdrop-blur">
            <Check className="h-5 w-5" /> Thanks! Check your inbox to confirm.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full px-5 py-3 text-foreground outline-none ring-2 ring-transparent focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3 font-semibold text-background transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}