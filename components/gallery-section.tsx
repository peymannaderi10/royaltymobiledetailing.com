import { Card } from "@/components/ui/card"

const galleryItems = [
  {
    title: "Honda Interior Work",
    before: "/before1-honda.png",
    after: "/after1-honda.png",
    description: "Honda interior cleaning and restoration services",
  },
  {
    title: "Honda Second Project",
    before: "/before2-honda.png",
    after: "/after2-honda.png",
    description: "Comprehensive Honda detailing and protection",
  },
  {
    title: "Subaru Interior Restoration",
    before: "/before1-subaru.png",
    after: "/after1-subaru.png",
    description: "Subaru interior deep cleaning and restoration",
  },
  {
    title: "Van Interior Work",
    before: "/before1-van.png",
    after: "/after1-van.png",
    description: "Commercial van interior detailing and cleaning",
  },
  {
    title: "Van Second Project",
    before: "/before2-van.png",
    after: "/after2-van.png",
    description: "Professional van interior restoration services",
  },
  {
    title: "Audi Second Project",
    before: "/before2-audi.png",
    after: "/after2-audi.png",
    description: "Professional Audi detailing and restoration work",
  },
]

export function GallerySection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-[family-name:var(--font-body)]">
            See the transformation from our expert craftsmanship. Before and after examples of our convertible top
            replacements, sunroof repairs, and interior restorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border/50 hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2 font-[family-name:var(--font-body)]">
                      BEFORE
                    </p>
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt={`${item.title} before`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent mb-2 font-[family-name:var(--font-body)]">AFTER</p>
                    <img
                      src={item.after || "/placeholder.svg"}
                      alt={`${item.title} after`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-[family-name:var(--font-body)]">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
