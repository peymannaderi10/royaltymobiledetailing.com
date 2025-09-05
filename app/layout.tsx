import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SchemaOrg } from "@/components/schema-org"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://stevesautointerior.com"),
  title: "Steve's Auto Interior & Sunroofs | Beverly, NJ Expert",
  description:
    "Expert auto interior restoration, convertible tops & sunroof repair in Beverly, NJ. 20+ years experience, 4.8-star rating. Professional auto upholstery services.",
  keywords:
    "auto upholstery NJ, sunroof repair NJ, convertible top replacement, auto interior restoration, Beverly NJ, Edgewater Park NJ",
  authors: [{ name: "Steve's Auto Interior" }],
  creator: "Steve's Auto Interior",
  publisher: "Steve's Auto Interior",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stevesautointerior.com",
    siteName: "Steve's Auto Interior & Sunroofs",
    title: "Steve's Auto Interior & Sunroofs | Beverly, NJ Expert",
    description:
      "Expert auto interior restoration, convertible tops & sunroof repair in Beverly, NJ. 20+ years experience, 4.8-star rating. Professional auto upholstery services.",
    images: [
      {
        url: "/Steve'sLogo.png",
        width: 1200,
        height: 630,
        alt: "Steve's Auto Interior & Sunroofs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve's Auto Interior & Sunroofs | Beverly, NJ Expert",
    description:
      "Expert auto interior restoration, convertible tops & sunroof repair in Beverly, NJ. 20+ years experience, 4.8-star rating.",
    images: ["/Steve'sLogo.png"],
  },
  alternates: {
    canonical: "https://stevesautointerior.com",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://stevesautointerior.com" />
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content="Beverly, New Jersey" />
        <meta name="geo.position" content="40.0642;-74.9207" />
        <meta name="ICBM" content="40.0642, -74.9207" />
      </head>
      <body
        className={`font-sans ${workSans.variable} ${openSans.variable}`}
        suppressHydrationWarning
      >
        <SchemaOrg />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
