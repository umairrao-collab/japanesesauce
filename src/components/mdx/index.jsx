import Image from "next/image"
import Link from "next/link"
import { RecipeCard } from "./RecipeCard"
import { Callout } from "./Callout"
import { FAQ } from "./FAQ"
import { AffiliateBox } from "./AffiliateBox"

export const mdxComponents = {
  RecipeCard,
  Callout,
  FAQ,
  AffiliateBox,
  img: (props) => (
    <Image
      {...props}
      width={768}
      height={432}
      className="rounded-lg"
      alt={props.alt || ""}
    />
  ),
  a: ({ href = "", ...props }) => {
    const internal = href.startsWith("/")
    if (internal) return <Link href={href} {...props} />
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
  },
}