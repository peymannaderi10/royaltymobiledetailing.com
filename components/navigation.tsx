"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl font-bold text-primary font-[family-name:var(--font-heading)] hover:text-accent transition-colors">
                Steve's Auto Interior & Sunroofs
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-[family-name:var(--font-body)] font-medium transition-colors ${
                    pathname === item.href
                      ? "text-accent border-b-2 border-accent pb-1"
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone className="w-4 h-4 mr-2" />
                (609) 880-1919
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 font-[family-name:var(--font-body)] transition-colors ${
                    pathname === item.href
                      ? "text-accent bg-accent/10 rounded-md"
                      : "text-muted-foreground hover:text-accent hover:bg-muted rounded-md"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    (609) 880-1919
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
