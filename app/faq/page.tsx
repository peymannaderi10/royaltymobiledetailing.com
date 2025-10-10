import { Navigation } from "@/components/navigation"
import ServicesFAQ from "@/components/services-faq"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* FAQ Hero Section */}
      <section className="relative pt-36 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-[family-name:var(--font-heading)]">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get answers to common questions about our mobile detailing services. 
            Can't find what you're looking for? Contact us directly!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2675041533">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold">
                <Phone className="w-6 h-6 mr-2" />
                Call (267) 504-1533
              </Button>
            </a>
            <a href="sms:2675041533">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-6 text-lg font-semibold"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Text Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ServicesFAQ />
      <Footer />
    </main>
  )
}
