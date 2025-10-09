"use client"

import CardNav from './CardNav'

export function Navigation() {
  const items = [
    {
      label: "Services",
      bgColor: "#0B3D91",
      textColor: "#FAFAFA",
     links: [
        { label: "All Services", href: "/services", ariaLabel: "All Detailing Services" },
        { label: "Our Work", href: "/gallery", ariaLabel: "Our Work Gallery" },
        { label: "FAQ", href: "/faq", ariaLabel: "Frequently Asked Questions" }
      ]
    },
         {
       label: "About",
       bgColor: "#D4AF37",
       textColor: "#1C1C1C",
       links: [
         { label: "Our Story", href: "/about", ariaLabel: "About Our Company" },
         { label: "Blog", href: "/blog", ariaLabel: "Our Blog" },
         { label: "Reviews", href: "/reviews", ariaLabel: "Customer Reviews" }
       ]
     },
         {
       label: "Contact",
       bgColor: "#1C1C1C",
       textColor: "#FAFAFA",
      links: [
        { label: "Get Custom Quote", href: "/contact", ariaLabel: "Get a Custom Quote" },
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
