import { Card } from "@/components/ui/card"

export function GalleryGrid() {
  const projects = [
    {
      title: "BMW Convertible Top Replacement",
      category: "Convertible Tops",
      description: "Complete canvas top replacement with new hydraulic components",
      image: "/bmw-convertible-with-new-black-canvas-top.png",
    },
    {
      title: "Mercedes Sunroof Leak Repair",
      category: "Sunroof Services",
      description: "Fixed persistent leak and replaced drainage system",
      image: "/mercedes-sunroof-repair-before-and-after.png",
    },
    {
      title: "Custom Leather Interior",
      category: "Interior Restoration",
      description: "Full seat reupholstery in premium leather with custom stitching",
      image: "/luxury-car-interior-with-custom-leather-seats.png",
    },
    {
      title: "Audi Headliner Replacement",
      category: "Headliner Services",
      description: "Sagging headliner replaced with OEM-matching fabric",
      image: "/audi-headliner-replacement-professional-work.png",
    },
    {
      title: "Porsche Dashboard Restoration",
      category: "Interior Restoration",
      description: "Cracked dashboard repaired and refinished to original condition",
      image: "/porsche-dashboard-restoration-leather-repair.png",
    },
    {
      title: "Jeep Soft Top Installation",
      category: "Convertible Tops",
      description: "New soft top installation with improved weather sealing",
      image: "/jeep-wrangler-soft-top-installation-black-canvas.png",
    },
    {
      title: "BMW Sunroof Motor Replacement",
      category: "Sunroof Services",
      description: "Replaced faulty sunroof motor and recalibrated system",
      image: "/bmw-sunroof-motor-replacement-repair-work.png",
    },
    {
      title: "Custom Seat Covers",
      category: "Interior Restoration",
      description: "Waterproof seat covers with custom embroidery for work truck",
      image: "/custom-truck-seat-covers-waterproof-embroidery.png",
    },
    {
      title: "Mustang Convertible Restoration",
      category: "Convertible Tops",
      description: "Classic Mustang convertible top and interior restoration",
      image: "/classic-mustang-convertible-top-restoration-vintag.png",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our portfolio of completed work showcasing quality craftsmanship and attention to detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-accent mb-2 uppercase tracking-wide">{project.category}</div>
                <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
