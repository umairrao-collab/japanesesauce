"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/lib/site.config"

export function AdUnit({ slot, format = "auto", className = "" }) {
  const pathname = usePathname()

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      // AdSense not loaded yet — ignore in dev
    }
  }, [pathname])

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      style={ { display: "block" } }
      data-ad-client={siteConfig.adsenseClient}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  )
}