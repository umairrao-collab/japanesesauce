import { ShieldCheck, UtensilsCrossed, Clock } from "lucide-react"

const features = [
  { icon: ShieldCheck, title: "Kitchen-tested", text: "Every recipe is made and re-made until the ratios are perfect." },
  { icon: UtensilsCrossed, title: "Authentic flavor", text: "Traditional techniques with clear, modern instructions." },
  { icon: Clock, title: "Quick & clear", text: "No life stories — just what you need to cook with confidence." },
]

export function ValueProps() {
  return (
    <section className="border-y bg-muted/40">
      <div className="container grid gap-8 py-14 sm:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}