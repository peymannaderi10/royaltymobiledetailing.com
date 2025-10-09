import { Card, CardContent } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Royalty Mobile Detailing was founded by Ed with a vision to bring professional-grade mobile detailing 
                services to the Philadelphia Tri-State Area. As a new local business, we're passionate about transforming 
                vehicles and building lasting relationships with our community through exceptional detailing services.
              </p>
              <p>
                Ed brings years of automotive detailing expertise and a commitment to perfection that sets us apart. 
                We understand that as a new business, we need to prove ourselves with every detail job. That's why we 
                go above and beyond to ensure every vehicle leaves looking showroom-ready.
              </p>
              <p>
                We're building our reputation one detail at a time, focusing on mobile convenience, competitive pricing, 
                and results that speak for themselves. From basic washes to showroom-quality details, every service 
                matters to us, and we're excited to show you what makes Royalty Mobile Detailing different.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide exceptional mobile detailing services that transform vehicles and exceed expectations, 
                  building trust and loyalty in our community through consistent quality and outstanding customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Promise</h3>
                <p className="text-muted-foreground">
                  As a new detailing business, we're committed to proving ourselves with every detail job. Your vehicle's 
                  transformation is our top priority, and we stand behind our work with a complete satisfaction guarantee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
