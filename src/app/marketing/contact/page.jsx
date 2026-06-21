import { PageShell } from "@/components/layout/PageShell"
import { siteConfig } from "@/lib/site.config"

export const metadata = { title: "Contact", description: `Get in touch with ${siteConfig.name}.` }

export default function ContactPage() {
  return (
    <PageShell title="Contact" subtitle="We would love to hear from you.">
      <p>
        For questions, recipe requests, or partnership inquiries, email us at{" "}
        <a href="mailto:hello@japanesesauceguide.com">hello@japanesesauceguide.com</a>.
      </p>
      <p>
        You can also find us on{" "}
        <a href={siteConfig.social.instagram}>Instagram</a> and{" "}
        <a href={siteConfig.social.pinterest}>Pinterest</a>.
      </p>
    </PageShell>
  )
}