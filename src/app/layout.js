import { Inter, Lora } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { siteConfig } from "@/lib/site.config"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getAllPosts } from "@/lib/posts"

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const serif = Lora({ subsets: ["latin"], variable: "--font-serif" })

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: { card: "summary_large_image" },
}

export default function RootLayout({ children }) {

      const searchIndex = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description || "",
    category: p.frontmatter.category || "",
  }))
 const adsenseSrc =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
  siteConfig.adsenseClient
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Header searchIndex={searchIndex} />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Script
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={adsenseSrc}
        />
      </body>
    </html>
  )
}