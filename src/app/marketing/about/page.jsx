import { PageShell } from "@/components/layout/PageShell"
import { siteConfig } from "@/lib/site.config"

export const metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} and our approach to authentic Japanese sauce recipes.`,
}

export default function AboutPage() {
  return (
    <PageShell title="About" subtitle={`The story behind ${siteConfig.name}.`}>
      <p>
        {siteConfig.name} is a resource dedicated to authentic, tested Japanese sauces and
        condiments — from eel sauce and teriyaki to dipping and noodle sauces. Every recipe is
        kitchen-tested and written to be genuinely useful, not padded.
      </p>
      <h2>Our promise</h2>
      <ul>
        <li>Accurate ratios and real cook times</li>
        <li>Clear storage and substitution guidance</li>
        <li>No filler — just what you need to cook with confidence</li>
      </ul>
      <p>Questions or corrections? Reach us on the <a href="/contact">contact page</a>.</p>
    </PageShell>
  )
}