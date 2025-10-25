interface BlogPostSchemaProps {
  title: string
  description: string
  url: string
  image: string
  publishedTime: string
  author: string
  category: string
}

export function BlogPostSchema({ title, description, url, image, publishedTime, author, category }: BlogPostSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": publishedTime,
    "dateModified": publishedTime,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://royaltymobiledetailing.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Royalty Mobile Detailing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://royaltymobiledetailing.com/Steve'sLogo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "keywords": [
      "mobile detailing",
      "car detailing",
      category.toLowerCase(),
      "Philadelphia",
      "auto care"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />
  )
}

export function SchemaOrg() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    "name": "Royalty Mobile Detailing",
    "description": "Professional mobile auto detailing service offering premium interior and exterior car detailing, ceramic coating, and paint correction",
    "url": "https://royaltymobiledetailing.com",
    "logo": "https://royaltymobiledetailing.com/Steve'sLogo.png",
    "image": [
      "https://royaltymobiledetailing.com/luxury-car-interior-restoration-leather-seats-dash.png",
      "https://royaltymobiledetailing.com/convertible-car-top-replacement-professional-insta.png",
      "https://royaltymobiledetailing.com/sunroof-repair-professional-mechanic-working-on-ca.png"
    ],
    "telephone": "+1-856-461-3335",
    "email": "info@royaltymobiledetailing.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mobile Service Area",
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
      "Mo-Su 07:00-19:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Venmo", "Zelle"],
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
      "geoRadius": "75"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mobile Auto Detailing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Full Detail",
            "description": "Complete interior and exterior detailing including deep cleaning, waxing, and tire shine"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Detailing",
            "description": "Thorough interior cleaning including vacuuming, shampooing, and leather conditioning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ceramic Coating",
            "description": "Professional ceramic coating application for long-lasting paint protection and shine"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paint Correction",
            "description": "Professional paint correction to remove swirl marks, scratches, and oxidation"
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
        "reviewBody": "Amazing mobile detailing service! My car looks brand new after their premium full detail service. Highly professional and convenient."
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
        "reviewBody": "Outstanding ceramic coating application! The paint protection and shine is incredible. Mobile service made it so convenient."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/royaltymobiledetailing",
      "https://www.instagram.com/royaltymobiledetailing",
      "https://www.yelp.com/biz/royalty-mobile-detailing"
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Royalty Mobile Detailing",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mobile Service Area",
      "addressLocality": "Beverly",
      "addressRegion": "New Jersey",
      "postalCode": "08010",
      "addressCountry": "United States"
    },
    "telephone": "+1-856-461-3335",
    "url": "https://royaltymobiledetailing.com",
    "hasMap": "https://maps.google.com/?q=Beverly,NJ+mobile+auto+detailing"
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