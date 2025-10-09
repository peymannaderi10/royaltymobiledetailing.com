import { Sparkles, Shield, Heart } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Sparkles,
      title: "Showroom Quality Results",
      description: "Every detail job meets showroom standards using premium products and proven techniques for complete vehicle transformations."
    },
    {
      icon: Shield,
      title: "Mobile Convenience",
      description: "We come to you with professional-grade equipment and expertise, saving you time and hassle at your location."
    },
    {
      icon: Heart,
      title: "Building Trust",
      description: "As a new business, we're committed to proving ourselves with every job and stand behind our work with a satisfaction guarantee."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Why Choose Royalty Mobile Detailing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three core principles that set us apart in the mobile detailing industry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
