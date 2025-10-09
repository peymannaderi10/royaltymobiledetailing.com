import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { LocationMap } from "@/components/location-map"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <section className="py-4 md:py-8 pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 min-h-[400px] lg:min-h-[600px]">
            <div className="flex flex-col order-2 lg:order-1">
              <div className="text-center mb-4 px-4">
                <h2 className="text-xl md:text-2xl font-bold text-primary pt-8 mb-2 font-[family-name:var(--font-heading)]">
                  Our Service Area
                </h2>
              </div>
              <div className="flex-1">
                <LocationMap />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
