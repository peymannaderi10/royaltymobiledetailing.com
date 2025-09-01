import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
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
  title: "Steve's Auto Interior & Sunroofs | Beverly, NJ | Convertible Tops & Sunroof Repair",
  description:
    "Expert auto interior restoration, convertible top replacement, and sunroof repair in Beverly/Edgewater Park, NJ. 20+ years experience, 4.8-star rating. Your one-stop shop for auto interiors, sunroofs & maintenance.",
  keywords:
    "auto upholstery NJ, sunroof repair NJ, convertible top replacement, auto interior restoration, Beverly NJ, Edgewater Park NJ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${workSans.variable} ${openSans.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
