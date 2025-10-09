import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">
            Meet Ed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The founder with years of automotive expertise and a passion for perfect vehicle transformations
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg mx-auto w-full max-w-sm md:max-w-md h-96 md:h-[35rem] hover:scale-105 transition-all duration-300">
              <img 
                src="/luxury-car-interior-with-sunroof-open-showing-craf.png" 
                alt="Ed - Owner & Founder" 
                className="object-cover w-full h-full rounded-lg shadow-xl" 
                width="600" 
                height="600" 
                loading="lazy"
              />
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-lg transition-all duration-300">
              <p className="text-primary font-medium mb-4">Owner & Founder - Mobile Detailing Expert</p>
              <p className="text-muted-foreground mb-3 text-sm md:text-base">
                Ed's automotive journey began with a passion for perfection and a vision to bring professional-grade 
                mobile detailing services to the Philadelphia Tri-State Area. After years of automotive expertise, 
                Ed knew he'd found his calling in transforming vehicles.
              </p>
              <p className="text-muted-foreground mb-3 text-sm md:text-base">
                Founded in 2024, Royalty Mobile Detailing was born from Ed's commitment to quality and convenience. 
                As a new local business, we're building our reputation one satisfied customer at a time, bringing 
                showroom-quality results directly to your location.
              </p>
              <p className="text-muted-foreground mb-3 text-sm md:text-base">
                Specializing in mobile detailing - from basic washes to complete transformations - Ed takes pride 
                in creating showroom-ready results using premium products and proven techniques. Every vehicle 
                receives his personal attention and expertise.
              </p>
              <p className="text-muted-foreground text-sm md:text-base">
                Known for his attention to detail, friendly service, and commitment to excellence, Ed operates 
                with flexible scheduling to ensure each client gets dedicated attention and complete satisfaction 
                with every detail job.
              </p>
              
              <div className="mt-6">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Ed Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
