import { Card, CardContent } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2003, Royalty Mobile Detailing began as a small, family-owned business with a simple
                mission: to provide exceptional auto interior services with unmatched attention to detail and customer
                care.
              </p>
              <p>
                What started as a passion for automotive craftsmanship has grown into New Jersey's trusted destination
                for premium mobile detailing, ceramic coating, and complete paint correction services. Our small but expert
                team takes pride in solving complex problems that other shops can't handle.
              </p>
              <p>
                Located in the heart of Beverly/Edgewater Park, we've built lasting relationships with our community by
                consistently delivering quality work, fair pricing, and honest service. Every vehicle that leaves our
                shop represents our commitment to excellence.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To restore and enhance vehicle appearance with expert craftsmanship, using quality materials and proven
                  techniques that stand the test of time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Promise</h3>
                <p className="text-muted-foreground">
                  Every job is backed by our satisfaction guarantee. We don't consider a project complete until you're
                  completely happy with the results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
