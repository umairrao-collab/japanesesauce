import { PageShell } from "@/components/layout/PageShell"

export const metadata = { title: "Terms of Use" }

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" subtitle="Last updated: June 2026">
      <p>
        By using this site you agree that all content is provided for informational purposes only.
        Recipes are shared in good faith; always use your own judgment regarding food safety and
        allergies.
      </p>
      <h2>Affiliate disclosure</h2>
      <p>
        Some links may be affiliate links. We may earn a commission at no extra cost to you. This
        never affects which products we recommend.
      </p>
    </PageShell>
  )
}