import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function RecentWork() {
  const projects = [
    {
      title: "BMW Convertible Top Replacement",
      description: "Complete canvas top replacement with hydraulic system repair",
      image: "/bmw-convertible-with-new-black-canvas-top.png",
    },
    {
      title: "Mercedes Sunroof Restoration",
      description: "Fixed persistent leak and replaced motor mechanism",
      image: "/mercedes-sunroof-repair-before-and-after.png",
    },
    {
      title: "Custom Leather Interior",
      description: "Full seat reupholstery in premium leather with custom stitching",
      image: "/luxury-car-interior-with-custom-leather-seats.png",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the quality craftsmanship and attention to detail in our recent work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
