import { Phone, MapPin, Clock, Star } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Steve's Auto Interior & Sunroofs
            </h3>
            <p className="text-primary-foreground/80 mb-4 font-[family-name:var(--font-body)]">
              Expert automotive interior restoration and sunroof services in Beverly/Edgewater Park, NJ since 2003.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-[family-name:var(--font-body)]">4.8 stars • 148 reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-[family-name:var(--font-body)]">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Convertible Tops
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Sunroof/Moonroof Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Headliner Replacement
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Interior Restoration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Custom Seat Covers
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="font-[family-name:var(--font-body)]">(609) 880-1919</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <div className="font-[family-name:var(--font-body)]">
                  <p>4375 US-130 # D</p>
                  <p>Beverly/Edgewater Park, NJ 08010</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">Hours</h4>
            <div className="space-y-2 text-primary-foreground/80 font-[family-name:var(--font-body)]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p>Mon-Fri: 8:30 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 3:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 font-[family-name:var(--font-body)]">
            © 2024 Steve's Auto Interior & Sunroofs. All rights reserved. |
            <span className="text-accent"> Auto Upholstery NJ • Sunroof Repair NJ • Convertible Top Replacement</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
