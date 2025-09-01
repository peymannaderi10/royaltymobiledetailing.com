"use client"

import CardNav from './CardNav'

export function Navigation() {
  const items = [
         {
       label: "Services",
       bgColor: "#dc2626",
       textColor: "#fff",
      links: [
        { label: "Auto Interiors", href: "/services", ariaLabel: "Auto Interior Services" },
        { label: "Sunroofs", href: "/services", ariaLabel: "Sunroof Repair Services" },
        { label: "Convertible Tops", href: "/services", ariaLabel: "Convertible Top Services" },
        { label: "Maintenance", href: "/services", ariaLabel: "Auto Maintenance Services" }
      ]
    },
         {
       label: "About", 
       bgColor: "#0D0716",
       textColor: "#fff",
       links: [
         { label: "Our Story", href: "/about", ariaLabel: "About Our Company" },
         { label: "Gallery", href: "/gallery", ariaLabel: "Work Gallery" },
         { label: "Blog", href: "/blog", ariaLabel: "Our Blog" },
         { label: "Reviews", href: "/reviews", ariaLabel: "Customer Reviews" }
       ]
     },
         {
       label: "Contact",
       bgColor: "#991b1b", 
       textColor: "#fff",
      links: [
        { label: "Get Quote", href: "/contact", ariaLabel: "Get a Quote" },
        { label: "Location", href: "/contact", ariaLabel: "Our Location" },
        { label: "Call Us", href: "tel:6098801919", ariaLabel: "Call Steve's Auto" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/Steve'sLogo.png"
      logoAlt="Steve's Auto Interior Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#e11d48"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
