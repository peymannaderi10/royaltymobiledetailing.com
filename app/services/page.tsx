import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import DetailingPackages from "@/components/detailing-packages"
import IndividualServices from "@/components/individual-services"
import PremiumServices from "@/components/premium-services"
import { ServiceProcess } from "@/components/service-process"
import { Footer } from "@/components/footer"
import { AccentDotSplitter, LineSplitter } from "@/components/section-splitters"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <DetailingPackages />
      <AccentDotSplitter />
      <PremiumServices />
      <LineSplitter />
      <IndividualServices />
      <AccentDotSplitter />
      <ServiceProcess />
      <Footer />
    </main>
  )
}
