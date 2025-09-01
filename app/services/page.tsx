import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServiceProcess } from "@/components/service-process"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <Footer />
    </main>
  )
}
