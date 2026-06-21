export function PageShell({ title, subtitle, children }) {
  return (
    <div className="container max-w-3xl py-14">
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-extrabold">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
      </header>
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-serif prose-a:text-primary">
        {children}
      </div>
    </div>
  )
}