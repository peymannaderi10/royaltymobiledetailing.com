"use client"

import CardNav from './CardNav'

export function Navigation() {
  const items = [
         {
       label: "Services",
       bgColor: "#0B3D91",
       textColor: "#FAFAFA",
      links: [
        { label: "Full Detail", href: "/services", ariaLabel: "Full Auto Detailing Services" },
        { label: "Interior", href: "/services", ariaLabel: "Interior Detailing Services" },
        { label: "Exterior", href: "/services", ariaLabel: "Exterior Detailing Services" },
        { label: "Ceramic Coating", href: "/services", ariaLabel: "Ceramic Coating Services" }
      ]
    },
         {
       label: "About",
       bgColor: "#D4AF37",
       textColor: "#1C1C1C",
       links: [
         { label: "Our Story", href: "/about", ariaLabel: "About Our Company" },
         { label: "Gallery", href: "/gallery", ariaLabel: "Work Gallery" },
         { label: "Blog", href: "/blog", ariaLabel: "Our Blog" },
         { label: "Reviews", href: "/reviews", ariaLabel: "Customer Reviews" }
       ]
     },
         {
       label: "Contact",
       bgColor: "#1C1C1C",
       textColor: "#FAFAFA",
      links: [
        { label: "Get Quote", href: "/contact", ariaLabel: "Get a Quote" },
        { label: "Location", href: "/contact", ariaLabel: "Our Location" },
        { label: "Call Us", href: "tel:2675041533", ariaLabel: "Call Royalty Mobile Detailing" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/Steve'sLogo.png"
      logoAlt="Royalty Mobile Detailing Logo"
      items={items}
      baseColor="#FAFAFA"
      menuColor="#1C1C1C"
      buttonBgColor="#0B3D91"
      buttonTextColor="#FAFAFA"
      ease="power3.out"
    />
  );
}
