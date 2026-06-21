import { ImageResponse } from "next/og"

export const runtime = "edge"

export function GET(request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title") || "Japanese Sauce Guide"

  return new ImageResponse(
    (
      <div
        style={ {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)",
          padding: "80px",
          fontFamily: "serif",
        } }
      >
        <div style={ { display: "flex", alignItems: "center", gap: "16px", fontSize: 32, fontWeight: 700, color: "#9a3412" } }>
          🍣 Japanese Sauce Guide
        </div>
        <div style={ { fontSize: 64, fontWeight: 800, color: "#1c1917", lineHeight: 1.1 } }>
          {title}
        </div>
        <div style={ { fontSize: 28, color: "#78716c" } }>
          japanesesauceguide.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}