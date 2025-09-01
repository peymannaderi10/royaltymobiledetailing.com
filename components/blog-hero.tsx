import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function BlogHero() {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
          Auto Care Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Expert tips, maintenance advice, and insights from over 20 years of auto interior and sunroof experience
        </p>

        <div className="max-w-md mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Search</Button>
        </div>
      </div>
    </section>
  )
}
