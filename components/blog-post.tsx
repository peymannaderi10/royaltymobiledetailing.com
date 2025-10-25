"use client"

import { useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { BlogPostSchema } from "@/components/schema-org"

interface BlogPostData {
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured: boolean
  slug: string
}

export function BlogPost({ slug }: { slug: string }) {
  const postData = useMemo((): BlogPostData | null => {
    const blogPosts: Record<string, BlogPostData> = {
      "complete-guide-mobile-detailing": {
        title: "The Complete Guide to Mobile Detailing: What to Expect",
        excerpt: "Everything you need to know about mobile detailing services, from scheduling to the final result. Learn what makes professional mobile detailing different.",
        content: `
          <h2>Understanding Mobile Detailing Services</h2>
          <p>Mobile detailing brings professional car care directly to your location. Unlike traditional car washes or detail shops, mobile detailers come equipped with everything needed to transform your vehicle at your home, office, or any convenient location.</p>

          <h2>What to Expect During Your Service</h2>
          <p>When you schedule a mobile detailing service, our professional team arrives with all necessary equipment and supplies. The process typically includes:</p>
          <ul>
            <li>Thorough exterior wash and decontamination</li>
            <li>Paint correction and protection</li>
            <li>Interior deep cleaning and conditioning</li>
            <li>Final inspection and quality check</li>
          </ul>

          <h2>Benefits of Professional Mobile Detailing</h2>
          <p>Professional mobile detailing offers several advantages over DIY methods or basic car washes:</p>
          <ul>
            <li>Convenience of service at your location</li>
            <li>Professional-grade equipment and products</li>
            <li>Comprehensive service packages</li>
            <li>Guaranteed satisfaction</li>
          </ul>

          <h2>Choosing the Right Service Package</h2>
          <p>We offer various service packages to meet different needs and budgets. From basic maintenance washes to complete restoration services, our team will recommend the best option for your vehicle.</p>

          <h2>Preparing for Your Appointment</h2>
          <p>To ensure the best results, we recommend:</p>
          <ul>
            <li>Clearing the area around your vehicle</li>
            <li>Removing personal items from the interior</li>
            <li>Having access to electricity if needed</li>
            <li>Being available for the duration of the service</li>
          </ul>

          <p>Contact us today to schedule your professional mobile detailing service and experience the difference quality care can make for your vehicle.</p>
        `,
        category: "Premium Services",
        author: "Royalty Team",
        date: "March 15, 2024",
        readTime: "6 min read",
        image: "/luxury-custom-car-interior-after-professional-work.png",
        featured: true,
        slug: "complete-guide-mobile-detailing"
      },
      "5-signs-car-needs-professional-detailing": {
        title: "5 Signs Your Car Needs Professional Detailing",
        excerpt: "Learn to identify when your vehicle needs more than a basic wash and requires professional detailing services.",
        content: `
          <h2>Recognizing When Your Car Needs Professional Help</h2>
          <p>Every vehicle eventually shows signs that it needs more than a basic wash. Understanding these indicators can help you maintain your car's appearance and value.</p>

          <h2>Sign 1: Persistent Stains and Odors</h2>
          <p>If regular cleaning doesn't eliminate interior stains or odors, it's time for professional detailing. Deep-seated stains often require specialized equipment and cleaning solutions.</p>

          <h2>Sign 2: Dull or Faded Paint</h2>
          <p>Paint that has lost its shine or shows signs of oxidation indicates the need for paint correction and protective treatments. Professional detailing can restore your paint's original luster.</p>

          <h2>Sign 3: Cloudy Headlights</h2>
          <p>Yellowed or cloudy headlights not only look bad but also reduce visibility. Professional restoration can make them crystal clear again.</p>

          <h2>Sign 4: Worn Interior Surfaces</h2>
          <p>Cracked leather, faded upholstery, or damaged trim are signs that your interior needs professional conditioning and restoration services.</p>

          <h2>Sign 5: Water Spots and Mineral Deposits</h2>
          <p>Hard water spots, bird droppings, or tree sap that won't come off with regular washing require professional removal techniques to prevent paint damage.</p>

          <h2>When to Schedule Professional Detailing</h2>
          <p>The best time for professional detailing depends on your driving conditions, climate, and how you use your vehicle. Generally, we recommend:</p>
          <ul>
            <li>Every 3-6 months for regular maintenance</li>
            <li>Before selling or trading your vehicle</li>
            <li>After harsh weather conditions</li>
            <li>When you notice any of the signs mentioned above</li>
          </ul>

          <p>Don't wait until damage becomes severe. Regular professional detailing helps maintain your vehicle's appearance and value over time.</p>
        `,
        category: "Car Care Tips",
        author: "Royalty Team",
        date: "March 10, 2024",
        readTime: "5 min read",
        image: "/before1-honda.png",
        featured: false,
        slug: "5-signs-car-needs-professional-detailing"
      },
      "interior-detailing-basic-to-showroom": {
        title: "Interior Detailing: From Basic to Showroom Ready",
        excerpt: "Understanding the different levels of interior detailing and how to choose the right service for your vehicle's needs.",
        content: `
          <h2>Understanding Interior Detailing Levels</h2>
          <p>Interior detailing services range from basic cleaning to complete restoration. Understanding the different levels helps you choose the right service for your vehicle's needs.</p>

          <h2>Basic Interior Cleaning</h2>
          <p>Our basic interior service includes vacuuming, surface cleaning, and basic conditioning. This is perfect for regular maintenance and keeping your interior looking fresh.</p>

          <h2>Deep Interior Detailing</h2>
          <p>Deep detailing goes beyond surface cleaning to address hidden dirt, stains, and odors. This service includes:</p>
          <ul>
            <li>Complete vacuuming of all surfaces</li>
            <li>Deep cleaning of carpets and upholstery</li>
            <li>Leather conditioning and protection</li>
            <li>Vent and crevice cleaning</li>
            <li>Window and mirror cleaning</li>
          </ul>

          <h2>Showroom Restoration</h2>
          <p>For vehicles that need complete restoration, our showroom service includes everything in deep detailing plus:</p>
          <ul>
            <li>Stain removal and color restoration</li>
            <li>Leather repair and recoloring</li>
            <li>Dashboard and trim restoration</li>
            <li>Complete odor elimination</li>
            <li>Protective treatments</li>
          </ul>

          <h2>Choosing the Right Service Level</h2>
          <p>The right service depends on your vehicle's condition and your expectations:</p>
          <ul>
            <li><strong>Basic:</strong> Regular maintenance, light use vehicles</li>
            <li><strong>Deep:</strong> Moderate wear, regular family use</li>
            <li><strong>Showroom:</strong> Heavy wear, restoration needed</li>
          </ul>

          <h2>What to Expect</h2>
          <p>During your interior detailing service, our professionals will:</p>
          <ul>
            <li>Assess your vehicle's specific needs</li>
            <li>Use appropriate cleaning methods and products</li>
            <li>Apply protective treatments</li>
            <li>Provide care instructions for maintaining results</li>
          </ul>

          <p>Professional interior detailing not only improves appearance but also helps maintain your vehicle's value and creates a more pleasant driving environment.</p>
        `,
        category: "Interior Detailing",
        author: "Royalty Team",
        date: "March 5, 2024",
        readTime: "7 min read",
        image: "/luxury-car-interior-restoration-leather-seats-dash.png",
        featured: false,
        slug: "interior-detailing-basic-to-showroom"
      },
      "diy-leather-seat-cleaning-tips": {
        title: "DIY Interior Cleaning Tips for Leather Seats",
        excerpt: "Professional techniques you can use at home to keep your leather seats looking new and prevent cracking between professional details.",
        content: `
          <h2>Why Leather Seat Care Matters</h2>
          <p>Leather seats are a premium feature in many vehicles, but they require proper care to maintain their appearance and prevent expensive damage.</p>

          <h2>Essential Tools and Products</h2>
          <p>Before starting, gather these essential items:</p>
          <ul>
            <li>Leather cleaner (pH-balanced)</li>
            <li>Leather conditioner</li>
            <li>Microfiber cloths</li>
            <li>Soft brush</li>
            <li>Leather protection spray</li>
          </ul>

          <h2>Step-by-Step Cleaning Process</h2>
          <p>Follow these steps for safe, effective leather cleaning:</p>
          <ol>
            <li><strong>Vacuum thoroughly:</strong> Remove loose dirt and debris</li>
            <li><strong>Test cleaner:</strong> Always test in an inconspicuous area first</li>
            <li><strong>Apply cleaner:</strong> Use gentle, circular motions</li>
            <li><strong>Wipe clean:</strong> Remove all cleaning residue</li>
            <li><strong>Apply conditioner:</strong> Restore moisture and flexibility</li>
          </ol>

          <h2>Common Mistakes to Avoid</h2>
          <p>Many people damage their leather seats unintentionally:</p>
          <ul>
            <li>Using household cleaners (too harsh)</li>
            <li>Over-wetting the leather</li>
            <li>Using abrasive materials</li>
            <li>Skipping conditioning</li>
            <li>Exposing to direct sunlight</li>
          </ul>

          <h2>Maintenance Schedule</h2>
          <p>Regular maintenance prevents major issues:</p>
          <ul>
            <li>Daily: Wipe away spills immediately</li>
            <li>Weekly: Light dusting and spot cleaning</li>
            <li>Monthly: Full cleaning and conditioning</li>
            <li>Quarterly: Professional detailing service</li>
          </ul>

          <h2>When to Call Professionals</h2>
          <p>Some situations require professional attention:</p>
          <ul>
            <li>Deep stains or discoloration</li>
            <li>Cracks or tears in leather</li>
            <li>Persistent odors</li>
            <li>Faded or damaged surfaces</li>
          </ul>

          <p>With proper care, your leather seats can maintain their beauty and comfort for years to come.</p>
        `,
        category: "DIY Tips",
        author: "Royalty Team",
        date: "February 28, 2024",
        readTime: "4 min read",
        image: "/restored-mercedes-car-seat-like-new-condition.png",
        featured: false,
        slug: "diy-leather-seat-cleaning-tips"
      },
      "exterior-detailing-paint-correction": {
        title: "Exterior Detailing: Paint Correction and Protection",
        excerpt: "Learn about paint correction techniques and protective coatings that keep your vehicle's exterior looking pristine.",
        content: `
          <h2>Understanding Paint Correction</h2>
          <p>Paint correction is the process of removing imperfections from your vehicle's paint surface. This includes swirl marks, scratches, oxidation, and other surface defects.</p>

          <h2>When Paint Correction is Needed</h2>
          <p>Signs that your vehicle needs paint correction:</p>
          <ul>
            <li>Visible swirl marks or spider webbing</li>
            <li>Dull or faded paint appearance</li>
            <li>Fine scratches from improper washing</li>
            <li>Water spots or mineral deposits</li>
            <li>Oxidation from sun exposure</li>
          </ul>

          <h2>The Paint Correction Process</h2>
          <p>Professional paint correction involves several steps:</p>
          <ol>
            <li><strong>Assessment:</strong> Evaluating paint condition and defects</li>
            <li><strong>Decontamination:</strong> Removing surface contaminants</li>
            <li><strong>Compounding:</strong> Removing deeper imperfections</li>
            <li><strong>Polishing:</strong> Refining the finish</li>
            <li><strong>Protection:</strong> Applying protective coatings</li>
          </ol>

          <h2>Types of Protective Coatings</h2>
          <p>After correction, protection is essential:</p>
          <ul>
            <li><strong>Wax:</strong> Traditional protection, lasts 2-3 months</li>
            <li><strong>Sealant:</strong> Synthetic protection, lasts 4-6 months</li>
            <li><strong>Ceramic Coating:</strong> Advanced protection, lasts 1-3 years</li>
          </ul>

          <h2>Benefits of Professional Paint Correction</h2>
          <p>Professional service offers advantages over DIY:</p>
          <ul>
            <li>Professional-grade equipment and products</li>
            <li>Controlled environment</li>
            <li>Expertise in paint types and conditions</li>
            <li>Guaranteed results</li>
          </ul>

          <h2>Maintenance After Correction</h2>
          <p>To maintain your corrected paint:</p>
          <ul>
            <li>Use proper washing techniques</li>
            <li>Avoid automatic car washes</li>
            <li>Apply protection regularly</li>
            <li>Address issues promptly</li>
          </ul>

          <p>Paint correction can dramatically improve your vehicle's appearance and help maintain its value over time.</p>
        `,
        category: "Exterior Detailing",
        author: "Royalty Team",
        date: "February 20, 2024",
        readTime: "6 min read",
        image: "/bmw-convertible-with-new-black-canvas-top.png",
        featured: false,
        slug: "exterior-detailing-paint-correction"
      },
      "seasonal-car-care-winter-preparation": {
        title: "Seasonal Car Care: Preparing Your Vehicle for Winter",
        excerpt: "Essential detailing and protection steps to keep your vehicle looking great and protected during harsh winter months.",
        content: `
          <h2>Winter's Impact on Your Vehicle</h2>
          <p>Winter weather presents unique challenges for vehicle maintenance. Road salt, freezing temperatures, and harsh conditions can damage your car's exterior and interior.</p>

          <h2>Exterior Protection</h2>
          <p>Preparing your vehicle's exterior for winter:</p>
          <ul>
            <li>Apply protective wax or sealant</li>
            <li>Clean and protect wheels</li>
            <li>Treat rubber seals and weatherstripping</li>
            <li>Clear drainage areas</li>
          </ul>

          <h2>Interior Preparation</h2>
          <p>Winter interior care considerations:</p>
          <ul>
            <li>Deep clean carpets and upholstery</li>
            <li>Condition leather surfaces</li>
            <li>Apply fabric protection</li>
            <li>Check for moisture issues</li>
          </ul>

          <h2>Underbody Care</h2>
          <p>Protecting the underside of your vehicle:</p>
          <ul>
            <li>Remove accumulated road salt</li>
            <li>Apply undercoating protection</li>
            <li>Check for rust or damage</li>
            <li>Ensure proper drainage</li>
          </ul>

          <h2>Winter Maintenance Schedule</h2>
          <p>Regular winter care routine:</p>
          <ul>
            <li>Weekly: Remove road salt and debris</li>
            <li>Monthly: Check protective coatings</li>
            <li>Seasonally: Professional detailing service</li>
          </ul>

          <h2>Emergency Winter Care</h2>
          <p>What to do during severe winter weather:</p>
          <ul>
            <li>Remove snow and ice carefully</li>
            <li>Use proper de-icing methods</li>
            <li>Avoid hot water on frozen surfaces</li>
            <li>Monitor for salt damage</li>
          </ul>

          <h2>Post-Winter Restoration</h2>
          <p>After winter cleanup:</p>
          <ul>
            <li>Complete exterior decontamination</li>
            <li>Paint correction for any damage</li>
            <li>Interior deep cleaning</li>
            <li>Apply fresh protection</li>
          </ul>

          <p>Proper winter preparation and maintenance help preserve your vehicle's appearance and value throughout the harsh winter months.</p>
        `,
        category: "Car Care Tips",
        author: "Royalty Team",
        date: "February 15, 2024",
        readTime: "5 min read",
        image: "/automotive-maintenance-oil-change-brake-service-pr.png",
        featured: false,
        slug: "seasonal-car-care-winter-preparation"
      },
      "ceramic-coating-vs-wax-difference": {
        title: "Ceramic Coating vs Wax: What's the Difference?",
        excerpt: "Understanding the benefits of ceramic coating compared to traditional wax and when each is most appropriate.",
        content: `
          <h2>Understanding Paint Protection Options</h2>
          <p>Both ceramic coating and wax protect your vehicle's paint, but they work differently and offer varying levels of protection and longevity.</p>

          <h2>Traditional Car Wax</h2>
          <p>Wax has been used for decades to protect automotive paint:</p>
          <ul>
            <li><strong>Duration:</strong> 2-3 months protection</li>
            <li><strong>Application:</strong> Easy DIY application</li>
            <li><strong>Cost:</strong> Inexpensive</li>
            <li><strong>Protection:</strong> Basic UV and weather protection</li>
            <li><strong>Appearance:</strong> Good shine and gloss</li>
          </ul>

          <h2>Ceramic Coating</h2>
          <p>Ceramic coating represents modern paint protection technology:</p>
          <ul>
            <li><strong>Duration:</strong> 1-3 years protection</li>
            <li><strong>Application:</strong> Professional installation required</li>
            <li><strong>Cost:</strong> Higher initial investment</li>
            <li><strong>Protection:</strong> Superior chemical and UV resistance</li>
            <li><strong>Appearance:</strong> Exceptional gloss and depth</li>
          </ul>

          <h2>When to Choose Wax</h2>
          <p>Wax is appropriate for:</p>
          <ul>
            <li>Budget-conscious vehicle owners</li>
            <li>Regular maintenance protection</li>
            <li>Older vehicles</li>
            <li>DIY enthusiasts</li>
            <li>Short-term protection needs</li>
          </ul>

          <h2>When to Choose Ceramic Coating</h2>
          <p>Ceramic coating is ideal for:</p>
          <ul>
            <li>New or valuable vehicles</li>
            <li>Long-term protection needs</li>
            <li>Harsh climate conditions</li>
            <li>Show vehicles</li>
            <li>Minimal maintenance preference</li>
          </ul>

          <h2>Application Differences</h2>
          <p>The application processes differ significantly:</p>
          <ul>
            <li><strong>Wax:</strong> Simple application, can be done at home</li>
            <li><strong>Ceramic:</strong> Requires professional preparation and application</li>
          </ul>

          <h2>Maintenance Requirements</h2>
          <p>Maintenance needs vary between the two:</p>
          <ul>
            <li><strong>Wax:</strong> Requires regular reapplication</li>
            <li><strong>Ceramic:</strong> Needs specialized maintenance products</li>
          </ul>

          <p>Both options have their place in vehicle care. The choice depends on your budget, vehicle value, and maintenance preferences.</p>
        `,
        category: "Premium Services",
        author: "Royalty Team",
        date: "February 10, 2024",
        readTime: "6 min read",
        image: "/porsche-dashboard-restoration-leather-repair.png",
        featured: false,
        slug: "ceramic-coating-vs-wax-difference"
      },
      "how-often-car-detailing-frequency": {
        title: "How Often Should You Get Your Car Detailed?",
        excerpt: "A comprehensive guide to detailing frequency based on your driving habits, climate, and vehicle usage patterns.",
        content: `
          <h2>Factors Affecting Detailing Frequency</h2>
          <p>How often you should detail your car depends on several factors including your driving environment, vehicle usage, and personal preferences.</p>

          <h2>Environmental Factors</h2>
          <p>Your local climate significantly impacts detailing needs:</p>
          <ul>
            <li><strong>Urban areas:</strong> More frequent detailing due to pollution</li>
            <li><strong>Rural areas:</strong> Less frequent due to cleaner environment</li>
            <li><strong>Coastal regions:</strong> Salt air requires more protection</li>
            <li><strong>Desert climates:</strong> Dust and sand increase cleaning needs</li>
          </ul>

          <h2>Usage Patterns</h2>
          <p>How you use your vehicle affects maintenance requirements:</p>
          <ul>
            <li><strong>Daily driver:</strong> More frequent detailing needed</li>
            <li><strong>Weekend vehicle:</strong> Less frequent maintenance</li>
            <li><strong>Family vehicle:</strong> Interior needs more attention</li>
            <li><strong>Work vehicle:</strong> More durable protection required</li>
          </ul>

          <h2>Recommended Schedules</h2>
          <p>Based on typical conditions, here's our recommended schedule:</p>
          <ul>
            <li><strong>Every 3 months:</strong> Urban daily drivers</li>
            <li><strong>Every 4-6 months:</strong> Normal driving conditions</li>
            <li><strong>Every 6-8 months:</strong> Light use, garage kept</li>
            <li><strong>Annually:</strong> Show vehicles, minimal use</li>
          </ul>

          <h2>Seasonal Considerations</h2>
          <p>Different seasons require different care:</p>
          <ul>
            <li><strong>Spring:</strong> Remove winter salt and grime</li>
            <li><strong>Summer:</strong> Protect against UV damage</li>
            <li><strong>Fall:</strong> Prepare for winter conditions</li>
            <li><strong>Winter:</strong> Regular maintenance washes</li>
          </ul>

          <h2>Signs You Need Detailing</h2>
          <p>Don't wait for scheduled service if you notice:</p>
          <ul>
            <li>Visible dirt or stains</li>
            <li>Dull or faded paint</li>
            <li>Unpleasant odors</li>
            <li>Reduced visibility</li>
          </ul>

          <h2>Cost vs. Value</h2>
          <p>Regular detailing provides several benefits:</p>
          <ul>
            <li>Maintains vehicle value</li>
            <li>Prevents costly repairs</li>
            <li>Improves driving experience</li>
            <li>Enhances safety</li>
          </ul>

          <p>Establishing a regular detailing schedule helps maintain your vehicle's appearance and value over time.</p>
        `,
        category: "Car Care Tips",
        author: "Royalty Team",
        date: "February 5, 2024",
        readTime: "5 min read",
        image: "/clean-dry-car-interior-after-sunroof-repair.png",
        featured: false,
        slug: "how-often-car-detailing-frequency"
      },
      "benefits-professional-mobile-detailing": {
        title: "The Benefits of Professional Mobile Detailing",
        excerpt: "Why mobile detailing services offer convenience, quality, and value that traditional car washes simply can't match.",
        content: `
          <h2>The Convenience Factor</h2>
          <p>Mobile detailing brings professional services directly to your location, eliminating the need to travel to a shop or wait in line.</p>

          <h2>Time Savings</h2>
          <p>Traditional detailing often requires:</p>
          <ul>
            <li>Driving to the shop</li>
            <li>Waiting for service</li>
            <li>Driving back home</li>
            <li>Dealing with traffic</li>
          </ul>
          <p>Mobile detailing eliminates all of this, saving you valuable time.</p>

          <h2>Quality and Expertise</h2>
          <p>Professional mobile detailers bring:</p>
          <ul>
            <li>Years of experience</li>
            <li>Professional-grade equipment</li>
            <li>High-quality products</li>
            <li>Specialized techniques</li>
          </ul>

          <h2>Personalized Service</h2>
          <p>Mobile detailing offers personalized attention:</p>
          <ul>
            <li>One-on-one consultation</li>
            <li>Customized service packages</li>
            <li>Flexible scheduling</li>
            <li>Direct communication</li>
          </ul>

          <h2>Equipment and Products</h2>
          <p>Professional mobile services use:</p>
          <ul>
            <li>Commercial-grade equipment</li>
            <li>Professional cleaning products</li>
            <li>Specialized tools</li>
            <li>Protective treatments</li>
          </ul>

          <h2>Comprehensive Services</h2>
          <p>Mobile detailing offers complete care:</p>
          <ul>
            <li>Interior and exterior services</li>
            <li>Paint correction and protection</li>
            <li>Restoration services</li>
            <li>Maintenance packages</li>
          </ul>

          <h2>Cost Effectiveness</h2>
          <p>While initially more expensive than basic washes, professional mobile detailing provides:</p>
          <ul>
            <li>Better long-term value</li>
            <li>Preventive maintenance</li>
            <li>Enhanced vehicle value</li>
            <li>Reduced repair costs</li>
          </ul>

          <h2>Environmental Benefits</h2>
          <p>Mobile detailing is often more environmentally friendly:</p>
          <ul>
            <li>Water conservation</li>
            <li>Reduced chemical runoff</li>
            <li>Proper waste disposal</li>
            <li>Eco-friendly products</li>
          </ul>

          <p>Professional mobile detailing combines convenience, quality, and value in a way that traditional services simply cannot match.</p>
        `,
        category: "Premium Services",
        author: "Royalty Team",
        date: "January 30, 2024",
        readTime: "4 min read",
        image: "/luxury-car-interior-with-custom-leather-seats.png",
        featured: false,
        slug: "benefits-professional-mobile-detailing"
      }
    }

    return blogPosts[slug] || null
  }, [slug])

  if (!postData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-white">
      <BlogPostSchema
        title={postData.title}
        description={postData.excerpt}
        url={`https://royaltymobiledetailing.com/blog/${postData.slug}`}
        image={postData.image}
        publishedTime={postData.date}
        author="Royalty Mobile Detailing Team"
        category={postData.category}
      />
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              {postData.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {postData.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {postData.excerpt}
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {postData.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {postData.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {postData.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-8 mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={postData.image}
              alt={postData.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: postData.content.replace(/<h2>/g, '<h2 class="text-2xl font-bold text-primary mb-4 mt-8 first:mt-0">')
                  .replace(/<h3>/g, '<h3 class="text-xl font-semibold text-primary mb-3 mt-6">')
                  .replace(/<p>/g, '<p class="text-muted-foreground mb-4 leading-relaxed">')
                  .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 space-y-2">')
                  .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 space-y-2">')
                  .replace(/<li>/g, '<li class="text-muted-foreground">')
              }}
            />
          </div>

          {/* Article Metadata */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>Published {postData.date}</span>
              <span>•</span>
              <span>{postData.readTime}</span>
            </div>
          </div>
        </div>
      </section>


      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">More Articles</h2>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Explore more detailing tips and insights</p>
            <Link href="/blog">
              <Button>
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
