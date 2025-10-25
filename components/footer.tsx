import { Phone, MapPin, Clock, Star, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              Royalty Mobile Detailing
            </h3>
            <p className="text-primary-foreground/80 mb-4 font-[family-name:var(--font-body)]">
              Professional mobile auto detailing services in the Philadelphia Tri-State Area. Founded in 2024, we bring showroom-quality results directly to your location.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-[family-name:var(--font-body)]">4.8 stars</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-[family-name:var(--font-body)]">
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Deluxe Detail
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Showroom Ready Package
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Ultimate Basic
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Interior Detailing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Exterior Detailing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Mobile Services
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
                <span className="font-[family-name:var(--font-body)]">(267) 504-1533</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@royaltymobiledetailing.com" className="font-[family-name:var(--font-body)] hover:text-accent transition-colors">
                  info@royaltymobiledetailing.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <div className="font-[family-name:var(--font-body)]">
                  <p>Philadelphia Tri-State Area</p>
                  <p>Mobile Service Available</p>
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
                  <p>Mon-Sat: 6:00 AM - 10:00 PM</p>
                  <p>By Appointment</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 font-[family-name:var(--font-body)]">
            © 2024 Royalty Mobile Detailing. All rights reserved. |
            <span className="text-accent"> Mobile Auto Detailing • Philadelphia Tri-State Area • Professional Detailing Services</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
