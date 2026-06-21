import { JsonLd } from "@/components/seo/JsonLd"

export function FAQ({ items = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  }
  return (
    <div className="not-prose my-8">
      <JsonLd data={schema} />
      <h2 className="font-serif text-2xl font-bold">Frequently asked questions</h2>
      <div className="mt-4 divide-y rounded-lg border">
        {items.map((q, i) => (
          <details key={i} className="group p-4">
            <summary className="cursor-pointer list-none font-semibold marker:hidden">
              {q.question}
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">{q.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}