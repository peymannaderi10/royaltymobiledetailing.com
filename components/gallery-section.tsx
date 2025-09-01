import { Card } from "@/components/ui/card"

const galleryItems = [
  {
    title: "Convertible Top Replacement",
    before: "/worn-damaged-convertible-top-before-repair.png",
    after: "/new-convertible-top-after-professional-replacement.png",
    description: "Complete convertible top replacement with OEM materials",
  },
  {
    title: "Sunroof Leak Repair",
    before: "/water-damaged-car-interior-from-sunroof-leak.png",
    after: "/clean-dry-car-interior-after-sunroof-repair.png",
    description: "Complex sunroof leak diagnosis and permanent repair",
  },
  {
    title: "Mercedes Seat Restoration",
    before: "/worn-torn-mercedes-car-seat-before-restoration.png",
    after: "/restored-mercedes-car-seat-like-new-condition.png",
    description: "Professional leather seat restoration to factory condition",
  },
  {
    title: "Custom Interior Work",
    before: "/basic-car-interior-before-custom-upgrade.png",
    after: "/luxury-custom-car-interior-after-professional-work.png",
    description: "Custom interior design and installation",
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
