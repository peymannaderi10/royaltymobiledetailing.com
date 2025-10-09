import { Phone, MapPin, Clock, Mail } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="h-full bg-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4 font-[family-name:var(--font-heading)]">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Ready to transform your vehicle? Contact us today for a free consultation and custom quote.
          </p>
        </div>

        <div className="space-y-4 md:space-y-8">
          {/* Phone */}
          <div className="flex items-center gap-4 md:gap-6 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">Call or Text</h3>
              <a href="tel:2675041533" className="text-xl md:text-2xl font-bold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">
                (267) 504-1533
              </a>
              <p className="text-sm md:text-base text-muted-foreground">Available for immediate assistance</p>
            </div>
          </div>

          {/* Service Area */}
          <div className="flex items-center gap-4 md:gap-6 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">Service Area</h3>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-1">Philadelphia Tri-State Area</p>
              <p className="text-sm md:text-base text-muted-foreground">Mobile service throughout the region</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4 md:gap-6 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">Hours</h3>
              <p className="text-xl md:text-2xl font-bold text-foreground mb-1">6AM - 10PM</p>
              <p className="text-sm md:text-base text-muted-foreground">By appointment • 6 days a week</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 md:gap-6 bg-gray-50 md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-1">Email</h3>
              <a href="mailto:info@royaltymobiledetailing.com" className="text-lg md:text-2xl font-bold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer break-all">
                info@royaltymobiledetailing.com
              </a>
              <p className="text-sm md:text-base text-muted-foreground">We'll respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
