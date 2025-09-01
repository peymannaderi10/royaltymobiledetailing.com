import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { LocationMap } from "@/components/location-map"
import { ContactFAQ } from "@/components/contact-faq"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            <LocationMap />
            <ContactInfo />
          </div>
        </div>
      </section>
      <ContactFAQ />
      <Footer />
    </main>
  )
}
