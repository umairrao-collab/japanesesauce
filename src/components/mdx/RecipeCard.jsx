import Image from "next/image"
import { Clock, Users, UtensilsCrossed } from "lucide-react"

export function RecipeCard({
  title,
  image,
  imageAlt,
  prepTime,
  cookTime,
  yield: servings,
  ingredients = [],
  instructions = [],
}) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border bg-card shadow-soft">
      {/* Optional banner image with title overlay */}
      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <h3 className="absolute inset-x-6 bottom-4 font-serif text-2xl font-bold text-white drop-shadow-md">
            {title}
          </h3>
        </div>
      )}

      {/* Meta bar (shows the title here only when there's no banner image) */}
      <div className="border-b bg-accent px-6 py-4">
        {!image && <h3 className="font-serif text-xl font-bold">{title}</h3>}
        <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${image ? "" : "mt-2"}`}>
          {prepTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> Prep: {prepTime}
            </span>
          )}
          {cookTime && (
            <span className="flex items-center gap-1">
              <UtensilsCrossed className="h-4 w-4" /> Cook: {cookTime}
            </span>
          )}
          {servings && (
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" /> {servings}
            </span>
          )}
        </div>
      </div>

      {/* Ingredients + instructions */}
      <div className="grid gap-6 p-6 md:grid-cols-2">
        <div>
          <h4 className="font-semibold">Ingredients</h4>
          <ul className="mt-3 space-y-1.5 text-sm">
            {ingredients.map((ing, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary">•</span> {ing}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Instructions</h4>
          <ol className="mt-3 space-y-3 text-sm">
            {instructions.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}