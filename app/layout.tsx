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
  metadataBase: new URL("https://royaltymobiledetailing.com"),
  title: "Royalty Mobile Detailing | Premium Auto Detailing Service",
  description:
    "Professional mobile auto detailing service. Premium interior and exterior car detailing, ceramic coating, paint correction. Mobile service available.",
  keywords:
    "mobile auto detailing, car detailing service, ceramic coating, paint correction, interior cleaning, exterior detailing, mobile car wash",
  authors: [{ name: "Royalty Mobile Detailing" }],
  creator: "Royalty Mobile Detailing",
  publisher: "Royalty Mobile Detailing",
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
    url: "https://royaltymobiledetailing.com",
    siteName: "Royalty Mobile Detailing",
    title: "Royalty Mobile Detailing | Premium Auto Detailing Service",
    description:
      "Professional mobile auto detailing service. Premium interior and exterior car detailing, ceramic coating, paint correction. Mobile service available.",
    images: [
      {
        url: "/Mobile Detailing.png",
        width: 1200,
        height: 630,
        alt: "Royalty Mobile Detailing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royalty Mobile Detailing | Premium Auto Detailing Service",
    description:
      "Professional mobile auto detailing service. Premium interior and exterior car detailing, ceramic coating, paint correction. Mobile service available.",
    images: ["/Mobile Detailing.png"],
  },
  alternates: {
    canonical: "https://royaltymobiledetailing.com",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://royaltymobiledetailing.com" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="Mobile Service Area" />
        <meta name="geo.position" content="40.0642;-74.9207" />
        <meta name="ICBM" content="40.0642, -74.9207" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M23T29V8');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`font-sans ${workSans.variable} ${openSans.variable}`}
        suppressHydrationWarning
      >
        <SchemaOrg />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M23T29V8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  )
}
