export function SchemaOrg() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Steve's Auto Interior & Sunroofs",
    "description": "Expert auto interior restoration, convertible top replacement, and sunroof repair in Beverly, New Jersey",
    "url": "https://stevesautointerior.com",
    "logo": "https://stevesautointerior.com/Steve'sLogo.png",
    "image": [
      "https://stevesautointerior.com/luxury-car-interior-restoration-leather-seats-dash.png",
      "https://stevesautointerior.com/convertible-car-top-replacement-professional-insta.png",
      "https://stevesautointerior.com/sunroof-repair-professional-mechanic-working-on-ca.png"
    ],
    "telephone": "+1-856-461-3335",
    "email": "info@stevesautointerior.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beverly/Edgewater Park Area",
      "addressLocality": "Beverly",
      "addressRegion": "NJ",
      "postalCode": "08010",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.0642",
      "longitude": "-74.9207"
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-15:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "State",
      "name": "New Jersey"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.0642",
        "longitude": "-74.9207"
      },
      "geoRadius": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Auto Interior Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Auto Upholstery & Interior Restoration",
            "description": "Complete interior restoration including seat repair, dashboard restoration, and custom upholstery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Convertible Top Replacement",
            "description": "Professional convertible top installation and replacement for all vehicle makes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sunroof Repair & Installation",
            "description": "Sunroof leak repair, motor replacement, and new sunroof installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automotive Maintenance",
            "description": "General automotive maintenance including oil changes and brake service"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John Smith"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent work on my BMW convertible top. Steve's team is professional and the quality is outstanding."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Fixed my sunroof leak perfectly. Great service and fair pricing. Highly recommend!"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/stevesautointerior",
      "https://www.instagram.com/stevesautointerior",
      "https://www.yelp.com/biz/steves-auto-interior"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Steve's Auto Interior & Sunroofs",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beverly/Edgewater Park Area",
      "addressLocality": "Beverly",
      "addressRegion": "New Jersey",
      "postalCode": "08010",
      "addressCountry": "United States"
    },
    "telephone": "+1-856-461-3335",
    "url": "https://stevesautointerior.com",
    "hasMap": "https://maps.google.com/?q=Beverly,NJ+auto+interior"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
} 