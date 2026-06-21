import { PageShell } from "@/components/layout/PageShell"
import { siteConfig } from "@/lib/site.config"

export const metadata = { title: "Privacy Policy" }

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" subtitle="Last updated: June 2026">
      <p>
        {siteConfig.name} respects your privacy. This page explains what data we collect and how
        it is used.
      </p>
      <h2>Cookies & advertising</h2>
      <p>
        We use Google AdSense to serve ads. Third-party vendors, including Google, use cookies to
        serve ads based on your prior visits to this and other websites. You may opt out of
        personalized advertising by visiting{" "}
        <a href="https://www.google.com/settings/ads">Google Ads Settings</a>.
      </p>
      <h2>Analytics</h2>
      <p>
        We may use privacy-friendly analytics to understand aggregate traffic. No personally
        identifying information is sold.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:hello@japanesesauceguide.com">hello@japanesesauceguide.com</a>.
      </p>
    </PageShell>
  )
}